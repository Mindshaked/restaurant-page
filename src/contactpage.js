const contactPage = function loadContactPage(){
    const content = document.getElementById("content");

    const landingImage = document.createElement("div");
    landingImage.setAttribute("id", "landing-image")

    const headline = document.createElement("div");
    headline.setAttribute("id", "headline");
    
    const headline1 = document.createElement("div");
    headline1.innerHTML = "Original"
    const headline2 = document.createElement("div");
    headline2.innerHTML = "Japanese"
    const headline3 = document.createElement("div");
    headline3.innerHTML = "Cousine"

    headline.appendChild(headline1);
    headline.appendChild(headline2);
    headline.appendChild(headline3);
    content.appendChild(landingImage);
    content.appendChild(headline);

    console.log("the function works")
}

export {homePage};