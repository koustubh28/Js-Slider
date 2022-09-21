const slides = document.querySelectorAll(".slide");
let counter = 0;
const slideLength = slides.length;

slides.forEach((slide, index) => {
  slide.style.top = `${index * 100}%`;
});

const goPrev = () => {
  counter--;
  slideImage();
};

const goNext = () => {
  counter++;
  slideImage();
};

const slideImage = () => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateY(-${counter * 100}%)`;
  });
};
