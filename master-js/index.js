slideUrls = [
  "url('../images/landing.jpg')",
  "url('../images/slide1.jpeg')",
  "url('../images/slide2.jpg')",
  "url('../images/slide3.jpg')",
];
var icon = document.querySelector(".toogle-menu");

var list = document.querySelector("header nav ul");

icon.addEventListener("click", function () {
    if (list.classList.contains("click")) {
        list.classList.remove("click");
    }
    else
    {
        
        list.classList.add("click");
    }
})

var links = document.querySelectorAll("nav ul li a");

links.forEach((ele) => {
    ele.addEventListener('click', (e) => {
        document.querySelector("nav ul .active").classList.remove("active");
        e.target.classList.add("active");
    })
})

var x = 0;
document.getElementById("next").addEventListener("click", () => {
    document.querySelector(".landing").style.backgroundImage = slideUrls[x];
    x++;
    if (x == slideUrls.length) {
        x = 0;
    }
});

document.getElementById("prev").addEventListener("click", function () {
    x--;
    document.querySelector(".landing").style.backgroundImage = slideUrls[x];
    if (x <= 0) {
        x = slideUrls.length;
    }
})

let skill = document.querySelector(".ourSkills");
let state = document.querySelector(".state");
let spans = document.querySelectorAll(".data-progress span");
let started = true;
let numbers = document.querySelectorAll("#number")

window.onscroll = function () {
    if (window.scrollY >= skill.offsetTop) {
        spans.forEach((span) => {
            span.style.width = span.dataset.progress;
        })
    }
    if (window.scrollY >= state.offsetTop) {
        if (started) {
            numbers.forEach((num) => {
                startCount(num);
            })
        }
        started = false;
    }
}

function startCount(ele) {
    let num = Number( ele.dataset.coffe);
    let count = setInterval(() => {
        ele.textContent++;
        if (ele.textContent == num) {
            clearInterval(count);
        }
    }, 10);
}