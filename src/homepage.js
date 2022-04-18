const homePage = function loadHomePage(){
    const content = document.getElementById("content");

    const landingImage = content.createElement('div');
    landingImage.setAttribute("id", "landing-image")

    const headline = content.createElement('div');
    headline.setAttribute("id", "headline");
    headline.innerHTML = "OriginalJapaneseCousine"

    content.appendChild(landingImage, headline);

    console.log("the function works")
}

export {homePage};