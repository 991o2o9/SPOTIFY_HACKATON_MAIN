import React, {
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react'
export const audioContext = createContext()
export const useAudio = () => useContext(audioContext)
const AudioPlayerProvider = ({ children }) => {
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
	}, [audioRef])
	// меняем в мин и сек, для читаемости UWU
	const formatTime = time => {
		const minutes = Math.floor(time / 60)
		const seconds = Math.floor(time % 60)
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
	}
	// меняем в мин и сек, для читаемости UWU
	// даем душу для кнопок старт и стоп
	const togglePlayPause = () => {
		const audio = audioRef.current
		if (isPlaying) {
			audio.pause()
		} else {
			audio.play()
		}
		setIsPlaying(prevState => !prevState)
	}
	// даем душу для кнопок старт и стоп
	// даем возможность ползунку менять ее и двигаться
	const handleSliderChange = event => {
		const audio = audioRef.current
		console.log('Slider Value:', event.target.value)
		audio.currentTime = Number(event.target.value)
		setCurrentTime(audio.currentTime)
	}
	// даем возможность ползунку менять ее и двигаться
	const values = {
		duration,
		currentTime,
		handleSliderChange,
		audioRef,
		togglePlayPause,
		isPlaying,
		formatTime,
		setCurrentTime,
		setDuration,
	}
	return (
		<audioContext.Provider value={values}>{children}</audioContext.Provider>
	)
}

export default AudioPlayerProvider
