(() => {
  const canvas=document.getElementById("snakeCanvas"),ctx=canvas.getContext("2d"),$=id=>document.getElementById(id);
  const N=20,S=520,C=S/N;let snake=[],food={x:10,y:10},dir={x:1,y:0},queued={x:1,y:0},running=false,paused=false,acc=0,last=0,score=0,particles=[],pulse=0;
  let best=Number(localStorage.getItem("srijan-snake-best")||0);$("snakeBest").textContent=best;
  const overlay=$("snakeOverlay");
  function pickFood(){do{food={x:Math.floor(Math.random()*N),y:Math.floor(Math.random()*N)}}while(snake.some(s=>s.x===food.x&&s.y===food.y))}
  function reset(){snake=[{x:7,y:10},{x:6,y:10},{x:5,y:10}];dir={x:1,y:0};queued={x:1,y:0};score=0;acc=0;particles=[];pickFood();hud();draw()}
  function hud(){ $("snakeScore").textContent=score;$("snakeBest").textContent=best;$("snakeLength").textContent=snake.length}
  function start(){reset();running=true;paused=false;$("snakeStatus").textContent="RUNNING";$("snakePause").textContent="PAUSE";overlay.classList.add("is-hidden");last=performance.now();requestAnimationFrame(loop)}
  function gameOver(){running=false;$("snakeStatus").textContent="GARDEN CLOSED";$("snakeOverlayTitle").textContent="Run complete";$("snakeOverlayCopy").textContent="You collected "+score+" fruit"+(score===1?"":"s")+" and grew to length "+snake.length+". Your best is "+best+".";overlay.classList.remove("is-hidden")}
  function setDir(name){const map={up:{x:0,y:-1},down:{x:0,y:1},left:{x:-1,y:0},right:{x:1,y:0}};const d=map[name];if(d&&!(d.x===-dir.x&&d.y===-dir.y))queued=d}
  function tick(){dir=queued;const head={x:snake[0].x+dir.x,y:snake[0].y+dir.y};if(head.x<0||head.y<0||head.x>=N||head.y>=N||snake.some((s,i)=>i<snake.length-1&&s.x===head.x&&s.y===head.y)){gameOver();return}snake.unshift(head);if(head.x===food.x&&head.y===food.y){score++;if(score>best){best=score;localStorage.setItem("srijan-snake-best",best)}for(let i=0;i<16;i++){const a=Math.random()*Math.PI*2;particles.push({x:(food.x+.5)*C,y:(food.y+.5)*C,vx:Math.cos(a)*(40+Math.random()*90),vy:Math.sin(a)*(40+Math.random()*90),life:.55})}pickFood()}else snake.pop();hud()}
  function rounded(x,y,w,h,r){ctx.beginPath();ctx.roundRect(x,y,w,h,r)}
  function draw(){ctx.clearRect(0,0,S,S);ctx.fillStyle="#0a1722";ctx.fillRect(0,0,S,S);for(let y=0;y<N;y++)for(let x=0;x<N;x++){ctx.fillStyle=(x+y)%2?"#0d1d29":"#0b1924";ctx.fillRect(x*C,y*C,C,C)}
    ctx.strokeStyle="#9af17f10";ctx.lineWidth=1;for(let i=0;i<=N;i++){ctx.beginPath();ctx.moveTo(i*C,0);ctx.lineTo(i*C,S);ctx.stroke();ctx.beginPath();ctx.moveTo(0,i*C);ctx.lineTo(S,i*C);ctx.stroke()}
    pulse=(pulse+.045)%1;const fr=8+Math.sin(pulse*6.28)*2;ctx.shadowColor="#ffdd79";ctx.shadowBlur=18;ctx.fillStyle="#ffdf74";ctx.beginPath();ctx.arc((food.x+.5)*C,(food.y+.5)*C,fr,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;ctx.fillStyle="#fff8cd";ctx.beginPath();ctx.arc((food.x+.34)*C,(food.y+.32)*C,3,0,Math.PI*2);ctx.fill();
    snake.forEach((seg,i)=>{const pad=2+i*.015;const x=seg.x*C+pad,y=seg.y*C+pad,w=C-pad*2;ctx.shadowColor=i?"#73df73":"#b7ff90";ctx.shadowBlur=i===0?15:5;ctx.fillStyle=i===0?"#b8ff8c":i%2?"#65cf79":"#4bbc76";rounded(x,y,w,w,7);ctx.fill()});ctx.shadowBlur=0;
    if(snake.length){const h=snake[0],cx=(h.x+.5)*C,cy=(h.y+.5)*C;ctx.fillStyle="#173b37";const ox=dir.x===1?5:dir.x===-1?-5:0,oy=dir.y===1?5:dir.y===-1?-5:0;ctx.beginPath();ctx.arc(cx+ox+(dir.y===0?0:-4),cy+oy+(dir.x===0?0:-4),2.3,0,6.28);ctx.arc(cx+ox+(dir.y===0?0:4),cy+oy+(dir.x===0?0:4),2.3,0,6.28);ctx.fill()}
    for(const p of particles){ctx.globalAlpha=Math.max(0,p.life*1.8);ctx.fillStyle="#ffdc70";ctx.beginPath();ctx.arc(p.x,p.y,3,0,6.28);ctx.fill()}ctx.globalAlpha=1;
  }
  function loop(now){if(!running)return;const dt=Math.min((now-last)/1000,.05);last=now;acc+=dt;const step=Math.max(.075,.16-score*.002);while(acc>step&&running){acc-=step;tick()}for(const p of particles){p.x+=p.vx*dt;p.y+=p.vy*dt;p.life-=dt}particles=particles.filter(p=>p.life>0);draw();if(running)requestAnimationFrame(loop)}
  const keys={ArrowUp:"up",w:"up",W:"up",ArrowDown:"down",s:"down",S:"down",ArrowLeft:"left",a:"left",A:"left",ArrowRight:"right",d:"right",D:"right"};
  window.addEventListener("keydown",e=>{if(keys[e.key]){e.preventDefault();setDir(keys[e.key])}if(e.key===" "&&running){e.preventDefault();if(paused)resume()}});
  document.querySelectorAll("[data-dir]").forEach(b=>b.addEventListener("click",()=>setDir(b.dataset.dir)));
  $("snakeStart").addEventListener("click",start);$("snakeAgain").addEventListener("click",start);$("snakePause").addEventListener("click",()=>{if(!running)return;if(paused)resume();else{paused=true;running=false;$("snakeStatus").textContent="PAUSED";$("snakePause").textContent="RESUME";$("snakeOverlayTitle").textContent="Take a breather";$("snakeOverlayCopy").textContent="Your snake is safe. Resume when ready.";overlay.classList.remove("is-hidden")}});function resume(){paused=false;running=true;$("snakeStatus").textContent="RUNNING";$("snakePause").textContent="PAUSE";overlay.classList.add("is-hidden");last=performance.now();requestAnimationFrame(loop)}
  reset();$("snakeStatus").textContent="READY";
})();
