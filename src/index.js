import "./style.css"
import { home } from "./home.js"
import { menu } from "./menu.js"
import { about } from "./about.js"

home.createHome()

//button to create home page
const homeButton = document.getElementById("home")
homeButton.addEventListener("click", home.createHome)

//button to create menu page 
const menuButton = document.getElementById("menu")
menuButton.addEventListener("click", menu.createMenu)

//button to create about page 
const aboutButton = document.getElementById("about")
aboutButton.addEventListener("click", about.createAbout)