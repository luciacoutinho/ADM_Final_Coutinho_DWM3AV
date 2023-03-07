<template>
 <div>
  <div class="container-fluid inicio align-items-center">
<div class="row justify-content-start ">
 <div class="header-inicio">
   <h2>Bienvenidos a <br><span>Celulandia</span>!</h2>
   <div class="btn btn-inicio" text @click="$router.push('/productos')">Ver productos</div>
 </div>

</div>
</div>

<div class="container">

<div class="row py-5 justify-content-center px-4 px-md-2">
 <div class="col-12">
 <div class="header-title">
  <h3>Nuestras marcas</h3>
  <p>Con gran variedad de productos de todas ellas</p>
 </div>
 </div>

<div class="col-3 col-md-2 px-0 px-md-2">
 
 <div class="img-container-marcas">
  <img src="../assets/samsung.jpg" alt="Logo SAMSUNG" class="img-fluid">
 </div>
 
</div>
<div class="col-3 col-md-2 px-0 px-md-2">

  <div class="img-container-marcas">
  <img src="../assets/apple.jpg" alt="Logo APPLE" class="img-fluid">
 </div>

 
</div>
<div class="col-3 col-md-2 px-0 px-md-2">

  <div class="img-container-marcas">
  <img src="../assets/motorola.jpg" alt="Logo MOTOROLA" class="img-fluid">
 </div>

</div>
<div class="col-3 col-md-2 px-0 px-md-2">

  <div class="img-container-marcas">
  <img src="../assets/xiaomi.jpg" alt="Logo Xiaomi" class="img-fluid">
 </div>

</div>
<div class="col-3 col-md-2 px-0 px-md-2">

  <div class="img-container-marcas">
  <img src="../assets/huawei.jpg" alt="Logo Huawei" class="img-fluid">
 </div>

</div>
<div class="col-3 col-md-2 px-0 px-md-2">

  <div class="img-container-marcas">
  <img src="../assets/alcatel.jpg" alt="Logo Alcatel" class="img-fluid">
 </div>

</div>
 </div>



<div class="row listadoproductos justify-content-center pb-5">
  <div class="col-12">
 <div class="header-title">
  <h3>Últimos Ingresos</h3>
  <p>Los celulares más recientes en la tienda</p>
 </div>
 </div>

     <div class="col-6 col-md-4 col-lg-3">
      
      <div class="card">
       <div class="img-card-container"><img src="../assets/samsung-flip4.png" class="card-img-top"  alt="Samsung Flip 4"></div>
       <div class="card-body">
        <p class="categoria">Samsung</p>
        <p class="card-title">Samsung Flip 4</p>
        <p class="precio">$125.000</p>
       </div>
      </div>
      
     </div>

          <div class="col-6 col-md-4 col-lg-3">
     
      <div class="card">
       <div class="img-card-container"><img src="../assets/iphone-13pro.jpg" class="card-img-top" alt="iPhone 13 Pro"></div>
       <div class="card-body">
        <p class="categoria">Apple</p>
        <p class="card-title">iPhone 13 Pro</p>
        <p class="precio">$822.439</p>
       </div>
      </div>
      
     </div>

        <div class="col-6 col-md-4 col-lg-3">
      
      <div class="card">
       <div class="img-card-container"><img src="../assets/moto-g52.jpg" class="card-img-top" alt="Moto G52"></div>
       <div class="card-body">
        <p class="categoria">Motorola</p>
        <p class="card-title">Moto G52</p>
        <p class="precio">$59.990</p>
       </div>
      </div>
      
     </div>

     <div class="col-12">
 <div class="header-title">
  <p class="listado" @click="$router.push('/productos')">Ver el listado completo</p>
 </div>
 </div>



</div>
</div>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap');

.inicio {
 height: 85vh;
 background: url(../assets/bg.jpg);
 background-position: center;
 background-size: cover;
 margin-top: -40px !important;
 display: flex;
 justify-content: flex-start;
 padding: 80px;
 color: white;
 font-family: "Montserrat", sans-serif;
}


.header-inicio h2 {
 font-weight: 400;
 font-size: 60px;
}

.header-inicio h2 span {
 font-weight: 900;
}

.btn-inicio {
 background-color: #fff !important;
 color: var(--color-fondito) !important;
 padding: 10px 20px;
 border-radius: 20px;
 opacity: 1;
 transition: all ease .3s;
}

.btn-inicio:hover {
 opacity: .8;
}

@media (max-width: 767) {
 .img-container-marcas {
  margin: 5px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 13px 8px -10px rgb(0 0 0 / 10%);
 }
}


.img-container-marcas {
 margin: 15px 5px;
 border-radius: 20px;
 overflow: hidden;
 box-shadow: 0 13px 8px -10px rgb(0 0 0 / 10%);
}


.img-container-marcas img {
 border-radius: 20px;
 /* transform: scale(1); */
 transition: all ease .4s;
}

.img-container-marcas:hover img {
 border-radius: 20px;
 transform: scale(1.2);
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
 box-shadow: var(--box-shadow);
 margin-bottom: 30px;
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
 font-weight: 700;
 font-size: 22px;
}

.precio {
 font-weight: 800;
 padding-bottom: 20px;
 padding-top: 20px;
 font-size: 28px;
 color: var(--color-fondito);

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

.listado{
  color: #db7f5d;
  cursor: pointer;
}


.listado:hover{
 color: #a6634a
}
</style>