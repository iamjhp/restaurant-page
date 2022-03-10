
const headerDiv = () => {
    const content = document.getElementById("content")
    const header = document.createElement("header")

    const header_navigation = document.createElement("div")
    header_navigation.setAttribute("class", "header-nav")
    const navUl = document.createElement("ul")

    const navArr = ["Home", "Menu", "About"]
    let navArrLen = navArr.length

    for (let i = 0; i < navArrLen; i++) {
        const navLi = document.createElement("li")
        navLi.classList.add("page-item")

        const navP = document.createElement("a")
        navP.setAttribute("id", navArr[i])

        const navNode = document.createTextNode(navArr[i])
        
        navP.appendChild(navNode)
        navLi.appendChild(navP)
        navUl.appendChild(navLi)
    }
    header_navigation.appendChild(navUl)
    header.appendChild(header_navigation)

    content.appendChild(header)
    return content
}



export default headerDiv