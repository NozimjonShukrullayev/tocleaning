import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
// import { Trans } from "react-i18next";
// componentni t qilish. i18nKey="jsondagi nomi"
import i18next from 'i18next'
import cookies from 'js-cookie'
import logo from '../../assets/logo_trial.png'

function Header() {
	const { t } = useTranslation()

	const [selectVal, setSelectVal] = useState(cookies.get('i18next'))
	const [activeMenu, setActiveMenu] = useState(false)
	const handleClick = () => {
		cookies.get('i18next') == 'ru'
			? cookies.set('i18next', 'uz')
			: cookies.set('i18next', 'ru')
		setSelectVal(cookies.get('i18next'))
		i18next.changeLanguage(cookies.get('i18next'))
	}

	const menuToggle = () => {
		setActiveMenu(prevState => !prevState)
	}

	return (
		<header id='site-header'>
			<div className='container'>
				<div className='header__grid'>
					<a href='#index.html' className='header__logo'>
						<img src={logo} className='logo__img' />
					</a>
					<nav className='header__nav'>
						<ul>
							<li>
								<a href='#hero-section' className='nav__link'>
									{t('navOneLink')}
								</a>
							</li>
							<li>
								<a href='#about-section' className='nav__link'>
									{t('navTwoLink')}
								</a>
							</li>
							<li>
								<a href='#services' className='nav__link'>
									{t('navThreeLink')}
								</a>
							</li>
							<li>
								<a href='#faq-section' className='nav__link'>
									{t('navFourLink')}
								</a>
							</li>
							<li>
								<select
									onChange={handleClick}
									value={selectVal}
									name='language'
									id='language'
								>
									<option value='uz'>Узбекча</option>
									<option value='ru'>Русский</option>
								</select>
							</li>
							<a
								href='tel:+998902242299'
								className='nav__link contact__btn btn'
							>
								{t('contactBtn')}
							</a>
						</ul>
					</nav>
					<div className='media__header'>
						<select
							onChange={handleClick}
							className='mobile__lang__one'
							value={selectVal}
							name='language'
							id='language'
						>
							<option value='uz'>Узбекча</option>
							<option value='ru'>Русский</option>
						</select>
						<button onClick={menuToggle} className='menu__toggle'>
							<i class='bx bx-menu'></i>
						</button>
						<nav
							className={`media__header__nav ${activeMenu && 'active'}`}
							id='media-header'
						>
							<ul>
								<li>
									<a
										onClick={menuToggle}
										href='#hero-section'
										className='nav__link'
									>
										{t('navOneLink')}
									</a>
								</li>
								<li>
									<a
										onClick={menuToggle}
										href='#about-section'
										className='nav__link'
									>
										{t('navTwoLink')}
									</a>
								</li>
								<li>
									<a
										onClick={menuToggle}
										href='#services'
										className='nav__link'
									>
										{t('navThreeLink')}
									</a>
								</li>
								<li>
									<a
										onClick={menuToggle}
										href='#faq-section'
										className='nav__link'
									>
										{t('navFourLink')}
									</a>
								</li>
								<li>
									<select
										onChange={handleClick}
										value={selectVal}
										className='mobile__lang__two'
										name='language'
										id='language'
									>
										<option value='uz'>Узбекча</option>
										<option value='ru'>Русский</option>
									</select>
								</li>
								<a
									onClick={menuToggle}
									href='#contact'
									className='nav__link contact__btn btn'
								>
									{t('contactBtn')}
								</a>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
