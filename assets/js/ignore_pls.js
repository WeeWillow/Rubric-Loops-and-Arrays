// test for at fange alle med samme class, gennem querySelectorAll
// ignorer, vil arbejde videre senere!

// select all .trait in html and save as const dropdowns
const dropdowns = document.querySelectorAll(".trait");

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

let randomTrait = Math.floor(Math.random() * traits.length);

dropdowns.forEach(dropdown)

