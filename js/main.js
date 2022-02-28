
/*
  Este codigo se utiliza en todas las páginas del proyecto
*/

"use strict"

$(document).ready(function(){
    
  //Change temas
    var temaPredet=localStorage.getItem("tema");
    var theme = $("#themes");
    if(temaPredet == null || temaPredet == undefined || temaPredet == ""){
      localStorage.setItem("tema", "green");
      temaPredet = "green";
      location.reload();
    }else{
      theme.attr("href", "css/" + temaPredet + ".css");
    }


    
    $("#green").click(function(){
      theme.attr("href", "css/green.css");
      changeTheme("green");
    });

    $("#red").click(function(){
      theme.attr("href", "css/red.css");
      changeTheme("red");
    });

    $("#blue").click(function(){
      theme.attr("href", "css/blue.css");
      changeTheme("blue");
    });


  //Scroll inicio
    $('#subir').click(function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    });


  //fake Login 
    $("#login form").submit(function(){
      let name =  $("#login_name").val();

      localStorage.setItem("login_name", name);
    })

    var login_name = localStorage.getItem("login_name");

    if(login_name != undefined && login_name != null){
      let about_p = $("#about p").html("<br><b>Bienvenido, " + login_name+"<b>");
      about_p.append("<br><a href='#' id='logout'> Cerrar sesión </a>")
      $("#login").hide();
    }else{
      $("#about p").html("¿Quien eres?");
    }
    

    $("#logout").click(function(){
      localStorage.removeItem("login_name");
      location.reload();
    });




  function changeTheme(theme){
    localStorage.setItem("tema", theme);
    location.reload();
    }
      
});