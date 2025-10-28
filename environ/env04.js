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
    pronoun_subject: "He",
    pronoun_possessive: "His",
};

let lahdiCharacter = {
    name: "Lahdi",
    species: "Human(?)",
    height: 5.4,
    fav_colour: "Green",
    pronoun_subject: "She",
    pronoun_possessive: "Her",
};

let lacCharacter = {
    name: "Light Array Creature",
    species: "Light Array Creature",
    height: "N/A",
    fav_colour: "beyond human perception",
    pronoun_subject: "It",
    pronoun_possessive: "Its",
}

let boundarymenCharacter = {
    name: "Boundaryman",
    species: "Boundaryman",
    height: 17,
    fav_colour: "Seafoam Teal",
    pronoun_subject: "It",
    pronoun_possessive: "Its",
}

let quotes = [ 
    "<p> Plenty of strange beings inhabit these lands. They're quite bizarre, forgive the depths of my unconscious for that. This one is named Hank. I don't know what he is, but he looks quite goofy. The other is Lahdi, a librarian and cartographer.</p>",
    "<p> The light arrays... I try not to go out here. It always felt like I didn't belong. Like it's where the world ends; where it becomes unfinished. </p>"
]

let bgImages = [
    '../images/img_env01_bg.png',
    '../images/img_env02_bg.png',
]

let charimages = [
    '../images/hank.png',
    '../images/lahdi.png',
    '../images/boundaryman.png',
    '../images/lac.png',
]

// --Functions--
function walkAway () {
    if (playerlocation = "the Aspen Forest") {
        $('#debugOutput').html("Wandering")
        playerlocation = "the Light Arrays";
        inhabitants = ["LIGHT ARRAY CREATURES", "BOUNDARYMEN"];
        $("BODY").css("background-image", "url(" + bgImages[1] + ")");
    }
    else {
        playerlocation = "the Aspen Forest";
        inhabitants = ["YOU", "LIGHT ARRAY CREATURES", "BOUNDARYMEN", "HANK", "LAHDI"];
        $("BODY").css("background-image", "url(" + bgImages[0] + ")");
    }
};

function introduceCharacter (current_character) {
    let introduction_output = "This is " + current_character.name 
    + ". " + current_character.pronoun_subject + " is a " + current_character.species
    + ", standing at " + current_character.height + " feet. <br>"
    + current_character.pronoun_possessive + " favourite colour is: " + current_character.fav_colour;

    $('#debugOutput').html(introduction_output)
    return introduction_output
};

function applyOutput () {

    // Location
    let introductionLocation = "You are currently standing in " + playerlocation;
    $("#outputLocation").html(introductionLocation);

    // Inhabitants
    let introductionInhabitants = "Within " + playerlocation + 
    ", the following inhabitants may be found: <br><br>";
    inhabitants.forEach(item => (introductionInhabitants += (item + ", ")))
    $("#outputInhabitants").html(introductionInhabitants);

    
    // Aspen Forest
    if (playerlocation == "the Aspen Forest") {
        $("#imgOutput1").html("<img id= 'hank' src='" + charimages[0] + "'>")
        $("#imgOutput2").html("<img id= 'lahdi' src='" + charimages[1] + "'>")
        $("#output1").html(introduceCharacter(hankCharacter));
        $("#output2").html(introduceCharacter(lahdiCharacter));
        $("#outputDescription").html(quotes[0])
    }

    //Light Arrays
    else if (playerlocation == "the Light Arrays") {
        $("#imgOutput1").html("<img id= 'boundaryman' src='" + charimages[2] + "'>")
        $("#imgOutput2").html("<img id= 'lac' src='" + charimages[3] + "'>")
        $("#output1").html(introduceCharacter(boundarymenCharacter));
        $("#output2").html(introduceCharacter(lacCharacter));
        $("#outputDescription").html(quotes[1])
    };
}

// ---Outputs---
// Locations
$("BODY").css("background-image", "url(" + bgImages[0] + ")")
$("#debugOutput").html("TESTING TESTING TESTING")
applyOutput();

$("#Wander").click(function () {
    walkAway();
    applyOutput();
});







