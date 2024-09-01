import React, { useState } from 'react'
import h from '../assets/images.png'
import n from '../assets/Google__G__logo.svg.webp'
import mo from '../assets/fb_icon_325x325.png'
import pol from '../assets/Telegram_2019_Logo.svg.webp'
import mu from '../assets/1200x630bb.png'
import './Register.css'
import { useAuth } from '../context/AuthContextProvider'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdCloseCircle } from 'react-icons/io'

const Register = () => {
	const { handleRegister, checkCode } = useAuth()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')
	const [activationEmail, setActivationEmail] = useState('')
	const [code, setCode] = useState('')
	const navigate = useNavigate()
	const [showModal, setShowModal] = useState(false) // State for modal visibility
	const openModal = () => {
		setShowModal(true)
	}

	const closeModal = () => {
		setShowModal(false)
	}

	const handleSave = () => {
		if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
			alert('Заполните данные!')
			return
		}
		let formData = new FormData()
		formData.append('email', email)
		formData.append('password', password)
		formData.append('password_confirm', passwordConfirm)
		handleRegister(formData)
		openModal()
	}

	const handleCode = () => {
		if (!activationEmail.trim() || !code.trim()) {
			alert('Заполните данные!')
			return
		}
		let formData = new FormData()
		formData.append('email', activationEmail)
		formData.append('activation_code', code)
		checkCode(formData)
		navigate('/login')
	}

	return (
		<div className='register-container'>
			<img src={h} alt='Logo' />
			<h1>Sign up and immerse yourself in music</h1>
			<div className='register-form'>
				<form>
					<label>Email</label>
					<input
						onChange={e => setEmail(e.target.value)}
						type='text'
						placeholder='name@domain.com'
					/>
					<label>Password</label>
					<input
						onChange={e => setPassword(e.target.value)}
						type='text'
						placeholder='password'
					/>
					<label>Password-Confrim</label>
					<input
						onChange={e => setPasswordConfirm(e.target.value)}
						type='text'
						placeholder='password-confrim'
					/>
					<button type='button' onClick={handleSave}>
						Sign Up
					</button>
				</form>
			</div>
			<div className='divider-container'>
				<span className='divider-text'>or</span>
			</div>
			<div className='social-login'>
				<button className='social-btn google-btn'>
					<img src={n} alt='Google' />
					<span>Register with Google</span>
				</button>

				<button className='social-btn facebook-btn'>
					<img src={mo} alt='Facebook' />
					<span>Register with Facebook</span>
				</button>

				<button className='social-btn telegram-btn'>
					<img src={pol} alt='Telegram' />
					<span>Register with Telegram</span>
				</button>

				<button className='social-btn twitter-btn'>
					<img src={mu} alt='Twitter' />
					<span>Register with Twitter</span>
				</button>
			</div>
			<hr className='register-hr' />
			<div className='login-prompt'>
				<span>Already have an account?</span>
				<Link to={'/login'}> Log in here.</Link>
			</div>

			{/* Modal */}
			{showModal && (
				<div className='modal'>
					<div className='modal-content'>
						<div className='activation-code-field'>
							<div className='close-icon' onClick={closeModal}>
								<IoMdCloseCircle size={24} />
							</div>
							<div className='activation-code-text'>
								Please enter the code from the email to verify your email
								address
							</div>
							<div className='input-part-activation'>
								<input
									type='text'
									value={activationEmail}
									onChange={e => setActivationEmail(e.target.value)}
									placeholder='Email'
								/>
								<input
									type='text'
									value={code}
									onChange={e => setCode(e.target.value)}
									placeholder='Code'
								/>
							</div>
							<div>
								<button className='btn-act-code' onClick={handleCode}>
									Confirm
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Register
