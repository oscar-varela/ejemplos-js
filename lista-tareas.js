var botonAgregar = document.querySelector('#boton-agregar');
var textoTareas =document.querySelector('#texto-tarea');
var listaTareas = document.querySelector('#lista-tareas')


botonAgregar.addEventListener('click',agregarTarea);
listaTareas.addEventListener('click',borrarTarea);

function borrarTarea(evento)
{
    if (evento.targer.textContent === 'x'){
    evento.target.parentElement.remove();
    }
}

/*agregar una funcion  */
function agregarTarea()
{
var li = document.createElement('li');
var nodoTexto = document.createTextNode(textoTareas.value);

console.log(li);


var bottoborrar = document.createElement('button');
bottoborrar.textContent('x');
li.appendChild(nodoTexto);

listaTareas.appendChild(li);

}