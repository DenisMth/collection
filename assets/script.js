const collection = [
    {
        name: "Iron Man",
        director: "Jon Favreau",
        releaseYear: "2008",
        picture: "assets/images/Iron_Man.jpg",
        genre: ["Action", "Super-heroes"],
        cast: [
            "Robert Downey Jr.",
            "Gwyneth Paltrow",
            "Terrence Howard",
            "Jeff Bridges",
            "Shaun Toub",
        ],
        link: "https://www.youtube.com/watch?v=8ugaeA-nMTc",
    },

    {
        name: "The Incredible Hulk",
        director: "Louis Leterrier",
        releaseYear: "2008",
        picture: "assets/images/Incredible_Hulk.jpg",
        genre: ["Action", "Super-heroes"],
        cast: [
            "Edward Norton",
            "Liv Tyler",
            "Tim Roth",
            "William Hurt",
            "Tim Blake Nelson",
        ],
        link: "https://www.youtube.com/watch?v=xbqNb2PFKKA",
    },

    {
        name: "Iron Man 2",
        director: "Jon Favreau",
        releaseYear: "2010",
        picture: "assets/images/Iron_Man_2.jpg",
        genre: ["Action", "Super-heroes"],
        cast: [
            "Robert Downey Jr.",
            "Gwyneth Paltrow",
            "Don Cheadle",
            "Mickey Rourke",
            "Samuel L. Jackson",
        ],
        link:"https://www.youtube.com/watch?v=qsRZghNciIo",
    },

    {
        name: "Thor",
        director: "Kenneth Branagh",
        releaseYear: "2011",
        picture: "assets/images/Thor.jpg",
        genre: ["Science-Fiction", "Super-heroes"],
        cast: [
            "Chris Hemsworth",
            "Natalie Portman",
            "Tom Hiddleston",
            "Anthony Hopkins",
            "Stellan Skarsgård",
        ],
        link:"https://www.youtube.com/watch?v=w1k59SJ_-Uo",
    },

    {
        name: "Captain America : First Avenger",
        director: "Joe Johnston",
        releaseYear: "2011",
        picture: "assets/images/Captain_America_First_Avenger.jpg",
        genre: ["Action", "Super-heroes"],
        cast: [
            "Chris Evans",
            "Hugo Weaving",
            "Hayley Atwell",
            "Stanley Tucci",
            "Tommy Lee Jones",
        ],
        link: "https://www.youtube.com/watch?v=qi5UTD7kEr0",
    },

    {
        name: "Avengers",
        director: "Joss Whedon",
        releaseYear: "2012",
        picture: "assets/images/Avengers.jpg",
        genre: ["Science-Fiction", "Super-heroes"],
        cast: [
            "Robert Downey Jr.",
            "Chris Evans",
            "Mark Ruffalo",
            "Chris Hemsworth",
            "Scarlett Johansson",
            "Jeremy Renner",
            "Samuel L. Jackson",
        ],
        link: "https://www.youtube.com/watch?v=sXT4uBpGxNY",
    },

    {
        name: "Iron Man 3",
        director: "Shane Black",
        releaseYear: "2013",
        picture: "assets/images/Iron_Man_3.jpg",
        genre: ["Action", "Super-heroes"],
        cast: [
            "Robert Downey Jr.",
            "Gwyneth Paltrow",
            "Guy Pearce",
            "Ben Kingsley",
            "Don Cheadle",
        ],
        link: "https://www.youtube.com/watch?v=Ke1Y3P9D0Bc",
    },

    {
        name: "Thor : The Dark World",
        director: "Alan Taylor",
        releaseYear: "2013",
        picture: "assets/images/Thor_Dark_World.jpg",
        genre: ["Super-heroes"],
        cast: [
            "Chris Hemsworth",
            "Natalie Portman",
            "Tom Hiddleston",
            "Anthony Hopkins",
            "Idris Elba",
        ],
        link: "https://www.youtube.com/watch?v=npvJ9FTgZbM",
    },

    {
        name: "Captain America : The Winter Soldier",
        director: "Anthony and Joe Russo",
        releaseYear: "2014",
        picture: "assets/images/Captain_America_Winter_Soldier.jpg",
        genre: ["Action", "Super-heroes"],
        cast: [
            "Chris Evans",
            "Scarlett Johansson",
            "Sebastian Stan",
            "Anthony Mackie",
            "Samuel L. Jackson",
        ],
        link: "https://www.youtube.com/watch?v=tbayiPxkUMM",
    },

    {
        name: "Guardians of the Galaxy",
        director: "James Gunn",
        releaseYear: "2014",
        picture: "assets/images/Guardians_of_the_Galaxy.jpg",
        genre: ["Science-Fiction", "Super-héros"],
        cast: [
            "Chris Pratt",
            "Zoe Saldana",
            "David Bautista",
            "Vin Diesel",
            "Bradley Cooper",
        ],
        link: "https://www.youtube.com/watch?v=d96cjJhvlMA",
    },

    {
        name: "Avengers : Age of Ultron",
        director: "Joss Whedon",
        releaseYear: "2015",
        picture: "assets/images/Avengers_Age_of_Ultron.jpg",
        genre: ["Action", "Super-héros"],
        cast: [
            "Robert Downey Jr.",
            "Chris Evans",
            "Mark Ruffalo",
            "Chris Hemsworth",
            "Scarlett Johansson",
            "Jeremy Renner",
        ],
        link: "https://www.youtube.com/watch?v=tmeOjFno6Do",
    },

    {
        name: "Ant-Man",
        director: "Peyton Reed",
        releaseYear: "2015",
        picture: "assets/images/Ant-Man.jpg",
        genre: ["Action", "Super-héros"],
        cast: [
            "Paul Rudd",
            "Evangeline Lilly",
            "Michael Douglas",
            "Corey Stoll",
            "Bobby Cannavale",
        ],
        link: "https://www.youtube.com/watch?v=pWdKf3MneyI",
    },

    /*
    {
        name: "",
        director: "",
        releaseYear: "",
        picture: "assets/images/.jpg",
        genre: ["Science-Fiction", "Super-héros"],
        cast: [
            "",
            "",
            "",
            "",
            "",
            "",
        ],
        link: "",
    },
    */
];

//const newButtonBlock = document.createElement("div");
//newButtonBlock.className = "buttonBlock";

//header.appendChild(newButtonBlock);


for (elem of collection) {
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
    for (iteration of elem.genre) {
        const newGenreType = document.createElement("p");
        const newGenreTypeContent = document.createTextNode(iteration);
        newGenreType.appendChild(newGenreTypeContent);
        newGenreType.className = "card__genre__type";
        newGenre.appendChild(newGenreType);
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

    for (iteration of elem.cast) {
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
