document.addEventListener('DOMContentLoaded', function() {

    /*================== LOADING SECTION ==================*/
    // Loading screen logic
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.querySelector('.main');
    
    // Hide loading screen and show main content after 3 seconds
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        mainContent.classList.add('show');
        
        // Remove loading screen from DOM after fade out
        setTimeout(() => {
            loadingScreen.remove();
        }, 800);
    }, 3000);

    /*================== HOME SECTION ==================*/
    const portfolioText = document.querySelector('.home-title');
    const originalText = portfolioText.textContent;
    portfolioText.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            portfolioText.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    setTimeout(typeWriter, 4500); // Delayed to sync with other animations

    // Add click animation to profile picture
    const profilePic = document.querySelector('.home-pic');
    if (profilePic) {
        profilePic.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'zoomInRotate 0.5s ease-out forwards';
            }, 10);
        });
    }

    // Add random floating elements
    function createFloatingElement() {
        const element = document.createElement('div');
        element.style.position = 'fixed';
        element.style.width = Math.random() * 10 + 5 + 'px';
        element.style.height = element.style.width;
        element.style.background = `rgba(250, 161, 212, ${Math.random() * 0.5 + 0.1})`;
        element.style.borderRadius = '50%';
        element.style.left = Math.random() * window.innerWidth + 'px';
        element.style.top = window.innerHeight + 'px';
        element.style.pointerEvents = 'none';
        element.style.zIndex = '1';
        
        document.body.appendChild(element);
        
        const duration = Math.random() * 10000 + 5000;
        const drift = Math.random() * 200 - 100;
        
        element.animate([
            { transform: `translateY(0px) translateX(0px)` },
            { transform: `translateY(-${window.innerHeight + 100}px) translateX(${drift}px)` }
        ], {
            duration: duration,
            easing: 'linear'
        }).onfinish = () => {
            element.remove();
        };
    }

    // Create floating elements periodically (only after loading screen)
    setTimeout(() => {
        setInterval(createFloatingElement, 700);
    }, 3000);

    /***** ABOUT SCROLL ANIMATION - FIXED VERSION *****/
    const aboutLeft = document.querySelector('.about-left');
    const aboutRight = document.querySelector('.about-right');
    const aboutSection = document.querySelector('.about');
    
    if (aboutLeft && aboutRight && aboutSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    aboutLeft.classList.add('animate');
                    aboutRight.classList.add('animate');
                }
            });
        }, {
            threshold: 0.3, 
            rootMargin: '0px 0px -50px 0px' 
        });
        
        observer.observe(aboutSection);
    }

    /*==================EDUCATION ANIMATION ==================*/
    const educationText = document.querySelector('.education-text');
    const educationContent = document.querySelector('.eduction-content');
    const educationSection = document.querySelector('.education');

    if (educationText && educationContent && educationSection) {
        const educationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    educationText.classList.add('animate');
                    educationContent.classList.add('animate');
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        });
        
        educationObserver.observe(educationSection);
    }

    /*================== PROJECT TITLE ANIMATION ==================*/
    const projectTitle = document.querySelector('.project-title');

    if (projectTitle) {
        const projectTitleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        });
        
        projectTitleObserver.observe(projectTitle);
    }


    /*================== PROJECT CARD ANIMATION ==================*/
    const projectCards = document.querySelectorAll('.project-card');

    if (projectCards.length > 0) {
        const projectObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, {
            threshold: 0.3, 
            rootMargin: '0px 0px -50px 0px'
        });
        
        projectCards.forEach(card => {
            projectObserver.observe(card);
        });
    }

    /*================== CURSOR TRAIL EFFECT ==================*/
        let mouseX = 0;
        let mouseY = 0;
        
        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.left = mouseX + 'px';
            trail.style.top = mouseY + 'px';
            document.body.appendChild(trail);
            
            setTimeout(() => {
                trail.remove();
            }, 1000);
        });

        // Parallax effect for background elements
        document.addEventListener('mousemove', function(e) {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            
            const subtitle = document.querySelector('.home-subtitle');
            if (subtitle) {
                subtitle.style.transform = `translate(-50%, -50%) rotate(5deg) translate(${moveX}px, ${moveY}px)`;
            }
        });

});

       