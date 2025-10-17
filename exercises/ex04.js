let count = 0;
let colours = ["Orchid", "Coral", "HotPink", "Plum"];
colours.push("SeaGreen")
colours.unshift("RosyBrown");
let coloursSize = colours.length;
$("#needy-button").click( function() {
    $("#needy-button").html("Clicks: " + count + " Colour: " + colours[count % (coloursSize)]);
    $("body").css("background-color", (colours[count % (coloursSize)]));
    count += 1;
});

