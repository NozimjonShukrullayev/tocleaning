import React from 'react'
import { useTranslation } from 'react-i18next'

function ServicesTypeCards(props) {
	const { t } = useTranslation()
	return (
		<li
			data-aos='fade-right'
			data-aos-duration={props.dataAos}
			data-aos-delay={props.dataAos}
			className='type__item'
		>
			<img src={props.img} />
			<div className='type__card__content'>
				<h3>{props.title}</h3>
				<p>{props.text}</p>
				<a href='tel:+998902242299' className='contact__btn btn'>
					{t('contactBtn')}
				</a>
			</div>
		</li>
	)
}

export default ServicesTypeCards
