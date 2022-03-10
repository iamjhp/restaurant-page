
const contentDiv = () => {
    const content = document.getElementById("content")

    const containterDiv = document.createElement("div")
    containterDiv.classList.add("content-container")

    const aboutDiv = document.createElement("div")
    aboutDiv.classList.add("about-content")

    const div = document.createElement("div")

    const aboutP = document.createElement("p")
    aboutP.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    div.appendChild(aboutP)
    aboutDiv.appendChild(div)
    containterDiv.appendChild(aboutDiv)
    content.appendChild(containterDiv)

    return content
}

export default contentDiv