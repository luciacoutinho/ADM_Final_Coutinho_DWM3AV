<!---->
<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title color="black" text @click="$router.push('/')"
        >Celulandia</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn color="black" text @click="$router.push('/')">Inicio</v-btn>
      <v-btn color="black" text @click="$router.push('/productos')"
        >Productos</v-btn
      >
      <v-btn color="black" text @click="$router.push('/about')"
        >Sobre nosotros</v-btn
      >
      <v-btn color="black" text @click="$router.push('/admin')"
        >Admin</v-btn
      >
      <v-btn class="btn-carrito" @click="$router.push('/carrito')">
        <v-icon>mdi-cart</v-icon>
        <v-badge
          color="red"
          :content="totalProductos"
          v-if="totalProductos > 0"
        ></v-badge>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view
        :productos="productos"
        :carrito="carrito"
        :agregar="true"
        @agregar-producto="agregarProducto"
        @eliminar-producto="eliminarProducto"
      ></router-view>
    </v-content>
        <v-app-bar>
      <v-toolbar-title color="black" text @click="$router.push('/')"
        >Celulandia</v-toolbar-title
      >
      <v-spacer></v-spacer>

        <v-text>Lucia Coutinho- DWM3AV</v-text>

        <v-spacer></v-spacer>

        <v-text>Aplicaciones para Dispositivos Moviles <br> Jonathan Cruz</v-text>
        
     
    </v-app-bar>
  </v-app>
</template>

<script>
import productos from "@/data/productos";
export default {
  data() {
    return {
      productos: [],
      carrito: [],
    };
  },
  computed: {
    totalProductos() {
      return this.carrito.length;
    },
    productosFiltrados() {
      return this.productos.filter((producto) => {
        return producto.nombre
          .toLowerCase()
          .includes(this.busqueda.toLowerCase());
      });
    },
  },
  methods: {
    agregarProducto(producto) {
      this.carrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(this.carrito));
    },
    eliminarProducto(index) {
      this.carrito.splice(index, 1);
      localStorage.setItem("carrito", JSON.stringify(this.carrito));
    },
  },
  created() {
    const carrito = JSON.parse(localStorage.getItem("carrito"));
    if (carrito) {
      this.carrito = carrito;
    }
    if (!localStorage.getItem("productos")) {
      const listaInicial = productos;
      localStorage.setItem("productos", JSON.stringify(listaInicial));
      this.productos = listaInicial;
    } else {
      this.productos = JSON.parse(localStorage.getItem("productos"));
    }
  },
  watch: {
    $route: {
      handler: function () {
        this.productos = JSON.parse(localStorage.getItem("productos"));
      },
      immediate: true,
    },
  },
};
</script>

<style>
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


.v-toolbar__content{
 background-color: #f7ebe1;
 font-family: "Montserrat";
 box-shadow: none !important;
 padding: 34px 50px;
}

.v-toolbar__title{
 color: #d5b13d;
 font-weight: 800;
 cursor: pointer;
}

.v-btn__content{
 text-transform: capitalize !important;
 color: #6d655f;
 letter-spacing: normal;
 font-weight: 500;
 font-size: 1rem;
}

.btn-carrito{
 background-color: transparent !important;
 box-shadow: none !important;
}

.btn-comprar .v-btn__content{
   color: #fff !important;
}
</style>
