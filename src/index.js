import "./style.css"
import { home } from "./home.js"

//button to create home page
const homeButton = document.getElementById("home")
homeButton.addEventListener("click", home.createHome)