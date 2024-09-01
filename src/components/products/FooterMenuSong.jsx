import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoPlaySkipBack, IoPlaySkipForward } from 'react-icons/io5'
import {
	FaPlay,
	FaPause,
	FaVolumeDown,
	FaVolumeUp,
	FaPlusCircle,
} from 'react-icons/fa'

const FooterMenuSong = ({
	setShowModal,
	song,
	formatTime,
	duration,
	currentTime,
	handleSliderChange,
	audioRef,
	setCurrentTime,
	setDuration,
	isPlaying,
	setIsPlaying,
}) => {
	const [volume, setVolume] = useState(0.5)
	// ! тест
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
			console.error('Элемент audio не найден.')
		}
	}
	// ! тест

	const handleVolumeChange = event => {
		const newVolume = Number(event.target.value)
		setVolume(newVolume)
		const audio = audioRef.current
		if (audio) {
			audio.volume = newVolume
		}
	}

	useEffect(() => {
		const audio = audioRef.current
		if (audio) {
			// Установить начальную громкость
			audio.volume = volume
		}
	}, [audioRef, volume])

	return (
		<div className='footer-menu-song'>
			<div className='song-pic-info'>
				<div className='song-preview-photo'>
					<img src={song.song_image} alt='Song Thumbnail' />
				</div>
				<div className='main-info-about-song'>
					<Link to='#'>
						<span className='text-ab-song_1'>{song.song_name}</span>
					</Link>
					<Link to='#'>
						<span className='text-ab-song_2'>{song.author_nickname}</span>
					</Link>
				</div>
				<div className='add-to-fav-list'>
					<Link onClick={() => setShowModal(true)}>
						<FaPlusCircle />
					</Link>
				</div>
			</div>

			<div className='controllers-of-song'>
				<div className='buttons-container'>
					<IoPlaySkipBack className='skip-back' />
					{isPlaying ? (
						<FaPause className='play-song-menu' onClick={togglePlayPause} />
					) : (
						<FaPlay className='play-song-menu' onClick={togglePlayPause} />
					)}
					<IoPlaySkipForward className='skip-forward' />
				</div>

				<div className='slider-shit'>
					<div className='time-info'>
						<span>
							Длительность -{' '}
							{duration ? formatTime(duration) : <span>...</span>} -{' '}
						</span>
						<span>{formatTime(currentTime)}</span>
					</div>
					<div className='slider-container'>
						<input
							type='range'
							className='track-slider-2'
							value={currentTime}
							max={duration}
							onChange={handleSliderChange}
						/>
					</div>
					<div className='audio-element'>
						<audio
							ref={audioRef}
							src={song.song}
							onTimeUpdate={() => {
								if (audioRef.current) {
									setCurrentTime(audioRef.current.currentTime)
								}
							}}
							onLoadedMetadata={() => {
								if (audioRef.current) {
									setDuration(audioRef.current.duration)
								}
							}}
						/>
					</div>
				</div>
			</div>

			<div className='volume-controls'>
				<FaVolumeDown className='volume-icon' />
				<input
					type='range'
					className='volume-slider'
					min='0'
					max='1'
					step='0.01'
					value={volume}
					onChange={handleVolumeChange}
				/>
				<FaVolumeUp className='volume-icon' />
			</div>
		</div>
	)
}

export default FooterMenuSong
