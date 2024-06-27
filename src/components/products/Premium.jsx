import React from 'react'
import cardVisa from '../assets/card (1).png'
import masterCard from '../assets/card (2).png'
import americanExpress from '../assets/american-express.png'
import payPal from '../assets/card (3).png'
import { Check } from '@mui/icons-material'

const Premium = () => {
	return (
		<div>
			<dxiv
				style={{
					height: '80vh',
					backgroundImage: 'linear-gradient(to right, #ec4899, #3b82f6)',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					textAlign: 'center',
					color: 'white',
					width: '1274px',
					marginLeft: '245px',
				}}
			>
				<div style={{ marginTop: '2.5rem' }}>
					<h1
						style={{
							fontSize: '1.875rem',
							fontWeight: 'bold',
							marginBottom: '1rem',
							'@media (min-width: 768px)': { fontSize: '2.25rem' },
							'@media (min-width: 1280px)': { fontSize: '3rem' },
							marginLeft: '70px',
							marginRight: '70px',
						}}
					>
						Слушайте без ограничений. Индивидуальная подписка Spotify Premium на
						1 месяц бесплатно.
					</h1>
					<p
						style={{
							fontSize: '1.125rem',
							marginBottom: '1.5rem',
							'@media (min-width: 768px)': { fontSize: '1.25rem' },
						}}
					>
						Затем 4,99 $/месяц. Отменить подписку можно в любой момент.
					</p>
					<div
						style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
					>
						<button
							style={{
								backgroundColor: 'white',
								color: 'black',
								padding: '0.5rem 1rem',
								borderRadius: '9999px',
								fontWeight: '600',
								'@media (min-width: 768px)': { fontSize: '1.125rem' },
								borderStyle: 'solid',
								cursor: 'pointer',
							}}
						>
							Попробовать 1 месяц бесплатно
						</button>
						<button
							style={{
								border: '1px solid white',
								color: 'dark',
								padding: '0.5rem 1rem',
								borderRadius: '9999px',
								fontWeight: '600',
								'@media (min-width: 768px)': { fontSize: '1.125rem' },
								cursor: 'pointer',
							}}
						>
							Посмотреть все планы
						</button>
					</div>
					<p
						style={{
							fontSize: '0.875rem',
							marginTop: '1.5rem',
							'@media (min-width: 768px)': { fontSize: '1rem' },
						}}
					>
						Бесплатно 1 месяц, затем 4,99 $ в месяц. Только для новых
						подписчиков. Действуют{' '}
						<a href='#' style={{ textDecoration: 'underline' }}>
							Условия
						</a>
						.
					</p>
				</div>
				<div
					style={{
						backgroundColor: 'black',
						width: '100%',
						paddingTop: '5.5rem',
						paddingBottom: '3.5rem',
						marginTop: '2.5rem',
						'@media (min-width: 768px)': { marginTop: '5rem' },
					}}
				>
					<h2
						style={{
							fontSize: '1.5rem',
							fontWeight: 'bold',
							marginBottom: '2rem',
							'@media (min-width: 768px)': { fontSize: '1.875rem' },
						}}
					>
						Доступные планы под любые потребности
					</h2>
					<p
						style={{
							fontSize: '1.125rem',
							marginBottom: '3rem',

							'@media (min-width: 768px)': { fontSize: '1.25rem' },
							marginLeft: '90px',
							marginRight: '90px',
						}}
					>
						Слушайте музыку без рекламы сколько угодно на телефоне, колонке и
						других устройствах. Просто выберите Premium-подписку. Оплата
						различными способами. Отменить подписку можно в любой момент.
					</p>
					<div
						style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}
					>
						<img
							style={{
								backgroundColor: 'white',
								borderRadius: '5px',
								width: '40px',
							}}
							src={cardVisa}
							alt='VISA'
						/>
						<img
							style={{
								backgroundColor: 'white',
								borderRadius: '5px',
								width: '40px',
							}}
							src={masterCard}
							alt='MasterCard'
						/>
						<img
							style={{
								backgroundColor: 'white',
								borderRadius: '5px',
								width: '40px',
							}}
							src={americanExpress}
							alt='American Express'
						/>
						<img
							style={{
								backgroundColor: 'white',
								borderRadius: '5px',
								width: '40px',
							}}
							src={payPal}
							alt='PayPal'
						/>
					</div>
				</div>
			</dxiv>

			{/* !---------------------------------------------------------------------t */}
			<div
				style={{
					backgroundColor: 'black',
					color: 'white',
					padding: '0',
					width: '1274px',
					marginLeft: '245px',
				}}
			>
				<h2
					style={{
						textAlign: 'center',
						fontSize: '1.5rem',
						fontWeight: 'bold',
						marginBottom: '2rem',
						marginTop: '0',
						paddingTop: '120px',
					}}
				>
					Все Premium-подписки включают:
				</h2>
				<ul
					style={{
						marginLeft: '40%',
						listStyleType: 'disc',
						listStylePosition: 'inside',
						fontSize: '1.125rem',
						marginBottom: '4rem',
						padding: '0',
						marginTop: '0',
					}}
				>
					{' '}
					<li style={{ listStyleType: 'none' }}>
						<Check sx={{ color: 'white' }} />
						Музыка без рекламы
					</li>
					<li style={{ listStyleType: 'none' }}>
						<Check sx={{ color: 'white' }} />
						Возможность скачивать треки
					</li>
					<li style={{ listStyleType: 'none' }}>
						<Check sx={{ color: 'white' }} />
						Треки в любом порядке
					</li>
					<li style={{ listStyleType: 'none' }}>
						<Check sx={{ color: 'white' }} />
						Высокое качество звука
					</li>
					<li style={{ listStyleType: 'none' }}>
						<Check sx={{ color: 'white' }} />
						Групповые сеансы с друзьями
					</li>
					<li style={{ listStyleType: 'none' }}>
						<Check sx={{ color: 'white' }} />
						Добавление треков в очередь
					</li>
				</ul>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '1.5rem',
						'@media (min-width: 1024px)': {
							flexDirection: 'row',
							justifyContent: 'center',
						},
						marginLeft: '20px',
						marginRight: '20px',
					}}
				>
					<div
						style={{
							backgroundColor: '#27272a',
							padding: '1.5rem',
							borderRadius: '0.5rem',
							width: '100%',
							height: '420px',
							'@media (min-width: 1024px)': { width: '33%' },
						}}
					>
						<div
							style={{
								backgroundColor: '#ec4899',
								textAlign: 'center',
								padding: '0.25rem 0',
								borderRadius: '0.5rem 0.5rem 0 0',
							}}
						>
							Бесплатно 1 месяц
						</div>
						<div style={{ padding: '1rem' }}>
							<h3
								style={{
									fontSize: '1.5rem',
									fontWeight: 'bold',
									marginBottom: '0.5rem',
								}}
							>
								Индивидуальная подписка
							</h3>
							<p style={{ marginBottom: '0.5rem' }}>Бесплатно 1 месяц</p>
							<p style={{ marginBottom: '1rem', color: '#a1a1aa' }}>
								Затем подписка будет стоить 4,99 $ в месяц
							</p>
							<ul
								style={{
									listStyleType: 'disc',
									listStylePosition: 'inside',
									marginBottom: '1rem',
								}}
							>
								<li>1 Premium-аккаунт</li>
								<li>Отмена в любой момент</li>
							</ul>
							<button
								style={{
									backgroundColor: '#ec4899',
									width: '100%',
									padding: '0.5rem',
									borderRadius: '0.5rem',
									borderStyle: 'solid',
									cursor: 'pointer',
								}}
							>
								Попробовать 1 месяц бесплатно
							</button>
							<p
								style={{
									marginTop: '1rem',
									color: '#a1a1aa',
									fontSize: '0.875rem',
								}}
							>
								Бесплатно 1 месяц, затем 4,99 $ в месяц. Только для новых
								подписчиков. Действуют{' '}
								<a href='#' style={{ textDecoration: 'underline' }}>
									Условия
								</a>
								.
							</p>
						</div>
					</div>
					<div
						style={{
							backgroundColor: '#27272a',
							padding: '1.5rem',
							borderRadius: '0.5rem',
							height: '450px',
							width: '100%',
							'@media (min-width: 1024px)': { width: '33%' },
						}}
					>
						<div
							style={{
								backgroundColor: '#8b5cf6',
								textAlign: 'center',
								padding: '0.25rem 0',
								borderRadius: '0.5rem 0.5rem 0 0',
							}}
						>
							Бесплатно 1 месяц
						</div>
						<div style={{ padding: '1rem' }}>
							<h3
								style={{
									fontSize: '1.5rem',
									fontWeight: 'bold',
									marginBottom: '0.5rem',
								}}
							>
								Premium для студентов
							</h3>
							<p style={{ marginBottom: '0.5rem' }}>Бесплатно 1 месяц</p>
							<p style={{ marginBottom: '1rem', color: '#a1a1aa' }}>
								Затем подписка будет стоить 2,49 $ в месяц
							</p>
							<ul
								style={{
									listStyleType: 'disc',
									listStylePosition: 'inside',
									marginBottom: '1rem',
								}}
							>
								<li>1 подтвержденный Premium-аккаунт</li>
								<li>Скидка для студентов, соответствующих требованиям</li>
								<li>Отмена в любой момент</li>
							</ul>
							<button
								style={{
									backgroundColor: '#8b5cf6',
									width: '100%',
									padding: '0.5rem',
									borderRadius: '0.5rem',
									borderStyle: 'solid',
									cursor: 'pointer',
								}}
							>
								Попробовать 1 месяц бесплатно
							</button>
							<p
								style={{
									marginTop: '1rem',
									color: '#a1a1aa',
									fontSize: '0.875rem',
								}}
							>
								Бесплатно 1 месяц, затем 2,49 $ в месяц. Только для новых
								подписчиков, которые учатся в аккредитованных вузах. Действуют{' '}
								<a href='#' style={{ textDecoration: 'underline' }}>
									Условия
								</a>
								.
							</p>
						</div>
					</div>
					<div
						style={{
							backgroundColor: '#27272a',
							padding: '1.5rem',
							borderRadius: '0.5rem',
							height: '420px',
							width: '100%',
							'@media (min-width: 1024px)': { width: '33%' },
						}}
					>
						<div
							style={{
								backgroundColor: '#fbbf24',
								textAlign: 'center',
								padding: '0.25rem 0',
								borderRadius: '0.5rem 0.5rem 0 0',
							}}
						>
							Бесплатно 1 месяц
						</div>
						<div style={{ padding: '1rem' }}>
							<h3
								style={{
									fontSize: '1.5rem',
									fontWeight: 'bold',
									marginBottom: '0.5rem',
								}}
							>
								Premium для двоих
							</h3>
							<p style={{ marginBottom: '0.5rem' }}>6,49 $ в месяц</p>
							<ul
								style={{
									listStyleType: 'disc',
									listStylePosition: 'inside',
									marginBottom: '1rem',
								}}
							>
								<li>2 Premium-аккаунта</li>
								<li>Отмена в любой момент</li>
							</ul>
							<button
								style={{
									backgroundColor: '#fbbf24',
									width: '100%',
									padding: '0.5rem',
									borderRadius: '0.5rem',
									borderStyle: 'solid',
									cursor: 'pointer',
								}}
							>
								Получить Premium для двоих
							</button>
							<p
								style={{
									marginTop: '1rem',
									color: '#a1a1aa',
									fontSize: '0.875rem',
								}}
							>
								Для двух человек, которые живут по одному адресу. Действуют{' '}
								<a href='#' style={{ textDecoration: 'underline' }}>
									Условия
								</a>
								.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* ------------------------------------------------------------ */}
			<div
				style={{
					backgroundColor: 'black',
					color: 'white',
					minHeight: '100vh',
					width: '1274px',
					marginLeft: '245px',
				}}
			>
				<h2
					style={{
						fontSize: '1.875rem',
						fontWeight: 'bold',
						textAlign: 'center',
						marginTop: '0',
						paddingTop: '120px',
					}}
				>
					Почувствуйте разницу
				</h2>
				<p style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
					Переходите на Premium и управляйте своей музыкой. Отменить подписку
					можно в любой момент.
				</p>
				<div>
					<table
						style={{
							width: '100%',
							tableLayout: 'fixed',
							borderSpacing: '0.5rem 0',
							paddingLeft: '160px',
							paddingRight: '100px',
						}}
					>
						<thead>
							<tr>
								<th
									style={{
										width: '50%',
										backgroundColor: 'black',
										textAlign: 'left',
										padding: '1rem',
									}}
								>
									Что вы получите
								</th>
								<th
									style={{
										width: '25%',
										backgroundColor: 'black',
										textAlign: 'center',
										padding: '1rem',
									}}
								>
									Бесплатная версия Spotify
								</th>
								<th
									style={{
										width: '25%',
										backgroundColor: 'black',
										textAlign: 'center',
										padding: '1rem',
									}}
								>
									Premium
								</th>
							</tr>
						</thead>
						<tbody>
							{[
								'Музыка без рекламы',
								'Скачать треки',
								'Треки в любом порядке',
								'Высокое качество звука',
								'Групповые сеансы с друзьями',
								'Добавление треков в очередь',
							].map((feature, index) => (
								<tr key={index}>
									<td style={{ backgroundColor: 'black', padding: '1rem' }}>
										{feature}
									</td>
									<td
										style={{
											backgroundColor: 'black',
											padding: '1rem',
											textAlign: 'center',
										}}
									>
										—
									</td>
									<td
										style={{
											backgroundColor: 'black',
											padding: '1rem',
											textAlign: 'center',
										}}
									>
										<Check sx={{ display: 'inline-block', color: 'white' }} />
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default Premium
