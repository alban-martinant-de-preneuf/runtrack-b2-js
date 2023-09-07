const html = document.querySelector("html");

function myChangeBackgroundColor() {
    if (window.innerWidth >= 1337) {
        html.style.backgroundColor = "#ffb703";
    } else if (window.innerWidth <= 1336 && window.innerWidth > 505) {
        html.style.backgroundColor = "#d90429";
    } else {
        html.style.backgroundColor = "#003049";
    }
}

window.addEventListener('resize', myChangeBackgroundColor);

myChangeBackgroundColor();