// Add click alert for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            alert(`Explore this destination: ${img.alt}`);
        });
    });
});

// Optional: simple contact form alert
const form = document.querySelector('form');
if(form){
    form.addEventListener('submit', function(e){
        e.preventDefault();
        alert("Thank you! Your message has been sent.");
        form.reset();
    });
}
