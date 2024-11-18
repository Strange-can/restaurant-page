import pizzaPic from "./pizza-odin.jpg"

const home = ( function () {
    //parent container
    const content = document.getElementById("content")

    //children elements
    const brand = document.createElement("p")
    brand.setAttribute("id", "brand")
    brand.textContent = 'PIZZA PLACE'

    const saleLine = document.createElement("p")
    saleLine.setAttribute("id", "sale-line")
    saleLine.textContent = 'Pizzas that are baked on order! (YUM!)'

    const homeImage = document.createElement("img")
    homeImage.setAttribute("id", "home-img")
    homeImage.src = pizzaPic

    const imgCredit = document.createElement("p")
    imgCredit.textContent = 'Image made by freepik'
    imgCredit.setAttribute("id", "img-credit")

    let createHome = () => {
        content.appendChild(brand)
        content.appendChild(saleLine)
        content.appendChild(homeImage)
        content.appendChild(imgCredit)
    }
    return { createHome }
})()

const homeButton = document.getElementById("home")
homeButton.addEventListener("click", home.createHome)

home.createHome()