// nav, progress, parallax
const nav=document.getElementById('nav'),bar=document.getElementById('bar'),pars=document.querySelectorAll('[data-par]');
function onScroll(){const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;
 nav.classList.toggle('s',y>40);bar.style.width=(h>0?y/h*100:0)+'%';
 pars.forEach(p=>{const r=p.parentElement.getBoundingClientRect();p.style.transform='translateY('+((r.top+r.height/2-innerHeight/2)*-.06)+'px)'});}
addEventListener('scroll',onScroll,{passive:true});onScroll();
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv:not(.in)').forEach(el=>io.observe(el));
// menu
const m=document.getElementById('menu');
document.getElementById('burger').onclick=()=>m.classList.add('open');
document.getElementById('close').onclick=()=>m.classList.remove('open');
m.querySelectorAll('a').forEach(a=>a.onclick=()=>m.classList.remove('open'));
// counters
document.querySelectorAll('[data-c]').forEach(b=>b.onclick=()=>{const el=document.getElementById(b.dataset.c),min=b.dataset.c==='a'||b.dataset.c==='r'?1:0;
 el.textContent=Math.min(9,Math.max(min,+el.textContent+ +b.dataset.d))});
// hotel / food / service icons + skyline
const ico=document.getElementById('ico'),N=Math.min(16,Math.round(innerWidth/70));
for(let i=0;i<N;i++){const e=document.createElement('span'),z=30+Math.random()*40;
 e.style.cssText='left:'+Math.random()*96+'%;width:'+z+'px;height:'+z+'px;opacity:'+(.12+Math.random()*.2)+';animation-duration:'+(26+Math.random()*30)+'s;animation-delay:-'+Math.random()*40+'s;'+(i%3==0?'color:var(--aqua)':'');
 e.innerHTML='<svg><use href="#i'+(1+i%8)+'"/></svg>';ico.appendChild(e)}
const sk=document.getElementById('sky');let h='<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d2a3c"/><stop offset="1" stop-color="#06141f"/></linearGradient></defs>';
const bl=[[40,120,70],[130,150,60],[210,100,80],[330,160,70],[760,140,80],[860,110,70],[950,170,60],[1030,125,80],[1120,150,70]];
bl.forEach(b=>{h+='<rect x="'+b[0]+'" y="'+(230-b[1])+'" width="'+b[2]+'" height="'+b[1]+'" fill="url(#g)"/>';
 for(let y=230-b[1]+14;y<216;y+=18)for(let x=b[0]+8;x<b[0]+b[2]-8;x+=16)if(Math.random()>.6)h+='<rect class="w" x="'+x+'" y="'+y+'" width="6" height="8" fill="#d4b27a" opacity=".7" style="animation-delay:-'+(Math.random()*3).toFixed(1)+'s"/>'});
h+='<rect x="440" y="30" width="320" height="200" fill="url(#g)" stroke="rgba(212,178,122,.4)"/><rect x="420" y="20" width="360" height="12" fill="#0d2a3c" stroke="rgba(212,178,122,.4)"/><text x="600" y="62" text-anchor="middle" fill="#d4b27a" font-family="Cormorant Garamond,serif" font-size="26" letter-spacing="10">MORVEE</text>';
for(let y=80;y<200;y+=22)for(let x=458;x<740;x+=24)h+='<rect class="w" x="'+x+'" y="'+y+'" width="10" height="12" fill="#f3d9a4" opacity="'+(Math.random()>.35?.85:.15)+'" style="animation-delay:-'+(Math.random()*3).toFixed(1)+'s"/>';
h+='<path d="M560 230v-34h80v34z" fill="#d4b27a" opacity=".85"/><path d="M600 196v34" stroke="#06141f"/>';
sk.innerHTML=h;