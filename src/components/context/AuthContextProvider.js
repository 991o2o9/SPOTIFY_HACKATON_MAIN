import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API } from '../../helper/const'
import axios from 'axios'

export const authContext = createContext()
export const useAuth = () => useContext(authContext)

const AuthContextProvider = ({ children }) => {
	const navigate = useNavigate()
	const [currentUser, setCurrentUser] = useState(null)
	const [error, setError] = useState(false)

	// Регистрация пользователя
	const handleRegister = async formData => {
		try {
			await axios.post(`${API}/user/registers/`, formData)
			setError(null) // Очистка ошибок
		} catch (error) {
			setError(error.response.data)
		}
	}

	// Вход пользователя
	const handleLogin = async (formData, email) => {
		try {
			const { data } = await axios.post(`${API}/user/login/`, formData)
			localStorage.setItem('tokens', JSON.stringify(data))
			localStorage.setItem('email', JSON.stringify(email))
			setCurrentUser(email)
			navigate('/')
			setError(null) // Очистка ошибок при успешном входе
		} catch (error) {
			setError(error.response.data) // Установка ошибки в состояние
		}
	}

	// Выход пользователя
	const handleLogOut = () => {
		localStorage.removeItem('tokens')
		localStorage.removeItem('email')
		setCurrentUser(null)
		navigate('/login')
	}

	// Проверка аутентификации пользователя
	const checkAuth = async () => {
		try {
			const tokens = JSON.parse(localStorage.getItem('tokens'))
			const { data } = await axios.post(`${API}/user/refresh/`, {
				refresh: tokens.refresh,
			})
			localStorage.setItem(
				'tokens',
				JSON.stringify({ access: data, refresh: tokens.refresh })
			)
			const email = JSON.parse(localStorage.getItem('email'))
			setCurrentUser(email)
			setError(null) // Очистка ошибок
		} catch (error) {
			setError(error) // Установка ошибки
		}
	}
	// Проверка activationCode
	const checkCode = async formData => {
		try {
			await axios.get(
				`${API}/user/active/${formData.get('email')}/${formData.get(
					'activation_code'
				)}/`
			)
			navigate('/login')
		} catch (error) {
			console.log('Error activating user:', error)
		}
	}

	const values = {
		handleLogin,
		handleRegister,
		currentUser,
		error,
		checkAuth,
		handleLogOut,
		checkCode,
	}

	return <authContext.Provider value={values}>{children}</authContext.Provider>
}

export default AuthContextProvider
