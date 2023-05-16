let date = new Date();
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