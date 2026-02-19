const fecha = document.getElementById("date");

function Calcular_btn() {
    // 1. Convertir el valor del input a un objeto Date
    const fechaObtenida = new Date(fecha.value);
    
    // 2. Extraer el año digitado (¡Ojo! Hay que guardarlo en una variable)
    const añoDigitado = fechaObtenida.getFullYear();
    
    // 3. Obtener el año local actual
    const añoActual = new Date().getFullYear();
    
    // 4. Hacer la resta
    const resultado = añoActual - añoDigitado;

    // 5. Mostrarlo (por ahora en consola)
    console.log("La diferencia es:", resultado);
    
    return resultado;
}