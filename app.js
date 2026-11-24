// Selected work
const PROJECTS = [
  { name: 'Mudabbir', blurb: 'A smart money-management dashboard in Arabic: balances, budgets, transactions and monthly bills in one right-to-left interface.', tech: ['HTML', 'CSS'], shot: 'shotMudabbir.jpeg', live: 'https://yosef-tamer206.github.io/Mudabbir---Financial-Dashboard/', code: 'https://github.com/Yosef-Tamer206/Mudabbir---Financial-Dashboard', acc: '#31b67f' },
  { name: 'Mal3abak', blurb: 'A football pitch booking platform in Arabic: browse and filter pitches, pick a date and time slot, book and cancel, with an owner dashboard to open and close slots.', tech: ['HTML', 'CSS', 'JavaScript'], shot: 'shotMal3abak.jpeg', live: 'https://yosef-tamer206.github.io/Mal3abak-Pitch-Booking/', code: 'https://github.com/Yosef-Tamer206/Mal3abak-Pitch-Booking', tag: 'Prototype', acc: '#2ea0ee' },
  { name: 'EliteHomes', blurb: 'A real-estate landing page with a full property-search panel: location, type, price, bedrooms and area.', tech: ['HTML', 'CSS', 'Bootstrap'], shot: 'shotElitehomes.jpeg', live: 'https://yosef-tamer206.github.io/EliteHomes---Your-Dream-Home-Awaits/', code: 'https://github.com/Yosef-Tamer206/EliteHomes---Your-Dream-Home-Awaits', acc: '#e0a458' },
  { name: 'NutriPlan', blurb: 'A food, nutrition and fitness planner: browse recipes by cuisine and meal type, with a product scanner and food log.', tech: ['HTML', 'CSS', 'JavaScript'], shot: 'shotNutriplan.jpeg', live: 'https://yosef-tamer206.github.io/NutriPlan/', code: 'https://github.com/Yosef-Tamer206/NutriPlan', acc: '#e05d8a' },
  { name: 'GameArena', blurb: 'A dark, neon games showcase with a bold hero, tournament calls to action and team sections.', tech: ['HTML', 'CSS'], shot: 'shotGamearena.jpeg', live: 'https://yosef-tamer206.github.io/Games-Website/', code: 'https://github.com/Yosef-Tamer206/Games-Website', acc: '#8b5cf6' },
  { name: "What's For Dinner", blurb: 'Daily meal inspiration: recipe cards with ingredients, instructions, nutrition and chef tips.', tech: ['HTML', 'CSS', 'JavaScript'], shot: 'shotDinner.jpeg', live: 'https://yosef-tamer206.github.io/What-s-For-Dinner/', code: 'https://github.com/Yosef-Tamer206/What-s-For-Dinner', acc: '#e0763a' },
  { name: 'Kanban Task Manager', blurb: 'A Trello-style board for managing tasks across To Do, In Progress and Completed, saved in the browser.', tech: ['HTML', 'CSS', 'JavaScript'], shot: 'shotKanban.jpeg', live: 'https://yosef-tamer206.github.io/Kanban-Task-Manager/', code: 'https://github.com/Yosef-Tamer206/Kanban-Task-Manager', tag: 'Prototype', acc: '#38bdf8' },
];

const casesEl = document.getElementById('cases');
PROJECTS.forEach((p, i) => {
  const num = String(i + 1).padStart(2, '0');
  const article = document.createElement('article');
  article.className = 'case';
  article.style.setProperty('--acc', p.acc);
  const tech = p.tech.map(t => `<li>${t}</li>`).join('');
  article.innerHTML = `
    <div class="case-shot"><img src="${p.shot}" alt="${p.name} screenshot" loading="lazy"></div>
    <div class="case-info">
      <p class="case-num">${num}</p>
      <h3 class="case-title">${p.name}${p.tag ? `<span class="case-tag">${p.tag}</span>` : ''}</h3>
      <p class="case-blurb">${p.blurb}</p>
      <ul class="case-tech">${tech}</ul>
      <div class="case-links">
        <a href="${p.code}" target="_blank" rel="noopener">Code</a>
        <a href="${p.live}" target="_blank" rel="noopener">Live Demo</a>
      </div>
    </div>`;
  casesEl.appendChild(article);
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Cairo local time
(function () {
  const el = document.getElementById('cairoTime');
  if (!el) return;
  const fmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Cairo' });
  const tick = () => { el.textContent = fmt.format(new Date()); };
  tick();
  setInterval(tick, 30000);
})();

// Copy email
(function () {
  const toast = document.getElementById('toast');
  let t;
  function copy() {
    const done = () => {
      toast.classList.add('show');
      clearTimeout(t);
      t = setTimeout(() => toast.classList.remove('show'), 1800);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText('yoseftamer206@gmail.com').then(done).catch(done);
    } else { done(); }
  }
  ['copyEmailHero', 'copyEmailFoot'].forEach(id => {
    const b = document.getElementById(id);
    if (b) b.addEventListener('click', copy);
  });
})();
