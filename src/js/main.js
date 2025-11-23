// Main animations and scroll behavior
// Smooth scroll with custom easing + IntersectionObserver for animations

// ==================== SMOOTH SCROLL ====================
function easeInOutQuint(t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetID = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetID);
        if (target) {
            e.preventDefault();
            const startY = window.scrollY;
            const endY = target.getBoundingClientRect().top + startY - 60;
            const duration = 900; // ms
            let start;

            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = Math.min((timestamp - start) / duration, 1);
                const eased = easeInOutQuint(progress);
                window.scrollTo(0, startY + (endY - startY) * eased);
                if (progress < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
        }
    });
});

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Observe all fade-in and slide-up elements
document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
    observer.observe(el);
});

// ==================== EMAIL VALIDATION ====================
document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email-input').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const message = document.getElementById('form-message');
    
    if (emailRegex.test(email)) {
        message.textContent = '✅ Message ready! (Integrate your backend)';
        message.classList.remove('hidden', 'text-red-500');
        message.classList.add('text-green-600');
    } else {
        message.textContent = '❌ Invalid email';
        message.classList.remove('hidden', 'text-green-600');
        message.classList.add('text-red-500');
    }
});
