// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');

mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuBtn.innerHTML = nav.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking a link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        document.querySelector('header').style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    } else {
        document.querySelector('header').style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // Here you would typically send the form data to a server
    // For demo purposes, we'll just show an alert
    alert(`Gracias ${name}! Hemos recibido tu consulta. Nos pondremos en contacto contigo en ${email} a la brevedad.`);
    
    // Reset form
    contactForm.reset();
});

// Simple testimonial slider functionality
const testimonials = [
    {
        content: "El equipo de Borda & Asociados resolvió un complejo caso corporativo para nuestra empresa con profesionalismo y eficiencia. Su conocimiento del derecho comercial fue fundamental para nuestro éxito.",
        name: "Roberto Méndez",
        title: "CEO, Grupo Empresarial",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e7d64f2c-18a6-4cf0-82b8-5e6965c861b0.png"
    },
    {
        content: "Cuando enfrenté un difícil divorcio, la Dra. Fernández fue increíblemente comprensiva y profesional. Me guió a través de cada paso con claridad y compasión.",
        name: "Laura Sánchez",
        title: "Clienta",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dc2e4fdc-33f3-4ee3-adae-ee44a1ea7bc4.png"
    },
    {
        content: "Como pequeña empresa, necesitábamos asesoramiento legal accesible. Borda & Asociados proporcionó soluciones prácticas y rentables para proteger nuestro negocio.",
        name: "Pablo Rodríguez",
        title: "Dueño, Tienda Online",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9e5d7ad9-2705-4c70-ba3c-4a2c40f55ccd.png"
    }
];

const testimonialElement = document.querySelector('.testimonial');
let currentTestimonial = 0;

function updateTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    
    testimonialElement.innerHTML = `
        <div class="testimonial-content">
            <p>${testimonial.content}</p>
        </div>
        <div class="testimonial-author">
            <img src="${testimonial.image}" alt="Retrato de ${testimonial.name}">
            <div class="author-info">
                <h4>${testimonial.name}</h4>
                <p>${testimonial.title}</p>
            </div>
        </div>
    `;
    
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
}

// Rotate testimonials every 5 seconds
setInterval(updateTestimonial, 5000);
updateTestimonial(); // Initialize first testimonial