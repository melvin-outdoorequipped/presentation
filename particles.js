/* ══════════════════════════════════════════
   PARTICLE CANVAS
══════════════════════════════════════════ */
(function(){
  const canvas=document.getElementById('bgCanvas'),ctx=canvas.getContext('2d');
  let W,H,particles=[],mouse={x:-999,y:-999};
  function resize(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;}
  window.addEventListener('resize',resize);
  window.addEventListener('mousemove',e=>{mouse.x=e.clientX;mouse.y=e.clientY;});
  resize();
  const COLORS=['rgba(99,210,150,','rgba(228,184,74,','rgba(106,173,220,'];
  class P{
    constructor(){this.reset();}
    reset(){
      this.x=Math.random()*W;this.y=Math.random()*H;
      this.vx=(Math.random()-0.5)*0.22;this.vy=(Math.random()-0.5)*0.22;
      this.r=Math.random()*1.1+0.3;this.life=Math.random()*Math.PI*2;
      this.baseAlpha=Math.random()*0.3+0.06;
      this.color=COLORS[Math.floor(Math.random()*COLORS.length)];
    }
    update(){
      const dx=mouse.x-this.x,dy=mouse.y-this.y,d=Math.sqrt(dx*dx+dy*dy);
      if(d<140){const f=0.04*(1-d/140);this.vx+=dx/d*f;this.vy+=dy/d*f;}
      this.vx*=0.974;this.vy*=0.974;
      this.x+=this.vx;this.y+=this.vy;
      this.life+=0.025;
      if(this.x<-10||this.x>W+10||this.y<-10||this.y>H+10)this.reset();
    }
    draw(){
      const a=this.baseAlpha*(0.5+0.5*Math.sin(this.life));
      ctx.beginPath();ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
      ctx.fillStyle=this.color+a+')';ctx.fill();
    }
  }
  for(let i=0;i<110;i++)particles.push(new P());
  function drawLines(){
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const dx=particles[i].x-particles[j].x,dy=particles[i].y-particles[j].y,d=Math.sqrt(dx*dx+dy*dy);
        if(d<100){ctx.beginPath();ctx.moveTo(particles[i].x,particles[i].y);ctx.lineTo(particles[j].x,particles[j].y);ctx.strokeStyle='rgba(99,210,150,'+(0.05*(1-d/100))+')';ctx.lineWidth=0.4;ctx.stroke();}
      }
    }
  }
  function animate(){
    ctx.clearRect(0,0,W,H);
    const g1=ctx.createRadialGradient(W*.72,H*.12,0,W*.72,H*.12,W*.5);g1.addColorStop(0,'rgba(99,210,150,0.038)');g1.addColorStop(1,'transparent');ctx.fillStyle=g1;ctx.fillRect(0,0,W,H);
    const g2=ctx.createRadialGradient(W*.15,H*.88,0,W*.15,H*.88,W*.42);g2.addColorStop(0,'rgba(228,184,74,0.025)');g2.addColorStop(1,'transparent');ctx.fillStyle=g2;ctx.fillRect(0,0,W,H);
    const gm=ctx.createRadialGradient(mouse.x,mouse.y,0,mouse.x,mouse.y,100);gm.addColorStop(0,'rgba(99,210,150,0.025)');gm.addColorStop(1,'transparent');ctx.fillStyle=gm;ctx.fillRect(0,0,W,H);
    drawLines();particles.forEach(p=>{p.update();p.draw();});
    requestAnimationFrame(animate);
  }
  animate();
})();

