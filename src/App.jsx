import Aos from 'aos'
import 'aos/dist/aos.css'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'
import { Fragment, useEffect, useState } from 'react'
import { initReactI18next } from 'react-i18next'
import loader from './assets/loader.webp'
import About from './Components/about/About'
import Contact from './Components/contact/Contacts'
import Faq from './Components/fak/Fak'
import Footer from './Components/footer/Footer'
import Header from './Components/header/Header'
import Hero from './Components/hero/Hero'
import Services from './Components/services/Services'

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(HttpApi)
	.init({
		supportedLngs: ['uz', 'ru'],
		fallbackLng: 'uz',
		detection: {
			order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
			caches: ['cookie'],
		},
		backend: {
			loadPath: '/assets/locales/{{lng}}/translation.json',
		},
	})

function App() {
	useEffect(() => {
		Aos.init({
			duration: 1200,
		})
	})

	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 2000)

		return () => clearTimeout(timer)
	}, [])

	return (
		<>
			{isLoading ? (
				<div className='loader'>
					<img src={loader} width={'100px'} alt='' />
				</div>
			) : (
				<Fragment>
					<Header />
					<Hero />
					<About />
					<Services />
					<Faq />
					<Contact />
					<Footer />
				</Fragment>
			)}
		</>
	)
}

export default App
