import * as myCollection from "./collection.js";
let collection = [];
collection = myCollection.collection;

const newButtonBlock = document.createElement("div");
newButtonBlock.className = "buttonBlock";
const header = document.body.querySelector("header");
header.appendChild(newButtonBlock);
let categories = [];
categories.push(collection[0].genre[0]);




for (let elem of collection) {
    const newCard = document.createElement("div");
    newCard.className = "card card__block";
    const main = document.body.querySelector("main");
    main.appendChild(newCard);

    const newTitle = document.createElement("h2");
    newTitle.className = "card__title"
    const newTitleContent = document.createTextNode(elem.name);
    newTitle.appendChild(newTitleContent);
    newCard.appendChild(newTitle);



    const newImage = document.createElement("div");
    newImage.className = "card__picture";
    newCard.appendChild(newImage);
    newImage.style.backgroundImage = `url(${elem.picture})`;

    const newImageMenu = document.createElement("div");
    const newImageMenuLink = document.createElement("a");
        const newImageMenuLinkIcon = document.createElement("img");
        newImageMenuLink.appendChild(newImageMenuLinkIcon)
        newImageMenuLinkIcon.src = "assets/images/youtube.svg";
        newImageMenuLinkIcon.className = "card__picture__menu__link__icon"
    const newImageMenuLinkContent = document.createTextNode(elem.name + " Trailer");
    newImageMenuLink.appendChild(newImageMenuLinkContent);
    newImageMenuLink.className ="card__picture__menu__link";
    newImageMenuLink.href = elem.link; 
    newImageMenuLink.target = "_blank";
    newImageMenu.className = "card__picture__menu";
    newImageMenu.appendChild(newImageMenuLink);
    newImage.appendChild(newImageMenu);

    const newGenre = document.createElement("div");
    newGenre.className = "card__genre";
    newCard.appendChild(newGenre);
    for (let iteration of elem.genre) {
        const newGenreType = document.createElement("p");
        const newGenreTypeContent = document.createTextNode(iteration);
        newGenreType.appendChild(newGenreTypeContent);
        newGenreType.className = "card__genre__type";
        newGenre.appendChild(newGenreType);

        for (let type of categories){
            if (!categories.includes(iteration)){
                categories.push(iteration);
            }
        }
    }

    const newDirector = document.createElement("p");
    const newDirectorContent = document.createTextNode("Director : " + elem.director);
    newDirector.appendChild(newDirectorContent);
    newDirector.className = "card__director";
    newCard.appendChild(newDirector);

    const newCast = document.createElement("div");
    newCast.className = "card__cast";
    newCard.appendChild(newCast);

    const newCastTitle = document.createElement("h3");
    const newCastTitleContent = document.createTextNode("Actors\n");
    newCastTitle.appendChild(newCastTitleContent);
    newCastTitle.className = "card__cast__title";
    newCast.appendChild(newCastTitle);

    for (let iteration of elem.cast) {
        const newCastMember = document.createElement("p");
        const newCastMemberContent = document.createTextNode(iteration);
        newCastMember.appendChild(newCastMemberContent);
        newCastMember.className = "card__cast__member";
        newCast.appendChild(newCastMember);
    }

    const newRelease = document.createElement("p");
    const newReleaseContent = document.createTextNode("Release year : " + elem.releaseYear);
    newRelease.appendChild(newReleaseContent);
    newRelease.className = "card__release";
    newCard.appendChild(newRelease);


}


for (let type of categories){
    const newButton = document.createElement("button");
    newButton.className = "buttonBlock__button";
    const newButtonContent = document.createTextNode(type);
    newButton.appendChild(newButtonContent);
    newButtonBlock.appendChild(newButton);
    newButton.addEventListener("click", (event) =>{
        for (let elem of collection){
            if (!elem.genre.includes(type)){
                const carte = document.body.querySelectorAll("main.card");
                carte.style.display = "none";
            }
        }
    })
}