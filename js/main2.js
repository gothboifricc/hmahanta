window.addEventListener('load', function() {
    const images = document.querySelectorAll(".carousel-image");
    const dots = document.querySelectorAll(".counter-dot");
    const content = document.querySelector(".content-container");
    const footer = document.querySelector("footer");
    let index = 0;

    // Initialize carousel
    images.forEach((img, i) => {
        img.style.opacity = i === 0 ? "1" : "0";
    });

    function moveCarousel() {
        // Fade out current image
        images[index].style.opacity = "0";
        dots[index].classList.remove("active");
        
        // Update index and fade in next image
        index = (index + 1) % images.length;
        images[index].style.opacity = "1";
        dots[index].classList.add("active");
    }

    setInterval(moveCarousel, 3000);
    
    // Add click functionality to dots
    dots.forEach((dot, i) => {
        dot.addEventListener("click", function() {
            // Fade out current image
            images[index].style.opacity = "0";
            dots[index].classList.remove("active");
            
            // Update index to clicked dot and fade in that image
            index = i;
            images[index].style.opacity = "1";
            dots[index].classList.add("active");
        });
    });
    
    // Scroll reveal functionality
    function revealOnScroll() {
        const scrollPosition = window.scrollY;
        const triggerPoint = window.innerHeight / 1.5;
        
        const contentPosition = content.getBoundingClientRect().top + scrollPosition;
        const footerPosition = footer.getBoundingClientRect().top + scrollPosition;
        
        if (scrollPosition > contentPosition - triggerPoint) {
            content.classList.add("visible");
        }
        
        if (scrollPosition > footerPosition - triggerPoint) {
            footer.classList.add("visible");
        }
    }
    
    // Initial check on page load
    revealOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);
    
    // Smooth scroll functionality
    document.querySelector('.mouse-wrap').addEventListener('click', function() {
        window.scrollTo({
            top: document.querySelector('.content-container').offsetTop - 50,
            behavior: 'smooth'
        });
    });
});
