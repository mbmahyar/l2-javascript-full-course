// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".next");

// current slide counter
let currentSlide = 0;
// maximum number of slides
let numberOfSlides = slides.length - 1;

nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (currentSlide === numberOfSlides) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
  });
});

// select next slide button
const prevSlide = document.querySelector(".previous");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (currentSlide === 0) {
    currentSlide = numberOfSlides;
  } else {
    currentSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
  });
});
