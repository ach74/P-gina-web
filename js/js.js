//Al cargar la página//
$(document).ready(function(){
    //Botones//
    $("#boton1").click(function(){goToInicio();});

    $("#news1").click(function(){goToNews1();});

    $("#btncargar").click(function(){cargar();});

    //Escondemos el div con el loading button//
    $('#loading').hide();

});

//botones con funcion de enlace//
function goToInicio(){
	window.location.href = 'index.html';
}

function goToNews1(){
	window.location.href = 'news1.html';
}


//Carga de archivos JSON//
var numjson = 1;

//Cargar al hacer scroll//
$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() + 5 >= $(document).height()) {
        if (numjson < 4) {
            //loading div show
            $("#loading").show();
            //carga json
            $.getJSON("https://rawgit.com/IsmaFuentes/P-gina-web/master/json/" + numjson + ".json", function (jsonObject) {
                buildrow(jsonObject);
            }); numjson++;
        }
    } else {
        //loading div hide
        $("#loading").hide();
    }
});

//Cargar al usar el boton "More"//
function cargar() {
    if (numjson < 4) {
        //loading div show
        $("#loading").show();
        //carga json
        $.getJSON("https://rawgit.com/IsmaFuentes/P-gina-web/master/json/" + numjson + ".json", function (jsonObject) {
            buildrow(jsonObject);
        }); numjson++;
    }
    //loading div hide
    $("#loading").hide();
};


//Presentación//
function buildrow(json) {
    $.each(json, function (i, item) {
        $("#noticias").append('<div class="col-sm-6 col-md-6">' +
            '<div class="thumbnail">' +
            '<div class="caption">' + '<h3 class="text-center">' + item.titulo + "</h3>" + "</div>" +
            '<img src="' + item.img + '" alt="..." />' +
            '<div class="caption">' + '<p class="text-justify">' + item.descripcion + "</p>" +
            '<button type="button" class="btn center-block">Price</button' + 
            "</div>" + "</div>" + "</div>");
    })
};

/*
//Loading button//
$(document).ajaxStart(function() {
    $("#loading").show();
}).ajaxStop(function() {
    $("#loading").hide('slow');});
*/
