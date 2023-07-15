import { FunctionComponent, useState, useCallback } from "react";
import RegisterPopUp from "../components/RegisterPopUp";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./MegaIdeaHack.module.css";
const MegaIdeaHack: FunctionComponent = () => {
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

  return (
    <>
      <div className={styles.megaideahack}>
        <img className={styles.bg3Icon} alt="" src="/bg3.svg" />
        <div className={styles.div}>
          <div className={styles.div1} />
          <div className={styles.navigator}>
            <div className={styles.icon}>
              <img className={styles.icon1} alt="" src="/icon.svg" />
              <div className={styles.megaChina}>
                <p className={styles.mega}>MEGA</p>
                <p className={styles.mega}>China</p>
              </div>
            </div>
            <div className={styles.div2}>
              <div className={styles.div3} onClick={onTextClick}>
                首页
              </div>
              <div className={styles.div4} onClick={onText1Click}>
                联系我们
              </div>
              <div className={styles.div5}>活动</div>
              <div className={styles.div6} onClick={onText3Click}>
                关于我们
              </div>
              <div className={styles.child} />
              <div className={styles.item} />
              <div className={styles.inner} />
              <div className={styles.lineDiv} />
            </div>
          </div>
          <div className={styles.div7}>
            想要结识与自己志同道合但专业相异、兴趣广泛的朋友？
          </div>
          <div className={styles.gpt4agi}>
            强化学习，GPT4，大语言模型和AGI领域发展日新月异，你是否好奇如何在未来占领一席之地？
          </div>
          <div className={styles.div8}>
            想要将自己的追求和使命感转化为切实可行的行动？
          </div>
          <div className={styles.div9}>
            希望通过自己的知识和技能为社会带来积极的变革？
          </div>
        </div>
        <img className={styles.linesIcon} alt="" src="/lines.svg" />
        <div className={styles.poster}>
          <div className={styles.posterChild} />
          <img className={styles.icon2} alt="" src="/--1.svg" />
          <div className={styles.megaIdeahack}>MEGA IDEAHACK</div>
          <div className={styles.div10}>
            <p className={styles.mega}>2023.7.22-25</p>
            <p className={styles.mega}>中国上海</p>
          </div>
        </div>
        <div className={styles.un}>
          <div className={styles.megaChina17}>
            MEGA
            China此次的新项目将围绕联合国的17个可持续发展目标（SDG)，对其中的3-4个进行深度剖析，寻找与之相关的现实问题。
          </div>
          <div className={styles.div11}>
            *具体问题和方向将会在后续推文放出，敬请期待。
          </div>
          <img className={styles.image20Icon} alt="" src="/image-20@2x.png" />
        </div>
        <div className={styles.intro}>
          <div className={styles.introChild} />
          <div className={styles.div12}>
            <p className={styles.mega}>
              你将与其他参赛者组队，在知名高校助教和行业大牛的指导下，从联合国可持续发展目标出发，在三天内共同设计解决方案，创作相关作品和研发落地项目。它的形式可以是一场公益活动，一个科研提案，一个网页程序，抑或是一项艺术作品。
            </p>
            <p className={styles.mega}>&nbsp;</p>
            <p className={styles.mega}>&nbsp;</p>
            <p className={styles.mega}>
              在活动的末尾，我们将会进行成果分享展示，你们的项目会接受专家的评审并进行评奖。优胜组产出的提案将有机会直接落地，该组成员也将获得丰厚的奖励，包括但不限于资金与技术支持、相关实习机会。
            </p>
          </div>
          <img className={styles.image21Icon} alt="" src="/image-21@2x.png" />
        </div>
        <div className={styles.coffeeChat}>
          <div className={styles.coffeeChatChild} />
          <div className={styles.coffeeChatParent}>
            <div className={styles.coffeeChat1}>
              此外，我们邀请到了来自北美和亚洲的学界和业界专家进行行业前沿资讯的分享，并阐述他们的行业洞见。你还有机会与来自哈佛，麻省理工，斯坦福等顶尖院校，在各行各业的学长学姐进行一对一的coffee
              chat，自由开展社交，提出困惑，讨论职业规划等。
            </div>
            <div className={styles.groupParent}>
              <img className={styles.groupChild} alt="" src="/group-41.svg" />
              <div className={styles.parent}>
                <div className={styles.div13}>首席经济学家</div>
                <div className={styles.div14}>证券</div>
                <div className={styles.mit}>MIT博士</div>
                <div className={styles.div15}>医学生物系主任</div>
                <div className={styles.div16}>政策研究者</div>
                <div className={styles.vc}>头部VC资本</div>
                <div className={styles.div17}>多个公益组织创始人</div>
                <div className={styles.google}>Google游戏</div>
                <div className={styles.esg}>ESG顾问</div>
                <div className={styles.div18}>融资百万连续创业者</div>
                <div className={styles.autophagy}>Autophagy副主编</div>
                <div className={styles.div19}>公共健康</div>
              </div>
            </div>
            <img className={styles.icon3} alt="" src="/--11.svg" />
          </div>
        </div>
        <div className={styles.ending}>
          <div className={styles.megamegaParent}>
            <div className={styles.megamega}>
              MEGA在此热情邀请您参加即将到来的MEGA暑期融合项目！在这里，我们关注可持续性发展，注重创新与理念交流；在这里，你将发挥出自己的潜能，开发具有价值和影响力产品；在这里，你将有机会与志同道合的朋友携手，把想法化为现实。我们非常期待你们的加入，让我们携手共进，创造未来！
            </div>
            <div className={styles.div20}>
              <p className={styles.mega}>
                <span className={styles.span}>活动时间：</span>
                <span></span>
              </p>
              <p className={styles.mega}>北京时间2023年7月22日至7月24日</p>
            </div>
            <div className={styles.engding}>ENGDING</div>
          </div>
          <div className={styles.div21} onClick={openRegisterPopUp}>
            <div className={styles.rectangleDiv} />
            <div className={styles.div22}>立即报名</div>
          </div>
        </div>
        <div className={styles.image22Parent}>
          <img className={styles.image22Icon} alt="" src="/image-22@2x.png" />
          <img className={styles.image23Icon} alt="" src="/image-23@2x.png" />
        </div>
        <div className={styles.mega1}>*MEGA高校助教来自但不仅限于</div>
        <div className={styles.group}>
          <div className={styles.div23}>往期合作伙伴</div>
          <div className={styles.mega2}>
            <p className={styles.mega}>期待与你盛夏相见,</p>
            <p className={styles.mega}>MEGA团队</p>
          </div>
          <img className={styles.image24Icon} alt="" src="/image-24@2x.png" />
        </div>
        <div className={styles.contactParent} data-scroll-to="groupContainer">
          <div className={styles.contact}>
            <div className={styles.megaLeagueAll}>
              © 2023 MEGA League. All Rights Reserved
            </div>
            <div className={styles.megachinaofficalgmailcom}>
              megachinaoffical@gmail.com
            </div>
          </div>
          <div className={styles.contactGroup}>
            <div className={styles.contact}>
              <div className={styles.contact2}>
                <div className={styles.contactChild} />
                <div className={styles.rectangleParent}>
                  <div className={styles.groupItem} />
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
            <div className={styles.div24}>联系我们</div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupInner} />
          <div className={styles.faq}>FAQ/常见问题</div>
          <div className={styles.div25}>
            <p className={styles.mega}>更多问题？</p>
            <p className={styles.mega}>请私信小助手，微信二维码在下方。</p>
          </div>
          <div className={styles.q6}>
            <div className={styles.q6Child} />
            <div className={styles.div26}>我可以作为助教/嘉宾参与活动吗？</div>
            <img className={styles.q6Item} alt="" src="/vector-6.svg" />
          </div>
          <div className={styles.q5}>
            <div className={styles.q6Child} />
            <div className={styles.div26}>有具体的日程安排吗？</div>
            <img className={styles.q6Item} alt="" src="/vector-6.svg" />
          </div>
          <div className={styles.q4}>
            <div className={styles.q6Child} />
            <div className={styles.div26}>
              如果没有做项目基础/没有想法可以参加吗？
            </div>
            <img className={styles.q6Item} alt="" src="/vector-6.svg" />
          </div>
          <div className={styles.q3}>
            <div className={styles.q6Child} />
            <div className={styles.div26}>我可以得到什么？</div>
            <img className={styles.q6Item} alt="" src="/vector-6.svg" />
          </div>
          <div className={styles.q2}>
            <div className={styles.q6Child} />
            <div className={styles.div26}>填写申请后大概多久能收到通知？</div>
            <img className={styles.q6Item} alt="" src="/vector-6.svg" />
          </div>
          <div className={styles.q1}>
            <div className={styles.q6Child} />
            <div className={styles.div26}>
              所有人都可以参加吗？有专业/语言要求吗？
            </div>
            <img className={styles.q6Item} alt="" src="/vector-6.svg" />
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

export default MegaIdeaHack;
