import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { CiSearch } from 'react-icons/ci'

const NavbarForSearch = () => {
	return (
		<div className='main'>
			<div className='header'>
				<div className='controls'>
					<button type='button' className='icon-button'>
						<FaChevronLeft />
					</button>
					<button type='button' className='icon-button'>
						<FaChevronRight />
					</button>
					<CiSearch className='search-icon-search' />
					<input
						type='text'
						placeholder='Search'
						className='search-input-search'
					/>
				</div>

				<div className='menu'>
					<ul>
						<li>
							<Link to='/premiumPage'>Premium</Link>
						</li>
						<li>
							<Link to='/support'>Support</Link>
						</li>
						<li>
							<Link to='/download'>Download</Link>
						</li>
						<li className='divider'>|</li>
						<li>
							<Link to='/signup'>Sign Up</Link>
						</li>
					</ul>
					<button type='button'>Log In</button>
				</div>
			</div>
		</div>
	)
}

export default NavbarForSearch
