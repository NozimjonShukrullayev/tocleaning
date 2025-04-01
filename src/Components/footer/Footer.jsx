import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo_trial.png";

function Footer() {
  const { t } = useTranslation();
  return (
    <section id="footer">
      <div className="container">
        <ul className="footer__list">
          <li>
            <a href="#hero-section" className="footer__link">
              <img src={logo} className="logo__img" />
            </a>
          </li>
          <li>
            <a href="https://maps.app.goo.gl/sJZX5YYqvHMHinkv8" className="footer__link">
              <i className='bx bxs-map'></i>
              <p>{t('footerLinkParagraph')}</p>
              <i className='bx bx-up-arrow-alt'></i>
            </a>
          </li>
          <li>
            <a href="tel:+998902242299" className="footer__link">
              <i className='bx bx-phone-call'></i>
              <p>+998 90 224 22 99</p>
              <i className='bx bx-up-arrow-alt'></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
