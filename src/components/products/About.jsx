import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import instagrammIcon from '../assets/instagram (1).png'
import facebookIcon from '../assets/facebook.png'
import twitterIcon from '../assets/twitter.png'

const About = () => {
	return (
		<div
			style={{
				width: '1274px',
				marginLeft: '245px',
				paddingTop: '20px',
				paddingBottom: '60px',
				color: 'white',
				background: '#308e40',
			}}
		>
			<main
				style={{ marginTop: '2rem', marginLeft: '10rem', marginRight: '9rem' }}
			>
				<section style={{ marginBottom: '2rem' }}>
					<h1 style={{ fontSize: '2.25rem', fontWeight: 'bold' }}>О нас</h1>
					<p style={{ marginTop: '1rem' }}>
						В Spotify легко найти музыку или подкаст для любой ситуации, ведь
						наш сервис доступен на телефонах, компьютерах, планшетах и других
						устройствах. Независимо, где вы находитесь: за рулем, в спортзале,
						на вечеринке или на отдыхе, — благодаря Spotify миллионы треков и
						подкастов всегда под рукой. Слушайте то, что хочется, или
						предоставьте выбор нам — мы постараемся вас удивить.
					</p>
					<p style={{ marginTop: '1rem' }}>
						Вы также можете показать что-нибудь интересное в плейлистах друзей,
						исполнителей и знаменитостей или создать станцию по своему вкусу.
					</p>
					<p style={{ marginTop: '1rem' }}>
						Подберите музыку к каждому мгновению жизни вместе со Spotify.
						Подписывайтесь или пользуйтесь совершенно бесплатно.
					</p>
				</section>
				<section style={{ marginBottom: '2rem' }}>
					<h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
						Служба поддержки
					</h2>
					<ul
						style={{
							marginTop: '1rem',
							marginLeft: '2rem',
							listStyleType: 'disc',
						}}
					>
						<li>
							<a href='#' style={{ color: 'wheat' }}>
								Справка
							</a>
							. Ответы на многие вопросы, а также информацию о функциях Spotify
							можно найти на нашем справочном сайте.
						</li>
						<li>
							<a href='#' style={{ color: 'wheat' }}>
								Сообщество
							</a>
							. Попросите совета у опытных пользователей Spotify. Если вы не
							найдете решение своей проблемы, опубликуйте вопрос, и вам
							обязательно помогут. Вы также можете вносить идеи по улучшению
							сервиса, голосовать за предложения других пользователей или просто
							обсуждать музыку с единомышленниками.
						</li>
						<li>
							<a href='#' style={{ color: 'wheat' }}>
								Служба поддержки
							</a>
							. Если вы не найдете ответ на свой вопрос самостоятельно,
							обратитесь в Службу поддержки Spotify.
						</li>
					</ul>
				</section>
				<section style={{ marginBottom: '2rem' }}>
					<h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
						Другие темы
					</h2>
					<ul
						style={{
							marginTop: '1rem',
							marginLeft: '2rem',
							listStyleType: 'disc',
							color: 'whire',
						}}
					>
						<li>
							Хотите разместить рекламу в Spotify? Посетите{' '}
							<a href='#' style={{ color: 'wheat' }}>
								раздел для рекламодателей
							</a>
							.
						</li>
						<li>
							Вы представитель прессы? Откройте{' '}
							<a href='#' style={{ color: 'wheat' }}>
								раздел для прессы
							</a>
							.
						</li>
						<li>
							Хотите стать частью нашей команды? Перейдите к{' '}
							<a href='#' style={{ color: 'wheat' }}>
								разделу вакансий
							</a>
							.
						</li>
					</ul>
					<p style={{ marginTop: '1.5rem', color: 'white' }}>
						Компания Spotify USA, Inc. предоставляет услуги пользователям в США.
						Компания Spotify AB предоставляет услуги пользователям во всех
						остальных странах.
					</p>
				</section>
				<section
					style={{
						display: 'grid',
						gap: '2rem',
						gridTemplateColumns: 'repeat(1, 1fr)',
					}}
				>
					<div>
						<h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
							Главный офис Spotify
						</h3>
						<p style={{ marginTop: '0.5rem' }}>
							Spotify AB <br />
							Regeringsgatan 19 <br />
							SE-111 53 Stockholm <br />
							Sweden <br />
							Reg no: 556703-7485 <br />
							office@spotify.com
						</p>
					</div>
					<div>
						<h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
							Spotify по всему миру
						</h3>
						<p style={{ marginTop: '0.5rem' }}>
							Spotify Belgium <br />
							Square de Meeûs 37 4th floor 1000 Brussels Belgium <br />
							office@spotify.com
						</p>
						<p style={{ marginTop: '0.5rem' }}>
							Spotify GmbH <br />
							Unter den Linden 10 10117 Berlin Germany <br />
							office@spotify.com
						</p>
						<p style={{ marginTop: '0.5rem' }}>
							Spotify Canada Inc. <br />
							220 Adelaide Street West M5H 1W7 Toronto Ontario Canada <br />
							office@spotify.com
						</p>
						<p style={{ marginTop: '0.5rem' }}>
							Spotify Denmark ApS <br />
							Kampmannsgade 2, 1604 Copenhagen Denmark <br />
							office@spotify.com
						</p>
						<p style={{ marginTop: '0.5rem' }}>
							SPOTIFY SPAIN SL <br />
							Paseo de Recoletos, 7-9 28004 Madrid Spain <br />
							office@spotify.com
						</p>
						<p style={{ marginTop: '0.5rem' }}>
							Spotify Finland Oy <br />
							c/o Intertrust (Finland) Uudenmaankatu 1-5 00120 Helsinki Finland{' '}
							<br />
							office@spotify.com
						</p>
						<p style={{ marginTop: '0.5rem' }}>
							Spotify France SAS <br />
							48 Rue la Bruyère 75009 Paris France <br />
							office@spotify.com
						</p>
						<p style={{ marginTop: '0.5rem' }}>
							Spotify India LLP <br />
							Regus, North F/A-4, Floor 13th, A Block, Shiv Sagar Estate, Dr
							Annie Besant Road, Worli, Mumbai Maharashtra, MH 400018 INDIA{' '}
							<br />
							office@spotify.com
						</p>
					</div>
				</section>
			</main>
		</div>
	)
}

export default About
