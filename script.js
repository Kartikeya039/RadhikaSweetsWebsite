// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Start slider
showSlide(currentSlide);
setInterval(nextSlide, 5000);

// Smooth Scrolling for Navbar Links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Product Details Toggle
function showSweetDetails(sweetId) {
  document.querySelectorAll('.sweet-details').forEach(detail => {
    detail.style.display = 'none';
  });
  const detailSection = document.getElementById(`${sweetId}-details`);
  detailSection.style.display = 'block';
  detailSection.scrollIntoView({ behavior: 'smooth' });
}

function hideSweetDetails() {
  document.querySelectorAll('.sweet-details').forEach(detail => {
    detail.style.display = 'none';
  });
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Intersection Observer for Section Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.section, .product-card, .testimonial-card').forEach(el => {
  observer.observe(el);
});

// Form Submission Alert (Placeholder)
document.querySelector('.btn-submit').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  if (name && email && message) {
    alert('Thank you for your message! We will get back to you soon.');
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  } else {
    alert('Please fill in all fields.');
  }
});