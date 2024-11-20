import imageSrc1 from "./margherita-pizza-odin.jpg"
import imageSrc2 from "./pepperoni-pizza-odin.jpg"
import imageSrc3 from "./veggie-supreme-pizza-odin.jpg"

const menu = ( function () {
//#content div container
const content = document.getElementById("content")

//child elements:
//menu heading
const menuTitle = document.createElement("p")
menuTitle.setAttribute("id", "menu-title")
menuTitle.textContent = 'MENU'

//container to hold img and texts
const option1 = document.createElement("div")
option1.classList.add("option")
//container to hold text elements
const optionText1 = document.createElement("div")
optionText1.classList.add("option-text")
//text elements in optionText1
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

//container to hold img and texts
const option2 = document.createElement("div")
option2.classList.add("option")
//container to hold text elements
const optionText2 = document.createElement("div")
optionText2.classList.add("option-text")
//text elements in optionText1
const pizzaName2 = document.createElement("p")
pizzaName2.setAttribute("id", "pizza-name")
pizzaName2.textContent = 'Pepperoni Pizza'

const desc2 = document.createElement("p")
desc2.textContent = 'Loaded with pepperoni, mozzarella, and a savory tomato sauce.'

const price2 = document.createElement("p")
price2.textContent = 'Price: $14.99'

optionText2.append(pizzaName2, desc2, price2)
option2.append(optionText2)

const image2 = document.createElement("img")
image2.src = imageSrc2
option2.prepend(image2)

//container to hold img and texts
const option3 = document.createElement("div")
option3.classList.add("option")
//container to hold text elements
const optionText3 = document.createElement("div")
optionText3.classList.add("option-text")
//text elements in optionText1
const pizzaName3 = document.createElement("p")
pizzaName3.setAttribute("id", "pizza-name")
pizzaName3.textContent = 'Veggie Pizza'

const desc3 = document.createElement("p")
desc3.textContent = 'Topped with onions, olives, mushrooms, and brocolli.'

const price3 = document.createElement("p")
price3.textContent = 'Price: $13.99'

optionText3.append(pizzaName3, desc3, price3)
option3.append(optionText3)

const image3 = document.createElement("img")
image3.src = imageSrc3
option3.prepend(image3)

const imgCredit = document.createElement("p")
imgCredit.setAttribute("id", "img-credit")
imgCredit.textContent = 'All images from freepik'

//call to action statement
const callToAction = document.createElement("p")
callToAction.setAttribute("id", "call-to-action")
callToAction.textContent = 'Ready to Order? Call 1-800-123-4567 now to place your order!'

    let createMenu = () => {
        content.textContent = ''
        content.appendChild(menuTitle)
        content.append(option1)
        content.append(option2)
        content.append(option3)
        content.append(imgCredit)
        content.append(callToAction)
    }

    return { createMenu }
})()

export { menu }