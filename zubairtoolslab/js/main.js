// ===================================
// ZubairToolsLab - Main JavaScript
// Modern, Fast & SEO Optimized
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initTheme();
    initMobileMenu();
    initHeaderScroll();
    initSearch();
    initCategoryFilter();
    initCounterAnimation();
    initSmoothScroll();
    initLazyLoad();
});

// Theme Toggle
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
}

// Header Scroll Effect
function initHeaderScroll() {
    const header = document.getElementById('header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// Search Functionality
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            
            if (query.length >= 2) {
                filterTools(query);
            } else {
                showAllTools();
            }
        });
        
        // Add keyboard shortcut (Ctrl/Cmd + K)
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                searchInput.focus();
            }
        });
    }
}

// Filter Tools by Search
function filterTools(query) {
    const toolsGrid = document.getElementById('toolsGrid');
    if (!toolsGrid) return;
    
    const toolCards = toolsGrid.querySelectorAll('.tool-card');
    
    toolCards.forEach(card => {
        const title = card.querySelector('.tool-title')?.textContent.toLowerCase() || '';
        const description = card.querySelector('.tool-description')?.textContent.toLowerCase() || '';
        const tags = card.querySelectorAll('.tool-tag');
        
        const matchesSearch = title.includes(query) || 
                             description.includes(query) ||
                             Array.from(tags).some(tag => tag.textContent.toLowerCase().includes(query));
        
        card.style.display = matchesSearch ? 'block' : 'none';
    });
}

// Show All Tools
function showAllTools() {
    const toolsGrid = document.getElementById('toolsGrid');
    if (!toolsGrid) return;
    
    const toolCards = toolsGrid.querySelectorAll('.tool-card');
    toolCards.forEach(card => {
        card.style.display = 'block';
    });
}

// Category Filter
function initCategoryFilter() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            filterByCategory(category);
        });
    });
}

// Filter Tools by Category
function filterByCategory(category) {
    const toolsGrid = document.getElementById('toolsGrid');
    if (!toolsGrid) return;
    
    const toolCards = toolsGrid.querySelectorAll('.tool-card');
    
    toolCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            card.classList.add('fade-in');
        } else {
            card.style.display = 'none';
        }
    });
}

// Counter Animation
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Animate Counter
function animateCounter(counter) {
    const target = parseInt(counter.dataset.count);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += step;
        if (current < target) {
            counter.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target.toLocaleString();
        }
    };
    
    updateCounter();
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const navMenu = document.getElementById('navMenu');
                    if (navMenu) {
                        navMenu.classList.remove('active');
                    }
                }
            }
        });
    });
}

// Lazy Load Images
function initLazyLoad() {
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
}

// Load More Tools (Pagination)
function initLoadMore() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const toolsGrid = document.getElementById('toolsGrid');
    
    if (loadMoreBtn && toolsGrid) {
        let visibleCount = 24;
        const tools = Array.from(toolsGrid.querySelectorAll('.tool-card'));
        
        // Hide tools beyond initial count
        tools.slice(visibleCount).forEach(tool => {
            tool.style.display = 'none';
        });
        
        loadMoreBtn.addEventListener('click', () => {
            visibleCount += 24;
            tools.slice(0, visibleCount).forEach(tool => {
                tool.style.display = 'block';
            });
            
            if (visibleCount >= tools.length) {
                loadMoreBtn.style.display = 'none';
            }
        });
        
        // Show/hide button based on total tools
        if (tools.length <= visibleCount) {
            loadMoreBtn.style.display = 'none';
        }
    }
}

// Utility: Debounce Function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Utility: Throttle Function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Service Worker Registration (for PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('SW registered:', registration.scope);
        }).catch(error => {
            console.log('SW registration failed:', error);
        });
    });
}

// Analytics Helper (for tracking tool usage)
function trackToolUsage(toolId) {
    // Placeholder for analytics integration
    // Can be connected to Google Analytics, Plausible, etc.
    if (typeof gtag !== 'undefined') {
        gtag('event', 'tool_use', {
            'event_category': 'engagement',
            'event_label': toolId
        });
    }
}

console.log('ZubairToolsLab initialized successfully! 🛠️');
