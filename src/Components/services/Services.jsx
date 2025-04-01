import React from 'react'
import { useTranslation } from 'react-i18next'
import {
	BloxiImg,
	CleanOfficial,
	CleanServicesOne,
	CleanServicesThree,
	CleanServicesTwo,
	CleanSkarpion,
	CleanTarakan,
	ClopiImg,
	GrizuniImg,
	ServicesAddBackdrop,
} from '../../assets'
import ServicesCards from '../servicesCard/ServicesCard'
import ServicesTypeCards from '../servicesType/ServicesType'

function Services() {
	const { t } = useTranslation()
	return (
		<section id='services'>
			<div className='container'>
				<div className='services__content'>
					<h2>{t('navThreeLink')}</h2>
					<p>{t('servicesParagraph')}</p>
				</div>
				<ul className='services__list'>
					<ServicesCards
						key={1}
						dataAos='800'
						img={CleanServicesOne}
						title={t('servicesCardOneTitle')}
						text={t('servicesCardOneParagraph')}
					/>
					<ServicesCards
						key={2}
						dataAos='800'
						img={CleanServicesTwo}
						title={t('servicesCardTwoTitle')}
						text={t('servicesCardTwoParagraph')}
					/>
					<ServicesCards
						key={3}
						dataAos='800'
						img={CleanServicesThree}
						title={t('servicesCardThreeTitle')}
						text={t('servicesCardThreeParagraph')}
					/>
				</ul>
				<div id='services-type'>
					<h2>{t('servicesTypeTitle')}</h2>
					<ul className='services__type__list'>
						<ServicesTypeCards
							key={1}
							dataAos='800'
							img={ClopiImg}
							title={t('servicesTypeCardOneTitle')}
							text={t('servicesTypeCardOneParagraph')}
						/>
						<ServicesTypeCards
							key={2}
							dataAos='900'
							img={CleanTarakan}
							title={t('servicesTypeCardTwoTitle')}
							text={t('servicesTypeCardTwoParagraph')}
						/>
						<ServicesTypeCards
							key={3}
							dataAos='1000'
							img={CleanSkarpion}
							title={t('servicesTypeCardThreeTitle')}
							text={t('servicesTypeCardThreeParagraph')}
						/>
						<ServicesTypeCards
							key={4}
							dataAos='1100'
							img={GrizuniImg}
							title={t('servicesTypeCardFourTitle')}
							text={t('servicesTypeCardFourParagraph')}
						/>
						<ServicesTypeCards
							key={5}
							dataAos='1200'
							img={BloxiImg}
							title={t('servicesTypeCardFiveTitle')}
							text={t('servicesTypeCardFiveParagraph')}
						/>
					</ul>
				</div>
				<div id='services-licensia'>
					<img src={ServicesAddBackdrop} />
					<div
						data-aos='fade-right'
						data-aos-duration='3600'
						data-aos-delay='3500'
						className='licensia__content'
					>
						<img src={CleanOfficial} />
						<h3>{t('licensiaTitle')}</h3>
						<a
							href='tel:+998902242299'
							id='licensia-btn'
							className='contact__btn btn'
						>
							{t('contactBtn')}
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services
