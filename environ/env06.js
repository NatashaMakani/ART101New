// Variable
let playerlocation = "the Aspen Forest"; 

// Array
let inhabitants = ["YOU", "LIGHT ARRAY CREATURES", "BOUNDARYMEN", "HANK", "LAHDI"]; 
let currentCharacters = []

// Objects
let hankCharacter = {
    name: "Hank",
    species: "Semi-robotic biped",
    height: 10,
    fav_colour: "Blue",
    pronoun_subject: "He",
    pronoun_possessive: "His",
    dialogue: "Blurp!",
    html_display: `<img id= 'hank' src='../images/hank.png'>`
};

let lahdiCharacter = {
    name: "Lahdi",
    species: "Human(?)",
    height: 5.4,
    fav_colour: "Green",
    pronoun_subject: "She",
    pronoun_possessive: "Her",
    dialogue: "Hello.",
    html_display: `<img id= 'lahdi' src='../images/lahdi.png'>`
};

let lacCharacter = {
    name: "Light Array Creature",
    species: "Light Array Creature",
    height: "N/A",
    fav_colour: "beyond human perception",
    pronoun_subject: "It",
    pronoun_possessive: "Its",
    dialogue: "*&%&*(^&**??",
    html_display: `<img id= 'lac' src='../images/lac.png'>`
}

let boundarymenCharacter = {
    name: "Boundaryman",
    species: "Boundaryman",
    height: 17,
    fav_colour: "Seafoam Teal",
    pronoun_subject: "It",
    pronoun_possessive: "Its",
    dialogue: "...",
    html_display: `<img id= 'boundaryman' src='../images/boundaryman.png'>`
}

let quotes = [ 
    "<p> Plenty of strange beings inhabit these lands. They're quite bizarre, forgive the depths of my unconscious for that. This one is named Hank. I don't know what he is, but he looks quite goofy. The other is Lahdi, a librarian and cartographer.</p>",
    "<p> The light arrays... I try not to go out here. It always felt like I didn't belong. Like it's where the world ends; where it becomes unfinished. </p>"
]

let bgImages = [
    '../images/img_env01_bg.png',
    '../images/img_env02_bg.png',
]


// --Functions--
function walkAway () {
    if (playerlocation == "the Aspen Forest") {
        playerlocation = "the Light Arrays";
        inhabitants = ["LIGHT ARRAY CREATURES", "BOUNDARYMEN"];
        $("BODY").css("background-image", "url(" + bgImages[1] + ")");
    }
    else if (playerlocation == "the Light Arrays") {
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

//function imgOutputClicked(element) {
//  $(element).animate({height: '+=100px'}, "slow");
//  $(element).animate({height: '-=100px'}, "slow");
//};

function applyOutput () {

    // Location
    let introductionLocation = "You are currently standing in " + playerlocation;
    $("#outputLocation").html(introductionLocation);

    // Inhabitants
    let introductionInhabitants = "Within " + playerlocation + 
    ", the following inhabitants may be found: <br><br>";
    inhabitants.forEach(item => (introductionInhabitants += (item + ", ")))
    $("#outputInhabitants").html(introductionInhabitants);

    // Location Matcher
    switch(playerlocation) {
        case "the Aspen Forest":
            currentCharacters = [hankCharacter, lahdiCharacter];
            $("#outputDescription").html(quotes[0])
            console.log(currentCharacters)
        case "the Light Arrays":
            currentCharacters = [boundarymenCharacter, lacCharacter];
            $("#outputDescription").html(quotes[1])
            console.log(currentCharacters)
        default:
            currentCharacters = []
            console.log(currentCharacters)
            break;
    };

    $("#imgOutput1").html(currentCharacters[0].html_display)
    $("#imgOutput2").html(currentCharacters[1].html_display)
    $("#output1").html(introduceCharacter(currentCharacters[0]));
    $("#output2").html(introduceCharacter(currentCharacters[1]));

};

// ---Outputs---
// Locations
$("BODY").css("background-image", "url(" + bgImages[0] + ")")
$("#debugOutput").html("TESTING TESTING TESTING")
applyOutput();

$("#Wander").click(function () {
    
    $("#lahdi").animate({up: '+=50px'});
    walkAway();
    applyOutput();
    
});

$("#imgOutput1").hover(function(){
    $(this).css("opacity", 0.5)
    }, function(){
    $(this).css("opacity", 1)
});
$("#imgOutput1").dblclick(function() {
    alert(currentCharacters[0].dialogue)
});

$("#imgOutput2").hover(function(){
    $(this).css("opacity", 0.5)
    }, function(){
    $(this).css("opacity", 1)
});
$("#imgOutput2").dblclick(function() {
    alert(currentCharacters[1].dialogue)
});