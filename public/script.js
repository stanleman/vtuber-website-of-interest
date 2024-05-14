const navLinks = document.querySelector(".nav-links");
const header = document.querySelector(".header");
function onToggleMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  navLinks.classList.toggle("top-[690px]");
}

// bg-gradient-to-r from-blue-300 to-pink-300 bg-cover text-transparent bg-clip-text

let sections = document.querySelectorAll("section");
let navigation = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navigation.forEach((links) => {
        links.classList.remove("bg-gradient-to-r");
        links.classList.remove("from-blue-500");
        links.classList.remove("to-purple-500");
        links.classList.remove("bg-cover");
        links.classList.remove("text-transparent");
        links.classList.remove("bg-clip-text");
        links.classList.remove("font-bold");
        document
          .querySelector("nav ul li a[href*=" + id + "]")
          .classList.add("bg-gradient-to-r");
        document
          .querySelector("nav ul li a[href*=" + id + "]")
          .classList.add("from-blue-500");
        document
          .querySelector("nav ul li a[href*=" + id + "]")
          .classList.add("to-purple-500");
        document
          .querySelector("nav ul li a[href*=" + id + "]")
          .classList.add("bg-cover");
        document
          .querySelector("nav ul li a[href*=" + id + "]")
          .classList.add("text-transparent");
        document
          .querySelector("nav ul li a[href*=" + id + "]")
          .classList.add("bg-clip-text");
        document
          .querySelector("nav ul li a[href*=" + id + "]")
          .classList.add("font-bold");
      });
    }
  });
};

let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");

let carouselDom = document.querySelector(".carousel");
let SliderDom = carouselDom.querySelector(".carousel .list");
let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
let timeDom = document.querySelector(".carousel .time");

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
// let timeAutoNext = 7000;

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext);
function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
  let thumbnailItemsDom = document.querySelectorAll(
    ".carousel .thumbnail .item"
  );

  if (type === "next") {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add("next");
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add("prev");
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);
}

//timeline

// VARIABLES
const elH = document.querySelectorAll(".timeline li > div");

// START
window.addEventListener("load", init);

function init() {
  setEqualHeights(elH);
}

// SET EQUAL HEIGHTS
function setEqualHeights(el) {
  let counter = 0;
  for (let i = 0; i < el.length; i++) {
    const singleHeight = el[i].offsetHeight;

    if (counter < singleHeight) {
      counter = singleHeight;
    }
  }

  for (let i = 0; i < el.length; i++) {
    el[i].style.height = `${counter}px`;
  }
}
