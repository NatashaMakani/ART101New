// ---Defines---
// Variable
let location = "the Aspen Forest"; 

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
$("#output").append("<p> Test!! TEST CASE! PLEASE SHOW UP!!! </p> "); // My frustration is evident.
$("#output").append("<h2> and then...</h2>");
$("#output").append("<p> the mango grew to be known as the best warrior mango in the kingdom of mangoes. </p>");

// Locations
let introductionLocation = "<p> You are currently standing in " + location + ".</p>";

$("#outputLocation").append(introductionLocation);

// Inhabitants
let introductionInhabitants = "<p> Within " + location + 
", the following inhabitants may be found: <br>" + inhabitants + "</p>";

$("#outputInhabitants").html(introductionInhabitants);

// Hank
let introductionHank = "<p> This is " + hankCharacter.name 
+ ". He is a " + hankCharacter.species
+ " standing at " + hankCharacter.height + " feet. <br>"
+ "His favourite colour is: " + hankCharacter.fav_colour + "</p>";

$("#outputHank").html(introductionHank);

// Lahdi
let introductionLahdi = "<p> This is " + lahdiCharacter.name 
+ ". She is a " + lahdiCharacter.species
+ " standing at " + lahdiCharacter.height + " feet. <br>"
+ "Her favourite colour is: " + lahdiCharacter.fav_colour + "</p>";

$("#outputLahdi").html(introductionLahdi);

