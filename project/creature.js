



$("#add-creature").click(function(){
    alert("Button is clicked.")


    let crName = $("#crName").val();
    $("#creature-list").append("<div>" + crName + "</div>");
});
