// Home Decor Ideas - Main JavaScript
// Professional, Interactive Functionality

document.addEventListener('DOMContentLoaded', function() {
  // Header scroll effect
  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });

  // Mobile menu toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      
      // Animate hamburger menu
      const spans = mobileToggle.querySelectorAll('span');
      if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }

  // Close mobile menu on link click
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const spans = mobileToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = header.offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe cards and sections
  document.querySelectorAll('.category-card, .idea-card, .blog-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
  });

  // Newsletter form handling
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('.newsletter-input');
      const email = emailInput.value;
      
      // Simple validation
      if (email && isValidEmail(email)) {
        showNotification('Thank you for subscribing!', 'success');
        emailInput.value = '';
      } else {
        showNotification('Please enter a valid email address.', 'error');
      }
    });
  }

  // Email validation helper
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Notification system
  function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: ${type === 'success' ? '#2C5F4B' : type === 'error' ? '#DC3545' : '#2C5F4B'};
      color: white;
      padding: 1rem 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      z-index: 9999;
      animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  // Add notification animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(400px);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Lazy loading images
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));

  // Search functionality (if search exists)
  const searchInput = document.querySelector('.search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      // Implement search logic here
      console.log('Searching for:', searchTerm);
    });
  }

  // Category filter (if on ideas page)
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');
      
      const category = button.dataset.category;
      filterIdeas(category);
    });
  });

  function filterIdeas(category) {
    const ideaCards = document.querySelectorAll('.idea-card');
    
    ideaCards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 100);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  }

  // Reading progress bar (for blog posts)
  const createProgressBar = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      height: 4px;
      background: linear-gradient(90deg, #D4A574, #2C5F4B);
      z-index: 9998;
      transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.pageYOffset;
      const progress = (scrolled / documentHeight) * 100;
      
      progressBar.style.width = `${progress}%`;
    });
  };

  // Only add progress bar on blog post pages
  if (document.querySelector('.blog-post-content')) {
    createProgressBar();
  }

  // Share buttons functionality
  const shareButtons = document.querySelectorAll('.share-btn');
  shareButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const platform = button.dataset.platform;
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent(document.title);
      
      let shareUrl = '';
      
      switch(platform) {
        case 'facebook':
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
          break;
        case 'twitter':
          shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
          break;
        case 'pinterest':
          shareUrl = `https://pinterest.com/pin/create/button/?url=${url}&description=${title}`;
          break;
        case 'linkedin':
          shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
          break;
      }
      
      if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
      }
    });
  });

  // Back to top button
  const createBackToTop = () => {
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '↑';
    backToTop.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #2C5F4B;
      color: white;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 999;
      box-shadow: 0 4px 15px rgba(44, 95, 75, 0.3);
    `;
    
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 500) {
        backToTop.style.opacity = '1';
        backToTop.style.visibility = 'visible';
      } else {
        backToTop.style.opacity = '0';
        backToTop.style.visibility = 'hidden';
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  };

  createBackToTop();

  // Image modal/lightbox
  const setupImageLightbox = () => {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.9);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 10000;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;
    
    const modalImg = document.createElement('img');
    modalImg.style.cssText = `
      max-width: 90%;
      max-height: 90%;
      object-fit: contain;
    `;
    
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    // Close modal on click
    modal.addEventListener('click', () => {
      modal.style.opacity = '0';
      setTimeout(() => {
        modal.style.display = 'none';
      }, 300);
    });

    // Make clickable images open in modal
    document.querySelectorAll('.idea-image img, .blog-image img, .hero-image img').forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        modal.style.display = 'flex';
        setTimeout(() => {
          modal.style.opacity = '1';
        }, 10);
        modalImg.src = img.src;
      });
    });
  };

  setupImageLightbox();

  // Dynamic year in footer
  const yearElement = document.querySelector('.current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  console.log('Home Decor Ideas website loaded successfully!');
});
