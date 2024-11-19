import imageSrc1 from "./margherita-pizza-odin.jpg"
import imageSrc2 from "./pepperoni-pizza-odin.jpg"
import imageSrc3 from "./veggie-supreme-pizza-odin.jpg"

//#content div container
const content = document.getElementById("content")

//child elements
const menuTitle = document.createElement("p")
menuTitle.setAttribute("id", "menu-title")
menuTitle.textContent = 'MENU'
content.appendChild(menuTitle)

//container to hold img and texts
const option1 = document.createElement("div")
option1.setAttribute("id", "option1")
option1.classList.add("option")
//container to hold text elements
const optionText1 = document.createElement("div")
optionText1.classList.add("option-text")
//text elements in optionText
const pizzaName1 = document.createElement("p")
pizzaName1.setAttribute("id", "pizza-name")
pizzaName1.textContent = 'Margherita Pizza'

const desc1 = document.createElement("p")
desc1.textContent = 'A classic Italian pizza with fresh mozzarella, tomatoes, and basil.'

const price1 = document.createElement("p")
price1.textContent = 'Price: $12.99'

optionText1.append(pizzaName1, desc1, price1)
option1.append(optionText1)

const image1 = document.createElement("img")
image1.src = imageSrc1
option1.prepend(image1)

content.append(option1)

const option2 = document.getElementById("option2")
const image2 = document.createElement("img")
image2.src = imageSrc2
option2.prepend(image2)

const option3 = document.getElementById("option3")
const image3 = document.createElement("img")
image3.src = imageSrc3
option3.prepend(image3)