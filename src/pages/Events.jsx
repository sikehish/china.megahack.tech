import Navbar from '../components/Navbar';
import ContactUs from '../components/ContactUs';
import PastEvents from '../components/PastEvents';
import Styles from "./Homepage.module.css";
import { useTranslation } from "react-i18next";

function Events() {
  const { t } = useTranslation();

  const handleSignUp = () => {
    window.open("https://mega-hackathon-2023-summer.devpost.com/", "_blank");
  };
  
  return (
    <>
    <Navbar/>
    <PastEvents />
      <div className={Styles.div1Content}>
        <div className={Styles.hot}>{t("heroSection.hot")}</div>
        <div className={Styles.megaHeading}>mega</div>
        <div className={Styles.megaHeading}>ideahack</div>
        <div className={Styles.megaHeading}>202307</div>
        <div className={Styles.div1Text}>{t("heroSection.text")}</div>
        <div className={Styles.div1Buttons}>
          <div className={Styles.div1signUp} onClick={handleSignUp}>
            {t("heroSection.signup")}
          </div>

          <div className={Styles.div1LearnMore}>
            {t("heroSection.learnmore")}
          </div>
        </div>
      </div>

      <div className={Styles.posterDiv}>
        <div className={Styles.poster}>
          <img src="/poster.png" alt="poster" />
        </div>
      </div>
      
      <ContactUs />
    </>
  );
}

export default Events;
