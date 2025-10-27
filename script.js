// Navigation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
const navBtns = document.querySelectorAll('.nav-btn');

function showSection(id) {
  sections.forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if(link.dataset.target === id) link.classList.add('active');
  });
}

showSection('home');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showSection(link.dataset.target);
  });
});
navBtns.forEach(btn => {
  btn.addEventListener('click', () => showSection(btn.dataset.next));
});

// 🌧️ Rain effect
const rainCanvas = document.getElementById('rain');
const rctx = rainCanvas.getContext('2d');
rainCanvas.width = innerWidth;
rainCanvas.height = innerHeight;

let drops = [];
for(let i=0; i<250; i++){
  drops.push({
    x: Math.random() * rainCanvas.width,
    y: Math.random() * rainCanvas.height,
    length: Math.random() * 15 + 15,
    speed: Math.random() * 4 + 4
  });
}

function drawRain(){
  rctx.clearRect(0,0,rainCanvas.width,rainCanvas.height);
  rctx.strokeStyle = 'rgba(255,255,255,0.3)';
  rctx.lineWidth = 1;
  drops.forEach(d=>{
    rctx.beginPath();
    rctx.moveTo(d.x,d.y);
    rctx.lineTo(d.x,d.y+d.length);
    rctx.stroke();
    d.y += d.speed;
    if(d.y > rainCanvas.height) d.y = -20;
  });
  requestAnimationFrame(drawRain);
}
drawRain();

// 🫧 Bubble effect
const bubbleCanvas = document.getElementById('bubbles');
const bctx = bubbleCanvas.getContext('2d');
bubbleCanvas.width = innerWidth;
bubbleCanvas.height = innerHeight;

let bubbles = [];
for(let i=0;i<50;i++){
  bubbles.push({
    x: Math.random()*bubbleCanvas.width,
    y: Math.random()*bubbleCanvas.height,
    r: Math.random()*6+2,
    speed: Math.random()*1+0.5
  });
}

function drawBubbles(){
  bctx.clearRect(0,0,bubbleCanvas.width,bubbleCanvas.height);
  bctx.fillStyle='rgba(255,255,255,0.2)';
  bubbles.forEach(b=>{
    bctx.beginPath();
    bctx.arc(b.x,b.y,b.r,0,Math.PI*2);
    bctx.fill();
    b.y -= b.speed;
    if(b.y < -10){ b.y = bubbleCanvas.height + 10; b.x = Math.random()*bubbleCanvas.width; }
  });
  requestAnimationFrame(drawBubbles);
}
drawBubbles();

window.addEventListener('resize', ()=>{
  rainCanvas.width = bubbleCanvas.width = innerWidth;
  rainCanvas.height = bubbleCanvas.height = innerHeight;
});
