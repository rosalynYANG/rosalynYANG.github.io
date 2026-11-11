import Image from "next/image";
import Link from "next/link";
import "../project-story.css";
import ProjectFooter from "../ProjectFooter";
import ProjectToc from "../ProjectToc";

export const metadata={title:"视频电话式 AI 文化导游"};
const toc=[{id:"overview",number:"00",label:"项目概览"},{id:"opportunity",number:"01",label:"产品机会"},{id:"experience",number:"02",label:"核心体验"},{id:"personalization",number:"03",label:"兴趣化讲解"},{id:"mvp",number:"04",label:"一期验证"}];

export default async function CulturalGuide({searchParams}:{searchParams:Promise<{from?:string}>}){const {from}=await searchParams;const backHref=from==="drawers"?"/world-door/index.html?world=drawers":"/world-door/index.html?state=awake";return <main className="story-page guide-story"><div className="story-shell">
  <nav className="story-nav"><Link href={backHref}>← 返回上一级</Link><span>正在孵化</span></nav>
  <header className="story-hero"><p className="story-kicker">AI CULTURAL GUIDE · INCUBATING</p><h1>从用户喜欢的世界出发，讲懂一件文物</h1><p className="story-lead">它不只复述出土年份和朝代，而是先理解用户的语言、文化背景与兴趣，再选择用户熟悉的叙事入口。喜欢影视，就关联相近的角色、场景与故事；喜欢游戏或二次元，就从装备、世界观和人物关系切入，最后把好奇心带回真实文物与历史。</p><div className="story-facts"><div><small>核心能力</small><b>基于背景与兴趣动态讲解</b></div><div><small>交互形态</small><b>视频陪看与连续追问</b></div><div><small>当前阶段</small><b>一期 MVP 设计与验证</b></div></div></header>
  <section className="story-section"><div className="story-heading"><span>01</span><div><h2>用户缺的不是信息入口，而是能在现场继续讲下去的人</h2><p>展签通常只能回答“它是什么”，普通 AI 容易给出泛化答案，真人导游又需要预约和跟团。用户真正的困惑发生在眼前的细节里，需要系统看见、判断，并沿着问题继续解释。</p></div></div><figure className="story-image"><Image src="/project-assets/cultural-guide/opportunity.jpg" alt="视频电话式 AI 文化导游产品机会" width={1400} height={788}/></figure></section>
  <section className="story-section"><div className="story-heading"><span>02</span><div><h2>镜头指向哪里，讲解就从哪里开始</h2><p>用户不必遵循固定路线。拍摄正在看的展品，AI 识别画面焦点，回答“这是什么、看哪里、为什么值得看”，并保留上下文承接后续追问。</p></div></div><div className="story-columns"><article><small>看见</small><h3>理解当前画面</h3><p>识别展品、纹饰、材质和用户关注的局部。</p></article><article><small>对话</small><h3>连续追问</h3><p>记住前文，让问题逐步深入，而不是每次重新开始。</p></article><article><small>连接</small><h3>形成参观主线</h3><p>把单件展品串成故事，并连接相关文物与文创内容。</p></article></div><figure className="story-image" style={{marginTop:36}}><Image src="/project-assets/cultural-guide/video-qa.jpg" alt="自由视频问答核心体验" width={1400} height={788}/></figure></section>
  <section className="story-section"><div className="story-heading"><span>03</span><div><h2>同一件文物，可以为不同的人打开不同入口</h2><p>系统先识别用户主动选择的兴趣标签，也从对话、语言与追问中持续修正理解；再把可靠知识重组为更熟悉的叙事，而不是套用一份固定解说词。</p></div></div><div className="interest-grid"><article><b>影视与剧集</b><p>关联相近的影视场景、人物处境与礼制细节，解释哪些来自历史、哪些是创作改编。</p></article><article><b>游戏玩家</b><p>从装备属性、阵营关系与世界观进入，再还原器物真实用途和时代制度。</p></article><article><b>动漫与二次元</b><p>借助角色设定、服饰语言和叙事母题，建立陌生文化与熟悉审美之间的桥。</p></article><article><b>职场与社会</b><p>从身份、等级、协作和权力关系切入，理解礼制如何塑造人的行为。</p></article><article><b>生活与消费</b><p>从材质、工艺、审美和身份象征切入，理解古人为何制作、使用并珍视它。</p></article><article><b>严肃历史</b><p>直接展开年代、制度、工艺、考古证据与历史争议，形成完整知识结构。</p></article></div><p className="story-quote">兴趣负责打开入口，AI 负责动态组织讲法，可靠知识负责把用户带回真实历史。</p></section>
  <section className="story-section"><div className="story-heading"><span>04</span><div><h2>一期 MVP 验证完整体验，而不是验证 AI 会不会讲</h2><p>重点观察用户是否愿意跟随完整动线、主动追问、回看辅助内容、形成跨文化理解，并愿意为持续陪看付费。</p></div></div><figure className="story-image"><Image src="/project-assets/cultural-guide/mvp.jpg" alt="AI 文化导游一期 MVP 验证目标" width={1400} height={788}/></figure></section>
  <ProjectFooter backHref={backHref}/>
  <ProjectToc title="AI 文化导游" items={toc}/></div></main>}
