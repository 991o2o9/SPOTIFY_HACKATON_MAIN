import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider from './components/context/AuthContextProvider'
import ProductContextProvider from './components/context/ProductContextProvider'
import PlaylistContextProvider from './components/context/PlaylistContextProvider'
// import AudioContextProvider from './components/context/AudioContextProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<PlaylistContextProvider>
			<ProductContextProvider>
				<AuthContextProvider>
					<App />
				</AuthContextProvider>
			</ProductContextProvider>
		</PlaylistContextProvider>
	</BrowserRouter>
)
