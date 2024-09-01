import React, { useEffect, useState } from 'react'

const UserPage = () => {
	const [userName, setUserName] = useState('')
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [inpName, setInpName] = useState('')
	const [fileImage, setFileImage] = useState('')
	const [fileBeforeImage, setFileBeforeImage] = useState(null)

	useEffect(() => {
		const savedName = localStorage.getItem('profileName')
		if (savedName) {
			setUserName(savedName)
			setInpName(savedName)
		} else {
			setUserName('user')
			setInpName('user')
		}

		const savedImage = localStorage.getItem('profileImage')
		if (savedImage) {
			setFileImage(savedImage)
		} else {
			setFileImage('https://placehold.co/96x96')
		}
	}, [])

	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)

	const handleSave = () => {
		setUserName(inpName)
		localStorage.setItem('profileName', inpName)

		if (fileBeforeImage) {
			const reader = new FileReader()
			reader.onloadend = () => {
				const base64Image = reader.result
				setFileImage(base64Image)
				localStorage.setItem('profileImage', base64Image)
			}
			reader.readAsDataURL(fileBeforeImage)
		}

		closeModal()
	}

	const authorArray = [
		{ name: 'Ice Spice', src: 'https://placehold.co/96x96' },
		{ name: 'Tay-K', src: 'https://placehold.co/96x96' },
		{ name: 'Ирина Кайратовна', src: 'https://placehold.co/96x96' },
		{ name: 'Разные исполнители', src: 'https://placehold.co/96x96' },
	]

	return (
		<div
			style={{
				backgroundColor: 'black',
				color: 'white',
				height: 'auto',
				width: '1274px',
				marginLeft: '245px',
			}}
		>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: '1.5rem',
					background: 'linear-gradient(to bottom, gray, black)',
					padding: '3rem',
				}}
			>
				<div
					style={{
						backgroundColor: '#3f3f46',
						borderRadius: '50%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						overflow: 'hidden',
					}}
				>
					<img
						src={fileImage}
						alt='user-icon'
						style={{ width: '10rem', height: '10rem', cursor: 'pointer' }}
						onClick={openModal}
					/>
				</div>
				<div>
					<p style={{ fontSize: '0.875rem' }}>Профиль</p>
					<h1
						style={{
							fontSize: '3.75rem',
							fontWeight: 'bold',
							cursor: 'pointer',
						}}
						onClick={openModal}
					>
						{userName}
					</h1>
					<p style={{ fontSize: '0.875rem' }}>{authorArray.length} подписки</p>
				</div>
			</div>
			<div style={{ marginTop: '2.5rem', padding: '3rem' }}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginBottom: '1rem',
					}}
				>
					<span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
						Уже подписаны
					</span>
					<span
						onClick={openModal}
						style={{ fontSize: '1rem', cursor: 'pointer' }}
					>
						Изменение профиля
					</span>
					{isModalOpen && (
						<div
							style={{
								position: 'fixed',
								inset: 0,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								backgroundColor: 'rgba(0, 0, 0, 0.5)',
								zIndex: 50,
							}}
						>
							<div
								style={{
									backgroundColor: '#383838',
									padding: '1.5rem',
									borderRadius: '0.5rem',
									maxWidth: '28rem',
									width: '100%',
								}}
							>
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
										marginBottom: '1rem',
									}}
								>
									<h2
										style={{
											fontSize: '1.125rem',
											fontWeight: '600',
											color: 'var(--card-foreground)',
										}}
									>
										Данные профиля
									</h2>
									<button
										onClick={closeModal}
										style={{
											color: 'var(--muted-foreground)',
											transition: 'color 0.3s',
										}}
									>
										&times;
									</button>
								</div>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										marginBottom: '1rem',
									}}
								>
									<img
										src={
											fileBeforeImage
												? URL.createObjectURL(fileBeforeImage)
												: fileImage
										}
										alt='User Profile Image'
										style={{
											marginBottom: '1rem',
											height: '8rem',
										}}
									/>
									<input
										type='file'
										name=''
										id=''
										onChange={e => setFileBeforeImage(e.target.files[0])}
										style={{
											backgroundColor: '#686D76',
											color: 'var(--card-foreground)',
											padding: '0.75rem',
											borderRadius: '0.375rem',
											marginBottom: '1rem',
											border: 'none',
										}}
									/>
									<input
										type='text'
										value={inpName}
										style={{
											backgroundColor: '#686D76',
											color: 'var(--card-foreground)',
											padding: '0.75rem',
											borderRadius: '0.375rem',
											marginBottom: '1rem',
											width: '80%',
											border: 'none',
										}}
										onChange={e => setInpName(e.target.value)}
									/>
									<button
										style={{
											backgroundColor: 'white',
											color: 'black',
											padding: '0.75rem 1.5rem',
											borderRadius: '2rem',
											transition: 'background-color 0.3s',
											border: 'none',
										}}
										onClick={handleSave}
									>
										Сохранить
									</button>
								</div>
								<p
									style={{
										color: 'var(--muted-foreground)',
										fontSize: '0.875rem',
										textAlign: 'center',
									}}
								>
									Продолжая, ты предоставляешь Spotify доступ к выбранному
									изображению. Пожалуйста, не загружай файлы, которые ты не
									имеешь права распространять.
								</p>
							</div>
						</div>
					)}
				</div>
				<div
					style={{
						display: 'flex',
						gap: '1.5rem',
						flexWrap: 'wrap',
					}}
				>
					{authorArray.map((author, index) => (
						<div
							key={index}
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<img
								style={{ width: '6rem', height: '6rem', borderRadius: '50%' }}
								src={author.src}
								alt={`Profile of ${author.name}`}
							/>
							<span style={{ marginTop: '0.5rem' }}>{author.name}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default UserPage
