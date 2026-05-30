// ═══════════════════════════════════════════════════════════════════
//  script.js  —  reads CONFIG and powers everything
//  Do NOT edit this — make your changes in config.js
// ═══════════════════════════════════════════════════════════════════

// ── Icons ────────────────────────────────────────────────────────
const ICONS = {
  github:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58 0-.28-.01-1.03-.01-2.02-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
  discord:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`,
  twitter:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  youtube:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
  twitch:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg>`,
  steam:     `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`,
  linkedin:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  email:     `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
  website:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`,
};

// ── Helpers ──────────────────────────────────────────────────────
function make(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls)  e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function hexToRgb(hex) {
  const c = hex.replace('#', '');
  const s = c.length === 3 ? c.split('').map(x => x+x).join('') : c;
  return [parseInt(s.slice(0,2),16), parseInt(s.slice(2,4),16), parseInt(s.slice(4,6),16)];
}

// ── Apply accent color ────────────────────────────────────────────
if (CONFIG.accentColor) {
  try {
    const [r,g,b] = hexToRgb(CONFIG.accentColor);
    const root = document.documentElement;
    root.style.setProperty('--accent',    CONFIG.accentColor);
    root.style.setProperty('--accent-lo', `rgba(${r},${g},${b},0.14)`);
    root.style.setProperty('--accent-md', `rgba(${r},${g},${b},0.38)`);
    root.style.setProperty('--accent-hi', `rgba(${r},${g},${b},0.65)`);
  } catch (_) {}
}

// Apply background color
if (CONFIG.background?.color) {
  document.documentElement.style.setProperty('--bg', CONFIG.background.color);
  document.body.style.background = CONFIG.background.color;
}

// Page title
document.title = CONFIG.name || 'Profile';

// ═════════════════════════════════════════════════════════════════
//  Build profile card
// ═════════════════════════════════════════════════════════════════
const app = document.getElementById('app');
const card = make('div', 'card');

// Avatar
if (CONFIG.avatar) {
  const wrap = make('div', 'avatar-wrap');
  const img  = document.createElement('img');
  img.className = 'avatar';
  img.src       = CONFIG.avatar;
  img.alt       = (CONFIG.name || '') + ' avatar';
  img.onerror   = () => wrap.style.display = 'none';
  wrap.appendChild(img);
  wrap.appendChild(make('div', 'avatar-ring'));
  card.appendChild(wrap);
}

// Name
if (CONFIG.name) card.appendChild(make('h1', 'name', CONFIG.name));

// Bio
if (CONFIG.bio) card.appendChild(make('p', 'bio', CONFIG.bio));

// Divider (only if there are links)
if (CONFIG.links && CONFIG.links.length > 0) {
  card.appendChild(make('div', 'divider'));

  const linksDiv = make('div', 'links');
  CONFIG.links.forEach(link => {
    const a     = document.createElement('a');
    a.className = 'link-btn';
    a.href      = link.url || '#';
    a.target    = link.url?.startsWith('mailto:') ? '_self' : '_blank';
    a.rel       = 'noopener noreferrer';
    a.innerHTML = (ICONS[link.icon] || ICONS.website) + `<span>${link.label}</span>`;
    linksDiv.appendChild(a);
  });
  card.appendChild(linksDiv);
}

app.appendChild(card);

// ═════════════════════════════════════════════════════════════════
//  Background canvas
// ═════════════════════════════════════════════════════════════════
const canvas = document.getElementById('bg-canvas');
const ctx    = canvas.getContext('2d');

let mouseX = 0, mouseY = 0;
window.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const bgType = CONFIG.background?.type || 'particles';

// ── Particles ────────────────────────────────────────────────────
if (bgType === 'particles') {
  const [r,g,b] = CONFIG.accentColor ? hexToRgb(CONFIG.accentColor) : [130,100,220];
  const count   = Math.min(90, Math.floor(window.innerWidth * window.innerHeight / 11000));

  const particles = Array.from({ length: count }, () => ({
    x:        Math.random() * canvas.width,
    y:        Math.random() * canvas.height,
    size:     Math.random() * 2.2 + 0.4,
    vx:       (Math.random() - 0.5) * 0.35,
    vy:       (Math.random() - 0.5) * 0.35,
    opacity:  Math.random() * 0.45 + 0.15,
    parallax: Math.random() * 0.018 + 0.004,
  }));

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cx = (mouseX - canvas.width  / 2) * 0.012;
    const cy = (mouseY - canvas.height / 2) * 0.012;

    for (const p of particles) {
      p.x += p.vx + cx * p.parallax;
      p.y += p.vy + cy * p.parallax;
      if (p.x < -5) p.x = canvas.width  + 5;
      if (p.x > canvas.width  + 5) p.x = -5;
      if (p.y < -5) p.y = canvas.height + 5;
      if (p.y > canvas.height + 5) p.y = -5;

      ctx.globalAlpha = p.opacity;
      ctx.fillStyle   = `rgb(${r},${g},${b})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(drawParticles);
  }
  drawParticles();
}

// ── Snow ─────────────────────────────────────────────────────────
else if (bgType === 'snow') {
  const count  = Math.min(130, Math.floor(window.innerWidth * window.innerHeight / 7000));
  const flakes = Array.from({ length: count }, () => ({
    x:       Math.random() * canvas.width,
    y:       Math.random() * canvas.height,
    size:    Math.random() * 3.5 + 0.8,
    speed:   Math.random() * 1.0 + 0.3,
    wind:    (Math.random() - 0.5) * 0.3,
    opacity: Math.random() * 0.65 + 0.25,
  }));

  function drawSnow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const f of flakes) {
      f.y += f.speed;
      f.x += f.wind;
      if (f.y > canvas.height + 5) { f.y = -5; f.x = Math.random() * canvas.width; }
      ctx.globalAlpha = f.opacity;
      ctx.fillStyle   = '#ffffff';
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(drawSnow);
  }
  drawSnow();
}

// ── Stars ─────────────────────────────────────────────────────────
else if (bgType === 'stars') {
  const [r,g,b] = CONFIG.accentColor ? hexToRgb(CONFIG.accentColor) : [130,100,220];
  const count   = Math.min(160, Math.floor(window.innerWidth * window.innerHeight / 5500));
  const stars   = Array.from({ length: count }, () => ({
    x:          Math.random() * canvas.width,
    y:          Math.random() * canvas.height,
    size:       Math.random() * 1.8 + 0.2,
    twinkle:    Math.random() * Math.PI * 2,
    speed:      Math.random() * 0.025 + 0.008,
    parallax:   Math.random() * 0.015 + 0.002,
  }));

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cx = (mouseX - canvas.width  / 2) * 0.015;
    const cy = (mouseY - canvas.height / 2) * 0.015;

    for (const s of stars) {
      s.twinkle += s.speed;
      const opacity = 0.35 + Math.sin(s.twinkle) * 0.38;
      ctx.globalAlpha = Math.max(0, opacity);
      ctx.fillStyle   = `rgb(${r},${g},${b})`;
      ctx.beginPath();
      ctx.arc(s.x + cx * s.parallax * 60, s.y + cy * s.parallax * 60, s.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(drawStars);
  }
  drawStars();
}

// ═════════════════════════════════════════════════════════════════
//  Custom cursor
// ═════════════════════════════════════════════════════════════════
const dot = document.getElementById('cursor-dot');

if (CONFIG.cursor === 'glow') {
  document.body.classList.add('glow-cursor');
  let cx = 0, cy = 0;

  document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });

  (function animCursor() {
    cx += (mouseX - cx) * 0.14;
    cy += (mouseY - cy) * 0.14;
    dot.style.left = cx + 'px';
    dot.style.top  = cy + 'px';
    requestAnimationFrame(animCursor);
  })();

  // Scale on hover
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => dot.style.transform = 'translate(-50%,-50%) scale(1.8)');
    el.addEventListener('mouseleave', () => dot.style.transform = 'translate(-50%,-50%) scale(1)');
  });
} else {
  dot.style.display = 'none';
}

// ═════════════════════════════════════════════════════════════════
//  Music player
// ═════════════════════════════════════════════════════════════════
if (CONFIG.music?.enabled && CONFIG.music?.url) {
  const player    = document.getElementById('music-player');
  const disc      = document.getElementById('music-disc');
  const btn       = document.getElementById('music-btn');
  const iconPlay  = document.getElementById('icon-play');
  const iconPause = document.getElementById('icon-pause');
  const titleEl   = document.getElementById('music-title-el');
  const bars      = document.getElementById('music-bars');
  const audio     = document.getElementById('audio-el');

  audio.src = CONFIG.music.url;
  if (CONFIG.music.title) titleEl.textContent = CONFIG.music.title;

  player.hidden = false;

  let playing = false;

  function setPlaying(state) {
    playing          = state;
    iconPlay.hidden  = state;
    iconPause.hidden = !state;
    bars.classList.toggle('playing', state);
    disc.classList.toggle('spinning', state);
    player.classList.toggle('playing', state);
  }

  btn.addEventListener('click', () => {
    if (!playing) {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      audio.pause();
      setPlaying(false);
    }
  });

  audio.addEventListener('ended', () => setPlaying(false));
}
