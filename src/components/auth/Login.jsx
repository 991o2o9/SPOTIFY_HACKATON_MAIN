import React, { useState } from 'react'
import h from '../assets/images.png'
import n from '../assets/Google__G__logo.svg.webp'
import mo from '../assets/fb_icon_325x325.png'
import pol from '../assets/Telegram_2019_Logo.svg.webp'
import mu from '../assets/1200x630bb.png'
import './Login.css'
import { useAuth } from '../context/AuthContextProvider'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loginError, setLoginError] = useState('') // Состояние для ошибки входа
	const { handleLogin } = useAuth()
	const navigate = useNavigate()

	const handleSave = async () => {
		if (!email.trim() || !password.trim()) {
			alert('Заполните данные!')
			return
		}
		let formData = new FormData()
		formData.append('email', email)
		formData.append('password', password)

		const success = await handleLogin(formData, email)
		if (!success) {
			setLoginError(
				'Login failed. Please check your credentials and try again.'
			)
		} else {
			setLoginError('')
			navigate('/') // Перенаправление после успешного входа
		}
	}

	return (
		<div className='login-background'>
			<header>
				<div className='login-logo'></div>
			</header>
			<section>
				<div className='login-container'>
					<img src={h} alt='Logo' />
					<h1>Login to Spotify</h1>

					<div className='social-login'>
						<button style={{ cursor: 'pointer' }} className='social-btn' id='g'>
							<img src={n} alt='Google logo' />
							<span>Login with Google</span>
						</button>
						<button className='social-btn' id='f'>
							<img src={mo} alt='Facebook logo' />
							<span>Login with Facebook</span>
						</button>
						<button className='social-btn' id='m'>
							<img src={pol} alt='Telegram logo' />
							<span>Login with Telegram</span>
						</button>
						<button className='social-btn' id='t'>
							<img src={mu} alt='Twitter logo' />
							<span>Login with Twitter</span>
						</button>
					</div>

					<hr />
					<div className='login-form'>
						<form>
							<label>Email or Username</label>
							<input
								onChange={e => setEmail(e.target.value)}
								type='text'
								placeholder='Email or username'
							/>
							<label>Password</label>
							<input
								onChange={e => setPassword(e.target.value)}
								type='password'
								placeholder='Password'
							/>
							<button type='button' onClick={handleSave}>
								Log In
							</button>
							{loginError && <p className='error-text'>{loginError}</p>}
						</form>
					</div>

					<hr />

					<div className='signup-prompt'>
						<span>Don't have an account?</span>
						<Link to={'/login'}>Sign up for Spotify</Link>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Login
