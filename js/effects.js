const ipad = window.matchMedia("screen and (max-width: 765px)")
const menu = document.querySelector(".menuNav")
const burgerButton = document.querySelector("#burger-menu")

ipad.addListener(validation)

function validation(event) {
    if (event.matches) {
        burgerButton.addEventListener("click", hideShow)
    } else {
        burgerButton.removeEventListener("click", hideShow)
    }
    console.log(Event.matches)
}

validation(ipad)

function hideShow() {
    if (menu.classList.contains("is-active")) {
        menu.classList.remove("is-active")
    } else {
        menu.classList.add("is-active")
    }
}