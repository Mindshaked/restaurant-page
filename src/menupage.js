const menuPage = function loadMenuPage(){
    const content = document.getElementById("content");

    const menuContainer = document.createElement("div");
    menuContainer.setAttribute("id", "menu-container");

    const menuTitle = document.createElement("div");
    menuTitle.setAttribute("id", "menu-title")
    menuTitle.innerHTML = "Our Menu"

    const menuContent = document.createElement("div");
    menuContent.setAttribute("id", "menu-content");

    const menuMeals = document.createElement("div");
    menuMeals.setAttribute("id", "menu-meals");
    
    const mItem1 = document.createElement("div");
    const mItem1Title = document.createElement("div");
    mItem1Title.innerHTML = "Maguro"
    const mItem1Desc = document.createElement("div");
    mItem1Desc.innerHTML = "Fresh Tuna"
    mItem1.classList.add("menu-item")
    mItem1Title.classList.add("menu-item-title")
    mItem1Desc.classList.add("menu-item-desc")
   
    const mItem2 = document.createElement("div");
    const mItem2Title = document.createElement("div");
    mItem2Title.innerHTML = "Sake"
    const mItem2Desc = document.createElement("div");
    mItem2Desc.innerHTML = "Fresh Salmon"
    mItem2.classList.add("menu-item")
    mItem2Title.classList.add("menu-item-title")
    mItem2Desc.classList.add("menu-item-desc")

    const mItem3 = document.createElement("div");
    const mItem3Title = document.createElement("div");
    mItem3Title.innerHTML = "Bara Mutsu"
    const mItem3Desc = document.createElement("div");
    mItem3Desc.innerHTML = "Escolar fish with Green onions & Mustard Dressing"
    mItem3.classList.add("menu-item")
    mItem3Title.classList.add("menu-item-title")
    mItem3Desc.classList.add("menu-item-desc")

    const mItem4 = document.createElement("div");
    const mItem4Title = document.createElement("div");
    mItem4Title.innerHTML = "Hirame"
    const mItem4Desc = document.createElement("div");
    mItem4Desc.innerHTML = "Fresh Halibut with Green Onions, Lemon Juice and Sea Salt"
    mItem4.classList.add("menu-item")
    mItem4Title.classList.add("menu-item-title")
    mItem4Desc.classList.add("menu-item-desc")

    const mItem5 = document.createElement("div");
    const mItem5Title = document.createElement("div");
    mItem5Title.innerHTML = "Saba"
    const mItem5Desc = document.createElement("div");
    mItem5Desc.innerHTML = "House Marinated Mackerel with Vinegar"
    mItem5.classList.add("menu-item")
    mItem5Title.classList.add("menu-item-title")
    mItem5Desc.classList.add("menu-item-desc")

    const mItem6 = document.createElement("div");
    const mItem6Title = document.createElement("div");
    mItem6Title.innerHTML = "Masago"
    const mItem6Desc = document.createElement("div");
    mItem6Desc.innerHTML = "Flying Fish Egg"
    mItem6.classList.add("menu-item")
    mItem6Title.classList.add("menu-item-title")
    mItem6Desc.classList.add("menu-item-desc")

    const mItem7 = document.createElement("div");
    const mItem7Title = document.createElement("div");
    mItem7Title.innerHTML = "Unagi"
    const mItem7Desc = document.createElement("div");
    mItem7Desc.innerHTML = "Baked Fresh Water Eel with Eel Sauce"
    mItem7.classList.add("menu-item")
    mItem7Title.classList.add("menu-item-title")
    mItem7Desc.classList.add("menu-item-desc")

    const mItem8 = document.createElement("div");
    const mItem8Title = document.createElement("div");
    mItem8Title.innerHTML = "Tamago"
    const mItem8Desc = document.createElement("div");
    mItem8Desc.innerHTML = "Japanese Omelette"
    mItem8.classList.add("menu-item")
    mItem8Title.classList.add("menu-item-title")
    mItem8Desc.classList.add("menu-item-desc")

    const mItem9 = document.createElement("div");
    const mItem9Title = document.createElement("div");
    mItem9Title.innerHTML = "Ikura"
    const mItem9Desc = document.createElement("div");
    mItem9Desc.innerHTML = "House Marinated Salmon Egg with Soy Sauce & Mirin"
    mItem9.classList.add("menu-item")
    mItem9Title.classList.add("menu-item-title")
    mItem9Desc.classList.add("menu-item-desc")

    const mItem10 = document.createElement("div");
    const mItem10Title = document.createElement("div");
    mItem10Title.innerHTML = "Hamachi Toro"
    const mItem10Desc = document.createElement("div");
    mItem10Desc.innerHTML = "Fatty Yellowtail Belly"
    mItem10.classList.add("menu-item")
    mItem10Title.classList.add("menu-item-title")
    mItem10Desc.classList.add("menu-item-desc")



    menuMeals.appendChild(mItem1);
    menuMeals.appendChild(mItem2);
    menuMeals.appendChild(mItem3);
    menuMeals.appendChild(mItem4);
    menuMeals.appendChild(mItem5);
    menuMeals.appendChild(mItem6);
    menuMeals.appendChild(mItem7);
    menuMeals.appendChild(mItem8);
    menuMeals.appendChild(mItem9);
    menuMeals.appendChild(mItem10);

    mItem1.appendChild(mItem1Title);
    mItem1.appendChild(mItem1Desc);
    mItem2.appendChild(mItem2Title);
    mItem2.appendChild(mItem2Desc);
    mItem3.appendChild(mItem3Title);
    mItem3.appendChild(mItem3Desc);
    mItem4.appendChild(mItem4Title);
    mItem4.appendChild(mItem4Desc);
    mItem5.appendChild(mItem5Title);
    mItem5.appendChild(mItem5Desc);
    mItem6.appendChild(mItem6Title);
    mItem6.appendChild(mItem6Desc);
    mItem7.appendChild(mItem7Title);
    mItem7.appendChild(mItem7Desc);
    mItem8.appendChild(mItem8Title);
    mItem8.appendChild(mItem8Desc);
    mItem9.appendChild(mItem9Title);
    mItem9.appendChild(mItem9Desc);
    mItem10.appendChild(mItem10Title);
    mItem10.appendChild(mItem10Desc);

    content.appendChild(menuContainer);
    menuContainer.appendChild(menuTitle);
    menuContainer.appendChild(menuContent);
    menuContent.appendChild(menuMeals);

    console.log("the function works")
}


export {menuPage};