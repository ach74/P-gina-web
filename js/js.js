//Al cargar la página//

$(document).ready(function(){
    //Llamamos a las funciones//
    $("#boton1").click(function(){goToInicio();});
});


//botón con funcion de enlace//
function goToInicio(){
	window.location.href = 'index.html';
}

/*
window.onload = function(){
	document.getElementById("boton1").onclick=function(){inicio()};
}

//botón con funcion de enlace
function inicio() {
	location.href = "index.html";
};
*/