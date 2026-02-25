/* ══════════════════════════════════════════
   LIVE DATE
══════════════════════════════════════════ */
document.getElementById('liveDate').textContent=new Date().toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short',year:'numeric'}).toUpperCase();

/* ══════════════════════════════════════════
   ADOPTION CURVE
══════════════════════════════════════════ */
function drawAdoptionCurve(){
  const canvas=document.getElementById('adoptionCanvas');if(!canvas)return;
  const ctx=canvas.getContext('2d');
  const W=canvas.offsetWidth||500,H=200;canvas.width=W;canvas.height=H;
  const pts=[];
  for(let i=0;i<=100;i++){const x=i/100,y=1/(1+Math.exp(-12*(x-0.5)));pts.push({x:W*0.05+x*W*0.9,y:H*0.85-y*H*0.75});}
  const zones=[{s:0,e:5,c:'rgba(224,114,114,0.09)'},{s:5,e:18,c:'rgba(228,184,74,0.09)'},{s:18,e:50,c:'rgba(99,210,150,0.12)'},{s:50,e:84,c:'rgba(255,255,255,0.025)'},{s:84,e:100,c:'rgba(255,255,255,0.012)'}];
  zones.forEach(z=>{ctx.fillStyle=z.c;ctx.fillRect(W*0.05+(z.s/100)*W*0.9,0,(z.e-z.s)/100*W*0.9,H*0.85);});
  ctx.strokeStyle='rgba(255,255,255,0.03)';ctx.lineWidth=0.5;
  for(let i=0;i<=4;i++){const y=(H*0.85)*i/4;ctx.beginPath();ctx.moveTo(W*0.05,y);ctx.lineTo(W*0.95,y);ctx.stroke();}
  ctx.beginPath();ctx.moveTo(pts[0].x,H*0.85);pts.forEach(p=>ctx.lineTo(p.x,p.y));ctx.lineTo(pts[100].x,H*0.85);ctx.closePath();
  const fg=ctx.createLinearGradient(0,0,W,0);fg.addColorStop(0,'rgba(224,114,114,0.03)');fg.addColorStop(0.35,'rgba(99,210,150,0.06)');fg.addColorStop(1,'rgba(255,255,255,0.01)');ctx.fillStyle=fg;ctx.fill();
  ctx.beginPath();ctx.moveTo(pts[0].x,pts[0].y);pts.forEach(p=>ctx.lineTo(p.x,p.y));
  const lg=ctx.createLinearGradient(0,0,W,0);lg.addColorStop(0,'rgba(224,114,114,0.8)');lg.addColorStop(0.18,'rgba(228,184,74,0.9)');lg.addColorStop(0.5,'rgba(99,210,150,1)');lg.addColorStop(1,'rgba(255,255,255,0.2)');
  ctx.strokeStyle=lg;ctx.lineWidth=2;ctx.stroke();
  const mp=pts[35];
  ctx.beginPath();ctx.arc(mp.x,mp.y,11,0,Math.PI*2);ctx.fillStyle='rgba(99,210,150,0.1)';ctx.fill();
  ctx.beginPath();ctx.arc(mp.x,mp.y,6,0,Math.PI*2);const gw=ctx.createRadialGradient(mp.x,mp.y,0,mp.x,mp.y,6);gw.addColorStop(0,'rgba(99,210,150,1)');gw.addColorStop(1,'rgba(99,210,150,0.5)');ctx.fillStyle=gw;ctx.fill();
  ctx.font='bold 8.5px JetBrains Mono,monospace';ctx.fillStyle='rgba(99,210,150,0.82)';ctx.fillText('← WE ARE HERE',mp.x+14,mp.y-3);
  ctx.font='7.5px JetBrains Mono,monospace';ctx.fillStyle='rgba(236,234,228,0.18)';
  [['INNOVATORS',0.025],['EARLY ADOPTERS',0.1],['EARLY MAJORITY',0.31],['LATE MAJORITY',0.57],['LAGGARDS',0.85]].forEach(([l,p])=>ctx.fillText(l,W*p,H*0.97));
}

/* ══════════════════════════════════════════
   COUNTER + TICKER
══════════════════════════════════════════ */
function animateCounter(el,target,suffix,dur){
  const start=Date.now();
  (function step(){
    const p=Math.min((Date.now()-start)/dur,1),e=1-Math.pow(1-p,3);
    el.textContent=Math.round(e*target)+(suffix||'');
    if(p<1)requestAnimationFrame(step);
  })();
}
let ci=null;
function startLiveCounter(){
  const el=document.getElementById('liveCounter');if(!el)return;
  const hps=20/(7*24*3600),now=new Date(),mon=new Date(now);
  mon.setDate(now.getDate()-((now.getDay()+6)%7));mon.setHours(0,0,0,0);
  let hrs=(now-mon)/1000*hps;
  if(ci)clearInterval(ci);
  ci=setInterval(()=>{hrs+=hps/10;el.textContent=hrs.toFixed(1);},100);
}
function stopLiveCounter(){if(ci)clearInterval(ci);ci=null;}

const TICKER_ITEMS=[
  '72% of enterprises now use AI in at least one business function',
  'Knowledge workers spend 19% of their day searching for info that already exists inside their company',
  'AI-assisted teams report 40% faster task completion rates',
  'Companies adopting AI in 2025–26 are building advantages that compound monthly',
  'The average cost of waiting: 3–5 staff hours lost per person per week',
  'Early adopters build structural advantages late movers cannot buy back at any price',
];
const ti=document.getElementById('tickerInner');
ti.innerHTML=[...TICKER_ITEMS,...TICKER_ITEMS].map(t=>`<div style="font-family:var(--font-m);font-size:0.54rem;letter-spacing:0.06em;color:rgba(236,234,228,0.3);padding:0 26px;display:flex;align-items:center;gap:9px;flex-shrink:0;"><span style="color:var(--g);font-size:0.42rem;letter-spacing:0.2em;text-transform:uppercase;">AI</span>${t}</div>`).join('');
