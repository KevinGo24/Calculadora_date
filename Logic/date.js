const fecha = document.getElementById('date');
const mostar_Año = document.getElementById("mostrar")
function Calcular_btn() {
  const nacer = new Date(fecha.value);
  const hoy = new Date();
  let años = hoy.getFullYear() - nacer.getFullYear();
  let mes = hoy.getMonth() - nacer.getMonth();
  let dia = hoy.getDate() - nacer.getDate();

  if (mes < 0 || (mes == 0 && dia > 0)) {
    años--
  }
  if (fecha.value == "" || fecha.value == null  ) {
    alert("¡Error! Debes seleccionar una fecha antes de calcular.");
    return; // El 'return' detiene la ejecución de la función aquí mismo
  }
 mostar_Año.innerText = años

  
}
