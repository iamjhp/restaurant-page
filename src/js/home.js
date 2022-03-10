import HomePic from '../img/seoul-food.jpg';

const contentDiv = () => {
    const content = document.getElementById("content")

    const containterDiv = document.createElement("div")
    containterDiv.classList.add("content-container")

    const homeContainerDiv = document.createElement("div")
    homeContainerDiv.classList.add("home-content")

    const containerNavDiv = document.createElement("div")
    containerNavDiv.classList.add("content-nav")

    containerNavDiv.appendChild(createNavItem("Reversation", "Tel. 332312321"))
    containerNavDiv.appendChild(createNavItem("HOUR OF OPERATION ", "Monday - Saturday : 11 AM - 21 PM"))
    containerNavDiv.appendChild(createNavItem("Address", "Hello Street 8000 Venus"))


    const homeDiv = document.createElement("div")
    homeDiv.classList.add("home-container")

    const homeImage = document.createElement("img")
    homeImage.src = HomePic
    homeImage.alt = "homePicture"

    homeDiv.appendChild(homeImage)

    homeContainerDiv.appendChild(containerNavDiv)
    homeContainerDiv.appendChild(homeDiv)
    content.appendChild(containterDiv)
    containterDiv.appendChild(homeContainerDiv)
}

function createNavItem (header, info) {
    const navItem = document.createElement("div")
    navItem.classList.add("nav-item")

    const itemHeader = document.createElement("h2")
    itemHeader.textContent = header
    
    const itemMessage = document.createElement("p")
    itemMessage.textContent = info
    
    navItem.appendChild(itemHeader)
    navItem.appendChild(itemMessage)

    return navItem
}

export default contentDiv