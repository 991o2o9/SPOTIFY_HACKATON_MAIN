import React from 'react'

const PlaylistModal = ({ playlists, onClose, onSelect }) => {
	return (
		<div className='modal'>
			<div className='modal-content'>
				<h2>Выберите плейлист</h2>
				<ul>
					{playlists.map(playlist => (
						<li key={playlist.id}>
							<button onClick={() => onSelect(playlist.id)}>
								{playlist.name}
							</button>
						</li>
					))}
				</ul>
				<button onClick={onClose}>Закрыть</button>
			</div>
		</div>
	)
}

export default PlaylistModal
