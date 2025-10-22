let count = 0;
let colours = ["Orchid", "Coral", "HotPink", "Plum"];
colours.push("SeaGreen"); //Last in array.
colours.unshift("RosyBrown"); //First in array.
let coloursSize = colours.length;
$("#needy-button").click( function() {
    //let remainder = count % (coloursSize)
    $("#needy-button").html("Clicks: " + count + " Colour: " + colours[count]);
    $("body").css("background-color", (colours[count]));
    count += 1;

    if (count == colours.length) { 
        count=0; 
    }
});

