import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useAuth } from '../components/context/AuthContextProvider'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const Navbar = () => {
	const [bgColor, setBgColor] = useState('')
	const [isOpen, setIsOpen] = useState(false)
	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	const { currentUser, handleLogOut, checkAuth, error } = useAuth()

	useEffect(() => {
		if (localStorage.getItem('tokens')) {
			checkAuth()
		}
	}, [checkAuth])

	const navigate = useNavigate()

	useEffect(() => {
		if (currentUser) {
			const storedColor = localStorage.getItem(`bgColor_${currentUser}`)
			if (storedColor) {
				setBgColor(storedColor)
			} else {
				const pastelColors = [
					'rgb(255, 182, 193)', // light pink
					'rgb(176, 224, 230)', // powder blue
					'rgb(152, 251, 152)', // pale green
					'rgb(255, 228, 181)', // moccasin
					'rgb(255, 218, 185)', // peach puff
					'rgb(221, 160, 221)', // plum
					'rgb(240, 230, 140)', // khaki
					'rgb(173, 216, 230)', // light blue
				]

				const randomColor =
					pastelColors[Math.floor(Math.random() * pastelColors.length)]
				setBgColor(randomColor)
				localStorage.setItem(`bgColor_${currentUser}`, randomColor)
			}
		}
	}, [currentUser])

	return (
		<div className='header'>
			<div className='controls'>
				<button type='button' className='icon-button'>
					<FaChevronLeft />
				</button>
				<button type='button' className='icon-button'>
					<FaChevronRight />
				</button>
			</div>

			<div className='menu'>
				<ul>
					<li>
						<Link to='/adminPage'>Admin</Link>
					</li>
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
					{currentUser ? (
						<div className='dropdown' onClick={toggleMenu}>
							<div className='profile-circle'>
								<span style={{ backgroundColor: bgColor }}>
									{currentUser.charAt(0)}
								</span>
							</div>
							<div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
								<Link to='/cabinet'>{currentUser}</Link>
								<hr />
								<Link onClick={handleLogOut}>Log out</Link>
							</div>
						</div>
					) : (
						<>
							<li>
								<Link to='/register'>Sign Up</Link>
							</li>
							<button onClick={() => navigate('/login')} type='button'>
								Log In
							</button>
						</>
					)}
				</ul>
			</div>
		</div>
	)
}

export default Navbar
