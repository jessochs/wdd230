let imagesThatLoad = document.querySelectorAll("img[data-src]");
let loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

imagesThatLoad.forEach((img) => {
    loadImages(img);
});

if ("IntersectionObserver" in window) {
    let imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesThatLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else {
    imagesThatLoad.forEach((img) => {
        loadImages(img);
    });
}
