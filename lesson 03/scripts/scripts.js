let date = new Date();
document.querySelector("#year").textContent = date.getFullYear();
document.querySelector("#last-updated").textContent = document.lastModified;

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
const datefield = document.querySelector("time");
const datefieldUK = document.querySelector("aside");
const message = document.querySelector("p");

const fullDate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(date);
datefield.textContent = fullDate