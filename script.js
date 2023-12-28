document.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var parallaxElement = document.querySelector("#parallax-section");

    parallaxElement.style.backgroundPositionY = -scrollPosition * 0.5 + "px";
});


let parallaxImage = document.querySelector("#flower");
parallaxImage.addEventListener("scroll",()=>{
    parallaxImage.style.transform = "translateY(" + scrollPosition * 0.4 + "px)";
    
})