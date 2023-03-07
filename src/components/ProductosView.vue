<template>
  <v-container>
   <div class="container">
    <div class="header-title">

<h2 class="text-center my-5">Catálogo completo</h2></div>
   </div>
    <v-btn class="btn-crear"
      v-if="crear"
      @click="crearFormCreacion()"
      @submit.prevent="crearProducto"
      >Crear producto</v-btn
    >
    <form class="form-edicion" v-if="mostrarFormularioCreacion">
      <input placeholder="Nombre del producto" v-model="nombre" />
      <input placeholder="Marca" v-model="marca" />

      <input placeholder="Descripción" v-model="descripcion" />
      <input placeholder="Precio" v-model="precio" />
      <input
        placeholder="Url de la imagen"
        v-model="imagen"
      />
      <div class="v-card__actions">
      <v-btn class="btn-comprar w-50" @click="crearProducto()">Crear ahora</v-btn>
      <v-btn class="btn-comprar-outlines w-50" @click="cancelarCreacion()">Cancelar</v-btn></div>
      <div v-if="hayError">
         <ul>
             <li v-bind:key="x" v-for="x in error">{{x}}</li>
         </ul>
      </div>
     
    </form>
     <div v-if="creado">
           <span class="text-success">Creado con éxito!</span>
       </div>
    <v-text-field
      v-model="busqueda"
      label="Buscar"
      prepend-inner-icon="mdi-magnify"
    ></v-text-field>
    <v-row>
      <v-col
        v-for="producto in productosFiltrados"
        :key="producto.id"
        cols="12"
        sm="6"
        md="3"
      >
        <v-card class="card">
          <v-img
            v-if="!producto.mostrarFormularioEdicion"
            :src="producto.imagen"
            height="300"
          ></v-img>
          <div class="container">
           <v-card-text class="marca" v-if="!producto.mostrarFormularioEdicion">{{
            producto.marca
          }}</v-card-text>
          <v-card-title class="card-title" v-if="!producto.mostrarFormularioEdicion">{{
            producto.nombre
          }}</v-card-title>
          <v-card-text class="card-text" v-if="!producto.mostrarFormularioEdicion">{{
            producto.descripcion
          }}</v-card-text>
          <v-card-subtitle class="precio" v-if="!producto.mostrarFormularioEdicion"
            >${{ producto.precio }}</v-card-subtitle
          >
          <v-card-actions>
            <v-btn class="btn-comprar w-100 text-white white" v-if="agregar" @click="agregarProducto(producto)" style="color: white !important"
              >Agregar al carrito</v-btn
            >
            <!-- <v-btn class="btn-comprar-outline w-50"
              v-if="editar && producto.mostrarBotonEditar"
              @click="crearFormEdicion(producto)"
              >Editar</v-btn
            > -->
            <form class="form-edicion" v-if="producto.mostrarFormularioEdicion">
              <label for="nombre">Nombre del producto:</label>
              <input
                id="nombre"
                placeholder="Nombre del producto"
                v-model="producto.nombre"
              />

              <label for="nombre">Marca:</label>
              <input
                id="marca"
                placeholder="Marca del producto"
                v-model="producto.marca"
              />

              <label for="descripcion">Descripción:</label>
              <input
                id="descripcion"
                placeholder="Descripción"
                v-model="producto.descripcion"
              />

              <label for="precio">Precio:</label>
              <input
                id="precio"
                placeholder="Precio"
                v-model="producto.precio"
              />

              <label for="imagen">Url de la imagen:</label>
              <input
                id="imagen"
                placeholder="Url de la imagen"
                v-model="producto.imagen"
              />
<div class="v-card__actions">
              <v-btn class="btn-comprar w-50" @click="editarProducto(producto)">Confirmar</v-btn>
              <v-btn  class="btn-comprar-outline w-50" @click="cancelarEdicion(producto)">Cancelar</v-btn>
              </div>
            </form>

            <v-btn class="btn-comprar w-50"
              v-if="editar && producto.mostrarBotonBorrar"
              @click="borrarProducto(producto)"
              >Borrar</v-btn
            >

            <v-btn class="btn-comprar-outline w-50"
              v-if="editar && producto.mostrarBotonEditar"
              @click="crearFormEdicion(producto)"
              >Editar</v-btn
            >

          </v-card-actions>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  props: ["productos", "carrito", "agregar", "editar", "eliminar", "crear"],
  data() {
    return {
      busqueda: "",
      mostrarFormularioCreacion: "",
      nombre: "",
      descripcion: "",
      precio: "",
      imagen: "",
      marca: "",
      error:[],
      creado: false
    };
  },
  computed: {
    productosFiltrados() {
      return this.productos.filter((producto) => {
        return producto.nombre
          .toLowerCase()
          .includes(this.busqueda.toLowerCase());
      });
    },
  },
  methods: {
   hayError(){
    return this.error.length();
   },
    agregarProducto(producto) {
      this.$emit("agregar-producto", producto);
    },
    editarProducto(producto) {
      const productoEditado = {
        id: producto.id,
        nombre: producto.nombre,
        marca: producto.marca,
        descripcion: producto.descripcion,
        precio: producto.precio,
        imagen: producto.imagen,
      };

      //Cuando se termina de editar el formulario, desaparece el form y vuelven a aparecer los botones
      productoEditado.mostrarFormularioEdicion = false;
      productoEditado.mostrarBotonEditar = true;
      productoEditado.mostrarBotonBorrar = true;
      this.$emit("editar-producto", productoEditado);
    },
    borrarProducto(producto) {
      this.$emit("borrar-producto", producto);
    },
    crearFormCreacion() {
      this.mostrarFormularioCreacion = true;
    },

    //Cuando clickeas editar oculta los botones de editar y borrar para mostrar el formulario (v-if)
    crearFormEdicion(producto) {
      producto.mostrarFormularioEdicion = true;
      producto.mostrarBotonEditar = false;
      producto.mostrarBotonBorrar = false;
    },
    crearProducto() {
       
      this.error=[] 

      if (!this.nombre) {
        this.error.push('El nombre es obligatorio.'); 
      } 
      
      if (!this.marca) {
        this.error.push('La marca es obligatoria.'); 
      }
      
      if (!this.descripcion) {
        this.error.push('La descripcion es obligatoria.');
      }

      if (!this.precio) {
        this.error.push('El precio es obligatorio.');
      }

      if(this.precio) {
       const precioFloat = +this.precio;
       console.log(this.precio);
        if (isNaN(precioFloat) && !(precioFloat > 0)){
         this.error.push('El precio debe ser numérico.');
        }
      }

      if (!this.imagen) {
        this.error.push('La imagen es obligatoria.');	 
      }

      if(this.imagen) {
       const pattern = /^(http|https):\/\/([\w.]+\/?)\S*$/;
       if (!pattern.test(this.imagen)){
        this.error.push('La ruta de imagen es inválida.');	 
       }
      }

      if(this.error.length == 0){
        this.creado = true;
        this.mostrarFormularioCreacion = false;

       
        const nuevoProducto = {
          id: uuidv4(),
          nombre: this.nombre,
          descripcion: this.descripcion,
          marca: this.marca,
          precio: this.precio,
          imagen: this.imagen,
          mostrarFormularioEdicion: false,
          mostrarBotonEditar: true,
          mostrarBotonBorrar: true,
        };
        this.$emit("crear-producto", nuevoProducto);
      }
    },
    cancelarEdicion(producto) {
      producto.mostrarFormularioEdicion = false;
      producto.mostrarBotonEditar = true;
      producto.mostrarBotonBorrar = true;
    },
    cancelarCreacion() {
      this.mostrarFormularioCreacion = false;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap');


body {
 --color-principal-fondo: #f7ebe1;
 --color-principal-texto: #6d655f;
 --box-shadow: 0 10px 29px 0 rgb(68 88 144 / 10%);
 --color-fondito: #d5b13d;
}

body {
 font-family: "Montserrat", sans-serif !important;
 color: var(--color-principal-texto);
}


.v-card {
  height: 550px;
  width: 380px;
}

.form-edicion {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.form-edicion label {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
}

.form-edicion label > span {
  margin-right: 10px;
  width: 150px;
  text-align: right;
}

.form-edicion input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 10px;
}

.form-edicion button {
  margin-top: 20px;
  width: 50%;
}

.header-title {
 text-align: center;
 color: var(--color-principal-texto);
 padding-bottom: 30px
}

.header-title h3,
.header-title h2,
.header-title h4 {
 font-weight: 800;
 font-size: 42px;
}

.header-title.light h3 {
 font-weight: 700 !important;
}

p{
 font-family: "Montserrat", sans-serif;
}


#listadoproductos a,
.listadoproductos a {
 color: inherit !important;
 text-decoration: none !important;
}


.card {
 border: none;
 border-radius: 15px;
 box-shadow: var(--box-shadow) !important;
 margin-bottom: 30px;
 font-family: "Montserrat", sans-serif;
}

.img-card-container {
 overflow: hidden;
 transition: 0.8s;
 border-top-left-radius: 15px;
 border-top-right-radius: 15px;
}

.img-card-container img {
 transform: scale(1);
 transition: 0.4s;

}

.img-card-container:hover img {
 transform: scale(1.1);

}



.card-title {
 font-weight: 800;
 font-size: 22px;
 margin-bottom: 0 !important;
 padding-top: 0
}

.card-text{
 letter-spacing: normal;
}
.precio {
 font-weight: 800;
 padding-bottom: 20px;
 padding-top: 20px;
 font-size: 28px;
 color: #d5b13d !important;

}

p,
p.card-title {
 margin-bottom: 2px;
}


.btn-eliminar:hover {
 color: #a6634a;
}

.btn-color {
 background-color: #db7f5d;
 border-radius: 20px;
 color: white;
 opacity: 1;
}

.btn-color:hover {
 background-color: #a6634a;
 border-radius: 20px;
 color: white;
}

.btn-outlines {
 border-color: #db7f5d;
 color: #db7f5d;
 border-radius: 20px;
 opacity: 1;
}

.btn-outlines:hover {
 background-color: #db7f5d;
 border-color: #db7f5d;
 border-radius: 20px;
 color: white;
}


.categoria {
 font-size: 14px;
 color: #db7f5d;

}

.btn-comprar, .btn-comprar .v-btn__content, .v-btn__content {
 background-color: #db7f5d !important;
 border-radius: 10px;
 color: #fff !important;
}



.btn-comprar .v-btn__content{
  color: #fff !important;
}

.btn-comprar:hover {
 background-color: #a6634a;
 border-radius: 10px;
 color: #fff;
}

.btn-comprar-outline{
 background-color: transparent !important;
 border-color: #db7f5d !important;
 border-radius: 10px !important;
 color: #db7f5d !important;
}

.btn-comprar-outline .v-btn__content{
   background-color: transparent !important;
 border-color: #db7f5d !important;
 border-radius: 10px !important;
 color: #db7f5d !important;
}
/* 
.btn-comprar-outline, .btn-comprar-outline .v-btn__content, .v-btn__content, .v-card__actions > .v-btn.v-btn {
 color: #db7f5d !important;
 border-color: #db7f5d !important;
 border-radius: 10px;
 background-color: transparent !important;

} */

.btn-comprar-outline:hover .v-btn__content{
 background-color: #db7f5d !important;
 border-color: #db7f5d !important;
 border-radius: 10px !important;
 color: #fff !important;
}

.v-card__title + .v-card__subtitle, .v-card__title + .v-card__text{
 padding-bottom: 0;
}

.marca {
 font-size: 14px;
 color: #db7f5d;
 /* font-weight: 700; */
 padding-bottom: 0;
 margin-bottom: 0 ;

}

.btn-crear{
 float: right;
  background-color: #db7f5d !important;
 border-radius: 10px;
 color: #fff !important;
 box-shadow: none !important;
}

.btn-crear span.v-btn__content{
  color: #fff !important;
}

input::placeholder{
 font-family: "Montserrat", sans-serif;
}

/* .btn-crear, .btn-crear .v-btn__content, .v-btn__content, .v-card__actions > .v-btn.v-btn {
 background-color: #db7f5d !important;
 border-radius: 10px;
 color: #fff !important;
} */
</style>
