document.addEventListener('DOMContentLoaded', function() {

  // --- 1. EFECTO DE NAVEGACIÓN CON SCROLL ---
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // --- 2. AJUSTE DINÁMICO DEL PADDING SUPERIOR ---
  function adjustMainPadding() {
    const header = document.querySelector('header');
    if (header) {
      const headerHeight = header.offsetHeight;
      document.querySelector('main').style.paddingTop = `${headerHeight + 20}px`;
    }
  }
  adjustMainPadding();
  window.addEventListener('resize', adjustMainPadding);

  // --- 3. ANIMACIÓN DE ELEMENTOS ESTÁTICOS AL HACER SCROLL ---
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  if (animatedElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    animatedElements.forEach(el => observer.observe(el));
  }

  // --- 4. MENÚ MÓVIL ---
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('is-open');
    });
  }

  // --- 5. LÓGICA DEL CARRUSEL ---
  const carouselContainer = document.querySelector('.carousel-container');
  let autoScrollInterval;
  if (carouselContainer) {
    const nextBtn = document.querySelector('.carousel-btn.next');
    const prevBtn = document.querySelector('.carousel-btn.prev');

    const scrollNext = () => {
      const scrollAmount = carouselContainer.clientWidth;
      if (carouselContainer.scrollLeft + scrollAmount + 1 >= carouselContainer.scrollWidth) {
        carouselContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carouselContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };

    const scrollPrev = () => {
      const scrollAmount = carouselContainer.clientWidth;
      if (carouselContainer.scrollLeft === 0) {
        carouselContainer.scrollTo({ left: carouselContainer.scrollWidth, behavior: 'smooth' });
      } else {
        carouselContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    };

    nextBtn.addEventListener('click', scrollNext);
    prevBtn.addEventListener('click', scrollPrev);
    
    const startAutoScroll = () => {
      stopAutoScroll();
      autoScrollInterval = setInterval(scrollNext, 5000);
    };

    const stopAutoScroll = () => {
      clearInterval(autoScrollInterval);
    };

    startAutoScroll();
    carouselContainer.addEventListener('mouseenter', stopAutoScroll);
    carouselContainer.addEventListener('mouseleave', startAutoScroll);
    nextBtn.addEventListener('mouseenter', stopAutoScroll);
    prevBtn.addEventListener('mouseenter', stopAutoScroll);
    nextBtn.addEventListener('mouseleave', startAutoScroll);
    prevBtn.addEventListener('mouseleave', startAutoScroll);
  }
  
  // --- 6. VALIDACIÓN DE FORMULARIO DE CONTACTO ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const formMessage = document.getElementById('formMessage');
      
      formMessage.style.display = 'block';
      
      if (!name || !email || !message) {
        formMessage.textContent = 'Por favor, completa todos los campos.';
        formMessage.className = 'form-message error';
        return;
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formMessage.textContent = 'Por favor, ingresa un correo electrónico válido.';
        formMessage.className = 'form-message error';
        return;
      }
      
      formMessage.textContent = '¡Gracias por tu mensaje! Nos pondremos en contacto pronto.';
      formMessage.className = 'form-message success';
      contactForm.reset();
    });
  }
});