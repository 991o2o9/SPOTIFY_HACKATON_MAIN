import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaSearch, FaDoorOpen } from 'react-icons/fa'
import { MdOutlineLibraryMusic } from 'react-icons/md'
import { BsPlusLg } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import SideBarPLaylistCards from './SideBarPLaylistCards'

const SideBar = () => {
	const [playlists, setPlaylists] = useState([])

	useEffect(() => {
		const savedPlaylists = JSON.parse(localStorage.getItem('playlists')) || []
		setPlaylists(savedPlaylists)
	}, [])

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
					<Link to='/library'>
						<FaDoorOpen className='playlist-pic' />
						<span>Your library</span>
					</Link>
					<Link to='/createPlayList'>
						<BsPlusLg className='create-fckg-playlist' />
					</Link>
				</div>
				<div className='search-container'>
					<CiSearch className='search-icon' />
					<input type='text' placeholder='Search' className='search-input' />
				</div>

				<div className='cards-with-playlist'>
					{playlists.map((elem, index) => (
						<SideBarPLaylistCards key={index} elem={elem} />
					))}
				</div>
			</div>
		</div>
	)
}

export default SideBar
