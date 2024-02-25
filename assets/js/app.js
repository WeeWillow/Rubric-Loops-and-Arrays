// random cat minion generator/creator
// hosted by Kevin the cat

// arrays
// array of images, for random generation (if I can make some cats)
// const image = [
//     "image1",
//     "image2",
//     "image3",
//     "image4",
//     "image5",
//     "image6"
// ];
// array of names, for random generation
const nameof = [
    "Bertil",
    "Gerda",
    "Olga",
    "Agnes",
    "Sigurd",
    "Holger",
    "Bente",
    "Inger",
    "Jens",
    "Ronald",
    "Frank",
    "Bernard",
    "Edith",
    "Gladys",
    "Agatha",
    "Pawl",
    "Clawra",
    "Felina",
    "Theofur",
    "Furtrude",
    "Kat",
    "Kattarina",
    "Kloria",
    "Klofus",
    "Broccoli",
    "Atomic Toaster",
    "Domestic Shorthair",
    "General George Pawshington",
    "Distinguished Gentleman",
    "Jude Paw",
    "Bob Ross",
    "IPad 4",
    "Creature",
    "Chicken Noodle",
    "Succulent chinese meal",
    "Fantastic beast",
    "JRR Tolkitten",
    "Bacon",
    "Beans on toast",
    "The Great Catsby",
    "James Purrl Jones",
    "Her Majesty",
    "The Lord of the Cats",
    "Danger Dave",
    "Epurrnephrine",
    "Celestial void",
    "Nude Molerat",
    "Homunculus 3",
    "Pooper Scooper",
    "Denis the menace",
    "Dentist 10",
    "Thicken Nugget",
    "Business Frog",
    "Freeloader",
    "Velcro",
    "Spoon",
    "Constructive Criticism",
    "Trainwreck",
    "Big Boy Beef",
    "Times New Roman",
    "Plague",
    "Comic Sans",
    "Chester is looking for a job",
    "Sleeps like I pay rent",
    "Lawn Mower",
    "Meatwad",
    "Felony",
    "Treason",
    "Hatred for humanity",
    "Cabinet",
    "Missile Launcher"
];
// array of "titles", for random generation
const title = [
    "Dumbass",
    "Nearsighted",
    "Tired",
    "Shit for brains",
    "The great",
    "The Almighty",
    "Gods greatest gift",
    "Huntress",
    "Homeless",
    "Stinky",
];
// array of "roles", for random generation
// const role = [
//     "begging",
//     "bitcoin farming",
//     "pro gaming",
//     "GTA enthusiast",
//     "jellyfish sales rep",
//     "creator of yummy jams",
//     "mouseing"
// ];
// array of trait level
const traitlvl = [
    "I suck at",
    "I'm great at",
    "I've mastered the art of",
    "I often fail at",
    "I really hate",
    "I'm trying my best at"
];
// array of traits, for random generation
const traits = [
    "linedancing",
    "fishing",
    "walking",
    "eating",
    "making yummy jams",
    "coding",
    "being a cat",
    "barking",
    "breathing",
    "taking compliments",
    "knitting",
    "crocheting",
    "whittling",
    "stealing",
    "arson",
    "mass genocide",
    "a very particular set of skills",
    "murder",
    "petty theft",
    "driving",
    "flying",
    "vaping",
    "chain smoking",
    "keeping plants alive",
    "cooking penne",
    "sleeping with my eyes open",
    "celebrating alien abduction day"
];

//button click activate one array at a time
// first, make arrays
// index - create math random function to randomly generate items from array

// list of randomised arrays
// let randomRole = Math.floor(Math.random() * role.length);
// let randomImg = Math.floor(Math.random() * image.length);
let randomName = Math.floor(Math.random() * nameof.length);
let randomTitle = Math.floor(Math.random() * title.length);
let randomTrait = Math.floor(Math.random() * traits.length);
let randomlvl = Math.floor(Math.random() * traitlvl.length);

// grabbing html elements
// catimg to insert random image from array
// const imgEl = document.querySelector(".catimg");
// title element to insert random title from array
const titleEl = document.querySelector("#titleEl");
titleEl.textContent = title[randomTitle];
// trait level element to insert random level of trait from array
const traitlvlEl = document.querySelector(".traitlvlEl");
traitlvlEl.textContent = traitlvl[randomlvl];

// forEach loops - to create dropdowns with randomised order

// assign nameof to a forEach loop, called "buildnameof"
nameof.forEach(buildnameof);
// start of "forEach" loop - for each elemet in X array
function buildnameof(item, i) {
    // define tempOption - creates "option" in html "select"
    let tempOption = document.createElement("option");
    tempOption.value = i;
    tempOption.innerHTML = item;
    if (randomName == i) {
        tempOption.selected = true;
    }
    // adds "options" to select
    document.querySelector("#nameof").appendChild(tempOption);
};

// assign trait to a forEach loop, called "buildnameof"
traits.forEach(buildtrait);
function buildtrait(item, i) {
    // define tempOption - creates temporary "option" in html "select"
    let tempOption = document.createElement("option");
    // i sets temp index number
    tempOption.value = i;
    // changes temp option to item from array
    tempOption.innerHTML = item;
    if (randomTrait == i) {
        tempOption.selected = true;
    }
    // adds "options" to select
    document.querySelector(".trait").appendChild(tempOption);
};

// start of "for each" loop - for each elemet in X array