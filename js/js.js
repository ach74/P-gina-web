//Al cargar la página//

$(document).ready(function(){
    //Llamamos a las funciones//
    $("#boton1").click(function(){goToInicio();});
    $("#boton2").click(function(){goToNews1();});
});


//botones con funcion de enlace//
function goToInicio(){
	window.location.href = 'index.html';
}

function goToNews1(){
	window.location.href = 'news1.html';
}

