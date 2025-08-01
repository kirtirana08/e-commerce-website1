// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Contact form submit alert
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  this.reset();
});

// Add to Cart buttons
const buttons = document.querySelectorAll('.product-card button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Item added to cart!');
  });
});
