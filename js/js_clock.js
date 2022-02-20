"use strict"

$(document).ready(function(){

    setInterval(function(){
        var reloj = moment().format("hh:mm:ss");
        $("#clock").html(reloj);
    },1000);

});