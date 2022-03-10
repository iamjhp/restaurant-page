import KimchiPath from '../img/kimchi.jpg';
import BibimbapPath from '../img/bibimbap.jpg';
import BulgogiPath from '../img/bulgogi.jpg';
import HobakjukPath from '../img/hobakjuk.jpg';
import JapcheaPath from '../img/japchae.jpg';
import GimbapPath from '../img/gimbap.jpg';
import TteokbokkiPath from '../img/Tteokbokki.jpg';
import JjajangmyeonPath from '../img/jjajangmyeon.jpg';
import BossamPath from '../img/bossam.jpg';

const contentDiv = () => {
    const content = document.getElementById("content")

    const containterDiv = document.createElement("div")
    containterDiv.classList.add("content-container")
    
    const menuDiv = document.createElement("div")
    menuDiv.classList.add("menu-container")

    menuDiv.appendChild(createMenuItem("Kimchi", KimchiPath, "kiiiimmmchii"))
    menuDiv.appendChild(createMenuItem("Bibimbap", BibimbapPath, "biiiiib"))
    menuDiv.appendChild(createMenuItem("Bulgogi", BulgogiPath, "biiiiib"))
    menuDiv.appendChild(createMenuItem("Hobakjuk", HobakjukPath, "biiiiib"))
    menuDiv.appendChild(createMenuItem("Japchae", JapcheaPath, "biiiiib"))
    menuDiv.appendChild(createMenuItem("Gimbap", GimbapPath, "biiiiib"))
    menuDiv.appendChild(createMenuItem("Tteokbokk", TteokbokkiPath, "biiiiib"))
    menuDiv.appendChild(createMenuItem("Jajangmyeon", JjajangmyeonPath, "biiiiib"))
    menuDiv.appendChild(createMenuItem("Bossam", BossamPath, "biiiiib"))

    containterDiv.append(menuDiv)
    content.appendChild(containterDiv)
}

function createMenuItem (name, path, info) {
    const item = document.createElement("div")
    item.classList.add("menu-item")

    const itemName = document.createElement("h2")
    itemName.textContent = name

    const itemInfo = document.createElement("p")
    itemInfo.textContent = info

    const itemImage = document.createElement("img")
    itemImage.src = path
    itemImage.alt = name

    item.appendChild(itemImage)
    item.appendChild(itemName)
    item.appendChild(itemInfo)
    return item
}


export default contentDiv