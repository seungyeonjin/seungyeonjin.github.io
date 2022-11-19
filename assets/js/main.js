// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
const shapeItems = document.querySelectorAll('.nav-shape');
const imageHolder = document.getElementById('displayImage');

const path = window.location.pathname;
const pathList = path.split(/[./]/);
pathList.shift();
pathList.shift();
const page = pathList.shift();

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
    imageHolder.setAttribute('src', element.getAttribute('src'));
}

function changeText(element, text) {
    element.innerHTML=text;
}







  

/*

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');

        circleItems.forEach(function(thisItem) {
            if (thisItem.classList.contains(page)) {
                thisItem.classList.add('scrolled');
            }
        });
    }
    else {

        header.classList.remove('navbarDark');

        circleItems.forEach(function(thisItem) {
            if (thisItem.classList.contains(page)) {
                thisItem.classList.remove('scrolled');
            }
        });
    }
}

*/