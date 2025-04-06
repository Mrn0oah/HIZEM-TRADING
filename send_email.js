// Initialize EmailJS
document.addEventListener('DOMContentLoaded', function() {
    // Replace these with your actual EmailJS credentials
    emailjs.init('YOUR_EMAILJS_USER_ID');
    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submit-btn');
            const feedback = document.getElementById('form-feedback');
            
            // Disable button and show loading state
            submitBtn.disabled = true;
            submitBtn.value = 'Sending...';
            feedback.classList.remove('show');
            
            // Send the email
            emailjs.sendForm('service_b2v42n5', template_xbkvv9p, contactForm)
                .then(() => {
                    // Success message
                    feedback.textContent = 'Message sent successfully!';
                    feedback.style.color = '#28a745';
                    feedback.classList.add('show');
                    contactForm.reset();
                })
                .catch((error) => {
                    // Error message
                    feedback.textContent = 'Failed to send message. Please try again.';
                    feedback.style.color = '#dc3545';
                    feedback.classList.add('show');
                    console.error('Email Error:', error);
                })
                .finally(() => {
                    // Re-enable button
                    submitBtn.disabled = false;
                    submitBtn.value = 'Send';
                });
        });
    }
});