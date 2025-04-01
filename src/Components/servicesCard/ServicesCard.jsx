import React from 'react'

function ServicesCard({ img, title, text, dataAos }) {
	return (
		<li
			data-aos='fade-right'
			data-aos-duration={dataAos}
			className='services__item'
		>
			<img src={img} />
			<div className='services__item__content'>
				<h3>{title}</h3>
				<p className='paragraph'>{text}</p>
			</div>
		</li>
	)
}

export default ServicesCard
