let allCreatures = [];
let restraints = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">`;

// Main click handler.
function getCreatureFromForm(){

    const freshCreature = {
        name: $("#crName").val(),
        colour: $("#crColour").val(),
        eyesNum: $("#crEyesNumber").val(),
        bodyShape: $("#crBodyShape").val()
    };

    return freshCreature;
};

// Prepares HTML for a single creature, but does not add to page.
function renderCreature(creature) {
    let crEyesHTML = "";
    let possibleBodies = {
        "Circle": 'ellipse rx="50" ry="50" cx="50" cy="50"',
        "Triangle": 'polygon points="50,10 100,100 0,100"',
        "Square": 'rect width="100" height="100"'
    };

    for (let i = 0; i < creature.eyesNum; i++) {
        crEyesHTML += "<div class='eye'>.</div>"
    }
    const html = `
    <div class = "creature">
    <div class = "creature-body" style = "background: ${creature.colour}">
    ${crEyesHTML}
    </div><br>
    ${restraints}<${possibleBodies[creature.bodyShape]}  style="fill:${creature.colour};"/></svg>
    <div class = "creature-info">❤️
    ${creature.name}</div>
    </div>
    `;
    return html;
};

// Randomize.
function randomizeCreature() {

    const eyesRandom = Math.floor(Math.random() * 5) + 1;
    const nameRandom = getRandomName()
    const colourRandom = "grey";
    const shapesPossible = ["Square", "Circle", "Triangle"];
    const shapeRandom = shapesPossible[Math.floor(Math.random() * 2.9)];

    const randomCreature = {
        name: nameRandom,
        colour: colourRandom,
        eyesNum: eyesRandom,
        bodyShape: shapeRandom
    };
    return randomCreature;
};

// Grab name from API. Async gives function ability to pause- while JS as a whole continues.
// "Pause this function here, but not whole page."
// Await, on the other hand, freezes the program until this is fulfilled.
async function getRandomName() {

   const response = await fetch(
"https://api.gofakeit.com/funcs/petname", {method: "GET",});

   const nameRandom = await response.text();
   console.log("Got name:", nameRandom);
   return nameRandom;
}

// Append one creature to DOM using its HTML.
function addCreatureToDOM(creature) {
    const html = renderCreature(creature);
    $("#creature-list").append(html);
};

// Check if creature data is valid.
function isCreatureValid(creature) {
    if (creature.name == "") return false;
    if (creature.name.length > 12) return false;
    if (creature.eyesNum == "") return false;
    if (creature.eyesNum > 5) return false;

    // Program returns true if it passes all tests.
    return true;
};

// Resets form to default values.
function clearForm() {
    $("#crName").val("");
    $("#crColour").val("ee7dea");
    $("#crEyesNum").val(1);
};

// Render all creatures in random order.
function renderAllCreaturesRandom() {
    $("creature-list").empty();

    const shuffled = 
    allCreatures.slice().sort(() => Math.random() - 0.5);

    shuffled.forEach(function (c, i) {
        const $creature = $(renderCreature(c)).hide();
        $("#creature-list").append($creature);
        $creature.delay(i * 120).fadeIn(300);
    });
};

// Clicker!

$("#add-creature").click(async function () {

    let newCreature;

    if ($("crRandom").is(':checked')) {
        newCreature = randomizeCreature();
        console.log("Random creature made.")
    } 
    else {
        newCreature = getCreatureFromForm();
        console.log("User creature made.")
    }
    
    if (isCreatureValid(newCreature) == false) {
        console.log("Creature not valid!")
        return;
    }

    allCreatures.push(newCreature);
    addCreatureToDOM(newCreature);
    clearForm();
});


