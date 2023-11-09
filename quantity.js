const quantityButtons = document.querySelectorAll(".quantity-button");
let currentButtonIndex = 0;

const setColor = (color) => {
    quantityButtons[currentButtonIndex].style.backgroundColor = color;
}

for (let i = 0; i < quantityButtons.length; i++) {
    quantityButtons[i].addEventListener("click", (e) => {
        setColor("#f6e6d9");
        currentButtonIndex = i;
        setColor("#9eef80");
    })
}

setColor("#9eef80")