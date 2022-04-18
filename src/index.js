console.log("hello, this is working!")

import {homePage} from "./homepage.js";
import { menuPage } from "./menupage.js";

const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", function(e) {
    homePage();
})



const menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", function(e) {
    menuPage();
});


