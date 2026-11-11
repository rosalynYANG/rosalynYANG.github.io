const root = document.querySelector('.experience');
const viewport = document.querySelector('#viewport');
const stage = document.querySelector('#world-strip');
const card = document.querySelector('.exhibit-card');
const backdrop = document.querySelector('.modal-backdrop');
const toast = document.querySelector('.toast');
const revealZone = document.querySelector('.sheep-reveal-zone');

const content = {
  projects:{k:'AI PROJECTS',t:'三个真实落地的 AI 项目',s:'从金融业务、情绪陪伴到文化讲解，分别验证 AI 如何进入真实场景并交付结果。',rows:[],tags:[],projects:true},
  finance:{k:'PROJECT 01 · FLAGSHIP SYSTEM',t:'金融 AI 营销与服务系统',s:'面向一线营销与服务场景，把资料、数据、判断、内容和合规边界连接成可持续运行的 AI 工作系统。',rows:[['一线任务工作流','连接知识问答、素材搜索、产品研究、报告生成、渠道准备与市场事件响应。'],['可信的金融表达','重要数据保留来源、期间、截止日与缺失原因；机器负责预检，人工保留最终审核。'],['端到端交付','从 Agent 与 Skills 设计，到 MCP／API 接入、鉴权限流、自动化测试和服务器部署。']],tags:['AI 产品设计','金融业务','Agent','Skills','MCP','服务部署'],detail:[['我解决的不是聊天框','一线工作真正困难的是资料分散、数据口径复杂、内外表达边界不同，以及生成内容仍需复核。我把系统设计为任务型工作流，而不是万能问答框。'],['七类已经实现的任务','金融知识与客户服务、营销素材 AI 搜索、产品研究对比、内容与报告生成、合规预检、渠道拜访准备，以及市场事件转行动。'],['可信的金融数据','关键指标保留来源、单位、期间、截止日和缺失原因；缺失值不写成零，排名信息不完整时不展示精确名次。'],['人与 AI 的边界','机器负责检索、组织、生成和风险预检；正式审核、授权与留痕仍由人完成。内部准备稿和外部沟通稿采用不同表达边界。'],['多入口 Agent 服务','同一能力可通过 MCP、OpenAI 兼容 API 和 HTTP Tool 接入不同智能体与工作台，并保持多轮业务上下文。'],['可以长期运行的工程','覆盖会话隔离、API 鉴权、按调用方限流、链接安全、凭证加密存储、容器部署、健康检查和自动化测试。'],['我的角色','负责金融业务抽象、AI 产品结构、Agent 与 Skill 工作流、知识与数据规则，以及从服务实现到服务器部署的端到端交付。']]},
  flower:{k:'PROJECT 02 · LIVE PRODUCT',t:'真实好花情绪陪伴系统',s:'用真实好花承接难以说清的情绪，让人可以停留、保存、送给自己，也可以借一朵花关心别人。',rows:[['情绪被看见','用花作为柔软媒介，不要求用户先解释或诊断自己的感受。'],['陪伴与表达','保存花卡、送给自己或送给别人，让情绪获得一个轻量出口。'],['审美策展','持续筛选真实、有生命感的花，保证陪伴内容值得停留和珍藏。']],tags:['已上线','微信小程序','情绪陪伴','真实好花']},
  skills:{k:'CAPABILITY LIBRARY',t:'Skills 与自动化能力库',s:'把解决过的问题沉淀成可复用、可组合、可交接的能力。',rows:[['可复用 Skills','把任务边界、调用步骤、数据规则和输出格式固化为稳定流程。'],['持续扩展','能力库会随着真实项目继续增长，而不是只展示单个仓库。']],tags:['GitHub','Skills','Automation'],skills:true},
  experiments:{k:'INCUBATING · AI CULTURAL GUIDE',t:'兴趣驱动的 AI 文化导游',s:'不只复述出土年份和朝代，而是根据用户背景与兴趣，把陌生文化讲进他熟悉的世界。',rows:[['理解用户','结合语言、文化背景、兴趣标签与追问，动态判断最合适的讲解入口。'],['兴趣化讲法','影视用户关联场景与故事，游戏或二次元用户从装备、角色和世界观切入。'],['回到真实历史','兴趣负责引入，可靠知识负责解释事实、制度、工艺与历史语境。']],tags:['正在孵化','视频 AI','文化导游','兴趣化讲解']},
  about:{k:'ABOUT YOUNGSHEEP',t:'关于小样儿',s:'我关注的是怎样把 AI 真正放进人的工作与生活：一条主线是金融营销与服务产品，另一条是从个人兴趣出发持续实践情绪陪伴、文化讲解与自动化 Skills。',rows:[['专业主线','理解复杂金融业务，并把数据、知识、工作流和智能体组织成能够长期运行的产品。'],['个人实验','用真实好花承接情绪，用兴趣化讲法连接文化，也把解决过的问题沉淀成可复用 Skills。']],tags:['AI 产品','金融','创意表达','ENFP'],contact:true}
};

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
let toastTimer, previewLeaveTimer, sheepReactionTimer, cameraX=0, renderFrame=0, motionFrame=0, pointerId=null;
let startPointerX=0, startCameraX=0, previousPointerX=0, previousPointerTime=0, velocity=0;
let dragging=false, moved=false;

const clamp=(value,min,max)=>Math.min(max,Math.max(min,value));
const maxCamera=()=>Math.max(0,stage.scrollWidth-viewport.clientWidth);
const resistance=distance=>Math.pow(Math.max(0,distance),.78)*2.15;
const homePanel=stage.querySelector('.home-panel');
const isMobile=()=>matchMedia('(max-width:820px)').matches;
const homeCamera=()=>isMobile()?clamp(homePanel.offsetWidth*.18,0,maxCamera()):0;
const worldCamera=()=>clamp(homePanel.offsetWidth,0,maxCamera());
const dragLimit=()=>root.dataset.world==='closed'?Math.max(0,homePanel.offsetWidth-viewport.clientWidth):maxCamera();
function renderCamera(){renderFrame=0;stage.style.transform=`translate3d(${-cameraX}px,0,0)`;const region=root.dataset.world==='open'&&cameraX>homePanel.offsetWidth*.72?'world':'home';if(root.dataset.region!==region)root.dataset.region=region;}
function setCamera(value){cameraX=value;if(!renderFrame)renderFrame=requestAnimationFrame(renderCamera);}
function stopMotion(){if(motionFrame)cancelAnimationFrame(motionFrame);motionFrame=0;}
const easeOutQuint=t=>1-Math.pow(1-t,5);
function animateCamera(destination,duration=950){stopMotion();const from=cameraX,to=clamp(destination,0,maxCamera());if(reducedMotion){setCamera(to);return Promise.resolve();}return new Promise(resolve=>{const started=performance.now();const tick=now=>{const p=clamp((now-started)/duration,0,1);setCamera(from+(to-from)*easeOutQuint(p));if(p<1)motionFrame=requestAnimationFrame(tick);else{motionFrame=0;resolve();}};motionFrame=requestAnimationFrame(tick);});}
function say(message){clearTimeout(toastTimer);toast.textContent=message;toast.classList.add('show');toastTimer=setTimeout(()=>toast.classList.remove('show'),1700);}
function wake(){
  const waking=root.dataset.state!=='awake';
  root.dataset.state=waking?'awake':'idle';
  root.classList.remove('sheep-reacting');
  void root.offsetWidth;
  root.classList.add('sheep-reacting');
  clearTimeout(sheepReactionTimer);
  sheepReactionTimer=setTimeout(()=>root.classList.remove('sheep-reacting'),760);
  say(waking?'导航沿着影子出现了。':'导航重新回到羊的身体里。');
}
async function openWorld(){closeCard();closeDrawers();root.dataset.world='open';root.classList.add('opening');await animateCamera(worldCamera(),920);root.classList.remove('opening');say('已经穿过门。现在可以左右拖动这幅长卷。');}
async function home(){closeCard();closeDrawers();root.dataset.state='idle';await animateCamera(homeCamera(),720);root.dataset.world='closed';say('沿着长卷回到入口。');}
function setDrawerPreview(open,{pinned=false}={}){
  root.dataset.drawersPreview=open?'open':'closed';
  root.dataset.drawersPinned=String(open&&pinned);
  document.querySelectorAll('.drawer-front').forEach(button=>button.setAttribute('aria-expanded',String(open)));
}
function closeDrawers(){root.dataset.activeDrawer='none';setDrawerPreview(false);}
function toggleDrawer(key){
  if(root.dataset.drawersPreview!=='open'){
    setDrawerPreview(true);
    say('三个抽屉打开了。再选择你感兴趣的那一格。');
    return;
  }
  openCard(key);
}
function toggleDrawerPin(){
  const pinned=root.dataset.drawersPinned==='true';
  setDrawerPreview(!pinned,{pinned:!pinned});
  say(pinned?'抽屉回到羊的身体里。':'抽屉保持打开，可以选择其中一格。');
}
function closeDetail(){card.classList.remove('detail-open');card.querySelector('.card-detail').setAttribute('aria-hidden','true');card.querySelector('.card-overview').setAttribute('aria-hidden','false');}
function openDetail(){const data=content[card.dataset.contentKey];if(!data?.detail)return;card.querySelector('.detail-kicker').textContent=data.k;card.querySelector('.detail-title').textContent=data.t;card.querySelector('.detail-content').innerHTML=data.detail.map(([a,b],index)=>`<section><span>0${index+1}</span><div><h3>${a}</h3><p>${b}</p></div></section>`).join('');card.classList.add('detail-open');card.querySelector('.card-detail').setAttribute('aria-hidden','false');card.querySelector('.card-overview').setAttribute('aria-hidden','true');card.scrollTop=0;card.querySelector('.card-back').focus({preventScroll:true});}
function openCard(key){
  const from=root.dataset.region==='world'||(root.dataset.world==='open'&&cameraX>innerWidth*.45)?'drawers':'home';
  if(key==='finance'){window.location.href=`/projects/financial-ai-service?from=${from}`;return;}
  if(key==='flower'){window.location.href=`/projects/flower-curation?from=${from}`;return;}
  if(key==='experiments'){window.location.href=`/projects/ai-cultural-guide?from=${from}`;return;}
  const data=content[key];if(!data)return;
  closeDetail();card.dataset.contentKey=key;
  card.querySelector('.card-kicker').textContent=data.k||'';
  card.querySelector('.card-title').textContent=data.t||'';
  card.querySelector('.card-summary').textContent=data.s||'';
  card.querySelector('.card-body').innerHTML=(data.rows||[]).map(([a,b])=>`<article><b>${a}</b><span>${b}</span></article>`).join('');
  card.querySelector('.card-tags').innerHTML=(data.tags||[]).map(tag=>`<span>${tag}</span>`).join('');
  const extra=card.querySelector('.card-extra');
  extra.innerHTML=data.contact?`<div class="contact-panel"><img src="assets/wechat-official-account.jpg" alt="小样儿个人微信公众号二维码"><div class="contact-copy"><small>EMAIL</small><a href="mailto:dhu_rosalyn@sina.com">dhu_rosalyn@sina.com</a><p>扫码关注个人微信公众号。联系渠道仅保留公众号与邮箱。</p></div></div>`:data.projects?`<div class="project-index"><button data-card="finance"><small>01 · 金融营销与服务</small><b>金融领域 AI 产品线</b><span>内容生产、客服、销售与渠道服务</span></button><button data-card="flower"><small>02 · 情绪陪伴</small><b>真实好花</b><span>用真实花承接情绪与表达</span></button><button data-card="experiments"><small>03 · 文化体验</small><b>AI 文化导游</b><span>围绕用户兴趣动态讲解历史</span></button></div>`:data.skills?`<div class="skill-index"><a href="https://github.com/rosalynYANG/icloud-reminders-windows" target="_blank" rel="noopener"><small>WINDOWS AUTOMATION</small><b>iCloud Reminders for Windows</b><span>在 Windows 上管理与自动化 iCloud 提醒事项</span><em>查看 GitHub ↗</em></a><a href="https://github.com/rosalynYANG/investment-report-generator" target="_blank" rel="noopener"><small>FINANCIAL CONTENT</small><b>Investment Report Generator</b><span>面向投资内容生产的报告生成能力</span><em>查看 GitHub ↗</em></a></div>`:'';
  const link=card.querySelector('.card-link');
  link.hidden=!data.detail;
  link.dataset.externalUrl='';
  card.classList.add('open');backdrop.classList.add('open');root.classList.add('reading');card.setAttribute('aria-hidden','false');backdrop.setAttribute('aria-hidden','false');card.querySelector('.card-close').focus({preventScroll:true});
}
function closeCard(){closeDetail();card.classList.remove('open');backdrop.classList.remove('open');root.classList.remove('reading');card.setAttribute('aria-hidden','true');backdrop.setAttribute('aria-hidden','true');}
function beginDrag(event){if((root.dataset.world!=='open'&&!isMobile())||root.classList.contains('reading'))return;stopMotion();pointerId=event.pointerId;startPointerX=previousPointerX=event.clientX;startCameraX=cameraX;previousPointerTime=performance.now();velocity=0;dragging=true;moved=false;viewport.setPointerCapture(pointerId);viewport.classList.add('is-dragging');}
function moveDrag(event){if(!dragging||event.pointerId!==pointerId)return;const delta=event.clientX-startPointerX;if(!moved&&Math.abs(delta)<4)return;moved=true;const now=performance.now(),elapsed=Math.max(1,now-previousPointerTime);velocity=(previousPointerX-event.clientX)/elapsed;previousPointerX=event.clientX;previousPointerTime=now;const raw=startCameraX-delta,max=dragLimit();if(raw<0)setCamera(-resistance(-raw));else if(raw>max)setCamera(max+resistance(raw-max));else setCamera(raw);}
function settleDrag(){if(!dragging)return;dragging=false;pointerId=null;viewport.classList.remove('is-dragging');animateCamera(clamp(cameraX,0,dragLimit()),180);}

document.addEventListener('click',event=>{if(moved){event.preventDefault();event.stopPropagation();moved=false;return;}if(event.target.matches('.modal-backdrop')){closeCard();return;}const target=event.target.closest('button,a');if(!target)return;if(target.dataset.url){window.open(target.dataset.url,'_blank','noopener');return;}if(target.dataset.action==='wake')wake();if(target.dataset.action==='expand')openWorld();if(target.dataset.action==='reveal-drawers')toggleDrawerPin();if(target.dataset.action==='read-detail')openDetail();if(target.dataset.action==='close-detail')closeDetail();if(target.dataset.action==='home'){event.preventDefault();home();}if(target.dataset.drawer)toggleDrawer(target.dataset.drawer);if(target.dataset.card)openCard(target.dataset.card);if(target.matches('.card-close'))closeCard();},true);
revealZone.addEventListener('pointerenter',()=>{clearTimeout(previewLeaveTimer);if(root.dataset.world==='open')setDrawerPreview(true,{pinned:root.dataset.drawersPinned==='true'});});
revealZone.addEventListener('pointerleave',()=>{clearTimeout(previewLeaveTimer);previewLeaveTimer=setTimeout(()=>{if(root.dataset.drawersPinned!=='true'&&!root.classList.contains('reading'))setDrawerPreview(false);},220);});
document.querySelectorAll('[data-drawer-unit]').forEach(unit=>{
  unit.addEventListener('pointerenter',()=>{clearTimeout(previewLeaveTimer);if(root.dataset.world==='open')setDrawerPreview(true,{pinned:root.dataset.drawersPinned==='true'});});
  unit.addEventListener('pointerleave',()=>{clearTimeout(previewLeaveTimer);previewLeaveTimer=setTimeout(()=>{if(root.dataset.drawersPinned!=='true'&&!root.classList.contains('reading'))setDrawerPreview(false);},320);});
});
viewport.addEventListener('pointerdown',beginDrag);viewport.addEventListener('pointermove',moveDrag);viewport.addEventListener('pointerup',settleDrag);viewport.addEventListener('pointercancel',settleDrag);
window.addEventListener('resize',()=>setCamera(root.dataset.world==='closed'?homeCamera():clamp(cameraX,worldCamera(),maxCamera())));
document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeCard();closeDrawers();root.dataset.state='idle';}});
const initialParams=new URLSearchParams(location.search);
const requestedPanel=initialParams.get('panel');
if(initialParams.get('world')==='drawers'){
  root.dataset.world='open';
  setDrawerPreview(true,{pinned:true});
  cameraX=worldCamera();
  renderCamera();
}else{
  cameraX=homeCamera();
  renderCamera();
  if(initialParams.get('state')==='awake')root.dataset.state='awake';
}
if(requestedPanel&&content[requestedPanel])requestAnimationFrame(()=>openCard(requestedPanel));
say('靠近门框，它会先亮起来。');
