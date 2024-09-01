import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import Premium from '../products/Premium'
import ListenToSong from '../products/ListenToSong'
import About from '../products/About'

import Login from '../auth/Login'
import Register from '../auth/Register'
import UserPage from '../../pages/UserPage'
import Support from '../products/Support'
import SpotifyAdminPage from '../products/SpotifyAdminPage'
import EditInfoAboutSong from '../products/EditInfoAboutSong'
import CreatePlayList from '../products/CreatePlayList'
import ListenToPlaylistSong from '../products/ListenToPlaylistSong'

const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/search' element={<HomePage />} />
			<Route path='/premiumPage' element={<Premium />} />
			<Route path='/song/:id' element={<ListenToSong />} />
			<Route path='/edit/:slug' element={<EditInfoAboutSong />} />
			<Route path='/about' element={<About />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/cabinet' element={<UserPage />} />
			<Route path='/support' element={<Support />} />
			<Route path='/adminPage' element={<SpotifyAdminPage />} />
			<Route path='/createPlayList' element={<CreatePlayList />} />
			<Route path='/playlist/:id' element={<ListenToPlaylistSong />} />
		</Routes>
	)
}

export default MainRoutes
