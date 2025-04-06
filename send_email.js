document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submit-btn');
            const feedback = document.getElementById('form-feedback');
            
            submitBtn.disabled = true;
            submitBtn.value = 'Sending...';
            feedback.textContent = '';
            feedback.style.display = 'none';
            
            emailjs.sendForm('service_b2v42n5', 'template_xbkvv9p', contactForm)
                .then(() => {
                    feedback.textContent = 'Message sent successfully!';
                    feedback.style.color = '#28a745';
                    feedback.style.display = 'block';
                    contactForm.reset();
                })
                .catch((error) => {
                    feedback.textContent = 'Failed to send message. Please try again.';
                    feedback.style.color = '#dc3545';
                    feedback.style.display = 'block';
                    console.error('Email Error:', error);
                })
                .finally(() => {
                    submitBtn.disabled = false;
                    submitBtn.value = 'Send';
                });
        });
    }
});
