/* ═══════════════════════════════════════════
   PORTFOLIO — script.js
   Read-only: all data hardcoded here.
   To update content, edit the arrays below.
═══════════════════════════════════════════ */

'use strict';

// ── PROJECTS ─────────────────────────────────────────────────────────────────
//  image: exact filename inside assets/  e.g. 'assets/LandingPage.png'
//         Set to null if you have no screenshot yet.
const PROJECTS = [
  {
    title:    'OnCall Platform',
    desc:     'A HYBRID PLATFORM FOR SORSOGONs JOB SEEKERS AND EMPLOYERS',
    tags:     ['PHP', 'CSS', 'HTML'],
    tagColors:['#818cf8', '#34d399', '#fbbf24'],
    emoji:    '🛒',
    gradient: 'linear-gradient(135deg,#312e81,#1e1b4b)',
    liveUrl:  'https://oncallph.com/',
    image:    'assets/LandingPage.png',
    type:     'website'
  },

];



// ── CERTIFICATES ──────────────────────────────────────────────────────────────
//  image:  must be .jpg or .png — browsers CANNOT render a PDF as <img>.
//          Convert your PDF to PNG first, save it in assets/, then set the path.
//          e.g.  image: 'assets/Python_Essentials_2.png'
//  pdfUrl: (optional) path to the original PDF for an "Open PDF" button.
const CERTS = [
  {
    title:  'Python Essentials 2',
    issuer: 'Cisco NetAcad',
    year:   '2024',
    color:  '#fbbf24',
    image:  'assets/spideriyot.png',  // convert PDF→PNG, put here
       pdfUrl: 'assets/spideriyot.png',
  },
  {
    title:  'C++ Essentials 1',
    issuer: 'Cisco NetAcad',
    year:   '2024',
    color:  '#818cf8',
    image:  'assets/c++1.png',
    pdfUrl: null
  },
  {
    title:  'JavaScript Essentials 1',
    issuer: 'Cisco NetAcad',
    year:   '2023',
    color:  '#c084fc',
    image:  'assets/JE1.png',
    pdfUrl: null
  },
    {
    title:  'JavaScript Essentials 2',
    issuer: 'Cisco NetAcad',
    year:   '2023',
    color:  '#c084fc',
    image:  'assets/JE2.png',
    pdfUrl: null
  },
    {
    title:  'Python Essentials 1',
    issuer: 'Cisco NetAcad',
    year:   '2023',
    color:  '#c084fc',
    image:  'assets/PE1.png',
    pdfUrl: null
  },
  {
    title:  'Cybersafe Sanctuaries: Breaking the Screen - Women in the Cyber Workforce',
    issuer: 'Cisco NetAcad',
    year:   '2023',
    color:  '#c084fc',
    image:  'assets/CyberSafe1.png',
    pdfUrl: null
  },
  {
    title:  'Cybersafe Sanctuaries: Building a Digital Fortress for your Kids',
    issuer: 'Cisco NetAcad',
    year:   '2023',
    color:  '#c084fc',
    image:  'assets/CyberSafe2.png',
    pdfUrl: null
  },
];

// ── TECH STACK ────────────────────────────────────────────────────────────────
const TECH_STACK = [
  { name: 'EXCEL',      color: '#34d399' },
  { name: 'POWERBI',       color: '#f87171' },
  { name: 'PYTHON',    color: '#fbbf24' },
  { name: 'SQL',        color: '#a78bfa' },
 
];

// ── NAV ───────────────────────────────────────────────────────────────────────
const burger     = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

function closeMob() {
  burger.classList.remove('open');
  mobileMenu.classList.remove('open');
}

const navAs    = document.querySelectorAll('.nav-a');
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) cur = s.id; });
  navAs.forEach(a => { a.classList.toggle('active', a.getAttribute('href') === '#' + cur); });
}, { passive: true });

// ── REVEAL ON SCROLL ──────────────────────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObs.observe(el));

// ── TABS ──────────────────────────────────────────────────────────────────────
function switchTab(tab, btn) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('pane-' + tab).classList.add('active');
}

// ── RENDER PROJECTS ───────────────────────────────────────────────────────────
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = PROJECTS.map((p, i) => `
    <div class="p-card" onclick="viewProject(${i})">
      <div class="p-card-thumb" style="background:${p.gradient}">
        ${p.image
          ? `<img src="${p.image}" alt="${p.title}"
                  onerror="this.style.display='none';this.nextElementSibling.style.display='block';">
             <span class="thumb-icon" style="display:none;">${p.emoji || '🗂️'}</span>`
          : `<span class="thumb-icon">${p.emoji || '🗂️'}</span>`}
      </div>
      <div class="p-card-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="tags">
          ${p.tags.map((t, ti) => `
            <span class="tag" style="background:${hexA(p.tagColors[ti]||'#818cf8')};color:${p.tagColors[ti]||'#818cf8'};">${t}</span>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// ── RENDER CERTIFICATES ───────────────────────────────────────────────────────
function renderCerts() {
  const grid = document.getElementById('certsGrid');
  if (!grid) return;
  grid.innerHTML = CERTS.map((c, i) => `
    <div class="cert-card" onclick="viewCert(${i})">
      <div class="cert-img-wrap" style="background:linear-gradient(135deg,${hexA2(c.color)},#0f172a)">
        ${c.image
          ? `<img src="${c.image}" alt="${c.title}"
                  onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
             <div class="cert-placeholder-icon" style="display:none;">
               <svg viewBox="0 0 24 24" fill="none" stroke="${c.color}" stroke-width="1.5">
                 <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
               </svg>
               <span style="color:${c.color};font-size:.75rem;font-weight:600;">Click to view</span>
             </div>`
          : `<div class="cert-placeholder-icon">
               <svg viewBox="0 0 24 24" fill="none" stroke="${c.color}" stroke-width="1.5">
                 <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
               </svg>
               <span style="color:${c.color};font-size:.75rem;font-weight:600;">Click to view</span>
             </div>`}
      </div>
      <div class="cert-body">
        <h3>${c.title}</h3>
        <p>${c.issuer} • ${c.year}</p>
      </div>
    </div>
  `).join('');
}

// ── RENDER TECH STACK ─────────────────────────────────────────────────────────
function renderTech() {
  const grid = document.getElementById('techGrid');
  if (!grid) return;
  grid.innerHTML = TECH_STACK.map(t => `
    <div class="tech-chip">
      <svg viewBox="0 0 24 24" fill="none" stroke="${t.color}" stroke-width="1.8">
        ${techSVGPath(t.name)}
      </svg>
      <span>${t.name}</span>
    </div>
  `).join('');
}

function techSVGPath(name) {
  switch (name) {
    case 'HTML5':      return '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>';
    case 'CSS3':       return '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 12h8M8 8h4"/>';
    case 'JavaScript': return '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V7h3a3 3 0 010 6H9"/>';
    case 'PHP':        return '<ellipse cx="12" cy="12" rx="10" ry="5"/><path d="M9 10l1.5 4M13.5 10L15 14"/>';
    case 'SQL':        return '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/><path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/>';
    case 'React':      return '<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>';
    case 'Tailwind':   return '<path d="M6 12c0-3 1.5-4.5 4.5-4.5S15 10.5 15 12s-1.5 4.5-4.5 4.5"/><path d="M15 12c0-3 1.5-4.5 4.5-4.5"/>';
    case 'Vue.js':     return '<path d="M12 2L2 20h20L12 2zM12 8l5 10H7l5-10z"/>';
    case 'Git':        return '<circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M6 8v4a2 2 0 002 2h4M18 8v4a2 2 0 01-2 2h-4"/>';
    case 'Figma':      return '<rect x="8" y="2" width="8" height="8" rx="4"/><rect x="8" y="10" width="8" height="8" rx="0"/><rect x="8" y="18" width="8" height="4" rx="2"/><rect x="2" y="10" width="8" height="8" rx="4"/>';
    case 'Firebase':   return '<path d="M4 20L8 4l4 8 4-12 4 20"/>';
    case 'SASS':       return '<circle cx="12" cy="12" r="9"/><path d="M9 12c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3"/>';
    default:           return '<circle cx="12" cy="12" r="8"/>';
  }
}

// ── PROJECT MODAL ─────────────────────────────────────────────────────────────
// type: 'website'    = keep the existing Live Demo / View Code modal (OnCall)
// type: 'case-study' = show a View Information button for future data projects
function viewProject(i) {
  const p = PROJECTS[i];
  const isCaseStudy = p.type === 'case-study';

  setModal(`
    ${p.image
      ? `<img class="modal-img" src="${p.image}" alt="${p.title}"
              onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
         <div class="modal-icon" style="background:${p.gradient};display:none;">
           <span style="font-size:3.5rem;">${p.emoji || '🗂️'}</span>
         </div>`
      : `<div class="modal-icon" style="background:${p.gradient}">
           <span style="font-size:3.5rem;">${p.emoji || '🗂️'}</span>
         </div>`}
    <h2 class="modal-h2">${p.title}</h2>
    <div class="tags" style="margin-bottom:.75rem;">
      ${p.tags.map((t, ti) => `<span class="tag" style="background:${hexA(p.tagColors[ti]||'#818cf8')};color:${p.tagColors[ti]||'#818cf8'};">${t}</span>`).join('')}
    </div>
    <p class="modal-desc">${p.desc}</p>
    <div class="modal-links">
      ${isCaseStudy
        ? `<button type="button" class="btn-primary" onclick="viewProjectInfo(${i})">📄 View Information</button>`
        : `<a href="${p.liveUrl || '#'}" target="_blank" rel="noopener noreferrer" class="btn-primary">🔗 Live Demo</a>
           <a href="${p.codeUrl || '#'}" target="_blank" rel="noopener noreferrer" class="btn-outline">💻 View Code</a>`}
    </div>
  `);
}

// ── PROJECT DOCUMENTATION / CASE STUDY ─────────────────────────────────────────
function viewProjectInfo(i) {
  const p = PROJECTS[i];
  const d = p.documentation || {};

  const section = (title, content, icon = '•') => {
    if (!content) return '';
    return `
      <section class="doc-section">
        <h3 class="doc-title"><span class="doc-icon">${icon}</span>${title}</h3>
        <div class="doc-content">${content}</div>
      </section>`;
  };

  const list = items => Array.isArray(items)
    ? `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`
    : (items || '');

  setModal(`
    <div class="doc-header">
      <div>
        <div class="section-label" style="margin-bottom:.35rem;">PROJECT CASE STUDY</div>
        <h2 class="modal-h2">${p.title}</h2>
        <div class="tags">
          ${p.tags.map((t, ti) => `<span class="tag" style="background:${hexA(p.tagColors[ti]||'#818cf8')};color:${p.tagColors[ti]||'#818cf8'};">${t}</span>`).join('')}
        </div>
      </div>
    </div>

    ${section('1. Project Overview', d.overview, '01')}
    ${section('2. Problem / Business Question', d.problem, '02')}
    ${section('3. Objective', d.objective, '03')}
    ${section('4. Data Source', d.dataSource, '04')}
    ${section('5. Data Cleaning & Preparation', d.dataCleaning, '05')}
    ${section('6. Analysis & Transformation', d.analysis, '06')}
    ${section('7. Dashboard / Visualization', d.visualization, '07')}
    ${section('8. Key Insights', d.insights, '08')}
    ${section('9. Findings', d.findings, '09')}
    ${section('10. Recommendations', d.recommendations, '10')}
    ${section('11. Tools & Technologies', d.tools, '11')}
    ${section('12. Conclusion', d.conclusion, '12')}

    <div class="doc-footer-note">
      <span>📌</span>
      <span>This project documentation is presented as an end-to-end case study, from data preparation through analysis and recommendations.</span>
    </div>

    <div class="modal-links doc-actions">
      <button type="button" class="btn-outline" onclick="viewProject(${i})">← Back to Project</button>
    </div>
  `, true);
}

// ── CERTIFICATE MODAL ─────────────────────────────────────────────────────────
function viewCert(i) {
  const c = CERTS[i];
  setModal(`
    ${c.image
      ? `<img class="modal-cert-img" src="${c.image}" alt="${c.title}"
              onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
         <div class="cert-img-wrap" style="background:linear-gradient(135deg,${hexA2(c.color)},#0f172a);border-radius:10px;margin-bottom:1rem;height:180px;display:none;">
           <div class="cert-placeholder-icon">
             <svg viewBox="0 0 24 24" fill="none" stroke="${c.color}" stroke-width="1.5" style="width:48px;height:48px;">
               <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
             </svg>
             <span style="color:${c.color};font-size:.85rem;font-weight:600;">Certificate</span>
           </div>
         </div>`
      : `<div class="cert-img-wrap" style="background:linear-gradient(135deg,${hexA2(c.color)},#0f172a);border-radius:10px;margin-bottom:1rem;height:180px;">
           <div class="cert-placeholder-icon">
             <svg viewBox="0 0 24 24" fill="none" stroke="${c.color}" stroke-width="1.5" style="width:48px;height:48px;">
               <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
             </svg>
             <span style="color:${c.color};font-size:.85rem;font-weight:600;">Certificate</span>
           </div>
         </div>`}
    <h2 class="modal-h2">${c.title}</h2>
    <p class="modal-sub">${c.issuer} • ${c.year}</p>
    ${c.pdfUrl
      ? `<div class="modal-links" style="margin-top:1rem;">
           <a href="${c.pdfUrl}" target="_blank" class="btn-outline">📄 Open PDF</a>
         </div>`
      : ''}
  `);
}

// ── MODAL ─────────────────────────────────────────────────────────────────────
const overlay   = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');

function setModal(html, wide = false) {
  modalBody.innerHTML = html;
  document.querySelector('.modal-box').classList.toggle('modal-wide', wide);
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(e) {
  if (e.target === overlay) closeModalDirect();
}
function closeModalDirect() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModalDirect(); });

// ── TOAST ─────────────────────────────────────────────────────────────────────
function showToast(msg, isError = false) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.toggle('error', isError);
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── CONTACT FORM ──────────────────────────────────────────────────────────────
async function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const btn = document.getElementById('submitBtn');

  const name = document.getElementById('fName').value.trim();
  const email = document.getElementById('fEmail').value.trim();
  const message = document.getElementById('fMsg').value.trim();

  if (!name || !email || !message) {
    showToast('Please complete all fields.', true);
    return;
  }

  btn.disabled = true;
  btn.textContent = 'Sending...';

  const formData = new FormData();

  formData.append('name', name);
  formData.append('email', email);
  formData.append('message', message);
  formData.append(
    '_subject',
    'New Portfolio Contact — Marlon Florendo Jr.'
  );

  try {
    const response = await fetch(
      'https://formspree.io/f/mppwwyne',
      {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      }
    );

    if (response.ok) {
      showToast("Message sent! I'll get back to you soon. 🎉");
      form.reset();
    } else {
      showToast(
        'Something went wrong. Please try again.',
        true
      );
    }

  } catch (error) {
    showToast(
      'Unable to send the message. Please try again.',
      true
    );

  } finally {

    btn.disabled = false;

    btn.innerHTML = `
      <svg viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           stroke-width="2"
           style="width:16px;height:16px;">

        <line x1="22" y1="2" x2="11" y2="13"/>

        <polygon points="22 2 15 22 11 13 2 9 22 2"/>

      </svg>

      Send Message
    `;
  }
}

// ── COLOR HELPERS ─────────────────────────────────────────────────────────────
function hexA(hex, a = '.12') {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${a})`;
}
function hexA2(hex) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},.2)`;
}

// ── INIT ──────────────────────────────────────────────────────────────────────
renderProjects();
renderCerts();
renderTech();
