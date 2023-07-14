import Styles from "./Homepage.module.css";

export default function EventsPage() {
  return (
    <div className={Styles.event}>
      <div className={Styles.eventDisplay}>
        <div>
          <img src="/events-image1.png" alt="event Image" />
        </div>
        <div className={Styles.infoRegistration}>
          <div className={Styles.hot2}>Hot Registration!</div>
          
            <div className={Styles.megaHeading2}>mega</div>
            <div className={Styles.megaHeading2}>ideahack</div>
          
          
            <div className={Styles.eventDate}>2023.7 22-24</div>
            <div className={Styles.eventDate}>Shangai China</div>
            <div className={Styles.div1Buttons}>
                  <div className={Styles.div1signUp}>Sign up now</div>
                  <div className={Styles.div1LearnMore}>Learn more</div>
                </div>
        </div>
        
      </div>
      <div className={Styles.eventDisplay2}>
      <div>
          <img src="/events-image1.png" alt="event Image" />
        </div>
      </div>
    </div>
  );
}
