// Diagnostic Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('diagnostic-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Validate required fields
            const requiredFields = ['name', 'email', 'phone', 'company', 'description'];
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!data[field] || data[field].trim() === '') {
                    isValid = false;
                    const input = form.querySelector(`[name="${field}"]`);
                    input.style.borderColor = '#dc3545';
                    input.style.boxShadow = '0 0 0 3px rgba(220, 53, 69, 0.1)';
                }
            });
            
            if (!isValid) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            // Show loading state
            const submitBtn = form.querySelector('.cs-submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Enviando...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Reset form
                form.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Show success message
                alert('Diagnóstico solicitado com sucesso! Entraremos em contato em breve.');
                
                // Optional: Redirect to thank you page or show modal
                // window.location.href = 'obrigado.html';
            }, 2000);
        });
        
        // Remove error styling on input focus
        const inputs = form.querySelectorAll('.cs-input');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.borderColor = '#e9ecef';
                this.style.boxShadow = 'none';
            });
        });
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
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
    
    // Form field animations
    const formLabels = document.querySelectorAll('.cs-label');
    formLabels.forEach(label => {
        const input = label.querySelector('.cs-input');
        if (input) {
            input.addEventListener('focus', function() {
                label.style.transform = 'translateY(-2px)';
                label.style.transition = 'transform 0.3s ease';
            });
            
            input.addEventListener('blur', function() {
                label.style.transform = 'translateY(0)';
            });
        }
    });
    
    // Benefit items hover effect
    const benefitItems = document.querySelectorAll('.cs-benefit-item');
    benefitItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // WhatsApp button click tracking (optional)
    const whatsappBtn = document.querySelector('.cs-whatsapp-link');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            // Track WhatsApp clicks (replace with your analytics)
            console.log('WhatsApp button clicked');
        });
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('#diagnostic-hero');
    
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Form validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    return re.test(phone);
}

// Phone input formatting
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.querySelector('input[name="phone"]');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
            }
            if (value.length >= 10) {
                value = value.slice(0, 10) + '-' + value.slice(10, 14);
            }
            e.target.value = value;
        });
    }
});
