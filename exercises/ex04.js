let count = 0;
$("#needy-button").click( function() {
    count += 1;
    $("#needy-button").html("You clicked me " + count + " times.");

});