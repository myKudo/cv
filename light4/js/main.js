/* ============================================
   CV Djilali SAHRAOUI - Light Theme 4 JS
   Tech-Oriented Professional Theme
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initScrollAnimations();
    initExpertiseBars();
    initBackToTop();
    initSmoothScroll();
    initContactForm();
    initActiveNavLink();
    initTypingEffect();
});

/* ============================================
   Navbar Scroll Effect
   ============================================ */
function initNavbar() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/* ============================================
   Mobile Menu
   ============================================ */
function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

/* ============================================
   Scroll Animations
   ============================================ */
function initScrollAnimations() {
    const animateElements = [
        '.stat-card',
        '.about-card',
        '.skill-category',
        '.timeline-item',
        '.contact-card',
        '.contact-form-wrapper',
        '.education-card',
        '.expertise-section'
    ];

    animateElements.forEach(selector => {
        document.querySelectorAll(selector).forEach((el, index) => {
            el.classList.add('fade-in');
            el.style.transitionDelay = `${index * 0.1}s`;
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

/* ============================================
   Expertise Bars Animation
   ============================================ */
function initExpertiseBars() {
    const expertiseBars = document.querySelectorAll('.expertise-fill');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const percent = bar.getAttribute('data-percent');
                bar.style.width = `${percent}%`;
                observer.unobserve(bar);
            }
        });
    }, {
        threshold: 0.5
    });

    expertiseBars.forEach(bar => {
        observer.observe(bar);
    });
}

/* ============================================
   Back to Top Button
   ============================================ */
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
}

/* ============================================
   Smooth Scroll
   ============================================ */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ============================================
   Active Navigation Link
   ============================================ */
function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/* ============================================
   Typing Effect for Subtitle
   ============================================ */
function initTypingEffect() {
    const subtitleElement = document.querySelector('.hero-subtitle');
    if (!subtitleElement) return;

    const roles = [
        'Architecte Solutions',
        'Expert Azure & DevOps',
        'Data Architect',
        'Tech Lead'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const textSpan = subtitleElement.querySelector('.typing-text');
    if (!textSpan) return;

    function type() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            textSpan.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            textSpan.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Pause before next word
        }

        setTimeout(type, typingSpeed);
    }

    // Start typing effect
    setTimeout(type, 1000);
}

/* ============================================
   Contact Form (Formspree) avec validation
   reCAPTCHA invisible intégré
   ============================================ */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    // Règles de validation
    const validators = {
        name: {
            validate: (value) => {
                const trimmed = value.trim();
                if (trimmed.length < 2 || trimmed.length > 100) return false;
                if (/<|>|javascript:|data:|http:|https:/i.test(trimmed)) return false;
                return /^[\p{L}\s\-'\.]+$/u.test(trimmed);
            },
            message: 'Nom invalide (2-100 caractères, lettres uniquement)'
        },
        email: {
            validate: (value) => {
                const trimmed = value.trim().toLowerCase();
                if (trimmed.length > 254) return false;
                const emailRegex = /^[a-z0-9](?:[a-z0-9._%+-]{0,62}[a-z0-9])?@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z]{2,})+$/;
                return emailRegex.test(trimmed);
            },
            message: 'Email invalide'
        },
        subject: {
            validate: (value) => {
                const trimmed = value.trim();
                if (trimmed.length < 3 || trimmed.length > 200) return false;
                if (/<|>|javascript:|data:/i.test(trimmed)) return false;
                return true;
            },
            message: 'Sujet invalide (3-200 caractères)'
        },
        message: {
            validate: (value) => {
                const trimmed = value.trim();
                if (trimmed.length < 10 || trimmed.length > 5000) return false;
                if (/javascript:|data:|<script|onclick|onerror/i.test(trimmed)) return false;
                return true;
            },
            message: 'Message invalide (10-5000 caractères)'
        }
    };

    // Fonction de validation
    function validateForm() {
        let isValid = true;
        const errors = [];

        Object.keys(validators).forEach(fieldName => {
            const field = form.querySelector(`#${fieldName}`);
            if (field) {
                const { validate, message } = validators[fieldName];
                if (!validate(field.value)) {
                    isValid = false;
                    errors.push(message);
                    field.classList.add('invalid');
                } else {
                    field.classList.remove('invalid');
                }
            }
        });

        return { isValid, errors };
    }

    // Validation en temps réel
    Object.keys(validators).forEach(fieldName => {
        const field = form.querySelector(`#${fieldName}`);
        if (field) {
            field.addEventListener('blur', () => {
                const { validate } = validators[fieldName];
                if (field.value && !validate(field.value)) {
                    field.classList.add('invalid');
                } else {
                    field.classList.remove('invalid');
                }
            });
            field.addEventListener('input', () => {
                field.classList.remove('invalid');
            });
        }
    });

    // Soumission du formulaire
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const { isValid, errors } = validateForm();
        if (!isValid) {
            alert('Erreurs de validation :\n' + errors.join('\n'));
            return;
        }

        // reCAPTCHA v3 : obtenir le token avant soumission
        if (typeof grecaptcha !== 'undefined') {
            try {
                const token = await grecaptcha.execute('6LfPMyQsAAAAAFgrYIzv9woeDlTPxNj35jAeYf5g', { action: 'contact_form' });
                document.getElementById('recaptcha-token').value = token;
                submitForm(token);
            } catch (error) {
                console.error('reCAPTCHA error:', error);
                // Fallback si reCAPTCHA échoue
                submitForm();
            }
        } else {
            // Fallback si reCAPTCHA pas chargé
            submitForm();
        }
    });
}

// Envoi AJAX du formulaire
async function submitForm() {
    const form = document.getElementById('contact-form');
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi...';
    submitBtn.disabled = true;

    try {
        const formData = new FormData(form);

        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            showSuccessMessage();
            form.reset();
        } else {
            const data = await response.json();
            throw new Error(data.error || 'Erreur lors de l\'envoi');
        }
    } catch (error) {
        console.error('Erreur:', error);
        submitBtn.innerHTML = '<i class="fas fa-times"></i> Erreur';
        submitBtn.style.background = '#ef4444';

        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
        }, 3000);
    }
}

/* ============================================
   Message de succès après envoi
   ============================================ */
function showSuccessMessage() {
    const form = document.getElementById('contact-form');
    const submitBtn = form.querySelector('button[type="submit"]');
    if (!form) return;

    // Réinitialiser le bouton
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Envoyé !';
    submitBtn.style.background = '#10b981';

    // Créer le message de succès
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success-message';
    successDiv.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <h4>Message envoyé avec succès !</h4>
        <p>Merci pour votre message. Je vous répondrai dans les plus brefs délais.</p>
    `;

    // Insérer avant le formulaire
    form.parentNode.insertBefore(successDiv, form);

    // Masquer le formulaire temporairement
    form.style.display = 'none';

    // Réafficher le formulaire après 5 secondes
    setTimeout(() => {
        successDiv.remove();
        form.style.display = '';
        submitBtn.innerHTML = '<span data-i18n="contact.form.send">Envoyer le message</span><i class="fas fa-paper-plane"></i>';
        submitBtn.style.background = '';
        submitBtn.disabled = false;
    }, 5000);

    // Scroll vers le message
    successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

console.log('CV Djilali SAHRAOUI - Light Theme 4 (Tech Professional) Loaded');
