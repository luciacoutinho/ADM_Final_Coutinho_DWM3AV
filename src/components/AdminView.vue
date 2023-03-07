<template>
  <v-app>
    <v-content>
      <ProductosView
        :productos="productos"
        :editar="true"
        :crear="true"
        @editar-producto="editarProducto"
        @borrar-producto="borrarProducto"
        @crear-producto="crearProducto"
      ></ProductosView>
    </v-content>
  </v-app>
</template>

<script>
import productos from "@/data/productos";
import ProductosView from "./ProductosView.vue";
export default {
  data() {
    return {
      productos: [],
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
    editarProducto(productoNuevo) {
      this.productos = JSON.parse(localStorage.getItem("productos")).map(
        (producto) => {
          if (producto.id === productoNuevo.id) {
            return productoNuevo;
          } else {
            return producto;
          }
        }
      );
      localStorage.setItem("productos", JSON.stringify(this.productos));
    },
    borrarProducto(producto) {
      this.productos = this.productos.filter((productoDeLista) => {
        return productoDeLista !== producto;
      });
      localStorage.setItem("productos", JSON.stringify(this.productos));
    },
    crearProducto(producto) {
      this.productos.push(producto);
      localStorage.setItem("productos", JSON.stringify(this.productos));
    },
  },
  created() {
    if (!localStorage.getItem("productos")) {
      const listaInicial = productos;
      localStorage.setItem("productos", JSON.stringify(listaInicial));
      this.productos = listaInicial;
    } else {
      this.productos = JSON.parse(localStorage.getItem("productos"));
    }
  },
  components: { ProductosView },
};
</script>

<style>
.btn-crear span.v-btn__content{
  color: #fff !important;
}

.btn-comprar-outline{
 transition: all .3s ease;
  border: 1px solid #db7f5d !important;
 border-radius: 10px !important;
 box-shadow: none !important;
}
.btn-comprar-outline .v-btn__content{
   background-color: transparent !important;
 border-radius: 10px !important;
 box-shadow: none !important;
}

.btn-comprar-outline .v-btn__content{
 color: #db7f5d !important;
}



.btn-comprar-outline:hover{
 background-color: #db7f5d !important;
 border: 1px solid #db7f5d !important;
}

.btn-comprar-outline:hover .v-btn__content{
 color: #fff !important;
}

</style>
