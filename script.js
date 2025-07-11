// Auto-update copyright year
document.addEventListener('DOMContentLoaded', function() {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});

// Read More functionality for about page
function toggleReadMore() {
    const teaserContent = document.querySelector('.teaser-content');
    const readMoreBtn = document.querySelector('.read-more-btn');
    
    if (teaserContent && readMoreBtn) {
        // Show the full content
        teaserContent.style.display = 'block';
        teaserContent.style.opacity = '1';
        
        // Hide the button
        readMoreBtn.style.display = 'none';
    }
}

// EmailJS functionality for contact form
(function() {
    // Initialize EmailJS
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual EmailJS public key
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            // Disable button and show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            // Get form data
            const formData = {
                first_name: document.getElementById('first-name').value,
                last_name: document.getElementById('last-name').value,
                email: document.getElementById('email').value,
                topic: document.getElementById('topic').value,
                message: document.getElementById('message').value
            };
            
            // Send email using EmailJS
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
                .then(function(response) {
                    // Success
                    submitBtn.textContent = 'Message Sent!';
                    submitBtn.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset button after 3 seconds
                    setTimeout(function() {
                        submitBtn.disabled = false;
                        submitBtn.textContent = originalText;
                        submitBtn.style.background = 'linear-gradient(135deg, #2f4f2f 0%, #5a7a5a 100%)';
                    }, 3000);
                })
                .catch(function(error) {
                    // Error
                    submitBtn.textContent = 'Error - Try Again';
                    submitBtn.style.background = 'linear-gradient(135deg, #f44336 0%, #da190b 100%)';
                    
                    // Reset button after 3 seconds
                    setTimeout(function() {
                        submitBtn.disabled = false;
                        submitBtn.textContent = originalText;
                        submitBtn.style.background = 'linear-gradient(135deg, #2f4f2f 0%, #5a7a5a 100%)';
                    }, 3000);
                    
                    console.error('EmailJS Error:', error);
                });
        });
    }
})();

// Garden Shop Tab Functionality
(function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const targetTab = this.getAttribute('data-tab');
                
                // Remove active class from all buttons and contents
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                this.classList.add('active');
                document.getElementById(targetTab + '-tab').classList.add('active');
            });
        });
    }
})();


