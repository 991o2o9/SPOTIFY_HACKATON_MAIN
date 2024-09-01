import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProduct } from '../context/ProductContextProvider'
import { MdDelete } from 'react-icons/md'
import { TiDelete } from 'react-icons/ti'

const ListenToPlaylistSong = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const { getSongs, songs } = useProduct()
	const [playlist, setPlaylist] = useState(null)
	const [durations, setDurations] = useState([])

	useEffect(() => {
		const savedPlaylists = JSON.parse(localStorage.getItem('playlists')) || []
		const selectedPlaylist = savedPlaylists.find(p => p.id === id)
		setPlaylist(selectedPlaylist)
	}, [id])

	useEffect(() => {
		getSongs()
	}, [getSongs])

	useEffect(() => {
		if (playlist && playlist.songs.length > 0) {
			// Фильтруем песни, чтобы оставить только те, что есть в API
			const filteredSongs = playlist.songs.filter(song =>
				songs.some(apiSong => apiSong.id === song.id)
			)
			const audioElements = filteredSongs.map(song => {
				const audio = new Audio(song.song)
				return new Promise(resolve => {
					audio.addEventListener('loadedmetadata', () => {
						resolve(audio.duration)
					})
				})
			})

			Promise.all(audioElements).then(durations => {
				setDurations(durations)
			})
		}
	}, [playlist, songs])

	const formatTime = time => {
		const minutes = Math.floor(time / 60)
		const seconds = Math.floor(time % 60)
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
	}

	const handleRowClick = songId => {
		navigate(`/song/${songId}`)
	}

	if (!playlist) {
		return <div>Loading...</div>
	}

	const filteredSongs = playlist.songs.filter(song =>
		songs.some(apiSong => apiSong.id === song.id)
	)

	return (
		<div>
			<div className='listen-to-page-playlist'>
				<div className='listen-to-page-playlist-bgImage'>
					<img src={playlist.image} alt='' />
				</div>
				<div className='song-img'>
					<img
						src={playlist.image || 'https://via.placeholder.com/150'}
						alt='Playlist Cover'
					/>
				</div>
				<div className='text-info'>
					<div className='title-of-song'>
						<span>{playlist.name}</span>
						<span>{playlist.description || 'No description available'}</span>
					</div>
					<div className='other-info-about-song'>
						<ul className='main-text-ab-song'>
							<li>
								<img
									src='https://f4.bcbits.com/img/a1443982232_65'
									alt='Author'
									className='author-prof-photo'
								/>
								<span>Amin</span>
							</li>
							<li className='album-name'>
								<span>2,211 likes</span>
							</li>
							<li className='song-duration'>{filteredSongs.length} songs</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='play-song-db'>
				<div className='data-etc'>
					<ul>
						<li className='delete-playlist-icon-main'>
							<TiDelete className='delete-playlist-icon-child' />
							<span className='delete-playlist-icon-child-hidden'>
								Delete playlist
							</span>
						</li>
					</ul>
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
							<th>Duration</th>
						</tr>
					</thead>
					<tbody>
						{filteredSongs.map((song, index) => (
							<tr key={index} onClick={() => handleRowClick(song.id)}>
								<td>{index + 1}</td>
								<td className='image-cell'>
									<img src={song.song_image} alt='album cover' />
									<div>
										<div className='title'>{song.song_name}</div>
										<div className='artist'>Author</div>
									</div>
								</td>
								<td>Album</td>
								<td>Today</td>
								<td>{formatTime(durations[index] || 0)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default ListenToPlaylistSong
