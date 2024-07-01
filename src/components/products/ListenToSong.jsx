import React, { useEffect, useRef, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { useProduct } from '../context/ProductContextProvider'
import { FaHeartCirclePlus } from 'react-icons/fa6'
import { MdDelete } from 'react-icons/md'
import { useAuth } from '../context/AuthContextProvider'
import { RiEdit2Fill } from 'react-icons/ri'
import ColorThief from 'colorthief'
import FooterMenuSong from './FooterMenuSong'

const ListenToSong = () => {
	const { id } = useParams()
	const { currentUser } = useAuth()
	const { songs, getSongs, deleteSong, editSong } = useProduct()
	const song = songs.find(song => song.id === parseInt(id))

	const audioRef = useRef(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [duration, setDuration] = useState(0)
	const [dominantColor, setDominantColor] = useState([0, 0, 0])

	useEffect(() => {
		getSongs()
	}, [getSongs])

	useEffect(() => {
		const audio = audioRef.current

		if (audio) {
			const updateDuration = () => {
				setDuration(audio.duration)
			}

			const updateTime = () => {
				setCurrentTime(audio.currentTime)
			}

			audio.addEventListener('loadedmetadata', updateDuration)
			audio.addEventListener('timeupdate', updateTime)

			return () => {
				audio.removeEventListener('loadedmetadata', updateDuration)
				audio.removeEventListener('timeupdate', updateTime)
			}
		}
	}, [audioRef])

	useEffect(() => {
		if (song && song.song_image) {
			const image = new Image()
			image.crossOrigin = 'Anonymous'
			image.src = song.song_image

			image.onload = () => {
				const colorThief = new ColorThief()
				const dominantColor = colorThief.getColor(image)
				setDominantColor(dominantColor)
			}
		}
	}, [song])

	const formatTime = time => {
		const minutes = Math.floor(time / 60)
		const seconds = Math.floor(time % 60)
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
	}

	const togglePlayPause = () => {
		const audio = audioRef.current
		if (isPlaying) {
			audio.pause()
		} else {
			audio.play()
		}
		setIsPlaying(prevState => !prevState)
	}

	const handleSliderChange = event => {
		const audio = audioRef.current
		audio.currentTime = Number(event.target.value)
		setCurrentTime(audio.currentTime)
	}

	const rgbColor = `rgb(${dominantColor.join(',')})`
	const gradientStyle = {
		background: `linear-gradient(135deg, ${rgbColor} 0%, #000000 100%)`,
		color: '#ffffff',
	}

	if (!song) {
		return <div>Loading...</div>
	}

	return (
		<div>
			<div style={gradientStyle} className='listen-to-page'>
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
								<img
									src=''
									alt={song.author_nickname}
									className='author-prof-photo'
								/>
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
							<span>Длительность - {formatTime(duration)} - </span>
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
					<Link>
						<FaHeartCirclePlus
							style={{ paddingLeft: '25px' }}
							className='fav-btn'
						/>
					</Link>
					{currentUser ? (
						<Link onClick={() => deleteSong(song.song_name)}>
							<MdDelete style={{ paddingLeft: '25px' }} className='fav-btn' />
						</Link>
					) : null}
					{currentUser ? (
						<Link to={`/edit/${song.slug}`} onClick={() => editSong(song.slug)}>
							<RiEdit2Fill
								style={{ paddingLeft: '25px' }}
								className='fav-btn'
							/>
						</Link>
					) : null}
				</div>
			</div>

			{isPlaying && <FooterMenuSong song={song} />}
		</div>
	)
}

export default ListenToSong
