 
    function togglePlayButton() {
        // Select all elements with the .cs-picture class
        const pictures = document.querySelectorAll('#why-choose-1876 .cs-video-wrapper');

        // Add a click event listener to each .cs-picture element
        pictures.forEach(picture => {
            picture.addEventListener('click', () => {
                // Select all elements with the .cs-play class
                const playButtons = document.querySelectorAll('#why-choose-1876 .cs-play');

                // Toggle the .cs-hide class on each .cs-play element
                playButtons.forEach(button => {
                    button.classList.toggle('cs-hide');
                });
            });
        });
    }

    // Call the function to activate the event listeners
    togglePlayButton();

    function toggleVideoPlayback() {
        // Select the video element
        const video = document.querySelector('#why-choose-1876 video');

        // Add a click event listener to the video
        video.addEventListener('click', () => {
            // Check if the video is paused
            if (video.paused) {
                video.play(); // Play the video if it is paused
            } else {
                video.pause(); // Pause the video if it is playing
            }
        });
    }

    // Call the function to activate the event listener
    toggleVideoPlayback();

    // Parallax Effects
    document.addEventListener('DOMContentLoaded', function() {
        // Parallax for showcase items
        const parallaxItems = document.querySelectorAll('.cs-parallax-item');
        
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            
            parallaxItems.forEach(item => {
                const speed = item.dataset.speed || 0.5;
                const yPos = -(scrolled * speed);
                item.style.transform = `translateY(${yPos}px)`;
            });
        });
        
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        const animateElements = document.querySelectorAll('.cs-showcase-item, .cs-item, .cs-benefit-item');
        animateElements.forEach(el => {
            observer.observe(el);
        });
        
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
        
        // Card hover effects
        const cards = document.querySelectorAll('.cs-item, .cs-showcase-item');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
        
        // Button animations
        const buttons = document.querySelectorAll('.cs-button-solid');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
        
        // WhatsApp button click tracking
        const whatsappBtn = document.querySelector('.cs-whatsapp-link');
        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', function() {
                console.log('WhatsApp button clicked');
            });
        }
    });

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .cs-showcase-item,
        .cs-item,
        .cs-benefit-item {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .cs-showcase-item.animate-in,
        .cs-item.animate-in,
        .cs-benefit-item.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .cs-button-solid {
            transition: all 0.3s ease;
        }
        
        .cs-item,
        .cs-showcase-item {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
    `;
    document.head.appendChild(style);
