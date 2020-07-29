const ipad = window.matchMedia("screen and (max-width: 769px)")
const menu = document.querySelector(".menuNav")
const burgerButton = document.querySelector("#burger-menu")

ipad.addListener(validation)

function validation(event) {
    if (event.matches) {
        burgerButton.addEventListener("click", hideShow)
    } else {
        burgerButton.removeEventListener("click", hideShow)
    }

    console.log(event.matches)
}

validation(ipad)

function hideShow() {
    if (menu.classList.contains("is-active")) {
        menu.classList.remove("is-active")
    } else {
        menu.classList.add("is-active")
    }
}

//Input en progreso para generar las funciones y que funcione correctamente el formulario

const sendButton = document.getElementById("buttonSend")

sendButton.addEventListener("click", sendRequest)

function sendRequest() {
    alert("This input is in progress, call me or send me e-mail")
}

