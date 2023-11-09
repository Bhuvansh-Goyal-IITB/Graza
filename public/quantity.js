const quantityButtons = document.querySelectorAll(".quantity-button");
let currentButtonIndex = 0;

const checkBoxes = document.querySelectorAll(".check-container");

const setColor = (color) => {
    quantityButtons[currentButtonIndex].style.backgroundColor = color;
}

checkBoxes[0].addEventListener("click", (e) => {
    checkBoxes[0].querySelector(".checkbox").style.backgroundColor = "#9eef80"
    checkBoxes[1].querySelector(".checkbox").style.backgroundColor = "#fff4ec"

    document.querySelector(".drop-down").style.display = "none";
    document.querySelector(".skip-text").style.display = "none";
})

checkBoxes[1].addEventListener("click", (e) => {
    checkBoxes[1].querySelector(".checkbox").style.backgroundColor = "#9eef80"
    checkBoxes[0].querySelector(".checkbox").style.backgroundColor = "#fff4ec"

    document.querySelector(".drop-down").style.display = "block";
    document.querySelector(".skip-text").style.display = "flex";
})

for (let i = 0; i < quantityButtons.length; i++) {
    quantityButtons[i].addEventListener("click", (e) => {
        setColor("#fff4ec");
        currentButtonIndex = i;
        setColor("#9eef80");
    })
}

setColor("#9eef80")

checkBoxes[1].click()
