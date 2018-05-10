# Página-web

Página web Bootstrap + Jquery:
----------------------------------------------------------------------------------------------------------------------------------------

Nueva versión.

probar la página:
https://rawgit.com/IsmaFuentes/P-gina-web/v.final/home.html


Primeros bocetos, Idea inicial:
----------------------------------------------------------------------------------------------------------------------------------------
Página de inicio: Contendrá un logo, un título y un botón que nos llevará a la página de noticias. El fondo es un vídeo.
<br>
<img src="https://github.com/IsmaFuentes/P-gina-web/blob/master/capturas%20pweb/1.jpg" width="600">

Página de noticias: Navbar, slider, 2 columnas con noticias y 1 para publicidad, footer.
<br>
<img src="https://github.com/IsmaFuentes/P-gina-web/blob/master/capturas%20pweb/2.jpg" width="600">

Noticia: Misma estructura, sin el slider y con una sola columna para el contenido de la noticia.
<br>
<img src="https://github.com/IsmaFuentes/P-gina-web/blob/master/capturas%20pweb/3.jpg" width="600">

Adaptación a telefono: Navbar desplegable, slider, publicidad situada encima del contenido, contenido en una sola columna y footer.
<br>
<img src="https://github.com/IsmaFuentes/P-gina-web/blob/master/capturas%20pweb/4.jpg" width="600">


----------------------------------------------------------------------------------------------------------------------------------------

Modificaciones/Actualizaciones:

- Página de presentación con vídeo de fondo y un botón que nos lleva a la página de noticias:
https://rawgit.com/IsmaFuentes/P-gina-web/v.final/home.html

- Publicidad añadida en el lado derecho de la página (336px segun las medidas de google), se trata de un "IFRAME" que muestra una página de publicidad creada por mi:  https://rawgit.com/IsmaFuentes/P-gina-web/master/publi.html

UPDATE(25/04/18) 
- Añadida carga de archivos Json con jquery, 3 json de 2 noticias cada uno (con botón de carga y al hacer scroll).
```ruby
//Cargar al hacer scroll//
$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() + 10 >= $(document).height()) {
        if (numjson < 4) {
            $.getJSON("https://rawgit.com/IsmaFuentes/P-gina-web/master/json/" + numjson + ".json", function (jsonObject) {
                buildrow(jsonObject);
            }); numjson++;
        }
    }
});
```
```ruby
//Cargar al usar el boton "More"//
function cargar() {
    if (numjson < 4) {
        $.getJSON("https://rawgit.com/IsmaFuentes/P-gina-web/master/json/" + numjson + ".json", function (jsonObject) {
            buildrow(jsonObject);
        }); numjson++;
    }
};
```
```ruby
//Presentación//
function buildrow(json) {
    $.each(json, function (i, item) {
        $("#noticias").append('<div class="col-sm-6 col-md-6">' +
            '<div class="thumbnail">' +
            '<div class="caption">' + '<h3 class="text-center">' + item.titulo + "</h3>" + "</div>" +
            '<img src="' + item.img + '" alt="..." />' +
            '<div class="caption">' + '<p class="text-justify">' + item.descripcion + "</p>" +
            '<button type="button" class="btn center-block">View</button' + 
            "</div>" + "</div>" + "</div>");
    })
};
```

UPDATE(03/05/18) 
- Añadida publicidad en la adaptación a teléfono (mismo iframe que en la versión de pc pero situado en la parte superior y con dimensiones actualizadas).
- Solucionado error de plantilla (las noticias cargaban debajo del botón de cargar).
- Página de publicidad modificada (Publicidad de coches BMW | España).

UPDATE(10/05/18)
- Añadido icono de carga que se muestra cuando los ficheros json tardan en cargar mediante una función jquery (ajax). 
```ruby
$(document).ajaxStart(function() {
    $("#loading").show();
}).ajaxStop(function() {
    $("#loading").hide('slow');});
```
<img src="https://raw.githubusercontent.com/IsmaFuentes/P-gina-web/v.final/img/loading.gif" width="50px">

- Modificado el botón de view de las noticias, ahora se llama "price" y muestra precios, para entrar en la noticia ahora pulsamos sobre el título.



