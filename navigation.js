/* ══════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════ */
const SLIDES=document.querySelectorAll('.slide');
const TOTAL=SLIDES.length;
const navCont=document.getElementById('navDots');
let current=0;
const NAMES=['Introduction','The AI Moment','Day in the Life','Features','The Problem','Live Demo','Pilot Findings','Adoption Argument','Summary'];
document.getElementById('total').textContent=String(TOTAL).padStart(2,'0');
SLIDES.forEach((_,i)=>{
  const d=document.createElement('button');d.className='nd'+(i===0?' active':'');
  d.setAttribute('data-label',NAMES[i]);d.onclick=()=>goTo(i);navCont.appendChild(d);
});

function onSlideEnter(n){
  stopLiveCounter();
  const tk=document.getElementById('aiTicker');tk.style.display='none';
  if(n===0){
    document.querySelectorAll('.metric-card').forEach((c,i)=>{c.classList.remove('visible');setTimeout(()=>c.classList.add('visible'),180+i*110);});
  }
  if(n===1){
    setTimeout(drawAdoptionCurve,80);
    document.querySelectorAll('#momentStats .mstat').forEach((s,i)=>{
      s.classList.remove('visible');
      setTimeout(()=>{
        s.classList.add('visible');
        const ne=s.querySelector('.mstat-num[data-target]');
        if(ne)animateCounter(ne,parseInt(ne.getAttribute('data-target')),'',800);
      },180+i*160);
    });
  }
  if(n===4){
    document.querySelectorAll('#probList .prob-item').forEach((it,i)=>{it.classList.remove('visible');setTimeout(()=>it.classList.add('visible'),120+i*110);});
    startLiveCounter();
  }
  if(n===6){
    setTimeout(()=>{
      document.querySelectorAll('.fc-num[data-count]').forEach(el=>{animateCounter(el,parseInt(el.getAttribute('data-count')),el.getAttribute('data-suffix')||'',1000);});
    },300);
  }
  if(n===7){
    document.querySelectorAll('#compareGrid .cmp-item').forEach((it,i)=>{it.classList.remove('visible');setTimeout(()=>it.classList.add('visible'),80+i*70);});
    tk.style.display='flex';
  }
  renderScript(n);
}

function goTo(n){
  if(n<0||n>=TOTAL)return;
  SLIDES[current].classList.remove('active');navCont.querySelectorAll('.nd')[current].classList.remove('active');
  current=n;
  SLIDES[current].classList.add('active');navCont.querySelectorAll('.nd')[current].classList.add('active');
  document.getElementById('sc').textContent=String(current+1).padStart(2,'0');
  document.getElementById('pf').style.width=((current+1)/TOTAL*100)+'%';
  document.getElementById('bbInfo').textContent='Slide '+(current+1)+' of '+TOTAL+' — '+NAMES[current];
  onSlideEnter(current);
}

document.addEventListener('keydown',e=>{
  if(document.getElementById('featModal').classList.contains('open'))return;
  if(document.getElementById('cmdOverlay').classList.contains('open'))return;
  if(e.key==='ArrowRight'||e.key==='ArrowDown')goTo(current+1);
  if(e.key==='ArrowLeft'||e.key==='ArrowUp')goTo(current-1);
  if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();openCmd();}
  if(e.key==='s'&&!e.metaKey&&!e.ctrlKey&&document.activeElement.tagName!=='INPUT'){toggleScript();}
});
setTimeout(()=>onSlideEnter(0),100);

