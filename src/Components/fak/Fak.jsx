import React, { useState } from "react";
import { useTranslation } from "react-i18next";


function Faq() {
  const { t } = useTranslation();
  const [myAccardion, setMyAccardion] = useState({
    first: false,
    second: false,
    third: false,
  });
  
  const onClickAccardion = (element) => {
    const targetAccardionAtt = element.currentTarget.parentNode.getAttribute('data-id');
    const targetAccardion = element.currentTarget.parentNode;
    setMyAccardion({
      [targetAccardionAtt]: true
    })
    if(targetAccardion.classList.contains('active')) 
      setMyAccardion({[targetAccardionAtt]: false})
  };

  return (
    <section id="faq-section">
      <div className="container">
        <div className="faq__grid">
          <h2>{t('navFourLink')}</h2>
          <ul className="faq__accordion__list">
            <li className={`faq__accordion__item ${myAccardion.first && 'active'}`} data-id='first'>
              <div className="faq__item__header" onClick={onClickAccardion}>
                <h3>{t('faqOneTitle')}</h3>
                <i className='bx bxs-chevron-down'></i>
              </div>
              <div className="faq__item__content">
                <p>{t('faqOneParagraph')}</p>
              </div>
            </li>
            <li className={`faq__accordion__item ${myAccardion.second && 'active'}`} data-id='second'>
              <div className="faq__item__header" onClick={onClickAccardion}>
                <h3>{t('faqTwoTitle')}</h3>
                <i className='bx bxs-chevron-down'></i>
              </div>
              <div className="faq__item__content">
                <p>{t('faqTwoParagraph')}</p>
              </div>
            </li>
            <li className={`faq__accordion__item ${myAccardion.third && 'active'}`} data-id='third'>
              <div className="faq__item__header" onClick={onClickAccardion}>
                <h3>{t('faqThreeTitle')}</h3>
                <i className='bx bxs-chevron-down'></i>
              </div>
              <div className="faq__item__content">
                <p>{t('faqThreeParagraph')}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Faq;