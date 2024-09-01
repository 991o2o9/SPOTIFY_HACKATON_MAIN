import React, { useEffect, useState } from 'react'
import { useProduct } from '../context/ProductContextProvider'
import { useNavigate, useParams } from 'react-router-dom'
import '../products/styles/editPage.css'

const EditInfoAboutSong = () => {
	const navigate = useNavigate()
	const { slug } = useParams()
	const { editSong, getOneSong, oneSong } = useProduct()
	const [song_name, setSong_name] = useState('')
	const [description, setDescription] = useState('')
	const [song_text, setSong_text] = useState('')
	const [song_image, setSong_image] = useState('')
	const [song, setSong] = useState(null)
	const [genre_name, setGenre_name] = useState('')
	const [author_nickname, setAuthor_nickname] = useState('')

	useEffect(() => {
		getOneSong(slug)
	}, [])

	const handleSave = () => {
		const newSong = new FormData()
		newSong.append('song_name', song_name)
		newSong.append('description', description)
		newSong.append('song_text', song_text)
		newSong.append('genre_name', genre_name)
		newSong.append('song_image', song_image)
		newSong.append('song', song)
		newSong.append('author_nickname', author_nickname)

		editSong(slug, newSong)
		navigate('/')
	}

	useEffect(() => {
		setSong_name(oneSong.song_name)
		setDescription(oneSong.description)
		setSong_text(oneSong.song_text)
		setGenre_name(oneSong.genre_name)
		setAuthor_nickname(oneSong.author_nickname)
	}, [oneSong])

	return (
		<div className='edit-page-spotify-admin-page'>
			<form className='edit-page-admin-form' onSubmit={handleSave}>
				<div className='edit-page-form-group'>
					<label htmlFor='song_name' className='edit-page-label'>
						Song Name
					</label>
					<input
						type='text'
						id='song_name'
						name='song_name'
						className='edit-page-input'
						value={song_name}
						onChange={e => setSong_name(e.target.value)}
					/>
				</div>
				<div className='edit-page-form-group'>
					<label htmlFor='description' className='edit-page-label'>
						Description<span className='edit-page-required'>*</span>
					</label>
					<textarea
						id='description'
						name='description'
						className='edit-page-textarea'
						value={description}
						onChange={e => setDescription(e.target.value)}
					></textarea>
				</div>
				<div className='edit-page-form-group'>
					<label htmlFor='song_text' className='edit-page-label'>
						Song Text<span className='edit-page-required'>*</span>
					</label>
					<textarea
						id='song_text'
						name='song_text'
						className='edit-page-textarea'
						value={song_text}
						onChange={e => setSong_text(e.target.value)}
					></textarea>
				</div>
				<div className='edit-page-form-group'>
					<label htmlFor='song_image' className='edit-page-label'>
						Song Image
					</label>
					<input
						type='file'
						id='song_image'
						name='song_image'
						className='edit-page-input'
						onChange={e => setSong_image(e.target.files[0])}
					/>
				</div>
				<div className='edit-page-form-group'>
					<label htmlFor='song' className='edit-page-label'>
						Song
					</label>
					<input
						type='file'
						id='song'
						name='song'
						className='edit-page-input'
						onChange={e => setSong(e.target.files[0])}
					/>
				</div>

				<div className='edit-page-form-group'>
					<label htmlFor='genre_name' className='edit-page-label'>
						Genre Name
					</label>
					<input
						type='text'
						id='genre_name'
						name='genre_name'
						className='edit-page-input'
						value={genre_name}
						onChange={e => setGenre_name(e.target.value)}
					/>
				</div>
				<div className='edit-page-form-group'>
					<label htmlFor='author_nickname' className='edit-page-label'>
						Author Nickname
					</label>
					<input
						type='text'
						id='author_nickname'
						name='author_nickname'
						className='edit-page-input'
						value={author_nickname}
						onChange={e => setAuthor_nickname(e.target.value)}
					/>
				</div>
				<button type='submit' className='edit-page-submit-button'>
					Save
				</button>
			</form>
		</div>
	)
}

export default EditInfoAboutSong
