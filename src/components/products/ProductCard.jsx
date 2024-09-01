import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'

const ProductCard = ({ elem }) => {
	return (
		<div className='content'>
			<div className='playlist'>
				<Link style={{ textDecoration: 'none' }} to={`/song/${elem.id}`}>
					<div className='song'>
						<img src={elem.song_image} alt='Song' />
						<div className='play'>
							<button
								style={{
									textDecoration: 'none',
									background: 'none',
									border: 'none',
									cursor: 'pointer',
								}}
							>
								<FaPlay className='icon-play' />
							</button>
						</div>
						<h4>Written by {elem.author_nickname}</h4>
						<p>{elem.description}</p>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default ProductCard
