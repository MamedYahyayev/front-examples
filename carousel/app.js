/**
 *  DOM elements
 */
const images = document.querySelectorAll(".image");
const carouselActions = document.querySelector(".carousel-actions");
const previousButton = carouselActions.firstElementChild;
const nextButton = carouselActions.lastElementChild;
const carousel = document.querySelector(".carousel");

/**
 *  Constants
 */
const FIRST_SLIDE = 1;
const TOTAL_SLIDE = images.length;
let CURRENT_SLIDE = +document.querySelector(".current-image").id.substr(5, 1);

/**
 *  Events
 */
previousButton.addEventListener("click", () => {
  if (CURRENT_SLIDE == FIRST_SLIDE) {
    moveSlide(TOTAL_SLIDE);
  } else {
    moveSlide(CURRENT_SLIDE - 1);
  }
});

nextButton.addEventListener("click", () => {
  if (CURRENT_SLIDE == TOTAL_SLIDE) {
    moveSlide(FIRST_SLIDE);
  } else {
    moveSlide(CURRENT_SLIDE + 1);
  }
});

/**
 *  Function: this function change current slide to new one when previous or next event handled
 * @param { new Slide } slideNumber
 */
function moveSlide(slideNumber) {
  CURRENT_SLIDE = slideNumber;
  images.forEach((image) => {
    const imagePosition = image.id.substr(5, 1);
    image.classList.remove("current-image");
    if (imagePosition == CURRENT_SLIDE) {
      image.classList.add("current-image");
    }
  });
}
