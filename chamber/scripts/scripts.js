let date = new Date();
let weekday = date.getDay();
let message;

if (weekday >= 2 && weekday <= 3) {
	
message = " 🤝🏼 Please join us for the Chamber Meet and Greet on Wednesday at 7:00 pm."
document.querySelector("#message").textContent = message;
} 

document.querySelector("#year").textContent = date.getFullYear();
document.querySelector("#last-updated").textContent = document.lastModified;
document.querySelector("#time").textContent= new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(date);
const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
});
// let visitsDisplay = document.querySelector(".visits");

// let numVisits = Number(window.localStorage.getItem("visits-ls"));

// if (numVisits !== 0) {
// 	visitsDisplay.textContent = numVisits;
// } else {
// 	visitsDisplay.textContent = "This is your first visit!";
// }

// numVisits++;
// localStorage.setItem("visits-ls", numVisits);
// todayDisplay.textContent = Date.now();

let imagesThatLoad = document.querySelectorAll("[data-src]");
let loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};


if ("IntersectionObserver" in window) {
    let observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesThatLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesThatLoad.forEach((img) => {
        loadImages(img);
    });
}