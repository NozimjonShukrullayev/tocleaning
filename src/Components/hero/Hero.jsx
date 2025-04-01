import React from 'react'
import { useTranslation } from 'react-i18next'
import { HeroImg1, HeroImgMini } from '../../assets'

function Hero() {
	const { t } = useTranslation()
	return (
		<section id='hero-section'>
			<div className='container'>
				<div className='hero__grid'>
					<div
						data-aos='fade-up'
						data-aos-duration='1000'
						data-aos-delay='200'
						className='hero__content'
					>
						<h1>{t('heroTitle')}</h1>
						<p className='paragraph'>{t('heroParagraph')}</p>
						<img src={HeroImgMini} alt='mini main image'></img>
						<a href='tel:+998902242299' className='contact__btn btn'>
							{t('contactBtn')}
						</a>
					</div>
					<div className='hero__img'>
						<img src={HeroImg1} alt='hero-img' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
