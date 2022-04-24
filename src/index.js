console.log("hello, this is working!")

import {homePage} from "./homepage.js";
import { menuPage } from "./menupage.js";
import {contactPage} from "./contactpage.js";


homePage();

const content = document.getElementById("content");

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", function(e) {
    removeAllChildNodes(content);
    homePage();
})



const menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", function(e) {
    removeAllChildNodes(content);
    menuPage();
    
});

const contactButton = document.getElementById("contact-button");
contactButton.addEventListener("click", function(e) {
    removeAllChildNodes(content);
    contactPage();
    
});
