// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
const shapeItems = document.querySelectorAll('.nav-shape');
const imageHolder = document.getElementById('img_hover');
const seungyun = document.querySelector('.seungyun');


const path = window.location.pathname;
const pathList = path.split(/[./]/);
pathList.shift();
pathList.shift();
const page = pathList.shift();

if (page=="projects") {
    seungyun.classList.add("projects");
}
if (page=="research") {
    seungyun.classList.add("research");
}
if (page=="forfun") {
    seungyun.classList.add("forfun");
}

shapeItems.forEach(function(thisItem) {
    if (thisItem.classList.contains(page)) {

        thisItem.classList.add('colored');
        /*
        if (thisItem.classList.contains("nav-triangle")) {
            thisItem.classList.add('clicked');
        } else {
            thisItem.classList.add('lightblue');
        }
        */
    }
});

function hover(element) {
    imageHolder.setAttribute('src', element.getAttribute('src').slice(0, -4)+"_hover.png");
}

function changeText(element, text) {
    element.innerHTML=text;
}


var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}


function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

