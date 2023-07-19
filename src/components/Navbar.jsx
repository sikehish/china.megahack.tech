import React, { useEffect, useState } from 'react';
import Styles from './Navbar.module.css';
import { useTranslation, Trans } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const navigate = useNavigate();

  const handleDropdown = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  const lng = navigator.language;

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const navigateToHome = () => {
    navigate('/')
    console.log('Navigating to Home');
  };

  const navigateToAboutUs = () => {
    navigate('/AboutUs')
    console.log('Navigating to About Us');
  };

  const navigateToEvents = () => {
    navigate('/Events')
    console.log('Navigating to Events');
  };

  return (
    <>
      <div className={Styles.navbar}>
        <div className={Styles.logo}>
          <img src="/icon3.svg" alt="alt" />
          <div className={Styles.logoText}>
            <div>MEGA</div>
            <div>CHINA</div>
          </div>
        </div>

        <div className={Styles.tabs}>
          <div className={Styles.tab} onClick={navigateToHome}>
            {t('heroSection.tab1')}
          </div>
          <div className={Styles.tab} onClick={navigateToAboutUs}>
            {t('heroSection.tab2')}
          </div>
          <div className={Styles.tab} onClick={navigateToEvents}>
            {t('heroSection.tab3')}
          </div>
          <div className={Styles.tab} onClick={scrollToBottom}>
            {t('heroSection.tab4')}
          </div>
        </div>

        {/* Mobile version dropdown */}
        <div className={Styles.mobileDropdown}>
          <div className={Styles.menuIcon} onClick={handleDropdown}>
            &#9776;
          </div>
          <div className={`${Styles.dropdownContent} ${isMenuOpen ? Styles.show : ''}`}>
            <div className={Styles.tab} onClick={navigateToHome}>
              {t('heroSection.tab1')}
            </div>
            <div className={Styles.tab} onClick={navigateToAboutUs}>
              {t('heroSection.tab2')}
            </div>
            <div className={Styles.tab} onClick={navigateToEvents}>
              {t('heroSection.tab3')}
            </div>
            <div className={Styles.tab} onClick={scrollToBottom}>
              {t('heroSection.tab4')}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
