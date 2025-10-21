// declaring an array with name myCommutes
let myCommutes = ["metro bus", "UCSC taps bus", "personal car"];

// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "Bus",
    route: 11,
    print: "Ferns",
    hasMiddleDoor: true,
    drivers: ["Old Lady", "Woman with black hair", "Crewcut guy"],
};

let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[2] + "</p>";
megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best driver: " + myFavouriteCommute.drivers[1] + "</p>";

$("#output").html(megaSentence);