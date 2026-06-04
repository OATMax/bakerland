/* BakerLand Cafe - theme JS. Native APIs only. */
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

  // 3. Gallery lightbox (native, no deps)
  var lb = document.getElementById('lightbox');
  if (lb) {
    var lbImg = lb.querySelector('.lightbox-img');
    var lbClose = lb.querySelector('.lightbox-close');
    var lastFocus = null;

    var openLightbox = function (src, alt) {
      lastFocus = document.activeElement;
      lbImg.src = src;
      lbImg.alt = alt || 'A larger view of a BakerLand photo';
      lb.hidden = false;
      // next frame so the transition runs from the hidden state
      requestAnimationFrame(function () { lb.classList.add('is-open'); });
      document.body.style.overflow = 'hidden';
      lbClose.focus();
    };
    var closeLightbox = function () {
      lb.classList.remove('is-open');
      document.body.style.overflow = '';
      var done = function () { lb.hidden = true; lbImg.src = ''; lb.removeEventListener('transitionend', done); };
      if (reduce) done(); else lb.addEventListener('transitionend', done);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    };

    document.querySelectorAll('[data-lightbox]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var img = btn.querySelector('img');
        openLightbox(btn.getAttribute('data-lightbox'), img ? img.alt : '');
      });
    });
    lbClose.addEventListener('click', closeLightbox);
    lb.addEventListener('click', function (e) { if (e.target === lb) closeLightbox(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !lb.hidden) closeLightbox();
    });
  }
})();
