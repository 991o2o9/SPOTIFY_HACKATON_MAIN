import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import SideBar from './HomePage/SideBar'
import Navbar from './HomePage/Navbar'
import MainRoutes from './components/routes/MainRoutes'
import Footerrez from './HomePage/Footerrez'
import NavbarForSearch from './HomePage/NavbarForSearch'
import FooterrezzForMenu from './HomePage/FooterrezzForMenu'

const App = () => {
	const location = useLocation()

	const isSearchPage = location.pathname === '/search'
	const isListenToMusic = location.pathname.startsWith('/song/')

	return (
		<div className='app-container'>
			<SideBar />
			{isSearchPage ? <NavbarForSearch /> : <Navbar />}
			<div className='main-content'>
				<MainRoutes />
			</div>
			{isListenToMusic ? <FooterrezzForMenu /> : <Footerrez />}
		</div>
	)
}

export default App
