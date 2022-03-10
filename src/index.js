import './css/style.css';
import headerDiv from './js/header';
import homeDiv from './js/home';
import menuDiv from './js/menu';

headerDiv()
homeDiv()

const navHome = document.getElementById("Home")
navHome.addEventListener("click", () => {
    deleteContentContainer()
    homeDiv()
})

const navMenu = document.getElementById("Menu")
navMenu.addEventListener("click", () => {
    deleteContentContainer()
    menuDiv()
})

function deleteContentContainer () {
    const container = document.querySelector(".content-container")

    if (container != null) {
        container.remove()
    }
}

console.log("navMenu")