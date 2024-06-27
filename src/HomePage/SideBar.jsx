import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaSearch, FaMusic, FaHeart, FaDoorOpen } from 'react-icons/fa'
import { MdOutlineLibraryMusic } from 'react-icons/md'
import { BsPlusLg } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'

const SideBar = () => {
	return (
		<div className='side'>
			<div className='logo'>
				<Link to='/'>
					<img
						src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png'
						alt='Logo'
					/>
				</Link>
			</div>

			<div className='nav'>
				<ul>
					<li>
						<Link to='/'>
							<FaHome className='icon-home' />
							<span>Home</span>
						</Link>
					</li>
					<li>
						<Link to='/search'>
							<FaSearch className='icon-search' />
							<span>Search</span>
						</Link>
					</li>
					<li>
						<Link to='/library'>
							<MdOutlineLibraryMusic className='icon-library' />
							<span>Library</span>
						</Link>
					</li>
				</ul>
			</div>

			<div className='actions'>
				<div className='library-of-playlist'>
					<Link>
						<FaDoorOpen className='playlist-pic' />
						<span>Your library</span>
					</Link>
					<Link>
						<BsPlusLg className='create-fckg-playlist' />
					</Link>
				</div>
				<div className='search-container'>
					<CiSearch className='search-icon' />
					<input type='text' placeholder='Search' className='search-input' />
				</div>

				<div className='cards-with-playlist'>
					<Link to={'/playlist'} style={{ textDecoration: 'none' }}>
						<div className='locating-cards'>
							<img
								src='https://i.redd.it/eueplomhfqqc1.jpeg'
								alt=''
								className='playlist-photo'
							/>
							<div className='description-info'>
								<span>AHH SONGS</span>
								<span>Плейлист ● Amin</span>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default SideBar
