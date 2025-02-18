const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
let currentSlide = 0;
let slideInterval;
 
 
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}
 
 
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
 
 
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}
 
function startSlideShow() {
  slideInterval = setInterval(nextSlide, 3000);
}
 
 
function stopSlideShow() {
  clearInterval(slideInterval);
}
 
 
nextButton.addEventListener('click', () => {
  nextSlide();
  stopSlideShow();  
});
 
prevButton.addEventListener('click', () => {
  prevSlide();
  stopSlideShow();  
});
 
 
window.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
  startSlideShow();
});
   
 