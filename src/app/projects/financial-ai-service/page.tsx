import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Boxes,
  CheckCircle2,
  CircleDot,
  Database,
  FileText,
  Headphones,
  Layers3,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import "./case.css";
import ProjectFooter from "../ProjectFooter";
import ProjectToc from "../ProjectToc";

export const metadata: Metadata = {
  title: "金融 AI 营销与服务产品线",
  description:
    "贯穿中后台、客服、销售与渠道的金融 AI 营销服务产品线案例。",
};

const stageRows = [
  ["01", "内容生产", "标准物料分钟级生产", "Workflow + HTML + 图像模型", "创意图文与内容 Agent", "已上线"],
  ["02", "客服辅助", "“听、查、答、记”实时辅助", "RAG + 实时意图预测", "状态查询与业务办理", "已上线"],
  ["03", "销售任务", "统一入口组合内部能力", "Agent + Skills + MCP/API", "按角色深化高价值任务", "演进中"],
  ["04", "自助服务", "知识问答与标准查询", "任务路由 + 状态机 + 业务接口", "统一任务与状态中心", "下一阶段"],
  ["05", "自主智能体", "长期任务与主动服务", "长期 Agent + 记忆 + 规划", "审批、恢复与审计机制", "探索中"],
];
const toc=[{id:"mission",number:"00",label:"案例概览"},{id:"conflict",number:"01",label:"业务矛盾"},{id:"panorama",number:"02",label:"产品全景"},{id:"architecture",number:"03",label:"能力架构"},{id:"content",number:"04",label:"内容生产"},{id:"service",number:"05",label:"客户服务"},{id:"sales",number:"06",label:"销售与渠道"},{id:"evolution",number:"07",label:"产品演进与下一步"},{id:"engineering",number:"08",label:"工程与治理"},{id:"evidence",number:"09",label:"成果与证据"}];

function SectionTitle({
  number,
  eyebrow,
  title,
  intro,
}: {
  number: string;
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="case-section-title">
      <div className="section-number">{number}</div>
      <div>
        <p className="case-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
    </header>
  );
}

function Status({ children, tone = "live" }: { children: React.ReactNode; tone?: string }) {
  return <span className={`case-status ${tone}`}>{children}</span>;
}

export default async function FinancialAIServiceCase({searchParams}:{searchParams:Promise<{from?:string}>}) {
  const {from}=await searchParams;
  const backHref=from==="drawers"?"/world-door/index.html?world=drawers":"/world-door/index.html?state=awake";
  return (
    <main className="financial-case">
      <div className="case-page">
        <nav className="case-topnav"><Link href={backHref}><ArrowLeft/>返回上一级</Link><span>金融 AI 产品线</span></nav>
        <section className="case-hero" id="mission">
          <div className="hero-meta">
            <Status>经典案例</Status>
            <span>金融 AI 产品线</span>
          </div>
          <h1>
            把分散的专业能力，
            <br />
            重构为<span>可执行的金融营销与服务体系。</span>
          </h1>
          <p className="hero-lead">
            一个覆盖内容生产、客户服务和销售支持的 AI 产品线案例：从单点工具、智能工作流到任务代理，展示金融业务流程如何被重新组织，而不只是增加一个聊天入口。
          </p>
          <div className="hero-outcomes">
            <article><small>01 / 内容运营</small><h3>规模化生产专业内容</h3><p>把数据、观点、生成、检查和视觉输出组织成稳定生产链路。</p></article>
            <article><small>02 / 客户服务</small><h3>重构客户服务流程</h3><p>从实时辅助延伸到自助查询、业务办理、工单协同和质量运营。</p></article>
            <article><small>03 / 销售与渠道</small><h3>支持一线完成具体工作</h3><p>围绕拜访、产品沟通和渠道经营，交付完整材料、专业建议和后续行动。</p></article>
          </div>
          <div className="hero-evidence" aria-label="案例关键证据">
            <div><b>约 1 分钟</b><span>标准物料生产</span></div>
            <div><b>4.8s → 约 1s</b><span>客服首字响应</span></div>
            <div><b>千次级</b><span>统一入口周调用</span></div>
            <div><b>10 亿+</b><span>每周 Token 调用</span></div>
          </div>
        </section>

        <section className="case-section" id="conflict">
          <SectionTitle
            number="01"
            eyebrow="业务矛盾"
            title="总部有专业能力，一线却仍在手工拼接。"
            intro="问题不在于缺少数据、知识或 AI 工具，而在于这些能力仍按部门和系统分散，无法围绕一次客户任务被统一调用。"
          />
          <div className="diagnosis-flow">
            <article>
              <span>01 · 已有资产</span>
              <h3>专业供给并不稀缺</h3>
              <p>总部已经沉淀了支撑营销和服务的核心资源。</p>
              <ul>{["基金与市场数据","投研观点与产品资料","营销内容与服务知识","客户记录与业务系统"].map(x=><li key={x}>{x}</li>)}</ul>
            </article>
            <article className="breakpoint">
              <span>02 · 组织断点</span>
              <h3>能力没有被组织成任务</h3>
              <p>资源仍以部门、系统和功能为边界，缺少共同的任务模型。</p>
              <ul>{["数据与权限分散","知识、工具无法组合调用","缺少任务编排与结果检查","服务反馈无法回到知识和产品"].map(x=><li key={x}>{x}</li>)}</ul>
            </article>
            <article>
              <span>03 · 业务代价</span>
              <h3>一线承担了整合成本</h3>
              <p>客服和销售只能依靠人工完成跨系统的信息拼接。</p>
              <ul>{["反复查询多个系统","等待和寻找专业材料","手工组合数据、观点与话术","重复制作内容和服务记录"].map(x=><li key={x}>{x}</li>)}</ul>
            </article>
          </div>
          <div className="case-conclusion"><b>产品决策</b><p>不再增加孤立的 AI 功能，而是建设统一任务入口与能力编排层，让数据、知识和工具围绕客户任务完成调用、交付与反馈。</p></div>
        </section>

        <section className="case-section" id="panorama">
          <SectionTitle
            number="02"
            eyebrow="产品线全景"
            title="一条产品线，连接三类业务角色。"
            intro="中后台负责产生专业能力，客服负责承接客户服务，销售与渠道负责把能力带到市场；AI 产品线让三者不再彼此割裂。"
          />
          <figure className="case-diagram image-first">
            <Image src="/case-assets/business-value-map.png" alt="金融机构 AI 营销与服务产品线业务价值流地图" width={1690} height={950} priority />
            <figcaption>业务价值流：专业能力如何在三类场景中被重新组织，并形成可衡量的业务结果。</figcaption>
          </figure>
          <div className="thinking-grid">
            <article><small>产品判断</small><h3>先统一业务主线，再统一技术底座</h3><p>内容、客服和销售看似是三条线，底层都在解决“专业能力如何及时到达一线”。因此先用统一业务语言建立产品线，再逐步复用知识、数据和工具能力。</p></article>
            <article><small>关键取舍</small><h3>不追求一步到位的全自动化</h3><p>确定性强、风险低的环节优先自动化；复杂咨询和高风险操作继续由人工负责，让 AI 从辅助逐步进入任务执行。</p></article>
            <article><small>运营闭环</small><h3>把真实使用变成下一轮产品输入</h3><p>问题、服务记录和业务反馈持续回到评测、知识与 Skills，产品线才能从项目交付变成持续运行的能力。</p></article>
          </div>
          <div className="panorama visual-panel">
            <div className="diagram-ribbon">业务全景 · 从总部能力供给到客户结果</div>
            <div className="panorama-matrix">
              <div className="matrix-label">服务对象</div><div className="matrix-wide pills"><span>中后台运营</span><span>客服坐席</span><span>一线销售</span><span>专业渠道</span><span>终端客户</span></div>
              <div className="matrix-label">触达入口</div><div className="matrix-wide pills"><span>内容工作台</span><span>客服工作台</span><span>企业协作入口</span><span>渠道服务平台</span><span>在线客服 / 电话</span></div>
              <div className="matrix-label accent">业务应用</div>
              <div className="matrix-card coral"><b>内容生产</b><small>热点捕捉 · 产品匹配<br/>文案 / 海报 / 周报</small></div>
              <div className="matrix-card blue"><b>客服智能化</b><small>听查答记 · 自助问答<br/>任务办理 · 人机协同</small></div>
              <div className="matrix-card purple"><b>销售与渠道支持</b><small>拜访准备 · 渠道分析<br/>话术 / 素材 / 跟进</small></div>
              <div className="matrix-card mint"><b>渠道知识服务</b><small>专业搜索 · 来源引用<br/>学习与沟通任务</small></div>
              <div className="matrix-label">统一中枢</div><div className="matrix-wide orchestration"><b>AI 任务编排与能力路由</b><span>目标理解</span><span>任务拆解</span><span>知识检索</span><span>Skills 调度</span><span>风险分级</span><span>结果组装</span></div>
              <div className="matrix-label">能力供给</div><div className="matrix-wide pills compact"><span>基金数据</span><span>投研观点</span><span>产品资料</span><span>营销素材</span><span>客服知识</span><span>业务接口</span><span>外部专业数据</span></div>
              <div className="matrix-label feedback">反馈闭环</div><div className="matrix-wide feedback-track">问题与任务 → 执行过程 → 服务记录 → 业务结果 → 评测与知识更新 → 产品迭代</div>
            </div>
          </div>
        </section>

        <section className="case-section" id="architecture">
          <SectionTitle
            number="03"
            eyebrow="产品与技术架构"
            title="业务在上，技术在下；每一层都为结果负责。"
          />
          <figure className="case-diagram image-first">
            <Image src="/case-assets/product-tech-architecture.png" alt="金融 AI 营销与服务产品技术架构" width={1690} height={950} />
            <figcaption>产品技术架构：业务应用、智能编排、数据知识与工程治理的完整关系。</figcaption>
          </figure>
          <div className="thinking-grid compact">
            <article><small>架构原则</small><h3>业务应用共享能力，但不被统一平台绑死</h3><p>内容、客服和销售保留各自的产品界面与业务流程；知识、数据、Skills 和工具接入在底层复用，避免每条线重复建设。</p></article>
            <article><small>技术取舍</small><h3>按任务确定性选择 Workflow、RAG 或 Agent</h3><p>固定步骤交给工作流，知识查询交给检索增强，需要规划和多工具协作的任务再交给 Agent，不把所有问题都包装成智能体。</p></article>
          </div>
          <div className="enterprise-architecture visual-panel">
            <div className="diagram-ribbon">产品与技术双层架构</div>
            <div className="arch-row"><b>用户与入口</b><div>{['中后台运营','客服坐席','一线销售','专业渠道','终端客户'].map(x=><span key={x}>{x}</span>)}</div></div>
              <div className="arch-row major"><b>业务应用层</b><div><span>AI 内容生产平台<small>标准物料 · 创意内容 · 运营管理</small></span><span>智能客服服务平台<small>Copilot · 自助服务 · 业务办理</small></span><span>销售智能工作平台<small>工作目标 · 能力编排 · 成果交付</small></span><span>渠道知识服务<small>专业搜索 · 学习 · 沟通支持</small></span></div></div>
            <div className="arch-row intelligence"><b>智能编排层</b><div>{['统一 Agent 入口','目标理解 / 规划','Workflow','RAG','实时意图预测','Skills 注册与调度','MCP / API 工具总线','模型路由','上下文与记忆','风险策略'].map(x=><span key={x}>{x}</span>)}</div></div>
            <div className="arch-row data"><b>数据知识层</b><div>{['产品与行情数据','投研观点库','产品资料库','营销素材库','客服知识库','服务记录库','工单与任务库','客户与渠道画像','评测集','外部专业数据'].map(x=><span key={x}>{x}</span>)}</div></div>
            <div className="arch-row foundation"><b>工程与治理</b><div>{['统一身份 / 权限','接口网关','数据同步','日志与链路追踪','评测平台','成本与限流','内容与风险预检','人工确认 / 接管','容器部署','运行监控'].map(x=><span key={x}>{x}</span>)}</div></div>
          </div>
        </section>

        <section className="case-section business-case content-case" id="content">
          <SectionTitle
            number="04"
            eyebrow="内容生产"
            title="将总部专业能力，变成可持续生产的营销内容。"
            intro="内容生产不是让模型随意写和画，而是把确定性数据、专业观点、营销规则和视觉生产组织成稳定流程。"
          />
          <figure className="case-diagram image-first">
            <Image src="/case-assets/content-dual-lane.png" alt="AI 营销内容生产标准与创意双泳道蓝图" width={1690} height={950} />
            <figcaption>双泳道生产机制：标准内容追求稳定与规模，创意内容追求差异化与多轮迭代。</figcaption>
          </figure>
          <div className="thinking-grid compact">
            <article><small>为什么分成双引擎</small><h3>标准内容要稳定，创意内容要留出探索空间</h3><p>高频标准物料继续使用可控的 Workflow 与 HTML；长图、活动创意和信息图交给多模态模型与内容 Agent，多轮迭代后再由人判断。</p></article>
            <article><small>核心边界</small><h3>模型组织表达，但不创造基金事实</h3><p>净值、业绩和产品要素来自结构化接口，观点与资料保留来源；模型负责分析、结构和语言，避免把生成能力误当成事实来源。</p></article>
          </div>
          <div className="content-blueprint visual-panel">
            <div className="diagram-ribbon">营销内容生产全链路</div>
            <div className="content-head">{['1 需求与热点','2 数据与知识','3 产品匹配','4 内容生成','5 风险与质量','6 视觉生产','7 分发与反馈'].map(x=><b key={x}>{x}</b>)}</div>
            <div className="content-body">
              <div><strong>任务输入</strong><span>市场热点</span><span>营销目标</span><span>受众与渠道</span><span>内容规格</span></div>
              <div><strong>可信供给</strong><span>基金 / 行情接口</span><span>投研观点库</span><span>产品资料库</span><span>来源与截止日</span></div>
              <div><strong>匹配与规划</strong><span>产品筛选</span><span>卖点提取</span><span>内容结构</span><span>引用规划</span></div>
              <div><strong>双引擎</strong><span>标准：Workflow</span><span>创意：内容 Agent</span><span>文案与图表</span><span>多轮修改</span></div>
              <div><strong>质量门禁</strong><span>字段校验</span><span>事实核对</span><span>风险预检</span><span>人工确认</span></div>
              <div><strong>多模态输出</strong><span>HTML / CSS</span><span>图片模型</span><span>多尺寸适配</span><span>视觉质检</span></div>
              <div><strong>运营闭环</strong><span>工作台 / 渠道</span><span>素材复用</span><span>使用反馈</span><span>效果归因</span></div>
            </div>
            <div className="content-support"><b>生产基础设施</b><span>模板与组件库</span><span>提示词与规则库</span><span>模型路由</span><span>版本管理</span><span>成本与限流</span><span>评测与复盘</span></div>
          </div>
          <div className="case-grid">
            <div className="business-story">
              <p className="micro-label">业务链路</p>
              <div className="linear-flow">
                {['找热点','查数据','匹配产品','生成文案','风险检查','视觉输出'].map((item,index)=><div key={item}><span>{index+1}</span>{item}</div>)}
              </div>
              <div className="decision-note">
                <CircleDot />
                <p><b>关键产品判断</b>确定性基金数据从接口获取，模型负责分析和语言组织；视觉层根据内容类型选择稳定模板或创意生成。</p>
              </div>
            </div>
            <div className="content-demo ui-demo">
              <div className="demo-bar"><span /><span /><span /><b>内容生产工作台</b></div>
              <div className="demo-body">
                <div className="demo-form"><small>本次任务</small><b>市场热点 × 产品解读</b><p>目标受众：专业渠道</p><p>输出：海报 / 话术 / 周报</p><button>开始生成</button></div>
                <div className="generation-pipeline"><i>数据</i><i>知识</i><i>文案</i><i>预检</i><i>HTML / 图片</i></div>
                <div className="poster-preview"><span>市场简报</span><h4>把市场变化<br/>讲清楚</h4><p>数据绑定 · 来源可追溯 · 多尺寸输出</p></div>
              </div>
            </div>
          </div>
          <div className="tech-evolution three-up">
            <article><Status>已上线</Status><b>第一代</b><h3>Workflow + HTML / 图片模型</h3><p>结构化数据、知识检索与 HTML/CSS 支撑标准内容批量生产；图片模型负责封面和视觉素材生成。</p></article>
            <article><Status tone="evolving">演进中</Status><b>第二代</b><h3>标准与创意双引擎</h3><p>高频标准内容由 HTML 与快速图片模型协同生成；创新图文交给更强的多模态图片模型迭代。</p></article>
            <article><Status tone="next">下一阶段</Status><b>第三代</b><h3>创意内容 Agent</h3><p>根据营销目标自主规划结构，调用数据、图表、图片和排版工具，多轮检查后交付。</p></article>
          </div>
        </section>

        <section className="case-section business-case service-case" id="service">
          <SectionTitle
            number="05"
            eyebrow="客户服务"
            title="从辅助人工服务，逐步走向客户自助和人机协同。"
          />
          <figure className="case-diagram image-first">
            <Image src="/case-assets/customer-service-blueprint.png" alt="智能客服全流程蓝图与系统支撑" width={1690} height={950} />
            <figcaption>客服蓝图：覆盖触达、受理、分流、处理、协同、质检与数据运营的完整服务链路。</figcaption>
          </figure>
          <div className="thinking-grid compact">
            <article><small>产品判断</small><h3>客服智能化不能只优化问答准确率</h3><p>真正的服务链路包括理解问题、查数据、执行任务、生成工单、协同处理和反馈，因此指标也要逐步转向自动解决率、转人工率和一次解决率。</p></article>
            <article><small>演进策略</small><h3>按照确定性、风险和服务价值分场景</h3><p>查询和通知类场景逐步自助化；投诉、交易异常和复杂咨询由人工负责，AI 提供实时辅助，形成稳定的人机混合服务。</p></article>
          </div>
          <div className="service-blueprint visual-panel">
            <div className="diagram-ribbon">客服全流程服务蓝图</div>
            <div className="blueprint-head">{['1 客户触达','2 问题受理','3 智能分流','4 人工 / 自助处理','5 工单协同','6 质检复盘','7 数据分析'].map(x=><b key={x}>{x}</b>)}</div>
            <div className="blueprint-body">
              <div><strong>多渠道接入</strong><span>在线客服</span><span>呼叫中心</span><span>企业协作入口</span><span>消息通知</span></div>
              <div><strong>统一受理</strong><span>身份识别</span><span>问题记录</span><span>上下文拼接</span><span>服务记录生成</span></div>
              <div><strong>场景与风险路由</strong><span>知识问答</span><span>状态查询</span><span>标准办理</span><span>复杂 / 高风险</span></div>
              <div><strong>双轨服务</strong><span>自助：回答、查询、办理</span><span>人工：Copilot 辅助</span><span>异常：转人工接管</span></div>
              <div><strong>闭环协同</strong><span>工单生成</span><span>跨部门任务</span><span>进度跟踪</span><span>结果通知</span></div>
              <div><strong>质量运营</strong><span>录音与文本抽检</span><span>意图 / 答案评测</span><span>问题归因</span><span>知识更新</span></div>
              <div><strong>经营看板</strong><span>服务量 / 解决率</span><span>转人工率</span><span>一次解决率</span><span>质量与运营分析</span></div>
            </div>
            <div className="blueprint-support"><b>贯穿全流程的支撑能力</b><span>客户与员工画像</span><span>知识管理</span><span>任务与工单中心</span><span>权限与安全</span><span>模型评测</span><span>日志与可观测</span></div>
          </div>
          <div className="case-grid reverse">
            <div className="service-demo ui-demo">
              <div className="demo-bar"><span /><span /><span /><b>客服实时辅助</b></div>
              <div className="call-layout">
                <div className="transcript"><small>实时对话</small><p><b>客户</b> 我想查询当前业务进度……</p><p><b>系统</b> 正在识别意图并查询状态</p><div className="wave"><i/><i/><i/><i/><i/><i/></div></div>
                <div className="assist-panel"><small>AI 建议</small><h4>业务进度查询</h4><p>已匹配标准服务场景，查询结果与下一步建议已准备。</p><div className="confidence"><span>意图置信度</span><b>95%</b></div></div>
              </div>
            </div>
            <div className="business-story">
              <p className="micro-label">产品演进</p>
              <ol className="vertical-steps">
                <li><Status>已上线</Status><b>客服 Copilot</b><span>辅助完成“听、查、答、记”</span></li>
                <li><Status>已上线</Status><b>自助知识问答</b><span>承接标准、高频、低风险问题</span></li>
                <li><Status tone="next">下一阶段</Status><b>任务与状态中心</b><span>查询、办理、跟进、通知与异常转人工</span></li>
              </ol>
            </div>
          </div>
          <div className="service-system visual-panel">
            <div className="diagram-ribbon">客服系统分层架构</div>
            <div className="system-band"><b>客户对象</b><span>专业客户</span><span>普通客户</span><span>渠道服务人员</span><span>投诉与高风险客户</span></div>
            <div className="system-band"><b>服务渠道</b><span>在线客服</span><span>呼叫中心</span><span>企业协作入口</span><span>智能外呼</span><span>消息与通知</span></div>
            <div className="system-apps"><b>业务应用层</b><div><span><strong>客户服务系统</strong>呼入呼出 · IVR · 坐席</span><span><strong>在线客服</strong>前台对话 · 人工接入</span><span><strong>智能工单与坐席辅助</strong>摘要 · 话术 · 字段填写</span><span><strong>客户运营</strong>标签 · 分群 · 任务</span><span><strong>协同处理</strong>分派 · 跟踪 · 反馈</span><span><strong>分析平台</strong>服务 · 工单 · 质检</span></div></div>
            <div className="system-band data"><b>数据资源层</b><span>客户画像库</span><span>员工画像库</span><span>服务记录库</span><span>工单中心库</span><span>行为标签库</span><span>知识库</span><span>评测集</span></div>
            <div className="system-band foundation"><b>基础能力层</b><span>统一身份</span><span>权限体系</span><span>消息平台</span><span>API 网关</span><span>数据同步</span><span>日志监控</span><span>安全防护</span></div>
          </div>
        </section>

        <section className="case-section business-case sales-case" id="sales">
          <SectionTitle
            number="06"
            eyebrow="销售与渠道"
            title="把总部能力，重新组织成一线可以直接使用的专业支持。"
            intro="销售真正需要的不是更多工具，而是围绕一个业务目标，自动组织数据、知识、素材与流程，交付完整的工作准备。"
          />
          <details className="diagram-disclosure">
            <summary>展开查看：销售与渠道 AI 任务编排全图</summary>
            <figure className="case-diagram image-first">
              <Image src="/case-assets/sales-agent-map.png" alt="销售与渠道 AI 任务代理放射式编排图" width={1690} height={950} />
              <figcaption>任务代理：从业务目标出发，动态组合六类 Skills，并交付可直接使用的工作成果。</figcaption>
            </figure>
          </details>
          <div className="thinking-grid compact">
            <article><small>第一阶段的意义</small><h3>先让分散能力真正到达一线</h3><p>统一入口不是最终目标，但它能跑出真实任务、调用和反馈数据，为下一阶段按角色和高价值任务做深提供依据。</p></article>
            <article><small>当前复盘</small><h3>能力聚合不能停留在“功能超市”</h3><p>下一步不再继续增加按钮，而是围绕拜访准备、产品学习和渠道经营等任务，强化目标理解、依赖编排与结果交付。</p></article>
          </div>
          <div className="sales-blueprint visual-panel">
            <div className="diagram-ribbon">销售与渠道任务代理架构</div>
            <div className="sales-goal"><b>业务目标输入</b><span>拜访准备</span><span>产品学习</span><span>客户沟通</span><span>渠道分析</span><span>营销跟进</span></div>
            <div className="sales-orchestrator"><b>任务 Agent</b><div>{['目标理解','上下文补全','任务拆解','依赖编排','Skills 调度','结果检查','交付组装'].map(x=><span key={x}>{x}</span>)}</div></div>
            <div className="sales-capabilities"><b>业务 Skills</b><div><span><strong>渠道洞察</strong>代销情况 · 历史合作 · 机会识别</span><span><strong>产品研究</strong>同类比较 · 特征提取 · 风险说明</span><span><strong>市场观点</strong>行情数据 · 投研观点 · 结构化摘要</span><span><strong>客户服务</strong>问题检索 · 状态查询 · 规则解释</span><span><strong>内容制作</strong>话术 · 海报 · 周报 · 拜访材料</span><span><strong>任务跟进</strong>提醒 · 记录 · 反馈 · 后续行动</span></div></div>
            <div className="sales-tools"><b>工具与数据总线</b><span>内部业务 API</span><span>基金与行情数据</span><span>知识库 / RAG</span><span>内容与图片模型</span><span>企业协作能力</span><span>外部专业数据</span></div>
            <div className="sales-delivery"><b>结果交付</b><span>渠道概览</span><span>产品分析</span><span>市场观点</span><span>沟通话术</span><span>营销素材</span><span>待办与跟进</span></div>
          </div>
          <div className="case-grid">
            <div className="business-story">
              <p className="micro-label">渠道知识服务的演进</p>
              <ol className="vertical-steps compact">
                <li><b>传统内容门户</b><span>用户自己理解目录并寻找材料</span></li>
                <li><b>RAG 知识搜索</b><span>混合检索、来源引用与专业答案</span></li>
                <li><b>工具增强 RAG</b><span>答案同时调用实时基金与业务数据</span></li>
                <li><b>渠道任务 Agent</b><span>围绕学习、沟通和营销目标交付成果</span></li>
              </ol>
            </div>
            <div className="brief-demo ui-demo">
              <div className="demo-bar"><span /><span /><span /><b>拜访准备包</b></div>
              <div className="brief-layout">
                <aside><b>目录</b><span className="active">01 渠道概览</span><span>02 产品分析</span><span>03 市场观点</span><span>04 沟通话术</span><span>05 可用素材</span></aside>
                <div><small>本次目标</small><h4>重点渠道拜访准备</h4><p>系统已完成 6 项子任务并检查信息完整性。</p><div className="brief-metrics"><span><b>6</b>任务完成</span><span><b>4</b>来源类型</span><span><b>2</b>人工复核项</span></div><div className="brief-source">数据与观点均保留来源、期间和截止日</div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section" id="evolution">
          <SectionTitle number="07" eyebrow="产品演进与下一步" title="每一阶段解决一个业务问题，也暴露下一阶段的边界。" intro="演进顺序由业务确定性和使用反馈驱动：先解决生产与查询，再进入任务执行，最后探索长期自主服务。" />
          <figure className="case-diagram image-first">
            <Image src="/case-assets/dual-track-roadmap.png" alt="金融 AI 产品与技术双轴演进路线图" width={1690} height={950} />
            <figcaption>双轴演进：业务产品形态与技术能力同步升级，而不是为了追逐模型而堆叠功能。</figcaption>
          </figure>
          <div className="evolution-table visual-panel">
            <div className="evolution-head"><span>阶段</span><span>业务场景</span><span>已解决的问题</span><span>技术路径</span><span>下一步</span><span>状态</span></div>
            {stageRows.map(([n,paradigm,business,tech,next,status])=><div className="evolution-row" key={n}><span>{n}</span><b>{paradigm}</b><span>{business}</span><span>{tech}</span><span>{next}</span><Status tone={status==='已上线'?'live':status==='演进中'?'evolving':'next'}>{status}</Status></div>)}
            <div className="dual-track" aria-hidden="true"><i/><i/><i/><i/><i/></div>
          </div>
        </section>

        <section className="case-section" id="engineering">
          <SectionTitle
            number="08"
            eyebrow="工程治理与角色贡献"
            title="不仅让能力可用，也让它能够被持续运营。"
            intro="金融 AI 产品的价值不止来自模型效果，还取决于数据边界、评测机制、风险控制和真实业务反馈。"
          />
          <figure className="case-diagram governance-diagram image-first">
            <Image src="/case-assets/governance-control-tower.png" alt="金融 AI 工程治理控制塔" width={1690} height={950} />
            <figcaption>治理控制塔：把数据、知识、评测、权限、风险、运行工程和人工控制纳入同一闭环。</figcaption>
          </figure>
          <div className="governance-grid">
            {[
              [Database,"数据边界","确定性数据来自结构化接口；保留来源、期间、截止日与缺失原因。"],
              [Search,"知识与检索","混合检索、实体识别、来源引用和异常回答设计。"],
              [Workflow,"任务与状态","会话隔离、任务状态、依赖编排、失败恢复与人工接管。"],
              [ShieldCheck,"风险边界","机器预检不替代正式审批；高风险操作保留人工确认。"],
              [Network,"服务接入","MCP、OpenAI 兼容 API 与 HTTP Tool 适配不同智能体入口。"],
              [Layers3,"运行工程","鉴权、限流、加密存储、自动化测试、容器部署与健康检查。"],
            ].map(([Icon,title,text])=>{const C=Icon as typeof Database;return <article key={title as string}><C/><h3>{title as string}</h3><p>{text as string}</p></article>})}
          </div>
          <div className="contribution-summary">
            <header><small>承担范围</small><h3>连接业务判断、产品设计与工程落地</h3><p>不是分别交付几个 AI 功能，而是持续维护同一条营销与服务产品线。</p></header>
            <div><b>产品线规划</b><span>统一内容、客服、销售与渠道的业务主线和阶段目标。</span></div>
            <div><b>场景与流程设计</b><span>拆解真实任务，确定 Workflow、RAG、Agent 与人工的边界。</span></div>
            <div><b>技术路径选择</b><span>定义数据来源、知识检索、Skills、工具接入和结果检查机制。</span></div>
            <div><b>上线与持续运营</b><span>推动使用，建设评测与反馈机制，并据此规划下一阶段。</span></div>
          </div>
        </section>

        <section className="case-section" id="evidence">
          <SectionTitle
            number="09"
            eyebrow="业务结果"
            title="一条产品线，形成三类可衡量的结果。"
          />
          <div className="evidence-grid">
            <article><small>内容生产</small><b>约 1 分钟</b><h3>单份标准物料</h3><p>由数据、知识、生成、检查和视觉输出组成完整生产链。</p></article>
            <article><small>产品覆盖</small><b>500+</b><h3>基金产品</h3><p>支持海报、朋友圈文案、销售话术和基金周报等标准内容。</p></article>
            <article><small>日常使用</small><b>约 2,000</b><h3>日均赋能人次</h3><p>内容生产能力进入真实中后台和一线运营流程。</p></article>
            <article><small>客服响应</small><b>4.8s → 约 1s</b><h3>首字响应</h3><p>通过异步意图预测和并行查询缩短等待时间。</p></article>
            <article><small>客服评测</small><b>约 95%</b><h3>离线意图准确率</h3><p>以真实服务场景构建评测和持续优化机制。</p></article>
            <article><small>服务样本</small><b>8,000+</b><h3>真实服务记录</h3><p>用于场景分析、离线评测与知识优化。</p></article>
            <article><small>统一入口</small><b>千次级</b><h3>周调用量</h3><p>销售围绕产品比较、拜访准备和渠道分析组合调用能力。</p></article>
            <article><small>运行规模</small><b>10 亿+</b><h3>每周 Token 调用</h3><p>反映统一入口和智能任务在真实业务中的持续使用。</p></article>
          </div>
          <div className="closing-statement">
            <p>技术的变化不是目的。</p>
            <h2>真正重要的是：判断每一阶段 AI 能承担什么，并把它组织成下一代产品形态。</h2>
          </div>
        </section>
        <ProjectFooter backHref={backHref}/><ProjectToc title="金融 AI 营销与服务产品线" items={toc}/>
      </div>
    </main>
  );
}
