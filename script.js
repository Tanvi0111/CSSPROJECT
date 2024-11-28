let menubar = document.querySelector('#menubar');
let mynav = document.querySelector('.navbar');


menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}
// Handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get form elements
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    // Show the success message
    successMessage.style.display = 'block';

    // Optionally, hide the form after submission
    form.style.display = 'none';

    // Reset the form after submission (optional)
    form.reset();
}
document.getElementById('see-more-btn').addEventListener('click', function() {
    const hiddenServices = document.querySelectorAll('.inner-services-content.hidden');
    const isHidden = hiddenServices[0].style.display === 'none' || hiddenServices[0].style.display === '';

    hiddenServices.forEach(service => {
        service.style.display = isHidden ? 'block' : 'none';
    });

    // Update button text
    this.textContent = isHidden ? 'Show Less' : 'See All Services';
});

