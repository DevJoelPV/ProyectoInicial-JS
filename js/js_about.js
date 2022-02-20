
/*
    Este codigo solo se utiliza en la pagina about.html
*/

"use strict"    

$(document).ready(function(){
    
    var theme = localStorage.getItem("tema");
    $("#acordeon").accordion();

    var colorAcordeon = $(".ui-accordion-header");
    console.log(colorAcordeon);
    switch (theme) {
        case "green":
            colorAcordeon.css("background", "darkgreen");
            colorAcordeon.css("border", "1px solid darkgreen");
            colorAcordeon.css("color", "white");
            break;
    
        case "blue":
            colorAcordeon.css("background", "darkblue");
            colorAcordeon.css("border", "1px solid darkblue");
            colorAcordeon.css("color", "white");
            break;

        case "red":
            colorAcordeon.css("background", "darkred");
            colorAcordeon.css("border", "1px solid darkred");
            colorAcordeon.css("color", "white");
            break;
    }
});