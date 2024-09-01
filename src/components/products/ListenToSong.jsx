import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MdDelete } from 'react-icons/md'
import { RiEdit2Fill } from 'react-icons/ri'
import { useProduct } from '../context/ProductContextProvider'
import { useAuth } from '../context/AuthContextProvider'
import FooterMenuSong from './FooterMenuSong'
import ProductCard from './ProductCard'
import PlaylistModal from './PlaylistModal'
import { FaPause, FaPlay } from 'react-icons/fa'
import { FaHeartCirclePlus } from 'react-icons/fa6'

const ListenToSong = () => {
	const { id } = useParams()
	const { currentUser } = useAuth()
	const { songs, getSongs, deleteSong, editSong } = useProduct()
	const song = songs.find(song => song.id === parseInt(id, 10))
	const audioRef = useRef(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [duration, setDuration] = useState(0)
	const [activeTab, setActiveTab] = useState('description')
	const [showModal, setShowModal] = useState(false)
	const [playlists, setPlaylists] = useState([])

	useEffect(() => {
		if (songs.length === 0) {
			console.log('Fetching songs...')
			getSongs()
		}
	}, [songs.length, getSongs])

	useEffect(() => {
		const audio = audioRef.current

		const updateDuration = () => {
			if (audio) {
				setDuration(audio.duration)
			}
		}

		const updateTime = () => {
			if (audio) {
				setCurrentTime(audio.currentTime)
			}
		}

		if (audio) {
			audio.addEventListener('loadedmetadata', updateDuration)
			audio.addEventListener('timeupdate', updateTime)

			return () => {
				audio.removeEventListener('loadedmetadata', updateDuration)
				audio.removeEventListener('timeupdate', updateTime)
			}
		}
	}, [audioRef])

	useEffect(() => {
		// Fetch playlists from localStorage or backend
		const storedPlaylists = JSON.parse(localStorage.getItem('playlists')) || []
		setPlaylists(storedPlaylists)
	}, [])

	const formatTime = time => {
		const minutes = Math.floor(time / 60)
		const seconds = Math.floor(time % 60)
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
	}

	const togglePlayPause = () => {
		const audio = audioRef.current
		if (audio) {
			if (isPlaying) {
				audio.pause()
			} else {
				audio.play()
			}
			setIsPlaying(prevState => !prevState)
		} else {
			console.error('Audio element not found.')
		}
	}

	const handleSliderChange = event => {
		const audio = audioRef.current
		if (audio) {
			audio.currentTime = Number(event.target.value)
			setCurrentTime(audio.currentTime)
		}
	}

	const checkSongInPlaylist = (playlist, songId) => {
		return playlist.songs.some(song => song.id === songId)
	}

	const handleAddToPlaylist = playlistId => {
		const updatedPlaylists = playlists.map(playlist => {
			if (playlist.id === playlistId) {
				if (checkSongInPlaylist(playlist, song.id)) {
					alert('Эта песня уже находится в плейлисте.')
					return playlist
				}
				return {
					...playlist,
					songs: [...playlist.songs, song],
				}
			}
			return playlist
		})

		localStorage.setItem('playlists', JSON.stringify(updatedPlaylists))
		setPlaylists(updatedPlaylists) // Обновляем состояние
		setShowModal(false)
		alert(`${song.song_name} добавлена в плейлист!`)
	}

	if (!song) {
		return <div>Loading...</div>
	}

	return (
		<div className='listen-to-song-page-section'>
			{showModal && (
				<PlaylistModal
					playlists={playlists}
					onClose={() => setShowModal(false)}
					onSelect={handleAddToPlaylist}
				/>
			)}
			<div className='listen-to-page'>
				<div className='bgi-listen-to-song-page'>
					<img src={song.song_image} alt='' />
				</div>
				<div className='song-img'>
					<img src={song.song_image} alt={song.song_name} />
				</div>
				<div className='text-info'>
					<div className='title-of-song'>
						<span>Song</span>
						<span>{song.song_name}</span>
					</div>
					<div className='other-info-about-song'>
						<ul className='main-text-ab-song'>
							<li>
								<span>{song.author_nickname}</span>
							</li>
							<li className='album-name'>
								<span>{song.genre_name}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='play-song-db'>
				<div className='data-etc'>
					<ul>
						<li>
							<span>7 мая</span>
						</li>
						<li>
							<span>
								Длительность -{' '}
								{duration ? formatTime(duration) : <span>Загрузка...</span>}
							</span>
							<span>{formatTime(currentTime)}</span>
							<div className='slider-shit'>
								<input
									type='range'
									className='track-slider'
									value={currentTime}
									max={duration}
									onChange={handleSliderChange}
								/>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className='polsunok'>
				<audio ref={audioRef} src={song.song}></audio>
				<div className='controls'>
					<button className='play-pause-btn' onClick={togglePlayPause}>
						{isPlaying ? (
							<FaPause className='icon-play' />
						) : (
							<FaPlay className='icon-play' />
						)}
					</button>
					<Link onClick={() => setShowModal(true)}>
						<FaHeartCirclePlus
							style={{ paddingLeft: '25px' }}
							className='fav-btn'
						/>
					</Link>
					{currentUser && (
						<>
							<Link onClick={() => deleteSong(song.slug)}>
								<MdDelete style={{ paddingLeft: '25px' }} className='fav-btn' />
							</Link>
							<Link
								to={`/edit/${song.slug}`}
								onClick={() => editSong(song.slug)}
							>
								<RiEdit2Fill
									style={{ paddingLeft: '25px' }}
									className='fav-btn'
								/>
							</Link>
						</>
					)}
				</div>
				<div className='more-info-desc-etc'>
					<div className='more-info-desc-etc-topics'>
						<button
							className={activeTab === 'description' ? 'active' : ''}
							onClick={() => setActiveTab('description')}
						>
							Description
						</button>
						<button
							className={activeTab === 'lyrics' ? 'active' : ''}
							onClick={() => setActiveTab('lyrics')}
						>
							Lyrics
						</button>
					</div>
					<div className='more-info-desc-etc-itself'>
						{activeTab === 'description' && <span>{song.description}</span>}
						{activeTab === 'lyrics' && <span>{song.song_text}</span>}
					</div>
				</div>
				<hr className='listen-to-song-hr' />
				<div className='other-songs'>
					<div className='song-list'>
						{songs
							.filter(s => s.id !== song.id)
							.map(s => (
								<ProductCard key={s.id} elem={s} />
							))}
					</div>
				</div>
			</div>
			<FooterMenuSong
				song={song}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				formatTime={formatTime}
				duration={duration}
				currentTime={currentTime}
				handleSliderChange={handleSliderChange}
				audioRef={audioRef}
				setCurrentTime={setCurrentTime}
				setDuration={setDuration}
				setShowModal={setShowModal}
			/>
		</div>
	)
}

export default ListenToSong
