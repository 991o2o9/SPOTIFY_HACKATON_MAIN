import React, { useEffect, useState } from 'react'
import { useProduct } from '../context/ProductContextProvider'
import { useNavigate, useParams } from 'react-router-dom'

const EditInfoAboutSong = () => {
	const navigate = useNavigate()
	const { slug } = useParams()
	const { editSong, getOneSong, oneSong } = useProduct()
	const [song_name, setSong_name] = useState('')
	const [description, setDescription] = useState('')
	const [song_text, setSong_text] = useState('')
	const [song_image, setSong_image] = useState(null)
	const [song, setSong] = useState(null)
	const [author, setAuthor] = useState(0)
	const [genre_name, setGenre_name] = useState('')
	const [author_nickname, setAuthor_nickname] = useState('')

	// Загружаем данные о песне при изменении slug
	useEffect(() => {
		getOneSong(slug)
	}, [slug, getOneSong])

	// Устанавливаем значения полей формы из oneSong
	useEffect(() => {
		if (oneSong) {
			setSong_name(oneSong.song_name)
			setDescription(oneSong.description)
			setSong_text(oneSong.song_text)
			setAuthor(oneSong.author)
			setGenre_name(oneSong.genre_name)
			setAuthor_nickname(oneSong.author_nickname)
		}
	}, [oneSong])

	const handleSave = e => {
		e.preventDefault() // Предотвращаем перезагрузку

		const newSong = new FormData()
		newSong.append('song_name', song_name)
		newSong.append('description', description)
		newSong.append('song_text', song_text)
		newSong.append('song_image', song_image)
		newSong.append('song', song)
		newSong.append('author', author)
		newSong.append('genre_name', genre_name)
		newSong.append('author_nickname', author_nickname)

		editSong(slug, newSong)
		navigate('/')
	}

	return (
		<div>
			<div style={styles.spotifyAdminPage}>
				<form style={styles.adminForm} onSubmit={handleSave}>
					<div style={styles.formGroup}>
						<label htmlFor='song_name' style={styles.label}>
							Song Name
						</label>
						<input
							type='text'
							id='song_name'
							name='song_name'
							style={styles.input}
							value={song_name}
							onChange={e => setSong_name(e.target.value)}
						/>
					</div>
					<div style={styles.formGroup}>
						<label htmlFor='description' style={styles.label}>
							Description<span style={styles.required}>*</span>
						</label>
						<textarea
							id='description'
							name='description'
							style={styles.textarea}
							value={description}
							onChange={e => setDescription(e.target.value)}
						></textarea>
					</div>
					<div style={styles.formGroup}>
						<label htmlFor='song_text' style={styles.label}>
							Song Text<span style={styles.required}>*</span>
						</label>
						<textarea
							id='song_text'
							name='song_text'
							style={styles.textarea}
							value={song_text}
							onChange={e => setSong_text(e.target.value)}
						></textarea>
					</div>
					<div style={styles.formGroup}>
						<label htmlFor='song_image' style={styles.label}>
							Song Image
						</label>
						<input
							type='file'
							id='song_image'
							name='song_image'
							style={styles.input}
							onChange={e => setSong_image(e.target.files[0])}
						/>
					</div>
					<div style={styles.formGroup}>
						<label htmlFor='song' style={styles.label}>
							Song
						</label>
						<input
							type='file'
							id='song'
							name='song'
							style={styles.input}
							onChange={e => setSong(e.target.files[0])}
						/>
					</div>
					<div style={styles.formGroup}>
						<label htmlFor='author' style={styles.label}>
							Author
						</label>
						<input
							type='text'
							id='author'
							name='author'
							style={styles.input}
							value={author}
							onChange={e => setAuthor(e.target.value)}
						/>
					</div>
					<div style={styles.formGroup}>
						<label htmlFor='genre_name' style={styles.label}>
							Genre Name
						</label>
						<input
							type='text'
							id='genre_name'
							name='genre_name'
							style={styles.input}
							value={genre_name}
							onChange={e => setGenre_name(e.target.value)}
						/>
					</div>
					<div style={styles.formGroup}>
						<label htmlFor='author_nickname' style={styles.label}>
							Author Nickname
						</label>
						<input
							type='text'
							id='author_nickname'
							name='author_nickname'
							style={styles.input}
							value={author_nickname}
							onChange={e => setAuthor_nickname(e.target.value)}
						/>
					</div>
					<button type='submit' style={styles.submitButton}>
						Save
					</button>
				</form>
			</div>
		</div>
	)
}

const styles = {
	spotifyAdminPage: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '150vh',
		padding: '20px',
		backgroundColor: '#121212',
		color: '#ffffff',
		fontFamily:
			"'Circular', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
	},
	adminForm: {
		backgroundColor: '#282828',
		padding: '40px',
		borderRadius: '8px',
		boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
		width: '400px',
	},
	formGroup: {
		marginBottom: '20px',
	},
	label: {
		display: 'block',
		marginBottom: '8px',
		fontWeight: 'bold',
	},
	input: {
		width: '100%',
		padding: '10px',
		border: '1px solid #535353',
		borderRadius: '4px',
		backgroundColor: '#3e3e3e',
		color: '#ffffff',
	},
	textarea: {
		width: '100%',
		padding: '10px',
		border: '1px solid #535353',
		borderRadius: '4px',
		backgroundColor: '#3e3e3e',
		color: '#ffffff',
		resize: 'none',
		height: '100px',
	},
	required: {
		color: '#f00',
		marginLeft: '4px',
	},
	submitButton: {
		width: '100%',
		padding: '12px',
		backgroundColor: '#1db954',
		color: '#ffffff',
		border: 'none',
		borderRadius: '4px',
		cursor: 'pointer',
		fontSize: '16px',
	},
}

export default EditInfoAboutSong
