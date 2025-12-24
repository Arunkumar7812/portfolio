// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

menuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    menuBtn.innerHTML = navLinks.style.display === 'flex' ? 
        '<i class="fas fa-times"></i>' : 
        '<i class="fas fa-bars"></i>';
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.style.display = 'none';
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelectorAll('input[type="text"]')[1].value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Show success message
        alert(`Thank you ${name}! Your message has been sent. I will get back to you soon at ${email}.`);
        
        // Reset form
        this.reset();
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Calculate position with offset for header
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Update copyright year
const currentYear = new Date().getFullYear();
const yearElement = document.querySelector('.copyright');
if (yearElement) {
    yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Responsive nav links display on resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    } else {
        navLinks.style.display = 'none';
    }
});