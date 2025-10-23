// Variable
let playerlocation = "the Aspen Forest"; 

// Array
let inhabitants = ["YOU", "LIGHT ARRAY CREATURES", "BOUNDARYMEN", "HANK", "LAHDI"]; 


// Objects
let hankCharacter = {
    name: "Hank",
    species: "Semi-robotic biped",
    height: 10,
    fav_colour: "Blue",
};

let lahdiCharacter = {
    name: "Lahdi",
    species: "Human(?)",
    height: 5.4,
    fav_colour: "Green",
};



// ---Outputs---
/*
$("#output").html("<p> Test!! TEST CASE! PLEASE SHOW UP!!! </p> ");
$("#output").append("<p> Test!! TEST CASE! PLEASE SHOW UP!!! </p> "); // My frustration is evident.
*/
// Locations
let introductionLocation = "You are currently standing in " + playerlocation;

$("#outputLocation").append(introductionLocation);

// Inhabitants
let introductionInhabitants = "Within " + playerlocation + 
", the following inhabitants may be found: <br><br>";
inhabitants.forEach(item => (introductionInhabitants += (item + " ")))
$("#outputInhabitants").html(introductionInhabitants);

// Hank
let introductionHank = "This is " + hankCharacter.name 
+ ". He is a " + hankCharacter.species
+ ", standing at " + hankCharacter.height + " feet. <br>"
+ "His favourite colour is: " + hankCharacter.fav_colour;

$("#outputHank").html(introductionHank);

// Lahdi
let introductionLahdi = "This is " + lahdiCharacter.name 
+ ". She is a " + lahdiCharacter.species
+ ", standing at " + lahdiCharacter.height + " feet. <br>"
+ "Her favourite colour is: " + lahdiCharacter.fav_colour;

$("#outputLahdi").html(introductionLahdi);

