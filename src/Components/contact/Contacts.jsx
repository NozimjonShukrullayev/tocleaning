import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import contactImg from './contact-img.png'

function Contact() {
	const { t } = useTranslation()

	const [myName, setMyName] = useState('')
	const [myPhone, setMyPhone] = useState('')
	const [modal, setModal] = useState(false)

	const modalToggle = async e => {
		e.preventDefault()
		setMyName('')
		setMyPhone('+998')
		setModal(true)

		const apiUrl = import.meta.env.VITE_BOT_TOKEN
		const chatId = import.meta.env.VITE_CHAT_ID
		const message = `Ism: ${myName}, Telefon: ${myPhone}`

		try {
			const response = await fetch(apiUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					chat_id: chatId,
					text: message,
				}),
			})

			if (!response.ok) {
				throw new Error('Telegramga xabar yuborishda xatolik yuz berdi.')
			}

			const result = await response.json()
			console.log('Telegramga yuborilgan xabar:', result)
		} catch (error) {
			console.error('Xatolik:', error.message)
		}
	}

	useEffect(() => {
		let modalTimeOut = setTimeout(() => setModal(false), 5000)
		return () => clearTimeout(modalTimeOut)
	}, [modal === true])

	const removeModal = () => {
		setModal(false)
	}

	return (
		<section id='contact'>
			<div className='container'>
				<form
					id='contact-form'
					action=''
					className='contact__form'
					onSubmit={modalToggle}
				>
					<img
						data-aos='fade-right'
						data-aos-duration='8800'
						src={contactImg}
					/>
					<div
						data-aos='fade-right'
						data-aos-duration='22800'
						className='contact__box'
					>
						<div>
							<h4>{t('contactTitle')}</h4>
							<input
								onChange={e => setMyName(e.target.value)}
								value={myName}
								name='name'
								id='name'
								placeholder={t('contactInputPlaceholder')}
								required
								type='text'
								autoComplete='off'
							/>
							<input
								onChange={e => setMyPhone(e.target.value)}
								defaultValue={'+998'}
								value={myPhone}
								name='phone'
								id='phone'
								placeholder='+998 (_) (__) (_) (_)'
								required
								type='number'
								autoComplete='off'
							/>
							<button type='submit'>{t('contactSubmit')}</button>
						</div>
					</div>
				</form>
				<section className={`modal__section ${modal && 'active'}`}>
					<div className='modal__bg'></div>
					<div className='modal'>
						<div className='modal__content'>
							<i className='bx bx-check'></i>
							<h3>{t('modalTitle')}</h3>
							<i onClick={removeModal} className='bx bx-x'></i>
						</div>
					</div>
				</section>
			</div>
		</section>
	)
}

export default Contact
