window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("sticky_nav_bar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("fixed-top")
    } else {
        navbar.classList.remove("fixed-top");
    }
}

$(document).ready(function () {
    $('#iphun')[0].play();
});