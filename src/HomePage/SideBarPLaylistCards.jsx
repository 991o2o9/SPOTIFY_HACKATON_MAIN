import React from 'react'
import { Link } from 'react-router-dom'

const SideBarPLaylistCards = ({ elem }) => {
	console.log(elem)
	return (
		<Link style={{ textDecoration: 'none' }} to={`/playlist/${elem.id}`}>
			<div className='locating-cards'>
				<img src={elem.image} alt='Playlist cover' className='playlist-photo' />
				<div className='description-info'>
					<span>{elem.name}</span>
					<span>Плейлист ● Amin</span>
				</div>
			</div>
		</Link>
	)
}

export default SideBarPLaylistCards
