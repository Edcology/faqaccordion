const buttons = document.querySelectorAll(".image");
const texts = document.querySelectorAll("p");


buttons.forEach((button, index) => (button.addEventListener("click", () => {
    if (texts[index].style.display == "none") {
        texts[index].style.display = "block";
        button.src = "./assets/images/icon-minus.svg"
    } else {
        texts[index].style.display = "none";
        button.setAttribute("src", "./assets/images/icon-plus.svg");
    }
})))
