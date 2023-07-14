import Styles from './Homepage.module.css'

export default function EventsPage()  {
    return (
        <>
        <div className={Styles.eventHead}>
            <div className={Styles.eventTitle}>Events</div>
            <div className={Styles.activity}>Wonderful activity</div>
        </div>

        <div className={Styles.event}>  
        <div className= {Styles.eventDisplay}>
            <div className={Styles.eventPoster}>
                <img src="/events-image1.png" alt="event Image" />
            </div>
            <div className={Styles.eventContent}>
                <div className={Styles.hot2}>Hot Registration</div>
                    <div className= "eventTitle">
                        <div className={Styles.megaHeading2}>mega</div>
                        <div className={Styles.megaHeading2}>ideahack</div>
                    </div>
                    
                    <div className={Styles.date}>2023.7.22 - 24</div>
                    <div className={Styles.date}>Shangai China</div>
                    <div className={Styles.div3Buttons}>
                        <div className={Styles.div3signUp}>Sign up now</div>
                        <div className={Styles.div3LearnMore}>Learn more</div>
                    </div>
            </div>
        </div>
        
        <div className={Styles.eventCards}>
            <div className={Styles.eventCard}>
                <div className={Styles.eventImage}>
                    <img src="/image-2@2x.png" alt="img" />
                </div>
                <div className={Styles.eventBar}>
                    <div className={Styles.eleft}>Studio</div>
                    <div className={Styles.eright}>AI/ML</div>
                </div>
                <div className={Styles.cardContent2}>
                    <div className={Styles.cardHead2}>Use AI to tell digital stories</div>
                    <div className={Styles.cardText2}>MEGA teamed up with Columbia doctoral students and professors from Love and the Future to educate young people about the importance of digital storytelling through this transformative course on artificial intelligence and its impact on the climate.</div>
                </div>
                <div className={Styles.div3LearnMore2}>Learn more</div>
            </div>
            <div className={Styles.eventCard}>
                <div className={Styles.eventImage}>
                    <img src="/image-3@2x.png" alt="img" />
                </div>
                <div className={Styles.eventBar2}>
                    <div className={Styles.eleft}>Hackathon</div>
                    <div className={Styles.eright}>Competitiveness</div>
                </div>
                <div className={Styles.cardContent2}>
                    <div className={Styles.cardHead2}>MEGA HACKATHON 2023</div>
                    <div className={Styles.cardText2}>Like last year, the MEGA Hackathon hosted another hackathon event in 2023 that focused on real-world issues.</div>
                </div>
                <div className={Styles.div3LearnMore2}>Learn more</div>
            </div>
        </div>
        <div className={Styles.eventMore}>
            <div className={Styles.more}>more</div>
        </div>
        </div>
        </>
        
        
         
        
    )
}

