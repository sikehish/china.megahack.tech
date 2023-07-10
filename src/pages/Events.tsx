import { FunctionComponent, useState, useCallback } from "react";
import RegisterPopUp from "../components/RegisterPopUp";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Events.module.css";
const Events: FunctionComponent = () => {
  const [isRegisterPopUpOpen, setRegisterPopUpOpen] = useState(false);
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onText3Click = useCallback(() => {
    navigate("/aboutus");
  }, [navigate]);

  const openRegisterPopUp = useCallback(() => {
    setRegisterPopUpOpen(true);
  }, []);

  const closeRegisterPopUp = useCallback(() => {
    setRegisterPopUpOpen(false);
  }, []);

  const onText7Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onText9Click = useCallback(() => {
    window.open("https://megahack.tech/digital-storytelling-class-2023/");
  }, []);

  const onText11Click = useCallback(() => {
    window.open("https://hack2023.megahack.tech");
  }, []);

  const onText14Click = useCallback(() => {
    window.open("https://worldwidedebate.megahack.tech");
  }, []);

  const onText17Click = useCallback(() => {
    window.open("https://live.megahack.tech");
  }, []);

  return (
    <>
      <div className={styles.events}>
        <div className={styles.eventsChild} />
        <img className={styles.bg3Icon} alt="" src="/bg31.svg" />
        <div className={styles.div} />
        <div className={styles.navigator}>
          <div className={styles.icon}>
            <img className={styles.icon1} alt="" src="/icon1.svg" />
            <div className={styles.megaChina}>
              <p className={styles.mega}>MEGA</p>
              <p className={styles.mega}>China</p>
            </div>
          </div>
          <div className={styles.div1}>
            <div className={styles.div2} onClick={onTextClick}>
              首页
            </div>
            <div className={styles.div3} onClick={onText1Click}>
              联系我们
            </div>
            <div className={styles.div4}>活动</div>
            <div className={styles.div5} onClick={onText3Click}>
              关于我们
            </div>
            <div className={styles.child} />
            <div className={styles.item} />
            <div className={styles.inner} />
            <div className={styles.lineDiv} />
          </div>
        </div>
        <div className={styles.back} />
        <div className={styles.div6}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
          <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
          <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
          <img className={styles.vectorIcon5} alt="" src="/vector5.svg" />
          <img className={styles.vectorIcon6} alt="" src="/vector6.svg" />
          <img className={styles.groupIcon} alt="" src="/group.svg" />
          <img className={styles.vectorIcon7} alt="" src="/vector7.svg" />
          <img className={styles.groupIcon1} alt="" src="/group1.svg" />
          <img className={styles.vectorIcon8} alt="" src="/vector8.svg" />
          <img className={styles.groupIcon2} alt="" src="/group2.svg" />
          <div className={styles.shanghai}>Shanghai</div>
        </div>
        <div className={styles.megaIdeahack202307Parent}>
          <div className={styles.megaIdeahack202307Container}>
            <p className={styles.mega}>{`MEGA `}</p>
            <p className={styles.mega}>IDEAHACK</p>
            <p className={styles.mega}>202307</p>
          </div>
          <div className={styles.div7}>
            你将与其他参赛者组队，在知名高校助教和行业大牛的指导下，从联合国可持续发展目标出发，在三天内共同设计解决方案，创作相关作品和研发落地项目。
          </div>
        </div>
        <div className={styles.heroSection}>
          <div className={styles.upcomingEvent}>UPCOMING EVENT</div>
          <div className={styles.div8}>即将开始</div>
          <div className={styles.rectangleParent} onClick={openRegisterPopUp}>
            <div className={styles.groupChild} />
            <div className={styles.div9}>立即报名</div>
          </div>
          <div className={styles.div10} onClick={onText7Click}>
            了解更多
          </div>
        </div>
        <div className={styles.parent}>
          <div className={styles.div11}>
            <p className={styles.mega}>往期精彩</p>
          </div>
          <div className={styles.events1}>EVENTS</div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.group}>
            <div className={styles.div12} onClick={onText9Click}>
              了解更多
            </div>
            <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
            <div className={styles.groupItem} />
            <div className={styles.div13}>工作室</div>
            <div className={styles.aiMlContainer}>
              <p className={styles.mega}>AI / ML</p>
            </div>
            <div className={styles.mega2}>
              MEGA与哥伦比亚大学的博士生和“爱与未来”的教授合作，通过这门关于人工智能及其对气候影响的变革性课程，向年轻人宣传数字故事的重要性。
            </div>
            <div className={styles.ai}>使用AI讲述数字故事</div>
          </div>
          <div className={styles.container}>
            <div className={styles.div14} onClick={onText11Click}>
              了解更多
            </div>
            <div className={styles.groupInner} />
            <div className={styles.div15}>骇客松</div>
            <div className={styles.div16}>竞技性</div>
            <div className={styles.megaHackathon2023}>
              与去年一样，MEGA
              Hackathon在2023年举办了另一场以现实问题为主题的黑客马拉松活动。
            </div>
            <div className={styles.megaHackathon20231}>MEGA HACKATHON 2023</div>
            <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.div17} onClick={onText14Click}>
              了解更多
            </div>
            <div className={styles.rectangleDiv} />
            <div className={styles.div18}>辩论</div>
            <div className={styles.div19}>竞技性</div>
            <div className={styles.mega3}>
              MEGA黑客马拉松正在举办第一届年度辩论。这场辩论将聚焦于像黑客马拉松这样的联合国可持续发展目标。
            </div>
            <div className={styles.mega2023}>MEGA 国际辩论赛 2023</div>
            <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
          </div>
          <div className={styles.parent1}>
            <div className={styles.div20} onClick={onText17Click}>
              了解更多
            </div>
            <div className={styles.groupChild1} />
            <div className={styles.div21}>骇客松</div>
            <div className={styles.div22}>竞技性</div>
            <div className={styles.div23}>
              我们的第一届年度超级黑客马拉松。太棒了!获奖者获得实习机会和5万多美元的奖金。
            </div>
            <div className={styles.megaHackathon2022}>MEGA HACKATHON 2022</div>
            <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
          </div>
        </div>
        <div className={styles.contactParent} data-scroll-to="groupContainer">
          <div className={styles.contact}>
            <div className={styles.contact1}>
              <div className={styles.contactChild} />
              <div className={styles.rectangleGroup}>
                <div className={styles.groupChild2} />
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
                <div className={styles.rectangleContainer}>
                  <div className={styles.groupChild2} />
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
            <div className={styles.div24}>联系我们</div>
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

export default Events;
