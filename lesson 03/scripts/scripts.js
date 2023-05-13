let date = new Date();
document.querySelector("#year").textContent = date.getFullYear();
document.querySelector("#last-updated").textContent = document.lastModified;

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}