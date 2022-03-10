import './css/style.css';
import headerDiv from './js/header';
import homeDiv from './js/home';
import menuDiv from './js/menu';
import aboutDiv from './js/about';

headerDiv()
homeDiv()
highlightCurrentNav("Home")

const navHome = document.getElementById("Home")
navHome.addEventListener("click", () => {
    deleteContentContainer()
    homeDiv()
    highlightCurrentNav("Home")
})

const navMenu = document.getElementById("Menu")
navMenu.addEventListener("click", () => {
    deleteContentContainer()
    menuDiv()
    highlightCurrentNav("Menu")
})

const navAbout = document.getElementById("About")
navAbout.addEventListener("click", () => {
    deleteContentContainer()
    aboutDiv()
    highlightCurrentNav("About")
})

function deleteContentContainer () {
    const container = document.querySelector(".content-container")

    if (container != null) {
        container.remove()
    }
}

function highlightCurrentNav (id) {
    let navArr = ["Home", "Menu", "About"]

    for (let i = 0; i < 3; i++) {
        const currentId = document.getElementById(navArr[i])
        if (navArr[i] == id) {
            currentId.setAttribute("active", "true")
        } else {
            currentId.setAttribute("active", "false")
        }
    }
}