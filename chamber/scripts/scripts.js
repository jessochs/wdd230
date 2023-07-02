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
const visits = document.querySelector("#visits");
let lastVisit = window.localStorage.getItem("lastVisit");
let daysSinceLastVisit;


if (lastVisit) {

    lastVisit = new Date(lastVisit);
    const timeDifference = new Date() - lastVisit;

    daysSinceLastVisit = Math.round(timeDifference / (24 * 60 * 60 * 1000));
  
    console.log(daysSinceLastVisit)
  
  } else {
  
    daysSinceLastVisit = 0;
  
  }
  
visits.textContent = daysSinceLastVisit;
window.localStorage.setItem("lastVisit", new Date().toISOString());

//button
const grid = document.querySelector("#grid");
const list = document.querySelector("#list");
const display = document.querySelector("article");

grid.addEventListener("click", () => {

    display.classList.add("grid");
    display.classList.remove("list");
});

list.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");

}