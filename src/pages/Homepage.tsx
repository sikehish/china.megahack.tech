import { FunctionComponent, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import RegisterPopUp from "../components/RegisterPopUp";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Homepage.module.css";
const Homepage: FunctionComponent = () => {
  const [isRegisterPopUpOpen, setRegisterPopUpOpen] = useState(false);
  const navigate = useNavigate();

  const onRegisterClick = useCallback(() => {
    navigate("/aboutus");
  }, [navigate]);

  const onText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onText4Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onText5Click = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  const onText6Click = useCallback(() => {
    navigate("/aboutus");
  }, [navigate]);

  const onLearnMoreContainerClick = useCallback(() => {
    navigate("/aboutus");
  }, [navigate]);

  const onText13Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openRegisterPopUp = useCallback(() => {
    setRegisterPopUpOpen(true);
  }, []);

  const closeRegisterPopUp = useCallback(() => {
    setRegisterPopUpOpen(false);
  }, []);

  const onText16Click = useCallback(() => {
    window.open("https://megahack.tech/digital-storytelling-class-2023/");
  }, []);

  const onText18Click = useCallback(() => {
    window.open("https://hack2023.megahack.tech");
  }, []);

  const onLearnMoreContainer1Click = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  return (
    <>
      <div className={styles.homepage}>
        <div className={styles.homepageChild} />
        <img className={styles.bg3Icon} alt="" src="/bg33.svg" />
        <div className={styles.div}>
          <div className={styles.div1} />
          <div className={styles.poster}>
            <img className={styles.vectorIcon} alt="" src="/vector22.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector23.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector24.svg" />
            <img className={styles.vectorIcon3} alt="" src="/vector25.svg" />
            <img className={styles.vectorIcon4} alt="" src="/vector26.svg" />
            <img className={styles.vectorIcon5} alt="" src="/vector27.svg" />
            <img className={styles.vectorIcon6} alt="" src="/vector28.svg" />
            <img className={styles.groupIcon} alt="" src="/group3.svg" />
            <img className={styles.vectorIcon7} alt="" src="/vector29.svg" />
            <img className={styles.groupIcon1} alt="" src="/group4.svg" />
            <img className={styles.vectorIcon8} alt="" src="/vector30.svg" />
            <img className={styles.groupIcon2} alt="" src="/group5.svg" />
            <div className={styles.shanghai}>Shanghai</div>
          </div>
          <div className={styles.div2}>
            <div className={styles.div3}>火热报名中！</div>
            <div className={styles.registerParent}>
              <Button
                className={styles.register}
                variant="primary"
                onClick={onRegisterClick}
              >
                Button
              </Button>
              <div className={styles.div4} onClick={onText1Click}>
                了解更多
              </div>
            </div>
            <div className={styles.megaIdeahack202307Container}>
              <p className={styles.mega}>{`MEGA `}</p>
              <p className={styles.mega}>IDEAHACK</p>
              <p className={styles.mega}>202307</p>
            </div>
            <div className={styles.div5}>
              你将与其他参赛者组队，在知名高校助教和行业大牛的指导下，从联合国可持续发展目标出发，在三天内共同设计解决方案，创作相关作品和研发落地项目。
            </div>
          </div>
          <div className={styles.navigator}>
            <div className={styles.icon}>
              <img className={styles.icon1} alt="" src="/icon3.svg" />
              <div className={styles.megaChina}>
                <p className={styles.mega}>MEGA</p>
                <p className={styles.mega}>China</p>
              </div>
            </div>
            <div className={styles.div6}>
              <div className={styles.div7}>首页</div>
              <div className={styles.div8} onClick={onText4Click}>
                联系我们
              </div>
              <div className={styles.div9} onClick={onText5Click}>
                活动
              </div>
              <div className={styles.div10} onClick={onText6Click}>
                关于我们
              </div>
              <div className={styles.child} />
              <div className={styles.item} />
              <div className={styles.inner} />
              <div className={styles.lineDiv} />
            </div>
          </div>
        </div>
        <div className={styles.intro}>
          <div className={styles.bg} />
          <div className={styles.introChild} />
          <div className={styles.introduction}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.groupItem} />
            </div>
            <img
              className={styles.introductionChild}
              alt=""
              src="/group-11.svg"
            />
            <div className={styles.div11}>我们做什么？</div>
            <div className={styles.div12}>我们怎么做？</div>
            <div className={styles.parent}>
              <div className={styles.div13}>
                <div className={styles.rectangleDiv} />
                <img
                  className={styles.vectorIcon9}
                  alt=""
                  src="/vector31.svg"
                />
                <div className={styles.div14}>我们是谁？</div>
                <div className={styles.mega2}>
                  2019年，一群来自全球顶尖院校的创新者在美国普林斯顿共同创立了MEGA。涉及的领域包括但不限于技术、工程、设计、艺术、商业、社会和自然科学。
                </div>
              </div>
              <div className={styles.mega30}>
                MEGA已在全球多地设立执行点，并得到来自30多个企业、科技公司和非政府组织的支持。成员们在环境、教育、医疗等领域进行创新与合作，提供可行的解决方案，并获得了资金支持和实习机会。
              </div>
              <div className={styles.megam}>
                MEGA旨在鼓励及协助优秀的青年发掘潜能、开拓多元认知，在MEGA的支持下通过自身能力与开发以解决现实问题为导向、具有价值和影响力的项目产品。
              </div>
            </div>
          </div>
        </div>
        <div className={styles.learnMore} onClick={onLearnMoreContainerClick}>
          <div className={styles.learnMoreChild} />
          <div className={styles.div15}>
            <p className={styles.mega}>了解更多</p>
          </div>
        </div>
        <div className={styles.events}>
          <div className={styles.div16}>精彩活动</div>
          <div className={styles.events1}>EVENTS</div>
          <div className={styles.poster2}>
            <div className={styles.poster2Child} />
            <div className={styles.group}>
              <div className={styles.div17}>火热报名中</div>
              <div className={styles.div18} onClick={onText13Click}>
                了解详情
              </div>
              <div
                className={styles.rectangleGroup}
                onClick={openRegisterPopUp}
              >
                <div className={styles.groupInner} />
                <div className={styles.div19}>立即报名</div>
              </div>
              <div className={styles.megaIdeahack}>
                <p className={styles.mega}>MEGA IDEAHACK</p>
              </div>
              <div className={styles.div20}>
                <p className={styles.mega}>2023.7.22-24</p>
                <p className={styles.mega}>中国上海</p>
              </div>
            </div>
            <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
          </div>
          <div className={styles.events2}>
            <div className={styles.event1}>
              <div className={styles.div21} onClick={onText16Click}>
                了解更多
              </div>
              <img
                className={styles.image2Icon}
                alt=""
                src="/image-25@2x.png"
              />
              <div className={styles.event1Child} />
              <div className={styles.div22}>工作室</div>
              <div className={styles.aiMlContainer}>
                <p className={styles.mega}>AI / ML</p>
              </div>
              <div className={styles.mega3}>
                MEGA与哥伦比亚大学的博士生和“爱与未来”的教授合作，通过这门关于人工智能及其对气候影响的变革性课程，向年轻人宣传数字故事的重要性。
              </div>
              <div className={styles.ai}>使用AI讲述数字故事</div>
            </div>
            <div className={styles.event2}>
              <div className={styles.div21} onClick={onText18Click}>
                了解更多
              </div>
              <img
                className={styles.image3Icon}
                alt=""
                src="/image-31@2x.png"
              />
              <div className={styles.event2Child} />
              <div className={styles.div24}>骇客松</div>
              <div className={styles.div25}>
                <p className={styles.mega}>竞技性</p>
              </div>
              <div className={styles.megaHackathon2023}>
                与去年一样，MEGA
                Hackathon在2023年举办了另一场以现实问题为主题的黑客马拉松活动。
              </div>
              <div className={styles.megaHackathon20231}>
                MEGA HACKATHON 2023
              </div>
            </div>
          </div>
          <div
            className={styles.learnMore1}
            onClick={onLearnMoreContainer1Click}
          >
            <div className={styles.learnMoreItem} />
            <div className={styles.div26}>
              <p className={styles.mega}>更</p>
              <p className={styles.mega}>多</p>
            </div>
          </div>
        </div>
        <img className={styles.sponsorsIcon} alt="" src="/sponsors@2x.png" />
        <div className={styles.contactParent} data-scroll-to="groupContainer">
          <div className={styles.contact}>
            <div className={styles.contact1}>
              <div className={styles.contactChild} />
              <div className={styles.rectangleContainer}>
                <div className={styles.groupChild1} />
                <div className={styles.image10Parent}>
                  <img
                    className={styles.image10Icon}
                    alt=""
                    src="/image-10@2x.png"
                  />
                  <img
                    className={styles.image12Icon}
                    alt=""
                    src="/image-12@2x.png"
                  />
                  <img
                    className={styles.image11Icon}
                    alt=""
                    src="/image-11@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.megaLeagueAll}>
              © 2023 MEGA League. All Rights Reserved
            </div>
            <div className={styles.megachinaofficalgmailcom}>
              megachinaoffical@gmail.com
            </div>
          </div>
          <div className={styles.contactGroup}>
            <div className={styles.contact}>
              <div className={styles.contact3}>
                <div className={styles.contactChild} />
                <div className={styles.groupDiv}>
                  <div className={styles.groupChild1} />
                  <div className={styles.image10Parent}>
                    <img
                      className={styles.image10Icon}
                      alt=""
                      src="/image-10@2x.png"
                    />
                    <img
                      className={styles.image12Icon}
                      alt=""
                      src="/image-12@2x.png"
                    />
                    <img
                      className={styles.image11Icon}
                      alt=""
                      src="/image-11@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.megaLeagueAll}>
                © 2023 MEGA League. All Rights Reserved
              </div>
              <div className={styles.megachinaofficalgmailcom}>
                megachinaoffical@gmail.com
              </div>
            </div>
            <div className={styles.contact}>
              <div className={styles.megaLeagueAll}>
                © 2023 MEGA League. All Rights Reserved
              </div>
              <div className={styles.megachinaofficalgmailcom}>
                megachinaoffical@gmail.com
              </div>
            </div>
            <div className={styles.div27}>联系我们</div>
          </div>
        </div>
      </div>
      {isRegisterPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRegisterPopUp}
        >
          <RegisterPopUp onClose={closeRegisterPopUp} />
        </PortalPopup>
      )}
    </>
  );
};

export default Homepage;
