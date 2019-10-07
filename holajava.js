console.log("Hola javaScrip");

var saludo = document.querySelector("h2");
var tiempo = new Date();
var horas = tiempo.getHours();
if (horas >=5 && horas < 12)
{
saludo.textContent ='buenas dias';
}
else if (horas >=12 && horas < 20)
{
saludo.textContent ='buenas tardes';
}
else
{
saludo.textContent ='buenas noches';
}

