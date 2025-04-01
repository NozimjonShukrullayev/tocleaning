import React from 'react'

const AboutCards = ({ img, title, text, dataAos }) => {
	return (
		<li
			data-aos='fade-right'
			data-aos-duration={dataAos}
			className='card__item'
		>
			<div>{img}</div>
			<h3>{title}</h3>
			<p className='paragraph'>{text}</p>
		</li>
	)
}

export default AboutCards
