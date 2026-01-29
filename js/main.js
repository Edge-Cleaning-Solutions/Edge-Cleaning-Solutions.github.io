/**
 * Edge Cleaning Solutions - Main JavaScript
 * Handles smooth scrolling, form interactions, analytics, and page functionality
 */

// Cookie Consent Management
const CookieConsent = {
    getCookie: function(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    },

    setCookie: function(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
    },

    hasConsent: function() {
        return this.getCookie('cookieConsent') === 'accepted';
    },

    acceptCookies: function() {
        this.setCookie('cookieConsent', 'accepted', 365);
        this.hideBanner();
        this.initializeAnalytics();
    },

    declineCookies: function() {
        this.setCookie('cookieConsent', 'declined', 365);
        this.hideBanner();
    },

    showBanner: function() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.style.display = 'block';
        }
    },

    hideBanner: function() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.style.display = 'none';
        }
    },

    initializeAnalytics: function() {
        // Initialize Google Analytics if consent given
        if (typeof gtag !== 'undefined' && this.hasConsent()) {
            gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
        }
    },

    checkConsent: function() {
        const consent = this.getCookie('cookieConsent');
        if (!consent) {
            this.showBanner();
        } else if (consent === 'accepted') {
            this.initializeAnalytics();
        }
    }
};

// Smooth scroll to top function
function scrollToTop(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Request service function - pre-fills the contact form
function requestService(serviceType) {
    const contactForm = document.getElementById('contact-form');
    const subjectDropdown = document.getElementById('subject');
    
    if (subjectDropdown && contactForm) {
        subjectDropdown.value = serviceType;
        contactForm.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Check cookie consent status
    CookieConsent.checkConsent();

    // Set up cookie consent buttons
    const acceptBtn = document.getElementById('cookie-accept');
    const declineBtn = document.getElementById('cookie-decline');
    
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            CookieConsent.acceptCookies();
        });
    }
    
    if (declineBtn) {
        declineBtn.addEventListener('click', function() {
            CookieConsent.declineCookies();
        });
    }

    // Smooth scroll for nav links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Only handle hash links on the same page
            if (href && href.startsWith('#')) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Form submission handling and tracking
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Basic form validation
            const phone = document.getElementById('phone');
            if (phone && phone.value) {
                // Basic phone validation - remove spaces and check if it contains enough digits
                const phoneDigits = phone.value.replace(/\D/g, '');
                if (phoneDigits.length < 10) {
                    e.preventDefault();
                    alert('Please enter a valid phone number with at least 10 digits.');
                    phone.focus();
                    return false;
                }
            }

            // Track form submission with Google Analytics
            if (typeof gtag !== 'undefined' && CookieConsent.hasConsent()) {
                const subject = document.getElementById('subject') ? document.getElementById('subject').value : 'Unknown';
                gtag('event', 'form_submission', {
                    'event_category': 'Contact',
                    'event_label': subject,
                    'form_id': 'contact-form'
                });
            }
        });
    }

    // Track "Request Service" button clicks
    document.querySelectorAll('button[onclick*="requestService"]').forEach(button => {
        button.addEventListener('click', function() {
            if (typeof gtag !== 'undefined' && CookieConsent.hasConsent()) {
                const serviceType = this.textContent || 'Unknown Service';
                gtag('event', 'request_service_click', {
                    'event_category': 'Engagement',
                    'event_label': serviceType
                });
            }
        });
    });

    // Add current year to footer if exists
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
