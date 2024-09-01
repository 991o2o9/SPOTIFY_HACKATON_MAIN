import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { getLocalStorage } from '../../helper/function'

export const playlistContext = createContext()
export const usePlaylist = () => useContext(playlistContext)

const PlaylistContextProvider = ({ children }) => {
	const INIT_STATE = {
		playlist: JSON.parse(localStorage.getItem('playlist')) || { playlist: [] },
	}

	const reducer = (state, action) => {
		switch (action.type) {
			case 'GET_PLAYLIST':
				return { ...state, playlist: action.payload }
			default:
				return state
		}
	}

	const [state, dispatch] = useReducer(reducer, INIT_STATE)

	const getFav = () => {
		let playlist = getLocalStorage() || { playlist: [] }
		dispatch({
			type: 'GET_PLAYLIST',
			payload: playlist,
		})
	}

	const addVidToWatchLater = course => {
		let playlist = getLocalStorage() || { playlist: [] }
		let newPlaylistItem = {
			item: course,
			count: 1,
		}
		let itemToFind = playlist.playlist.filter(
			elem => elem.item.id === course.id
		)
		if (itemToFind.length === 0) {
			playlist.playlist.push(newPlaylistItem)
		} else {
			playlist.playlist = playlist.playlist.filter(
				elem => elem.item.id !== course.id
			)
		}
		localStorage.setItem('playlist', JSON.stringify(playlist))
		dispatch({
			type: 'GET_PLAYLIST',
			payload: playlist,
		})
	}

	const checkCourseInFav = id => {
		let playlist = getLocalStorage() || { playlist: [] }
		if (playlist.playlist) {
			let itemFound = playlist.playlist.filter(elem => elem.item.id === id)
			return itemFound.length > 0
		}
		return false
	}

	useEffect(() => {
		getFav()
	}, [])

	const values = {
		checkCourseInFav,
		addVidToWatchLater,
		playlist: state.playlist,
		getFav,
	}

	return (
		<playlistContext.Provider value={values}>
			{children}
		</playlistContext.Provider>
	)
}

export default PlaylistContextProvider
