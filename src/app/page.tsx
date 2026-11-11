import Link from "next/link";
import { ArrowRight, Bot, BrainCircuit, Flower2, LibraryBig, Play, Sparkles, WandSparkles } from "lucide-react";
import { IdeaFeeder } from "@/components/idea-feeder";
import { SheepMark } from "@/components/sheep-mark";

const capabilities = [
  { number: "01", title: "把问题想明白", text: "从金融业务、用户需求和真实场景里，找到值得解决的问题。", icon: BrainCircuit },
  { number: "02", title: "把 AI 组织起来", text: "组合模型、知识库、Skills、工作流和长期运行的智能体。", icon: Bot },
  { number: "03", title: "把体验做出来", text: "从原型、视觉到可用产品，让复杂能力变得自然又好玩。", icon: WandSparkles },
];

const projects = [
  { eyebrow: "FLAGSHIP · AI PRODUCT SYSTEM", title: "金融 AI 营销与服务产品线", description: "贯穿中后台、客服、销售与渠道，把金融专业能力组织成一线可以直接使用的服务。", tags: ["AI 产品线", "RAG", "Agent", "任务工作流"], className: "project-finance", icon: Bot, status: "持续进化中", href: "/projects/financial-ai-service" },
  { eyebrow: "RELEASED · CREATIVE PRODUCT", title: "花花系统", description: "用花、故事与数字体验，收集那些不应该轻易消失的心意。", tags: ["C 端产品", "情绪体验", "视觉叙事"], className: "project-flower", icon: Flower2, status: "已发布", href: "#" },
];

const skills = ["金融理解", "AI 产品设计", "Agent 编排", "RAG 搜索", "Skill 构建", "内容系统", "视觉叙事", "服务器部署"];

export default function Home() {
  return <main>
    <nav className="site-nav" aria-label="主导航">
      <Link href="#top" className="brand-lockup" aria-label="小样儿首页"><SheepMark className="brand-mark" /><span><strong>小样儿</strong><small>YoungSheep Lab</small></span></Link>
      <div className="nav-links"><Link href="#projects">项目</Link><Link href="#skills">能力</Link><Link href="#notes">研究</Link><Link href="#about">关于</Link></div>
      <Link href="#contact" className="nav-cta">来聊点有意思的</Link>
    </nav>

    <section id="top" className="hero section-shell">
      <div className="hero-copy">
        <p className="kicker"><span>●</span> 小样儿创意与 AI 产品实验室</p>
        <h1>把奇怪灵感，<br />养成<span>真的产品。</span></h1>
        <p className="hero-intro">连接金融洞察、AI 能力、产品设计与视觉表达。这里不只陈列作品，也公开一间创意如何发生、试错和长大的实验室。</p>
        <div className="hero-actions"><Link href="#projects" className="button button-primary">逛逛实验室 <ArrowRight size={18} /></Link><Link href="#about" className="button button-ghost"><Play size={16} fill="currentColor" /> 先认识小样儿</Link></div>
      </div>
      <IdeaFeeder />
      <div className="scribble scribble-one" aria-hidden="true">灵感<br />请走这边 ↘</div>
    </section>

    <section className="marquee" aria-label="实验室能力关键词"><div>AI 产品 <span>✦</span> 金融科技 <span>✦</span> 创意系统 <span>✦</span> 有趣体验 <span>✦</span> AI 产品 <span>✦</span> 金融科技</div></section>

    <section className="section-shell capability-section" id="about">
      <div className="section-heading"><p className="kicker">HOW I WORK</p><h2>一只羊，也可以是一支小型产品队伍。</h2><p>不是简单地“会很多工具”，而是把理解、设计、技术和表达串成一条完整路径。</p></div>
      <div className="capability-grid">{capabilities.map((item) => <article className="capability-card" key={item.number}><div className="capability-top"><span>{item.number}</span><item.icon size={26} /></div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
    </section>

    <section className="section-shell projects-section" id="projects">
      <div className="section-heading row-heading"><div><p className="kicker">SELECTED EXPERIMENTS</p><h2>正在认真养大的东西</h2></div><p>项目不是结果截图，而是从问题、判断到系统落地的完整故事。</p></div>
      <div className="project-grid">{projects.map((project) => <Link href={project.href} className={`project-card ${project.className}`} key={project.title}><div className="project-visual"><project.icon aria-hidden="true" /><span className="status-dot">{project.status}</span><div className="orbit orbit-a" /><div className="orbit orbit-b" /></div><div className="project-copy"><p className="eyebrow">{project.eyebrow}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><span className="project-link">{project.href.startsWith('/projects')?'查看完整案例':'案例故事整理中'} <ArrowRight size={16} /></span></div></Link>)}</div>
    </section>

    <section className="section-shell specimen-section" id="skills">
      <div className="specimen-copy"><p className="kicker">SKILL SPECIMEN CABINET</p><h2>不是技能清单，<br />是可以随时调用的标本柜。</h2><p>每一项能力都要能进入真实场景，和其他能力组合，最终对一个产品结果负责。</p></div>
      <div className="skill-cabinet">{skills.map((skill, index) => <span key={skill} style={{ "--i": index } as React.CSSProperties}>{skill}<small>0{index + 1}</small></span>)}</div>
    </section>

    <section className="section-shell notes-section" id="notes"><div className="notes-card"><div><Sparkles size={28} /><p className="kicker">FIELD NOTES</p></div><h2>研究、判断和一些<br />还没长成项目的念头。</h2><p>金融与 AI、产品方法、创意实验、视频和日常观察，会在这里慢慢形成一套属于小样儿的知识花园。</p><span className="button button-light">笔记正在搬家 <LibraryBig size={18} /></span></div></section>

    <footer className="section-shell footer" id="contact"><SheepMark className="footer-mark" /><p className="kicker">LET&apos;S MAKE SOMETHING ALIVE</p><h2>有值得一起养大的想法吗？</h2><p>欢迎聊 AI 产品、金融科技、创意系统，或者任何有一点奇怪但让人兴奋的事。</p><a href="mailto:hello@youngsheep.com.cn" className="button button-primary">给小样儿写信 <ArrowRight size={18} /></a><div className="footer-bottom"><span>© 2026 YoungSheep Lab</span><span>生长于真实问题，也生长于好奇心。</span></div></footer>
  </main>;
}
