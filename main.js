const sliderItems = document.querySelectorAll(".slider-item");
const sliderButtons = document.querySelectorAll(".slider-button");
let activeButtonIndex = 0;

const setButtonBorder = (color) => {
    sliderButtons[activeButtonIndex].style.borderColor = color;
}

setButtonBorder("white");

window.addEventListener("resize", (e) => {
    console.log("Hi")
    sliderItems[activeButtonIndex].scrollIntoView();
})

for (let i = 0; i < sliderButtons.length; i++) {
    sliderButtons[i].addEventListener("click", (e) => {
        sliderItems[i].scrollIntoView({behavior: "smooth"});
        setButtonBorder("black");
        activeButtonIndex = i;
        setButtonBorder("white");
    })
}