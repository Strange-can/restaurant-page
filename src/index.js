import "./style.css"
import pizzaPic from "./pizza-odin.jpg"
import { hi } from "./test.js"

console.log(hi)
const content = document.getElementById("content")
const homeImage = document.createElement('img')
homeImage.setAttribute("id", "home-img")
homeImage.src = pizzaPic
content.appendChild(homeImage)

const imgCredit = document.createElement("p")
imgCredit.textContent = 'Image made by freepik'
imgCredit.setAttribute("id", "img-credit")
content.appendChild(imgCredit)