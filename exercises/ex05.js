let count = 0;
let total_count = 0;
let mood_array = ["Fresh and happy!", "Keep pushing!", "So tired!"]
let mood = mood_array[0]
let colours = ["Orchid", "Coral", "HotPink", "Plum"];

colours.push("SeaGreen"); //Last in array.
colours.unshift("RosyBrown"); //First in array.

let coloursSize = colours.length;

$("#needy-button").click( function() {
    //let remainder = count % (coloursSize)
    $("#needy-button").html("Clicks: " + total_count + " | Colour: " + colours[count] + " | Mood: " + mood);
    $("body").css("background-color", (colours[count]));
    count += 1;
    total_count += 1;

    if (count == colours.length) { 
        count=0; 
    }

    if (total_count <= colours.length) {
        mood = mood_array[0]
    }
    else if (total_count < 10) {
        mood = mood_array[1]
    }
    else {
        mood = mood_array[2]
    }
});

