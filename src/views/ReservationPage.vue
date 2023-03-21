<template>
  <div class="principal">

    <div class="form">

      <label>Fecha llegada:</label>
      <input type="date" class="input" id="llegada">

      <label>Fecha salida:</label>
      <input type="date" class="input" id="salida">

      <button class="btn" @onClick="verificarFecha()">Seleccionar</button>
    </div>

    <div class="rooms"> <!-- Falta un for in para recorrer las habitaciones disponibles con el API-->

      <room-hotel></room-hotel>
      <room-hotel></room-hotel>
      <room-hotel></room-hotel>

    </div>

  </div>
</template>

<script>
import RoomHotel from '../components/RoomHotel.vue'

export default {
  components: {
    RoomHotel,
  },
  methods: {
    verificarFecha() {

      const fechallegada = document.getElementById("llegada").value;
      const fechasalida = document.getElementById("salida").value;


      var fechaActual = new Date(); // Se obtiene la fecha completa

      const añoActual = fechaActual.getFullYear();  // Año
      const diaActual = fechaActual.getDate();      // Dia
      const mesActual = fechaActual.getMonth() + 1; // Mes

      fechaActual = añoActual + '-' + mesActual  + '-' + diaActual;

      if(fechallegada < fechaActual || fechasalida < fechaActual){
        console.log("Es invalida la fecha");
        alert("Especifica fechas validas, mayor que la fecha actual: " + fechaActual)
      } else {

      }
    }
  }
}
</script>