// =============================
// MENU TOGGLE LOGIC
// =============================
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-menu');
const overlayMenu = document.querySelector('.overlay-menu');
const menuLinks = document.querySelectorAll('.overlay-menu nav a');

function toggleMenu() {
  if (!overlayMenu) return;
  overlayMenu.classList.toggle('active');
}

if (menuBtn) menuBtn.addEventListener('click', toggleMenu);
if (closeBtn) closeBtn.addEventListener('click', toggleMenu);


menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (!overlayMenu) return;
    overlayMenu.classList.remove('active');
  });
});


// =============================
// SWIPER INITIALIZATION
// =============================
if (document.querySelector(".mySwiper") && typeof Swiper !== "undefined") {
  
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      }
    }
  });
}


// =============================
// COOKIE CONSENT LOGIC (SAFE)
// =============================
const cookieBanner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('accept-cookies');

if (cookieBanner && acceptBtn) {
  if (!localStorage.getItem('cookiesAccepted')) {
    setTimeout(() => {
      cookieBanner.classList.add('show');
    }, 2000);
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.classList.remove('show');
  });
}


// =============================
// INTRO LOGO ANIMATION (INDEX ONLY)
// Requires: #intro and #introLogo in index.html
// =============================
document.documentElement.classList.add('is-loading');

window.addEventListener('DOMContentLoaded', async () => {
  const intro = document.getElementById('intro');
  const introLogo = document.getElementById('introLogo');
  const headerLogo = document.querySelector('.logo-wrapper');

  if (!intro || !introLogo || !headerLogo) {
    document.documentElement.classList.remove('is-loading');
    return;
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    intro.remove();
    document.documentElement.classList.remove('is-loading');
    return;
  }

  try {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }
  } catch (_) {}

  await new Promise(r => setTimeout(r, 200));

  requestAnimationFrame(() => {
  const targetRect = headerLogo.getBoundingClientRect();
  const introRect = introLogo.getBoundingClientRect();

  const introCenterX = introRect.left + introRect.width / 2;
  const introCenterY = introRect.top + introRect.height / 2;

  const targetCenterX = targetRect.left + targetRect.width / 2;
  const targetCenterY = targetRect.top + targetRect.height / 2;

  const dx = targetCenterX - introCenterX;
  const dy = targetCenterY - introCenterY;

  const scaleX = targetRect.width / introRect.width;
  const scaleY = targetRect.height / introRect.height;

  const finalScale = Math.min(scaleX, scaleY);

  introLogo.style.transform = 'scale(1.15)';
  introLogo.style.transition = 'transform 300ms ease';

  setTimeout(() => {
    introLogo.style.transition =
      'transform 1200ms cubic-bezier(.16,1,.3,1)';

    introLogo.style.transform =
      `translate(${dx}px, ${dy}px) scale(${finalScale})`;

    setTimeout(() => {
      intro.classList.add('is-done');
      document.documentElement.classList.remove('is-loading');
      setTimeout(() => intro.remove(), 600);
    }, 300);

  }, 350);
});

});



// =============================
// SCROLL REVEAL (IntersectionObserver)
// =============================
window.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const selector = [
    'section',
    '.product-card',
    '.trust-item',
    '.review-card-clean',
    '.split-text',
    '.split-image',
    '.partner-item',
    '.footer-col',
    '.gallery-item' 
  ].join(',');

  const elements = Array.from(document.querySelectorAll(selector))
    .filter(el => !el.closest('#intro'));

  elements.forEach((el, i) => {
    el.classList.add('reveal');

    
    if (el.classList.contains('product-card') ||
        el.classList.contains('trust-item') ||
        el.classList.contains('review-card-clean') ||
        el.classList.contains('gallery-item')) {
      el.style.transitionDelay = `${Math.min(i * 35, 180)}ms`;
    }
  });

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in-view');
      obs.unobserve(entry.target);
    });
  }, {
    threshold: 0.02, 
    rootMargin: '0px 0px 0px 0px' 
  });

  elements.forEach(el => io.observe(el));
});


// =============================
// TRANSPARENT HEADER ON SCROLL
// =============================
const siteHeader = document.querySelector('.site-header');
if (document.body.classList.contains('home-page') && siteHeader) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }
    });
}

// =============================
// HERO SWIPER INITIALIZATION
// =============================
if (document.querySelector(".heroSwiper") && typeof Swiper !== "undefined") {
    new Swiper(".heroSwiper", {
        slidesPerView: 1,
        loop: true,
        effect: "fade", 
        autoplay: {
            delay: 4500, 
            disableOnInteraction: false,
        },
        speed: 1200,
    });
}

// =============================
// ANIMATED NUMBER COUNTERS
// =============================
const counters = document.querySelectorAll('.counter');
if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const suffix = counter.getAttribute('data-suffix') || '';
                const duration = 2000; 
                const increment = target / (duration / 16); 
                
                let current = 0;
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.innerText = Math.ceil(current) + suffix;
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target + suffix;
                    }
                };
                updateCounter();
                observer.unobserve(counter); 
            }
        });
    }, { threshold: 0.5 }); 

    counters.forEach(counter => counterObserver.observe(counter));
}