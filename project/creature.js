

$("#add-creature").click(function(){
    alert("Button is clicked.")


    let crName = $("#crName").val();
    let crColour = $("#crColour").val();
    let crEyesNumber = $("#crEyesNumber").val();
    let crEyesHTML = "";
    let restraints = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">`;
    let crBodyShape = $("#crBodyShape").val();
    
    for (let i = 0; i < crEyesNumber; i ++) {
        crEyesHTML += "<div class=eye>.</div>";
    }

    if (crName != "" && !(crName.length > 12)) {
        $("#creature-list").append(`
            <div class = "creature">
                <div class = "creature-body" style="background: ${crColour}"
                >${crEyesHTML}</div><br>
                ${restraints}<${crBodyShape}  style="fill:${crColour};"/></svg>
                <div class = "creature-info"> ${crName} </div>
            </div>
            `);
    }
});


