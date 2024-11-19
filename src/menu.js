import imageSrc1 from "./margherita-pizza-odin.jpg"
import imageSrc2 from "./pepperoni-pizza-odin.jpg"
import imageSrc3 from "./veggie-supreme-pizza-odin.jpg"

const option1 = document.getElementById("option1")
const image1 = document.createElement("img")
image1.src = imageSrc1
option1.prepend(image1)

const option2 = document.getElementById("option2")
const image2 = document.createElement("img")
image2.src = imageSrc2
option2.prepend(image2)

const option3 = document.getElementById("option3")
const image3 = document.createElement("img")
image3.src = imageSrc3
option3.prepend(image3)