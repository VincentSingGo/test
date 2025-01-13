let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//scroll sections active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  //sticky navbar
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  //remove toggle icon and navbar when click navbar link
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

//scroll reveal
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

//typed js
const typed = new Typed(".multiple-text", {
  strings: ["Test", "Test", "Test"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

//popup picture
function openPopup(portfolioNumber) {
  const popupImage = document.getElementById("popup-image");

  if (portfolioNumber === 1) {
    popupImage.src = "./pic/肌肉運動按摩_底層.png";
  } else if (portfolioNumber === 2) {
    popupImage.src = "./pic/身體平衡整復_底層.png";
  } else if (portfolioNumber === 3) {
    popupImage.src = "./pic/敬請期待_底層.png";
  }

  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

//google calendar
function showIframe() {
  document.getElementById("google-calendar").style.display = "block";
}

function hideIframe() {
  document.getElementById("google-calendar").style.display = "none";
}
