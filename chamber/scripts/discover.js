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
// const visits = document.querySelector("#visits");
// let lastVisit = window.localStorage.getItem("lastVisit");
// let daysSinceLastVisit;


// if (lastVisit) {

//     lastVisit = new Date(lastVisit);
//     const timeDifference = new Date() - lastVisit;

//     daysSinceLastVisit = Math.round(timeDifference / (24 * 60 * 60 * 1000));
  
//     console.log(daysSinceLastVisit)
  
//   } else {
  
//     daysSinceLastVisit = 0;
  
//   }
  
// visits.textContent = daysSinceLastVisit;
// window.localStorage.setItem("lastVisit", new Date().toISOString());

  