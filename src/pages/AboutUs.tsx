import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AboutUs.module.css";
const AboutUs: FunctionComponent = () => {
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

  const onText2Click = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  const onText10Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.aboutus}>
      <div className={styles.aboutusChild} />
      <img className={styles.bg3Icon} alt="" src="/bg32.svg" />
      <div className={styles.div}>
        <div className={styles.div1} />
        <div className={styles.navigator}>
          <div className={styles.icon}>
            <img className={styles.icon1} alt="" src="/icon2.svg" />
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
            <div className={styles.div5} onClick={onText2Click}>
              活动
            </div>
            <div className={styles.div6}>关于我们</div>
            <div className={styles.child} />
            <div className={styles.item} />
            <div className={styles.inner} />
            <div className={styles.lineDiv} />
          </div>
        </div>
        <img className={styles.groupIcon} alt="" src="/group-24.svg" />
        <div className={styles.parent}>
          <div className={styles.div7}>
            <div className={styles.rectangleDiv} />
            <div className={styles.div8}>
              <img className={styles.vectorIcon} alt="" src="/vector9.svg" />
              <div className={styles.div9}>我们是谁？</div>
              <div className={styles.mega1}>
                2019年，一群来自全球顶尖院校的创新者在美国普林斯顿共同创立了MEGA:
                涉及的领域包括但不限于技术、工程、设计、艺术、商业、社会和自然科学。
              </div>
            </div>
          </div>
          <div className={styles.div10}>
            <div className={styles.rectangleDiv} />
            <div className={styles.div11}>
              <img className={styles.icon2} alt="" src="/--12.svg" />
              <div className={styles.div12}>我们做什么？</div>
              <div className={styles.megam}>
                MEGA旨在鼓励及协助优秀的青年发掘潜能、开拓多元认知，在MEGA的支持下通过自身能力与开发以解决现实问题为导向、具有价值和影响力的项目产品。
              </div>
            </div>
          </div>
          <div className={styles.div13}>
            <div className={styles.rectangleDiv} />
            <div className={styles.div14}>
              <div className={styles.icon2} />
              <div className={styles.div16}>我们怎么做？</div>
              <div className={styles.mega30}>
                MEGA已在全球多地设立执行点，并得到来自30多个企业、科技公司和非政府组织的支持。成员们在环境、教育、医疗等领域进行创新与合作，提供可行的解决方案，并获得了资金支持和实习机会。
              </div>
            </div>
            <img className={styles.unionIcon} alt="" src="/union.svg" />
          </div>
        </div>
      </div>
      <div className={styles.aboutusItem} />
      <div className={styles.news}>
        <div className={styles.div17}>经过充分的筹备与组织，</div>
        <div className={styles.mega2}>
          MEGA将于今年夏天正式开设中国线下赛点！
        </div>
        <img className={styles.icon3} alt="" src="/--13.svg" />
        <div className={styles.mega3}>
          这不仅是MEGA世界版图的又一次扩充，更是一个汇集了以往积累的资源与经验的“集大成”式的新项目。在探寻从数字行业到环境科学的“中国可能”的同时，我们也期待在社会科学、工程技术、艺术设计和经济商业等更多领域看到令人眼前一亮的新想法。从视觉传达到人文理论，在这里，你将有机会体验各个领域从零开始的独特旅程。
        </div>
      </div>
      <div className={styles.aboutusInner} />
      <div className={styles.div18}>
        <div className={styles.mega4}>
          <p className={styles.mega}>MEGA</p>
          <p className={styles.mega}>联盟网络</p>
        </div>
        <div className={styles.mega6}>
          MEGA联盟网络旨在协助创新者们更好地凝聚在一起，相互帮助、相互成就。此联盟网络聚集了所有MEGA往期活动的参与者，成员们会定期碰面，开展边炉谈话(fireside
          chats)，探讨前沿技术和理念，打破信息孤岛，共同成长。此外，我们还会根据学术背景和职业规
          划等因素为新老成员配对，新成员可以获得老成员的长期指导与帮助。
        </div>
        <div className={styles.mega7}>
          *MEGA联盟成员参与的项目在全球知名竞赛中荣获头奖
        </div>
        <div className={styles.mega8}>*MEGA联盟成员来自但不仅限于</div>
        <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
        <img className={styles.image14Icon} alt="" src="/image-14@2x.png" />
        <img className={styles.image15Icon} alt="" src="/image-15@2x.png" />
        <img className={styles.image16Icon} alt="" src="/image-16@2x.png" />
        <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
        <img className={styles.image18Icon} alt="" src="/image-18@2x.png" />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.div19}>往期感言</div>
        <div className={styles.groupParent}>
          <div className={styles.vectorParent}>
            <img className={styles.vectorIcon1} alt="" src="/vector10.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector11.svg" />
            <img className={styles.vectorIcon3} alt="" src="/vector12.svg" />
            <img className={styles.vectorIcon4} alt="" src="/vector13.svg" />
            <div className={styles.mega9}>
              <p className={styles.mega}>
                作为一个硬核的编程学生，我之前只将编程的应用局限在软件工程和机器学习等技术领域。在MEGA的跨领域讲座中，我很高兴能获得新的其实。现在，我对编程学科在文化行业的新可能更加了解，也明白通过数字语言，编程能在数字艺术，游戏设计，数字化文化遗产保护等领域碰撞出新的火花。对我的专业的应用价值又有了进一步的理解。
              </p>
              <p className={styles.mega}>&nbsp;</p>
              <p className={styles.mega}>-- UCB Computer Science Agnes R.</p>
            </div>
          </div>
          <div className={styles.vectorGroup}>
            <img className={styles.vectorIcon5} alt="" src="/vector14.svg" />
            <img className={styles.vectorIcon6} alt="" src="/vector15.svg" />
            <img className={styles.vectorIcon7} alt="" src="/vector16.svg" />
            <div className={styles.mega11}>
              <p className={styles.mega}>
                社会科学经常被形容成一个“孤岛学科“，我之前也会因为就业而焦虑。虽然我对心理学以及它的理论一直很有热情，但是它的传统应用让我一直感觉到局限性。在MEGA的大咖分享会上，行业前辈的历程让我改变了之前对心理应用的看法。现在，我更希望将我的知识与个体社区结合。为每个边缘化群体提供量身定制的心理资源架构。
              </p>
              <p className={styles.mega}>&nbsp;</p>
              <p className={styles.mega}>&nbsp;</p>
              <p className={styles.mega}>-- UChicago Psychology Riley Z.</p>
            </div>
          </div>
          <div className={styles.vectorContainer}>
            <img className={styles.vectorIcon8} alt="" src="/vector17.svg" />
            <img className={styles.vectorIcon9} alt="" src="/vector18.svg" />
            <img className={styles.vectorIcon10} alt="" src="/vector19.svg" />
            <div className={styles.iFullyEnjoyedContainer}>
              <p
                className={styles.mega}
              >{`I fully enjoyed teaming up with people from diverse cultural, ethnic, and national backgrounds. Through having cross-cultural conversations, I was able to construct a new view on some universal subjects that I thought I understood before — like poverty, climate action, and gender equality. It was interesting to consider the perspectives and philosophies to these issues on a global scale.

 `}</p>
              <p className={styles.mega}>&nbsp;</p>
              <p className={styles.mega}>
                -- Princeton Health Policy, Sarah N.
              </p>
            </div>
          </div>
          <div className={styles.groupDiv}>
            <img className={styles.vectorIcon11} alt="" src="/vector20.svg" />
            <img className={styles.vectorIcon12} alt="" src="/vector21.svg" />
            <div className={styles.everyoneHadDifferentContainer}>
              <p
                className={styles.mega}
              >{`Everyone had different approaches… which was mind-blowing. At the same time, everyone had amazing work ethics which inspired me to do better…my teammates were an indispensable part of my experience. Personally, I gained much more advanced executive and organizational skill as an outcome, and I plan to take what I learned further into my learning.
 `}</p>
              <p className={styles.mega}>&nbsp;</p>
              <p className={styles.mega}>&nbsp;</p>
              <p className={styles.mega}>-- USC Communications Samuel G.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contactParent} data-scroll-to="groupContainer">
        <div className={styles.contact}>
          <div className={styles.contact1}>
            <div className={styles.contactChild} />
            <div className={styles.rectangleGroup}>
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
        <div className={styles.contact}>
          <div className={styles.megaLeagueAll}>
            © 2023 MEGA League. All Rights Reserved
          </div>
          <div className={styles.megachinaofficalgmailcom}>
            megachinaoffical@gmail.com
          </div>
        </div>
        <div className={styles.div20}>联系我们</div>
      </div>
      <div className={styles.div21} onClick={onText10Click}>
        了解更多
      </div>
      <div className={styles.image22Parent}>
        <img className={styles.image22Icon} alt="" src="/image-221@2x.png" />
        <img className={styles.image23Icon} alt="" src="/image-231@2x.png" />
      </div>
      <img className={styles.image27Icon} alt="" src="/image-27@2x.png" />
    </div>
  );
};

export default AboutUs;
