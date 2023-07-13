import React from 'react'
import Styles from './Homepage.module.css'

function Homepage() {
  return (
    <>

        {/* Hero-Section */}

        <div className={Styles.div1}>
            <div className={Styles.navbar}>
                  <div className={Styles.logo}>
                      <img src="/icon3.svg" alt="alt" />
                      <div className={Styles.logoText}>
                        <div>MEGA</div>
                        <div>CHINA</div>
                      </div>
                  </div>

                  <div className={Styles.tabs}>
                      <div className={Styles.tab}>Home page</div>
                      <div className={Styles.tab}>About us</div>
                      <div className={Styles.tab}>Events</div>
                      <div className={Styles.tab}>Contact us</div>
                  </div>
            </div>
            <div className={Styles.div1Content}>
                <div className={Styles.hot}>Hot Registration!</div>
                <div className={Styles.megaHeading}>mega</div>
                <div className={Styles.megaHeading}>ideahack</div>
                <div className={Styles.megaHeading}>202307</div>
                <div className={Styles.div1Text}>
                You will team up with other participants and, under the guidance of well-known university teaching assistants and industry leaders, jointly design solutions, create related works and develop landing projects in three days from the United Nations Sustainable Development Goals.
                </div>
                <div className={Styles.div1Buttons}>
                  <div className={Styles.div1signUp}>Sign up now</div>
                  <div className={Styles.div1LearnMore}>Learn more</div>
                </div>

            </div>


            <div className={Styles.posterDiv}>
            <div className={Styles.poster}>
                <img src="/poster.png" alt="poster" />
            </div>
            </div>
            
        </div>


        {/* WhoWeAre-Section */}

        <div className={Styles.intro}>
            <div className={Styles.tiltDiv}></div>
          
        </div>

        {/* Events-Section */}

        {/* Sponsors-Section */}

        {/* ContactUs-Section */}
        

    </>
  )
}

export default Homepage