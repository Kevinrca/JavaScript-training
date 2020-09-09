// DOM elements
const slide = document.querySelector(".slide");
const slideButton = document.querySelector(".slideCloseButton");

slideButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    slide.className = "slide slideToggle";
    console.log(slide.className);
});