import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
        en: {
          translation: {
            greeting: {
              hello: "Hello World!"
            },
            heroSection: {
              tab1: "Home page",
              tab2: "About us",
              tab3: "Events",
              tab4: "Contact us",
              hot: "HOT REGISTRATION!",
              text: "You will team up with other participants and, under the guidance of well-known university teaching assistants and industry leaders, jointly design solutions, create related works and develop landing projects in three days from the United Nations Sustainable Development Goals.",
              signup: "Sign up now",
              learnmore: "Learn more"
            },
            intro: {
              cardhead1: "Who we are?", 
              cardhead2: "What do we do?", 
              cardhead3: "What do we do?",
              cardtext1: "In 2019, MEGA was co-founded by a group of innovators from top global institutions in Princeton, USA. The fields covered include, but are not limited to, technology, engineering, design, art, business, social and natural sciences.", 
              cardtext2: "MEGA aims to encourage and assist outstanding young people to explore their potential, explore diverse cognition, and with the support of MEGA, develop project products with value and influence oriented towards solving practical problems through their own abilities and development.", 
              cardtext3: "MEGA has set up implementation sites around the world and is supported by more than 30 businesses, technology companies and NGOs. Members innovate and collaborate in areas such as the environment, education and healthcare to provide viable solutions, and have received financial support and internship opportunities.", 
              learnmore: "Learn more"
            },
            event: {
              activity: "Wonderful activity",
              hot: "HOT REGISTRATION",
              city: "Shanghai, China",
              signup: "Sign up now",
              learnmore: "Learn more",
              cardbar1: "Studio",
              cardbar2: "Hackathon",
              cardhead1: "Use AI to tell digital stories",
              cardhead2: "MEGA HACKATHON 2023",
              cardtext1: "MEGA teamed up with Columbia doctoral students and professors from Love and the Future to educate young people about the importance of digital storytelling through this transformative course on artificial intelligence and its impact on the climate.",
              cardtext2: "Like last year, the MEGA Hackathon hosted another hackathon event in 2023 that focused on real-world issues.",
              more: "more"
            },
            contact: {
              contacthead: "Contact Us"
            }
          }
        },
        zh: {
          translation: {
            heroSection: {
              tab1: "首页",
              tab2: "关于我们",
              tab3: "活动",
              tab4: "联系我们",
              hot: "火热报名中！",
              text: "您将与其他参与者组成团队，在知名大学助教和行业领袖的指导下，共同设计解决方案、创建相关作品，并根据联合国可持续发展目标在三天内开发实际项目。",
              signup: "立即报名",
              learnmore: "了解更多"
            },
            intro: {
              cardhead1: "我们是谁？",
              cardhead2: "我们做什么？",
              cardhead3: "我们做什么？",
              cardtext1: "2019年，一群来自全球顶尖院校的创新者在美国普林斯顿共同创立了MEGA。涉及的领域包括但不限于技术、工程、设计、艺术、商业、社会和自然科学。",
              cardtext2: "MEGA旨在鼓励和协助杰出青年发掘潜力，探索多元认知，并在MEGA的支持下，通过自身能力和发展，开发解决实际问题、具有价值和影响力的项目产品。",
              cardtext3: "MEGA在全球各地设有执行场地，并得到30多家企业、技术公司和非政府组织的支持。成员在环境、教育、医疗等领域进行创新合作，提供可行解决方案，并获得财务支持和实习机会。",
              learnmore: "了解更多"
            },
            event: {
              activity: "精 彩 活 动",
              hot: "火热报名中",
              city: "中国上海",
              signup: "立即报名",
              learnmore: "了解更多",
              cardbar1: "工作室",
              cardbar2: "黑客马拉松",
              cardhead1: "运用人工智能讲述数字故事",
              cardhead2: "MEGA黑客马拉松2023",
              cardtext1: "MEGA与哥伦比亚大学博士生和Love and the Future的教授合作，通过这门关于人工智能及其对气候影响的变革性课程，教育年轻人了解数字叙事的重要性。",
              cardtext2: "与去年一样，MEGA在2023年举办了另一场聚焦现实问题的黑客马拉松活动。",
              more: "更多"
            },
            contact: {
              contacthead: "联系我们"
            }
          }
        }
      }
      
      
  });

export default i18n;