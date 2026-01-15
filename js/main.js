/**
 * Edge Cleaning Solutions - Main JavaScript
 * Handles smooth scrolling, form interactions, and page functionality
 */

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

    // Form submission handling
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
        });
    }

    // Add current year to footer if exists
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
