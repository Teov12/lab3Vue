const app = Vue.createApp({
  data(){
    return{
      inversionMinima: 'La inversion minima debe ser de $1000',
      diasMinimos: '(Mínimo 30 días)',
      inversion: 'Monto que desea invertir',
      ingresarDatos: 'Por favor, ingrese sus datos',
      name: '',
      monto: null,
      dias: null,
      mensajeError: 0,
      bandera: true,
      mostrarErrorMonto: false,
      mostrarErrorDias: false,
      mostrarErrorDatos: false,
      porcentaje: 0,

    }
  },
  methods: {
    btnCalcular(){
      this.validarFormulario();
      if(this.bandera === true){
        console.log("Bien");
      }else{
        console.log("notbien");
      }
    },
    validarFormulario(){
      this.bandera = true;
      if(this.name.trim() === ''){
        this.mensajeError = 1;
        this.bandera = false;
      }else if(this.monto < 1000){
        this.mensajeError = 2;
        this. bandera= false;
      }else if(this.dias < 30){
        this.mensajeError = 3;
        this.bandera= false;
      }else{
        this.mensajeError = 0;
        this.bandera = true;
      }

    },
    calcularMonto(){

    },

    calcularPorcentaje(){
      if (this.dias <= 60){
        this.porcentaje = 40;
      }
      else if(this.dias>60 || this.dias<121){
        this.porcentaje = 45;
      }
      else if(this.dias>120 || this.dias<361){
        this.porcentaje = 50;
      }
      else if(this.dias > 359){
        this.porcentaje = 65;
      }
      return this.porcentaje;
    }
   
    

    
  }
}).mount('#app');
