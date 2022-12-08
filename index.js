let diaSemana = prompt("¿Que dia es hoy?")
switch (diaSemana) {
    case "lunes":
        alert("hoy es lunes");
        alert("Hoy toca caminata 45 minutos y 30 abdominales")
        break;
    case "martes":
        alert("hoy es martes");
        alert ("hoy toca trote por 20 minutos y flexiones de brazo")
        break;
    case "miercoles":
        alert("hoy es miercoles");
        alert("hoy toca caminata 5 km y 30 abdominales");
        break;
    case "jueves":
        alert("hoy es jueves");
        alert("hoy toca trote por 20 minutos y plancha");
        break;
    case "viernes":
        alert("hoy es viernes");
        alert("hoy toca caminata ligera, flexiones y estocadas");
        break;
    case "sabado":
        alert("hoy es sabado");
        alert("Sabado light, caminata paseando y abdominales");
        break;
    case "domingo":
        alert("hoy es domingo");
        alert("Domingo de descanzo, opcional flexiones de brazo y plancha 45 segundos");
        break;
    default:
        alert("escribe el dia de la semana en minusculas.")
}
alert("RECUERDA QUE LUEGO DE CADA SECCION DE ENTRENAMIENTO ESTIRAR MUSCULOS");

i = 20; 
while (i < 70) {
  console.log("Valor de i:", i);

  i = i + 1; 
}

let numeroUsuario = prompt ("Ingresa un numero" );
for(i=0;i<=numeroUsuario; i++ ){
    document.write("Hola mundo <br>");

}