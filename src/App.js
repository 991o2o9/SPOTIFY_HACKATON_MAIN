import React from 'react'
import { useLocation } from 'react-router-dom'
import SideBar from './HomePage/SideBar'
import Navbar from './HomePage/Navbar'
import MainRoutes from './components/routes/MainRoutes'
import Footerrez from './HomePage/Footerrez'
import NavbarForSearch from './HomePage/NavbarForSearch'

const App = () => {
	const location = useLocation()
	const isSearchPage = location.pathname === '/search'

	return (
		<div className='app-container'>
			<SideBar />
			{isSearchPage ? <NavbarForSearch /> : <Navbar />}
			<div className='main-content'>
				<MainRoutes />
			</div>
			<Footerrez />
		</div>
	)
}

export default App
