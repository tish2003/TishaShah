// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initHero();
    initAbout();
    initPortfolio();
    initTestimonials();
    initContact();
    initScrollEffects();
    initScrollToTop();
});

// Navigation functionality
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Hero section functionality
function initHero() {
    // Typing effect for hero subtitle
    const subtitle = document.querySelector('.hero-subtitle');
    const text = 'Software Developer';
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            subtitle.textContent = text.slice(0, index + 1);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typing effect after a delay
    setTimeout(typeWriter, 1000);

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image');

        if (hero && scrolled < hero.offsetHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
}

// About section functionality
function initAbout() {
    const aboutText = document.getElementById('about-description');
    
    // About text content
    const aboutContent = `
       I specialize in transforming raw ideas into digital products—from clean frontends using HTML, CSS & JavaScript to robust backends in Python. I’ve also built scrapers that gather real-time competitor data and customer sentiment, helping businesses make smarter decisions.

    Data isn't just numbers to me—it's a story waiting to be told. I create visual dashboards that uncover insights, speed up decisions, and keep teams aligned.

    Currently seeking opportunities where I can apply this mindset, grow with a purpose-driven team, and build tools that matter.

    Let’s connect and create something impactful!
    `;

    // Simulate loading effect
    setTimeout(() => {
        aboutText.textContent = aboutContent;
    }, 500);

    // Animate skill bars when in view
    const skillBars = document.querySelectorAll('.skill-progress');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                skillBar.style.width = width;
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });

    // Animate stats counter
    const statNumbers = document.querySelectorAll('.stat-item h3');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumber = target.textContent;
                const numericValue = parseInt(finalNumber.replace(/\D/g, ''));
                const suffix = finalNumber.replace(/\d/g, '');
                
                animateCounter(target, 0, numericValue, suffix, 2000);
                statsObserver.unobserve(target);
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
}

// Simplified Portfolio section functionality
function initPortfolio() {
    // Add click tracking for the portfolio button
    const portfolioBtn = document.querySelector('.portfolio .btn-primary');
    if (portfolioBtn) {
        portfolioBtn.addEventListener('click', (e) => {
            // Track the click event
            trackEvent('portfolio_desktop_click');
        });
    }

    // Add hover effects for the desktop preview
    const desktopPreview = document.querySelector('.desktop-preview');
    if (desktopPreview) {
        desktopPreview.addEventListener('mouseenter', () => {
            desktopPreview.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        desktopPreview.addEventListener('mouseleave', () => {
            desktopPreview.style.transform = 'translateY(0) scale(1)';
        });
    }
}

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');
            
            if (filterValue === 'all') {
                renderPortfolio(portfolioItems);
            } else {
                const filteredItems = portfolioItems.filter(item => item.category === filterValue);
                renderPortfolio(filteredItems);
            }
        });
    });

    // Initial render
    renderPortfolio(portfolioItems);


    

// Testimonials functionality
function initTestimonials() {
    const testimonialsSlider = document.getElementById('testimonials-slider');

    // Sample testimonials data
    const testimonials = [
        {
            id: 1,
            content: "Carla's content is absolutely amazing! Her authentic approach and creative storytelling helped our brand reach a whole new audience. The engagement rates exceeded our expectations.",
            author: "Sarah Johnson",
            position: "Marketing Director",
            company: "Beauty Brand Co.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
        },
        {
            id: 2,
            content: "Working with Carla was a game-changer for our product launch. Her content felt so natural and genuine, our customers loved it. Highly recommend her services!",
            author: "Mike Chen",
            position: "Brand Manager",
            company: "Tech Innovations",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
        },
        {
            id: 3,
            content: "Carla's professionalism and creativity are unmatched. She delivered high-quality content that perfectly aligned with our brand values and resonated with our target audience.",
            author: "Emma Davis",
            position: "Social Media Manager",
            company: "Fashion Forward",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
        }
    ];

    // Render testimonials
    function renderTestimonials() {
        testimonialsSlider.innerHTML = '';
        testimonials.forEach((testimonial, index) => {
            const testimonialCard = document.createElement('div');
            testimonialCard.className = 'testimonial-card fade-in';
            
            testimonialCard.innerHTML = `
                <div class="testimonial-content">
                    "${testimonial.content}"
                </div>
                <div class="testimonial-author">
                    <img src="${testimonial.image}" alt="${testimonial.author}" class="author-img">
                    <div class="author-info">
                        <h4>${testimonial.author}</h4>
                        <p>${testimonial.position} at ${testimonial.company}</p>
                    </div>
                </div>
            `;

            testimonialsSlider.appendChild(testimonialCard);

            // Animate testimonials with delay
            setTimeout(() => {
                testimonialCard.classList.add('visible');
            }, index * 200);
        });
    }

    renderTestimonials();
}

// Contact form functionality
function initContact() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        setTimeout(() => {
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// Scroll effects functionality
function initScrollEffects() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });
}

// Scroll to top functionality
function initScrollToTop() {
    // Create scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-top';
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollTopBtn);

    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    // Scroll to top functionality
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Utility functions
function animateCounter(element, start, end, suffix, duration) {
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Portfolio modal functionality
function openPortfolioModal(item) {
    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.style.cssText = `
        background: white;
        border-radius: 15px;
        max-width: 600px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        position: relative;
        transform: scale(0.8);
        transition: transform 0.3s ease;
    `;
    
    modalContent.innerHTML = `
        <button class="modal-close" style="
            position: absolute;
            top: 15px;
            right: 15px;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #666;
            z-index: 1;
        ">&times;</button>
        <img src="${item.image}" alt="${item.title}" style="
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 15px 15px 0 0;
        ">
        <div style="padding: 30px;">
            <h2 style="margin-bottom: 15px; color: #333;">${item.title}</h2>
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">${item.description}</p>
            <span style="
                display: inline-block;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 8px 20px;
                border-radius: 20px;
                font-size: 14px;
                text-transform: capitalize;
            ">${item.category}</span>
            <div style="margin-top: 30px;">
                <h3 style="margin-bottom: 15px; color: #333;">Deloitte Australia Data Analytics Job Simulation on Forage - May 2025</h3>
                <ul style="color: #666; line-height: 1.8;">
                    <li>Completed comprehensive data analytics simulation</li>
                    <li>Analyzed complex business datasets using advanced analytics tools</li>
                    <li>Developed insights and recommendations for client business problems</li>
                    <li>Gained hands-on experience with Deloitte's analytical methodologies</li>
                </ul>
            </div>
            <div style="margin-top: 30px;">
                <h3 style="margin-bottom: 15px; color: #333;">Python Developer – Technowire (Nov 2024 – April 2025)</h3>
                <ul style="color: #666; line-height: 1.8;">
                    <li>Developed and maintained Python applications for business automation</li>
                    <li>Collaborated with cross-functional teams to deliver software solutions</li>
                    <li>Implemented data processing pipelines and API integrations</li>
                    <li>Contributed to code reviews and technical documentation</li>
                </ul>
            </div>
            <div style="margin-top: 30px;">
                <h3 style="margin-bottom: 15px; color: #333;">AI Fundamentals Intern – IBM (Jul 2024 – Aug 2024)</h3>
                <ul style="color: #666; line-height: 1.8;">
                    <li>Learned foundational AI and machine learning concepts</li>
                    <li>Worked with IBM Watson and cloud-based AI services</li>
                    <li>Participated in hands-on projects involving data analysis</li>
                    <li>Gained exposure to enterprise AI implementation strategies</li>
                </ul>
            </div>
            <div style="margin-top: 30px;">
                <h3 style="margin-bottom: 15px; color: #333;">Salesforce Trailhead Program (Aug 2024 – Sep 2024)</h3>
                <ul style="color: #666; line-height: 1.8;">
                    <li>Completed Salesforce certification training modules</li>
                    <li>Learned CRM best practices and platform administration</li>
                    <li>Developed skills in Apex programming and Lightning components</li>
                    <li>Earned multiple Salesforce badges and certifications</li>
                </ul>
            </div>
            <div style="margin-top: 30px;">
                <h3 style="margin-bottom: 15px; color: #333;">Power Automate Intern – EpicBliss (Jul 2023 – Aug 2023)</h3>
                <ul style="color: #666; line-height: 1.8;">
                    <li>Designed and implemented automated workflows using Power Automate</li>
                    <li>Streamlined business processes and reduced manual tasks</li>
                    <li>Integrated various Microsoft 365 applications and services</li>
                    <li>Created documentation and training materials for end users</li>
                </ul>
            </div>
        </div>
    `;
    
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
    
    // Animate in
    setTimeout(() => {
        modalOverlay.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
    }, 10);
    
    // Close modal functionality
    const closeModal = () => {
        modalOverlay.style.opacity = '0';
        modalContent.style.transform = 'scale(0.8)';
        setTimeout(() => {
            if (modalOverlay.parentNode) {
                modalOverlay.parentNode.removeChild(modalOverlay);
            }
        }, 300);
    };
    
    // Close button
    modalContent.querySelector('.modal-close').addEventListener('click', closeModal);
    
    // Close on overlay click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // Close on escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

// Helper functions for portfolio modal
function getPlatformForCategory(category) {
    const platforms = {
        beauty: 'Instagram, TikTok',
        fashion: 'Instagram, Pinterest',
        lifestyle: 'Instagram, YouTube',
        tech: 'YouTube, TikTok'
    };
    return platforms[category] || 'Multi-platform';
}

function getDurationForCategory(category) {
    const durations = {
        beauty: '15-30 seconds',
        fashion: '30-60 seconds',
        lifestyle: '1-2 minutes',
        tech: '2-3 minutes'
    };
    return durations[category] || '30-60 seconds';
}

function getEngagementForCategory(category) {
    const engagements = {
        beauty: '8.5% average',
        fashion: '7.2% average',
        lifestyle: '6.8% average',
        tech: '9.1% average'
    };
    return engagements[category] || '7.5% average';
}

function getReachForCategory(category) {
    const reaches = {
        beauty: '50K-100K views',
        fashion: '30K-80K views',
        lifestyle: '40K-90K views',
        tech: '60K-120K views'
    };
    return reaches[category] || '50K-100K views';
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Theme toggle functionality (optional)
function initThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        background: white;
        border: 2px solid #667eea;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #667eea;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    `;
    
    document.body.appendChild(themeToggle);
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// Performance optimization
function optimizePerformance() {
    // Debounce scroll events
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    
    window.onscroll = function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
            if (originalScrollHandler) {
                originalScrollHandler();
            }
        }, 16); // ~60fps
    };
    
    // Preload critical images
    const criticalImages = [
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400',
        'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    // Add these to the existing initialization
    initLazyLoading();
    optimizePerformance();
    
    // Optional: Uncomment to enable theme toggle
    // initThemeToggle();
});

// Service Worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Analytics tracking (placeholder)
function trackEvent(eventName, eventData = {}) {
    // Replace with your analytics service (Google Analytics, etc.)
    console.log('Event tracked:', eventName, eventData);
    
    // Example for Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
}

// Track portfolio interactions
document.addEventListener('click', (e) => {
    if (e.target.closest('.portfolio-item')) {
        const portfolioItem = e.target.closest('.portfolio-item');
        const category = portfolioItem.getAttribute('data-category');
        trackEvent('portfolio_item_click', { category });
    }
    
    if (e.target.closest('.btn-primary')) {
        trackEvent('cta_click', { button: 'primary' });
    }
    
    if (e.target.closest('.social-link')) {
        const platform = e.target.closest('.social-link').getAttribute('aria-label');
        trackEvent('social_link_click', { platform });
    }
});
