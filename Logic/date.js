const fecha = document.getElementById('date');

function Calcular_btn() {
  const nacer = new Date(fecha.value);
  const hoy = new Date();
  let años = hoy.getFullYear() - nacer.getFullYear();
  let mes = hoy.getMonth() - nacer.getMonth();
  let dia = hoy.getDate() - nacer.getDate();

  if (mes < 0 || (mes == 0 && dia > 0)) {
    años--
  }
  alert(`La diferencia es: ${años} años`);
}
