const contactPage = function loadContactPage(){
    const content = document.getElementById("content");

    const contactContainer = document.createElement("div");
    contactContainer.setAttribute("id", "contact-container")

  
    content.appendChild(contactContainer);

    console.log("the function works")
}

export {contactPage};