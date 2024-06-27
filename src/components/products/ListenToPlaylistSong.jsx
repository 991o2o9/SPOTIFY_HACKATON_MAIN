import React, { useEffect, useRef, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import { FaHeartCirclePlus } from 'react-icons/fa6'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ListenToPlaylistSong = () => {
	const audioRef = useRef(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [duration, setDuration] = useState(0)

	useEffect(() => {
		const audio = audioRef.current

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
	}, [])

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
		audio.currentTime = event.target.value
		setCurrentTime(audio.currentTime)
	}
	return (
		<div>
			<div className='listen-to-page-playlist'>
				<div className='song-img'>
					<img src='https://i.redd.it/eueplomhfqqc1.jpeg' alt='' />
				</div>
				<div className='text-info'>
					<div className='title-of-song'>
						<span>Playlist</span>
						<span>Songs that makes you feel wet</span>
					</div>
					<div className='other-info-about-song'>
						<ul className='main-text-ab-song'>
							<li>
								<img
									src='https://f4.bcbits.com/img/a1443982232_65'
									alt=''
									className='author-prof-photo'
								/>
								<span>Amin</span>
							</li>
							<li className='album-name'>
								<span>2,211 likes</span>
							</li>
							<li className='song-duration'>3 songs</li>
							{/* <li className='amount-of-listened'>1 107 343 434</li> */}
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
				<audio
					ref={audioRef}
					src='https://media.djlunatique.com/2024/06/we-can-go-gyatt-4-gyatt-.mp3'
				></audio>
				<div className='controls'>
					<button className='play-pause-btn' onClick={togglePlayPause}>
						{isPlaying ? (
							<FaPause className='icon-play' />
						) : (
							<FaPlay className='icon-play' />
						)}
					</button>
					<Link>
						<MdDelete style={{ paddingLeft: '25px' }} className='fav-btn' />
					</Link>
				</div>
			</div>
			<hr style={{ marginTop: '20px' }} />
			<div className='table-container'>
				<table className='table'>
					<thead>
						<tr>
							<th>#</th>
							<th>Title</th>
							<th>Album</th>
							<th>Date added</th>
							<th>
								<img
									hidden='true'
									alt='clock'
									src='https://placehold.co/16x16'
								/>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<Link>
								<FaPlay className='play-playlist-song' />
							</Link>
							<td className='image-cell'>
								<img src='https://placehold.co/40' alt='album cover' />
								<div>
									<div className='title'>The Less I Know The Better</div>
									<div className='artist'>Tame Impala</div>
								</div>
							</td>
							<td>Currents</td>
							<td>Jun 25, 2020</td>
							<td>3:36</td>
						</tr>
						<tr>
							<td>2</td>
							<td className='image-cell'>
								<img src='https://placehold.co/40' alt='album cover' />
								<div>
									<div className='title'>Imagination</div>
									<div className='artist'>Foster The People</div>
								</div>
							</td>
							<td>Imagination</td>
							<td>Jun 25, 2020</td>
							<td>4:16</td>
						</tr>
						<tr>
							<td>3</td>
							<td className='image-cell'>
								<img src='https://placehold.co/40' alt='album cover' />
								<div>
									<div className='title'>Compass</div>
									<div className='artist'>The Neighbourhood</div>
								</div>
							</td>
							<td>Hard To Imagine The Neighbourhood Ever...</td>
							<td>Jun 25, 2020</td>
							<td>2:47</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default ListenToPlaylistSong
