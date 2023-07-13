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
            <div className={Styles.cards}>
                <div className={Styles.card}>
                  <div className={Styles.cardImage}>
                    <img src="/vector4.svg" alt="shape" />
                  </div>
                  <div className={Styles.cardContent}>
                    <div className={Styles.cardHead}>Who we are?</div>
                    <div className={Styles.cardText}>In 2019, MEGA was co-founded by a group of innovators from top global institutions in Princeton, USA. The fields covered include, but are not limited to, technology, engineering, design, art, business, social and natural sciences.</div>
                  </div>
                </div>
                <div className={Styles.card}>
                  <div className={Styles.cardImage}>
                    <img src="/Vector.png" alt="shape" />
                  </div>
                  <div className={Styles.cardContent}>
                    <div className={Styles.cardHead}>What do we do?</div>
                    <div className={Styles.cardText}>MEGA aims to encourage and assist outstanding young people to explore their potential, explore diverse cognition, and with the support of MEGA, develop project products with value and influence oriented towards solving practical problems through their own abilities and development.</div>
                  </div>
                </div>
                <div className={Styles.card}>
                  <div className={Styles.cardImage}>
                    <img src="/union.svg" alt="shape" />
                  </div>
                  <div className={Styles.cardContent}>
                    <div className={Styles.cardHead}>What do we do?</div>
                    <div className={Styles.cardText}>MEGA has set up implementation sites around the world and is supported by more than 30 businesses, technology companies and ngos. Members innovate and collaborate in areas such as the environment, education and healthcare to provide viable solutions, and have received financial support and internship opportunities.</div>
                  </div>
                </div>
            </div>
            <div className={Styles.learnMore}>Learn more</div>
        </div>

        {/* Events-Section */}

        {/* Sponsors-Section */}

        {/* ContactUs-Section */}
        

    </>
  )
}

export default Homepage