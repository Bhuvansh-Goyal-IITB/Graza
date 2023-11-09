const buttons = document.querySelectorAll(".accordion-button");
const accordionItems = document.querySelectorAll(".accordion-item");
let selectedButton = buttons[0];

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {
        for (let j = 0; j < accordionItems.length; j++) {
            if (i === j) accordionItems[j].style.display = "block";
            else accordionItems[j].style.display = "none";
        }
        selectedButton.classList.remove("accordion-button-selected");
        selectedButton = e.target;
        selectedButton.classList.add("accordion-button-selected");
    })

    if (i === 0) accordionItems[i].style.display = "block";
    else accordionItems[i].style.display = "none";

    selectedButton.classList.add("accordion-button-selected");
}



