import Styles from './Homepage.module.css'

export default function EventsPage()  {
    return (
        <div className={Styles.event}>  
        <div className= {Styles.eventDisplay}>
            <img src="/events-image1.png" alt="event Image" />
            <div className={Styles.eventRegistration}></div>
            <div className={Styles.hot2}>Hot Registration!</div>
                        <div className= "eventTitle">
                            <div className={Styles.megaHeading}>mega</div>
                            <div className={Styles.megaHeading}>ideahack</div>
                        </div>
                        <div className= "eventDate">
                            <div className={Styles.megaHeading}>2023.7 22 - 24</div>
                            <div className={Styles.megaHeading}>Shangai China</div>
        </div>
            
            </div>
        </div>
        
         
        
    )
}

