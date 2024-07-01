import React, { createContext, useContext, useReducer } from 'react'
import { API } from '../../helper/const'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const productContext = createContext()
export const useProduct = () => useContext(productContext)

const INIT_STATE = {
	songs: [],
	oneSong: {},
}

const ProductContextProvider = ({ children }) => {
	const navigate = useNavigate()

	const reducer = (state = INIT_STATE, action) => {
		switch (action.type) {
			case 'GET_SONGS':
				return { ...state, songs: action.payload }
			case 'GET_ONE_SONG':
				return { ...state, oneSong: action.payload }
			default:
				return state
		}
	}

	const [state, dispatch] = useReducer(reducer, INIT_STATE)

	//! Config
	const getConfig = () => {
		const tokens = JSON.parse(localStorage.getItem('tokens'))
		if (!tokens || !tokens.access) {
			console.error('No tokens found')
			return {}
		}
		const Authorization = `Bearer ${tokens.access.access}`
		return {
			headers: { Authorization },
		}
	}

	//! addSong
	const addSong = async newSong => {
		try {
			await axios.post(`${API}/song/post_song/`, newSong, getConfig())
			navigate('/')
		} catch (error) {
			console.log('Error adding song:', error)
		}
	}

	//! getSongs
	const getSongs = async () => {
		try {
			const { data } = await axios(`${API}/song/list_song/`, getConfig())
			dispatch({
				type: 'GET_SONGS',
				payload: data.results,
			})
		} catch (error) {
			console.log('Error fetching songs:', error)
		}
	}

	//! deleteSong
	const deleteSong = async slug => {
		try {
			await axios.delete(`${API}/song/delete_song/${slug}/`, getConfig())
			getSongs()
			navigate('/')
		} catch (error) {
			console.log('Error deleting song:', error)
		}
	}

	//! getOneSong
	const getOneSong = async slug => {
		try {
			const { data } = await axios(
				`${API}/song/retrieve_song/${slug}/`,
				getConfig()
			)
			dispatch({
				type: 'GET_ONE_SONG',
				payload: data,
			})
		} catch (error) {
			console.log('Error fetching one song:', error)
		}
	}

	//! editSong
	const editSong = async (slug, newSong) => {
		try {
			await axios.patch(
				`${API}/song/update_song/${slug}/`,
				newSong,
				getConfig()
			)
		} catch (error) {
			console.log('Error editing song:', error)
		}
	}

	const values = {
		addSong,
		getSongs,
		songs: state.songs,
		deleteSong,
		getOneSong,
		oneSong: state.oneSong,
		editSong,
	}

	return (
		<productContext.Provider value={values}>{children}</productContext.Provider>
	)
}

export default ProductContextProvider
