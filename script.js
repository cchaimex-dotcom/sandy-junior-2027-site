const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const tabButtons = document.querySelectorAll('[data-tab]');
const panels = document.querySelectorAll('.evidence-panel');
tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    tabButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', String(active));
    });
    panels.forEach((panel) => panel.classList.toggle('hidden', panel.id !== button.dataset.tab));
  });
});

const header = document.querySelector('.site-header');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  header.style.transform = current > lastScroll && current > 100 ? 'translateY(-100%)' : 'translateY(0)';
  lastScroll = current;
}, { passive: true });
