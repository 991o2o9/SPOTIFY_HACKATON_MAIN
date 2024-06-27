import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'
const ProductCard = ({ elem }) => {
	return (
		<div>
			<div className='content'>
				<div className='playlist'>
					<Link style={{ textDecoration: 'none' }} to={`/song/${elem.id}`}>
						<div className='song'>
							<img src={elem.song_image} alt='Song' />
							<div className='play'>
								<Link style={{ textDecoration: 'none' }}>
									<FaPlay className='icon-play' />
								</Link>
							</div>
							<h4>Written by {elem.author_nickname}</h4>
							<p>{elem.description}</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
