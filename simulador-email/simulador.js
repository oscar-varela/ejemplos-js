var botonEnviar = document.querySelector('#boton-enviar');
var mail = document.querySelector('#email');
var asunto = document.querySelector('#asunto');
var contenido = document.querySelector('#contenido');
var animacion = document.querySelector('#animacion');
var formulario = document.querySelector('#formulario');
var botonReiniciar = document.querySelector('#botton-reiniciar')

botonEnviar.addEventListener('click',validarFormulario);
botonReiniciar.addEventListener('click', function(){
    formulario.reset();
})


// se usa para ebaluar cuando se sale del campo
mail.addEventListener("blur" , validarCampo);
asunto.addEventListener("blur" , validarCampo);
contenido.addEventListener("blur" , validarCampo);
mail.addEventListener("input" , validarCampo);
asunto.addEventListener("input" , validarCampo);
contenido.addEventListener("input" , validarCampo);

function validarCampo()
{
    if(this.value === '')
    { this.style.borderColor= "red"}
    else {
        this.style.borderColor= "green"
    }
    if (mail.value != '' && asunto.value != '' && contenido.value !='')
    { botonEnviar.disabled = false; }
    else{
        botonEnviar.disabled = true;
    }

}

function validarFormulario(evento)
{
    evento.preventDefault();
    console.log('validando formulario');
    console.log(mail.value);
    console.log(asunto.value);
    console.log(contenido.value);
    if (mail.value != '' && asunto.value != '' && contenido.value !='')
    {
        animacion.style.display = 'block';
        setTimeout(function ()
{
    console.log('voy a cambiar la img');
    console.log(animacion.src);
      animacion.src="mail.gif";
      formulario.reset();
}, 3000);
    } else {
        //poner el borde en vacio color rojo
        if (mail.value === ''){
            mail.style.borderColor = "red";
        }

        if (asunto.value === ''){
            asunto.style.borderColor = "red";
        }

        if (contenido.value === ''){
            contenido.style.borderColor = "red";
        }
    }
}

