// Projects
const PROJECTS = [
  { name:'Mudabbir', blurb:'A smart money-management dashboard in Arabic: balances, budgets, transactions and monthly bills in one right-to-left interface.', tech:['HTML','CSS'], shot:'shotMudabbir.jpeg', live:'https://yosef-tamer206.github.io/Mudabbir---Financial-Dashboard/', code:'https://github.com/Yosef-Tamer206/Mudabbir---Financial-Dashboard' },
  { name:'Mal3abak', blurb:'A football pitch booking platform in Arabic: browse and filter pitches, pick a date and time slot, book and cancel, with an owner dashboard to open and close slots.', tech:['HTML','CSS','JavaScript'], shot:'shotMal3abak.jpeg', live:'https://yosef-tamer206.github.io/Mal3abak-Pitch-Booking/', code:'https://github.com/Yosef-Tamer206/Mal3abak-Pitch-Booking', tag:'Prototype' },
  { name:'EliteHomes', blurb:'A real-estate landing page with a full property-search panel: location, type, price, bedrooms and area.', tech:['HTML','CSS','Bootstrap'], shot:'shotElitehomes.jpeg', live:'https://yosef-tamer206.github.io/EliteHomes---Your-Dream-Home-Awaits/', code:'https://github.com/Yosef-Tamer206/EliteHomes---Your-Dream-Home-Awaits' },
  { name:'NutriPlan', blurb:'A food, nutrition and fitness planner: browse recipes by cuisine and meal type, with a product scanner and food log.', tech:['HTML','CSS','JavaScript'], shot:'shotNutriplan.jpeg', live:'https://yosef-tamer206.github.io/NutriPlan/', code:'https://github.com/Yosef-Tamer206/NutriPlan' },
  { name:'GameArena', blurb:'A dark, neon games showcase with a bold hero, tournament calls to action and team sections.', tech:['HTML','CSS'], shot:'shotGamearena.jpeg', live:'https://yosef-tamer206.github.io/Games-Website/', code:'https://github.com/Yosef-Tamer206/Games-Website' },
  { name:"What's For Dinner", blurb:'Daily meal inspiration: recipe cards with ingredients, instructions, nutrition and chef tips.', tech:['HTML','CSS','JavaScript'], shot:'shotDinner.jpeg', live:'https://yosef-tamer206.github.io/What-s-For-Dinner/', code:'https://github.com/Yosef-Tamer206/What-s-For-Dinner' },
  { name:'Kanban Task Manager', blurb:'A Trello-style board for managing tasks across To Do, In Progress and Completed, saved in the browser.', tech:['HTML','CSS','JavaScript'], shot:'shotKanban.jpeg', live:'https://yosef-tamer206.github.io/Kanban-Task-Manager/', code:'https://github.com/Yosef-Tamer206/Kanban-Task-Manager', tag:'Prototype' },
];

const grid = document.getElementById('projectsGrid');
for (const p of PROJECTS) {
  const card = document.createElement('article');
  card.className = 'card';
  const tech = p.tech.map(t => `<li>${t}</li>`).join('');
  card.innerHTML = `
    <a class="card-shot" href="${p.live}" target="_blank" rel="noreferrer">
      <img src="${p.shot}" alt="Screenshot of ${p.name}" loading="lazy" width="800" height="499">
      ${p.tag ? `<span class="card-tag">${p.tag}</span>` : ''}
    </a>
    <div class="card-body">
      <h3 class="card-name">${p.name}</h3>
      <p class="card-blurb">${p.blurb}</p>
      <ul class="card-tech">${tech}</ul>
      <div class="card-links">
        <a href="${p.code}" target="_blank" rel="noreferrer">Code</a>
        <a href="${p.live}" target="_blank" rel="noreferrer">Live Demo</a>
      </div>
    </div>`;
  grid.appendChild(card);
}

document.getElementById('year').textContent = new Date().getFullYear();

// Subtle particle network in the hero, paused for reduced motion
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const canvas = document.getElementById('net');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, pts = [], raf;
  const DPR = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    const r = canvas.parentElement.getBoundingClientRect();
    w = r.width; h = r.height;
    canvas.width = w * DPR; canvas.height = h * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    const n = Math.min(70, Math.floor((w * h) / 16000));
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      blue: Math.random() < 0.5
    }));
  }

  function tick() {
    ctx.clearRect(0, 0, w, h);
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i], b = pts[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.hypot(dx, dy);
        if (d < 130) {
          ctx.strokeStyle = `rgba(46,160,238,${(1 - d / 130) * 0.25})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    for (const p of pts) {
      ctx.fillStyle = p.blue ? 'rgba(46,160,238,0.7)' : 'rgba(49,182,127,0.7)';
      ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2); ctx.fill();
    }
    raf = requestAnimationFrame(tick);
  }

  resize();
  tick();
  window.addEventListener('resize', () => { cancelAnimationFrame(raf); resize(); tick(); });
})();
