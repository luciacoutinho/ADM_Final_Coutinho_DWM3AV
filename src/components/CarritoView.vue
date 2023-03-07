<template>
  <v-container>
    <v-list>
      <v-list-item v-for="(producto, index) in carrito" :key="producto.id">
        <v-list-item-content>
         
          <v-list-item-title class="nombre-producto">{{ producto.nombre }}</v-list-item-title>
          <v-list-item-subtitle
            >Precio: <strong>${{ producto.precio }}</strong></v-list-item-subtitle
          >
          
        </v-list-item-content>
        <v-list-item-action>
          <v-btn class="btn-comprar" @click="eliminarProducto(index)">Eliminar</v-btn>
          
        </v-list-item-action>
        <hr>
      </v-list-item>
      <hr>
    </v-list>
    <div class="container text-right" v-if="totalProductos > 0">
      <p>Total de productos: {{ totalProductos }}</p>
      <p class="precio pt-0 mt-0">Total a pagar: ${{ totalAPagar }}</p>
    </div>
    <div v-if="totalProductos == 0">
      <p>No hay productos en el carrito.</p>
    </div>
  </v-container>
</template>

<script>
export default {
  props: ["carrito"],
  computed: {
    totalProductos() {
      return this.carrito.length;
    },
    totalAPagar() {
      return this.carrito.reduce((total, producto) => {
        return +total + +producto.precio;
      }, 0);
    },
  },
  methods: {
    eliminarProducto(index) {
      this.$emit("eliminar-producto", index);
    },
  },
};
</script>

<style>
html{
 font-family: "Montserrat",sans-serif;
}

@import url('https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap');


body {
 --color-principal-fondo: #f7ebe1;
 --color-principal-texto: #6d655f;
 --box-shadow: 0 10px 29px 0 rgb(68 88 144 / 10%);
 --color-fondito: #d5b13d;
}

body, v-container, .v-list-item__content, .container {
 font-family: "Montserrat", sans-serif !important;
 color: var(--color-principal-texto);
}

.nombre-producto{
 font-family: "Montserrat", sans-serif;
 color: #d5b13d;
 font-weight: 700;
}

.btn-comprar, .btn-comprar .v-btn__content {
  font-family: "Montserrat", sans-serif;
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

.precio {
 font-weight: 800;
 padding-bottom: 20px;
 padding-top: 20px;
 font-size: 28px;
 color: #d5b13d !important;

}

</style>
