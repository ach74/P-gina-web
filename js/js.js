
//Funciones
/*$('boton1').click(function() {
  window.location='index.html';
  return false;
});
*/

window.onload = function(){
	document.getElementById("boton1").onclick=function(){inicio()};
}

function inicio() {
	location.href = "index.html";
	/*document.getElementById("boton1").onclick=location.href = "index.html";*/
};