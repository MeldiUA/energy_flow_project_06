//============================ STICKY NAVIGATION ===========================

const sectionHeroEl = document.querySelector('.hero');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add('sticky');
    } else {
      document.body.classList.remove('sticky');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-274px',
  }
);
obs.observe(sectionHeroEl);

const obsAnim = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add('sticky-animation');
    } else {
      document.body.classList.remove('sticky-animation');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-72px',
  }
);
obsAnim.observe(sectionHeroEl);

//=========================== /STICKY NAVIGATION ===========================