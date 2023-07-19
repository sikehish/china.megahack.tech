import React, {useEffect, useState} from 'react'
import Styles from './ContactUs.module.css'
import { useTranslation, Trans } from 'react-i18next';

function ContactUs() {
    const { t, i18n } = useTranslation();

      useEffect(() => {
          const lng = navigator.language;
          i18n.changeLanguage(lng)
      }, [])

    const lng = navigator.language

    return (
        <>
        <div className={Styles.contactUs}>
            <div className={Styles.contactContent}>
            <div align="center">
                <div className={Styles.contactHead}>{t('contact.contacthead')}</div>
            </div>
            
            <div className={Styles.contactQR}>
                <img src="/Group 21.png" alt="qr code" />
            </div>
            <div className={Styles.copyright}>© 2023 MEGA League. All Rights Reserved</div>
            <div className={Styles.email}>megachinaoffical@gmail.com</div>
            </div>
        </div>
        </>
    
  )
}

export default ContactUs