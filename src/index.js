import "./style.css"
import pizzaPic from "./pizza-odin.jpg"

//parent container
const content = document.getElementById("content")

//children elements
const brand = document.createElement("p")
brand.setAttribute("id", "brand")
brand.textContent = 'PIZZA PLACE'
content.appendChild(brand)

const saleLine = document.createElement("p")
saleLine.setAttribute("id", "sale-line")
saleLine.textContent = 'Pizzas that are baked on order! (YUM!)'
content.appendChild(saleLine)

const homeImage = document.createElement("img")
homeImage.setAttribute("id", "home-img")
homeImage.src = pizzaPic
content.appendChild(homeImage)

const imgCredit = document.createElement("p")
imgCredit.textContent = 'Image made by freepik'
imgCredit.setAttribute("id", "img-credit")
content.appendChild(imgCredit)