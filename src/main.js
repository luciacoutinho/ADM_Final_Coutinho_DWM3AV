import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import './registerServiceWorker'
import productos from './data/productos'


Vue.config.productionTip = false

const carrito = JSON.parse(localStorage.getItem('carrito')) || []

new Vue({
 router,
 store,
 vuetify,
 data: {
  productos,
  carrito
 },
 render: h => h(App)
}).$mount('#app')