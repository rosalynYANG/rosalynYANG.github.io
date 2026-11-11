import Image from "next/image";
import Link from "next/link";
import "../project-story.css";
import ProjectFooter from "../ProjectFooter";
import ProjectToc from "../ProjectToc";

export const metadata={title:"真实好花情绪陪伴系统"};
const toc=[{id:"overview",number:"00",label:"项目概览"},{id:"companionship",number:"01",label:"情绪陪伴"},{id:"curation",number:"02",label:"策展底座"},{id:"journey",number:"03",label:"用户旅程"},{id:"mvp",number:"04",label:"一期验证"},{id:"launch",number:"05",label:"线上体验"}];

export default async function FlowerCuration({searchParams}:{searchParams:Promise<{from?:string}>}){const {from}=await searchParams;const backHref=from==="drawers"?"/world-door/index.html?world=drawers":"/world-door/index.html?state=awake";return <main className="story-page flower-story"><div className="story-shell">
  <nav className="story-nav"><Link href={backHref}>← 返回上一级</Link><span>已上线 · 微信小程序</span></nav>
  <header className="story-hero"><p className="story-kicker">LIVE PRODUCT · EMOTIONAL COMPANIONSHIP</p><h1>用一朵真实好花，陪人安放当下的情绪</h1><p className="story-lead">花花首先是一套轻量的情绪陪伴产品：当情绪难以说清，用户可以遇见一朵与自己此刻相近的花，把它留下、送给自己，或借它向另一个人表达。审美策展是保证花足够真实、好看、值得停留的方法，而不是产品的全部。</p><div className="story-facts"><div><small>核心价值</small><b>让情绪被看见与承接</b></div><div><small>陪伴动作</small><b>遇见、保存、送给自己或他人</b></div><div><small>产品状态</small><b>微信小程序已上线</b></div></div></header>
  <section className="story-section"><figure className="story-image"><Image src="/project-assets/flower/overview.png" alt="真实好花审美策展系统概览" width={1664} height={936}/></figure></section>
  <section className="story-section"><div className="story-heading"><span>01</span><div><h2>情绪陪伴不必先从一段很长的倾诉开始</h2><p>有时用户只是累、闷、想被理解，却不想填写量表或解释原因。产品用一朵花作为更柔软的媒介：先允许人停留，再通过一句话、一次保存或一次赠送，让情绪获得出口。</p></div></div><div className="story-columns"><article><small>感受</small><h3>找到与此刻相近的花</h3><p>花不诊断情绪，只提供一种可亲近、可共鸣的映照。</p></article><article><small>陪伴</small><h3>把喜欢留给自己</h3><p>保存花卡、生成小签或送给自己，形成轻量而持续的自我照顾。</p></article><article><small>表达</small><h3>把难说的话交给花</h3><p>将花送给另一个人，让关心、想念和安慰更容易发生。</p></article></div></section>
  <section className="story-section"><div className="story-heading"><span>02</span><div><h2>策展是情绪体验的质量底座</h2><p>不是用通用花图库随机匹配一句文案，而是持续筛选真实、有生命感和细节的花，再组织它的故事、气质与适合承接的情绪。策展让陪伴不廉价，也让每一张花卡值得被保存。</p></div></div><figure className="story-image"><Image src="/project-assets/flower/business-map.png" alt="真实好花产品与情绪陪伴地图" width={1664} height={936}/></figure></section>
  <section className="story-section"><div className="story-heading"><span>03</span><div><h2>从偶遇一朵花，到完成一次情绪表达</h2><p>用户可以从公众号、群或朋友圈偶遇一朵花，进入花卡后保存、分享、送给自己或送给别人。产品不要求先进入复杂社区，而是让陪伴发生在最自然的一次停留里。</p></div></div><figure className="story-image"><Image src="/project-assets/flower/journey.png" alt="真实好花情绪陪伴用户旅程" width={1664} height={936}/></figure></section>
  <section className="story-section"><div className="story-heading"><span>04</span><div><h2>一期验证：一朵花能否让人停下，并愿意表达</h2><p>先完成花卡库、详情页、分享卡、保存与反馈记录，不急着扩展商城、社区和复杂 SKU。用停留、保存、送给自己和分享等真实动作判断陪伴是否成立。</p></div></div><figure className="story-image"><Image src="/project-assets/flower/mvp-loop.png" alt="真实好花一期 MVP 核心闭环" width={1664} height={936}/></figure></section>
  <section className="story-section"><div className="launch-panel"><div><p className="story-kicker">NOW LIVE</p><h2>微信扫码进入小程序</h2><p>当前版本已经上线。可以直接查看花卡、保存喜欢的花，并体验“送给自己”等核心动作。</p></div><div><Image src="/world-door/assets/flower-miniapp-code.jpg" alt="真实好花微信小程序二维码" width={1280} height={1280}/><small>微信扫码进入小程序</small></div></div></section>
  <ProjectFooter backHref={backHref}/>
  <ProjectToc title="真实好花情绪陪伴系统" items={toc}/></div></main>}
