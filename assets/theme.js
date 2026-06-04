/* BakerLand Cafe — theme JS. Native APIs only. */
(function () {
  // 1. Scroll reveal via IntersectionObserver
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var supports = 'IntersectionObserver' in window;
  if (reduce || !supports) {
    document.querySelectorAll('.reveal, .reveal-r').forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal, .reveal-r').forEach(function (el) { io.observe(el); });
  }

  // 2. Header background opacity on scroll
  var header = document.querySelector('header[data-stick]');
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 16) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
