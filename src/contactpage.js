const contactPage = function loadContactPage(){
    const content = document.getElementById("content");

    const contactContainer = document.createElement("div");
    contactContainer.setAttribute("id", "contact-container");

    const contactBox = document.createElement("div");
    contactBox.setAttribute("id", "contact-box");

    const textContainer = document.createElement("div");
    textContainer.setAttribute("id", "text-container");

    const addressTitle = document.createElement("div");
    addressTitle.setAttribute("id", "address-title");
    addressTitle.innerHTML = "Restaurant Location"

    const address = document.createElement("div");
    address.setAttribute("id", "address");
    address.innerHTML = "461 5th Ave, New York,"

    const address2 = document.createElement("div");
    address2.setAttribute("id", "address2");
    address2.innerHTML = "NY 10017, United States"

    const contactImage = document.createElement("div");
    contactImage.setAttribute("id", "contact-image");

    const bookButton = document.createElement("button");
    bookButton.innerHTML = "Book a table"
    
    
  
    content.appendChild(contactContainer);
    contactContainer.appendChild(contactBox);
    contactBox.appendChild(textContainer);
    textContainer.appendChild(addressTitle);
    textContainer.appendChild(address);
    textContainer.appendChild(address2);
    textContainer.appendChild(bookButton);
    contactBox.appendChild(contactImage);

    console.log("the function works")
}

export {contactPage};