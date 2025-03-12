const slides = document.querySelectorAll('.slide');
let currentSlide = 0;


function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  showSlide(currentSlide = (currentSlide + 1) % slides.length);
}

function prevSlide() {
  showSlide(currentSlide = (currentSlide - 1 + slides.length) % slides.length);
}

document.getElementById('nextBtn').onclick = () => (nextSlide(), clearInterval(slideInterval));
document.getElementById('prevBtn').onclick = () => (prevSlide(), clearInterval(slideInterval));

window.onload = () => showSlide(currentSlide);
