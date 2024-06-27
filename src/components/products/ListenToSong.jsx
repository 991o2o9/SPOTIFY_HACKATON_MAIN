import React, { useEffect, useRef, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { useProduct } from '../context/ProductContextProvider'
import { FaHeartCirclePlus } from 'react-icons/fa6'

const ListenToSong = () => {
	const { id } = useParams()
	const { songs, getSongs } = useProduct()

	const song = songs.find(song => song.id === parseInt(id))

	useEffect(() => {
		getSongs()
	}, [])

	const audioRef = useRef(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [duration, setDuration] = useState(0)

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
	}, [audioRef.current])

	// Форматирование времени в mm:ss
	const formatTime = time => {
		const minutes = Math.floor(time / 60)
		const seconds = Math.floor(time % 60)
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
	}

	// Обработчик нажатия кнопки воспроизведения/паузы
	const togglePlayPause = () => {
		const audio = audioRef.current
		if (isPlaying) {
			audio.pause()
		} else {
			audio.play()
		}
		setIsPlaying(prevState => !prevState)
	}

	// Обработчик изменения позиции ползунка
	const handleSliderChange = event => {
		const audio = audioRef.current
		audio.currentTime = Number(event.target.value) // Приведение к числу
		setCurrentTime(audio.currentTime)
	}

	if (!song) {
		return <div>Loading...</div>
	}

	return (
		<div>
			<div className='listen-to-page'>
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
							{/* <li className='song-duration'>2.15</li>
							<li className='amount-of-listened'>1 107 343 434</li> */}
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
				</div>
			</div>
		</div>
	)
}

export default ListenToSong
