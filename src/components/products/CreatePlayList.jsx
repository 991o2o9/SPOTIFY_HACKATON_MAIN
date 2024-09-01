import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './styles/createPlayList.css'
import { IoIosAddCircle, IoMdMusicalNotes } from 'react-icons/io'

const CreatePlayList = () => {
	const [playlists, setPlaylists] = useState([])
	const [isPlaylistModalOpen, setIsPlaylistModalOpen] = useState(false)
	const [playlistNameInput, setPlaylistNameInput] = useState('')
	const [playlistDescription, setPlaylistDescription] = useState('')
	const [newPlaylistImage, setNewPlaylistImage] = useState(null)

	useEffect(() => {
		const savedPlaylists = JSON.parse(localStorage.getItem('playlists')) || []
		setPlaylists(savedPlaylists)
	}, [])

	const openPlaylistModal = () => setIsPlaylistModalOpen(true)
	const closePlaylistModal = () => {
		setIsPlaylistModalOpen(false)
		setPlaylistNameInput('')
		setNewPlaylistImage(null)
	}

	const handleAddPlaylist = () => {
		const reader = new FileReader()
		reader.onloadend = () => {
			const base64Image = reader.result
			const newPlaylist = {
				id: uuidv4(), // Генерируем уникальный ID
				name: playlistNameInput,
				image: base64Image,
				songs: [],
				description: playlistDescription,
			}

			const updatedPlaylists = [...playlists, newPlaylist]
			setPlaylists(updatedPlaylists)
			localStorage.setItem('playlists', JSON.stringify(updatedPlaylists))
		}

		if (newPlaylistImage) {
			reader.readAsDataURL(newPlaylistImage)
		} else {
			const newPlaylist = {
				id: uuidv4(), // Генерируем уникальный ID
				name: playlistNameInput,
				image: null,
			}

			const updatedPlaylists = [...playlists, newPlaylist]
			setPlaylists(updatedPlaylists)
			localStorage.setItem('playlists', JSON.stringify(updatedPlaylists))
		}

		closePlaylistModal()
	}

	return (
		<div className='container-playlist'>
			<div className='header-play-list'>
				{playlists.length > 0 && playlists[0].image ? (
					<img
						className='playlist-image-gang'
						src={playlists[0].image}
						alt=''
					/>
				) : (
					<div className='playlist-icon'>
						<IoMdMusicalNotes className='note-for-icon' />
					</div>
				)}
				<div className='playlist-info'>
					<p>Playlist</p>
					<h1 onClick={openPlaylistModal}>
						{playlists.length > 0 ? playlists[0].name : 'Click here to change'}
					</h1>
				</div>
			</div>
			<div className='subscriptions'>
				<div className='subscriptions-header'>
					<span className='edit-playlist' onClick={openPlaylistModal}>
						Change Playlist
					</span>
					<div className='icon-add-playlist' onClick={openPlaylistModal}>
						<IoIosAddCircle className='icon-add-playlist-itself' />
					</div>
					{isPlaylistModalOpen && (
						<div className='modal'>
							<div className='modal-content'>
								<div className='modal-header'>
									<h2>Playlist Details</h2>
									<button onClick={closePlaylistModal}>&times;</button>
								</div>
								<div className='modal-body'>
									<input
										type='text'
										placeholder='Playlist Name'
										value={playlistNameInput}
										onChange={e => setPlaylistNameInput(e.target.value)}
									/>
									<input
										type='text'
										placeholder='Playlist Description'
										value={playlistDescription}
										onChange={e => setPlaylistDescription(e.target.value)}
									/>
									<input
										type='file'
										onChange={e => setNewPlaylistImage(e.target.files[0])}
									/>
									<button onClick={handleAddPlaylist}>Save</button>
								</div>
								<p className='modal-footer'>
									By continuing, you are giving Spotify access to the selected
									image. Please do not upload files you do not have rights to
									distribute.
								</p>
							</div>
						</div>
					)}
				</div>
			</div>
			<div className='playlistcreation-table-container'>
				<table className='playlistcreation-table'>
					<thead>
						<tr>
							<th>#</th> <th>Title</th> <th>Album</th> <th>Date added</th>
							<th>Duration</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td className='playlistcreation-image-cell'>
								<img src='https://placehold.co/96x96' alt='album cover' />
								<div>
									<div className='playlistcreation-title'>Playlist #1</div>
									<div className='playlistcreation-artist'>Author</div>
								</div>
							</td>
							<td>Example</td> <td>Jun 25, 2020</td> <td>3:36</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default CreatePlayList
