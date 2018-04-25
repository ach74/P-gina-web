//Al cargar la página//
$(document).ready(function(){
    //Llamamos a las funciones//
    $("#boton1").click(function(){goToInicio();});

    $("#boton2").click(function(){goToNews1();});

    $("#btncargar").click(function(){cargar();});

});

//botones con funcion de enlace//
function goToInicio(){
	window.location.href = 'index.html';
}

function goToNews1(){
	window.location.href = 'news1.html';
}




//Carga de archivos JSON
var numjson = 1;

//Cargar al hacer scroll
$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() + 10 >= $(document).height()) {
        if (numjson < 4) {
            $.getJSON("https://cdn.rawgit.com/IsmaFuentes/P-gina-web/f1596aed/json/" + numjson + ".json", function (jsonObject) {
                addrow(jsonObject);
            }); numjson++;
        } 
    }
});

//Cargar al usar el boton "More"
function cargar() {
    if (numjson < 4) {
        $.getJSON("https://cdn.rawgit.com/IsmaFuentes/P-gina-web/f1596aed/json/" + numjson + ".json", function (jsonObject) {
            addrow(jsonObject);
        }); numjson++;
    }
};

//CAMBIAR ENLACES A RAWGIT!!
//https://rawgit.com/IsmaFuentes/P-gina-web/master/json/

//Presentación
function addrow(json) {
    $.each(json, function (i, item) {
        $("#modelos").append('<div class="col-sm-6 col-md-6">' +
            '<div class="thumbnail">' +
            '<div class="caption">' + '<h3 class="text-center">' + item.titulo + "</h3>" + "</div>" +
            '<img src="' + item.img + '" alt="..." />' +
            '<div class="caption">' + '<p class="text-justify">' + item.descripcion + "</p>" +
            '<button type="button" class="btn center-block">View</button' + 
            "</div>" + "</div>" + "</div>");
    })
};