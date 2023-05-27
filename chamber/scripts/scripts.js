let date = new Date();
let weekday = date.getDay();
let message;

if (weekday >= 2 && weekday <= 3) {
	message = "Please join us for the Chamber Meet and Greet on Wednesday at 7:00 pm."
}
document.querySelector("#message").textContent = message;
document.querySelector("#year").textContent = date.getFullYear();
document.querySelector("#last-updated").textContent = document.lastModified;
document.querySelector("time").textContent= new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(date);
const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
});