window.onscroll = function () { myFunction() };
var header = document.getElementById("asidebar");
var sticky = header.offsetTop;

function myFunction() {

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        header.style.position = "fixed";
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            header.classList.add("newheight");
        }
        else {
            header.classList.remove("newheight");
        }
    }

    else {
        header.classList.remove("sticky");
    }
};