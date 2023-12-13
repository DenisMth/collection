const collection = [
    {
        name: "Iron Man",
        director: "Jon Favreau",
        releaseYear: "2008",
        picture: "assets/images/Iron_Man.jpg",
        genre: ["Action", "Super-héros"],
        cast: [
            "Robert Downey Jr.",
            "Gwyneth Paltrow",
            "Terrence Howard",
            "Jeff Bridges",
            "Shaun Toub",
        ],
    },

    {
        name: "L'incroyable Hulk",
        director: "Louis Leterrier",
        releaseYear: "2008",
        picture: "assets/images/Incredible_Hulk.jpg",
        genre: ["Action", "Super-héros"],
        cast: [
            "Edward Norton",
            "Liv Tyler",
            "Tim Roth",
            "William Hurt",
            "Tim Blake Nelson",
        ],
    },

    {
        name: "Iron Man 2",
        director: "Jon Favreau",
        releaseYear: "2010",
        picture: "assets/images/Iron_Man_2.jpg",
        genre: ["Action", "Super-héros"],
        cast: [
            "Robert Downey Jr.",
            "Gwyneth Paltrow",
            "Don Cheadle",
            "Mickey Rourke",
            "Samuel L. Jackson",
        ],
    },

    {
        name: "Thor",
        director: "Kenneth Branagh",
        releaseYear: "",
        picture: "assets/images/Thor.jpg",
        genre: ["Science-Fiction", "Super-héros"],
        cast: [
            "Chris Hemsworth",
            "Natalie Portman",
            "Tom Hiddleston",
            "Anthony Hopkins",
            "Stellan Skarsgård",
        ],
    },

    {
        name: "Captain America : First Avenger",
        director: "Joe Johnston",
        releaseYear: "2011",
        picture: "assets/images/Captain_America_First_Avenger.jpg",
        genre: ["Action", "Super-héros"],
        cast: [
            "Chris Evans",
            "Hugo Weaving",
            "Hayley Atwell",
            "Stanley Tucci",
            "Tommy Lee Jones",
        ],
    },

    {
        name: "Avengers",
        director: "Joss Whedon",
        releaseYear: "2012",
        picture: "assets/images/Avengers.jpg",
        genre: ["Science-Fiction", "Super-héros"],
        cast: [
            "Robert Downey Jr.",
            "Chris Evans",
            "Mark Ruffalo",
            "Chris Hemsworth",
            "Scarlett Johansson",
            "Jeremy Renner",
            "Samuel L. Jackson",
        ],
    },
];


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



    const newImage = document.createElement("img");
    newImage.src = elem.picture;
    newImage.className = "card__picture";
    newCard.appendChild(newImage);

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

    const newCast = document.createElement("div");
    newCast.className = "card__cast";
    newCard.appendChild(newCast);
    for (iteration of elem.cast) {
        const newCastMember = document.createElement("p");
        const newCastMemberContent = document.createTextNode(iteration);
        newCastMember.appendChild(newCastMemberContent);
        newCastMember.className = "card__cast__member";
        newCast.appendChild(newCastMember);
    }


}
