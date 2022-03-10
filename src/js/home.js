import HomePic from '../img/seoul-food.jpg';

const contentDiv = () => {
    const content = document.getElementById("content")

    const containterDiv = document.createElement("div")
    containterDiv.classList.add("content-container")

    const homeDiv = document.createElement("div")
    homeDiv.classList.add("home-container")

    const homeImage = document.createElement("img")
    homeImage.src = HomePic
    homeImage.alt = "homePicture"

    homeDiv.appendChild(homeImage)

    containterDiv.append(homeDiv)
    content.appendChild(containterDiv)
}

export default contentDiv