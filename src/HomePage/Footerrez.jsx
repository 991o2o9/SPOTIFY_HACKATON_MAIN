import React from 'react'
import n1 from '../components/assets/instagram (1).png'
import n2 from '../components/assets/twitter.png'
import n3 from '../components/assets/facebook.png'
import { Link } from 'react-router-dom'

const Footerrez = () => {
	return (
		<div className='footer'>
			<div className='footer-container'>
				<div className='footer-grid'>
					<div>
						<h3 className='footer-heading'>Компания</h3>
						<ul>
							<li className='liFooter'>
								<Link to='/about'>О нас</Link>
							</li>
							<li className='liFooter'>
								<a href='/vacancies'>Вакансии</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='footer-heading'>Сообщества</h3>
						<ul>
							<li className='liFooter'>
								<a href='/artists'>Для исполнителей</a>
							</li>
							<li className='liFooter'>
								<a href='/developers'>Для разработчиков</a>
							</li>
							<li className='liFooter'>
								<a href='/advertising'>Реклама</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='footer-heading'>Полезные ссылки</h3>
						<ul>
							<li className='liFooter'>
								<a href='/help'>Справка</a>
							</li>
							<li className='liFooter'>
								<a href='/mobile-app'>Бесплатное мобильное приложение</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='footer-heading'>Планы Spotify</h3>
						<ul>
							<li className='liFooter'>
								<a href='/premium'>Индивидуальная подписка Spotify Premium</a>
							</li>
							<li className='liFooter'>
								<a href='/student-premium'>Premium для студентов</a>
							</li>
							<li className='liFooter'>
								<a href='/duo-premium'>Premium для двоих</a>
							</li>
							<li className='liFooter'>
								<a href='/individual-subscription'>Индивидуальная подписка</a>
							</li>
							<li className='liFooter'>
								<a href='/free-version'>Бесплатная версия Spotify</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='footer-bottom'>
					<p>&copy; 2024 Spotify AB</p>
					<div className='footer-icons'>
						<a
							href='https://www.instagram.com/spotify/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img alt='Instagram' src={n1} />
						</a>
						<a
							href='https://x.com/Spotify?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img alt='Twitter' src={n2} />
						</a>
						<a
							href='https://www.facebook.com/Spotify/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img alt='Facebook' src={n3} />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footerrez
