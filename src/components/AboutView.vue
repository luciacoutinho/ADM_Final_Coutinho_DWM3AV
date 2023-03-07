<template>
  <section class="about-us">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img
            src="../assets/manito.png"
            alt="Imagen de la tienda"
            class="img-fluid mb-4"
          />
          <p class="intro">
            Bienvenidos a nuestra tienda de celulares, donde encontrarás los
            mejores productos y la atención más personalizada.
          </p>
        </div>
        <div class="col-md-6">
          <h2>Nuestra Misión</h2>
          <ul class="mission">
            <li>Proporcionar productos de alta calidad a precios accesibles</li>
            <li>Ofrecer un servicio al cliente excepcional</li>
            <li>
              Mantenernos actualizados con las últimas tendencias y tecnologías
            </li>
          </ul>
          <h2 class="pt-5 mt-5">Nuestro Equipo</h2>
          <div class="team">
            <div class="team-member">
              <img
                src="../assets/yo.jpg"
                alt="Foto del equipo - Miembro 1"
                class="img-fluid"
              />
              <h4>Lucía Coutinho</h4>
              <p class="job-title">Programadora FronEnd</p>
            </div>
            <div class="team-member">
              <img
                src="../assets/yo2.jpg"
                alt="Foto del equipo - Miembro 2"
                class="img-fluid"
              />
              <h4>Lucía Coutinho</h4>
              <p class="job-title">Diseñadora UX/UI</p>
            </div>
            <div class="team-member">
              <img
                src="../assets/yo3.jpg"
                alt="Foto del equipo - Miembro 3"
                class="img-fluid"
              />
              <h4>Lucía Coutinho</h4>
              <p class="job-title">QA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.about-us {
  background-color: #f4f4f4;
  padding: 80px 0;
}

.about-us img {
  max-width: 100%;
}

.about-us .intro {
  font-size: 18px;
  line-height: 28px;
}

.about-us ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.about-us li {
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 10px;
}

.about-us h2 {
  font-size: 32px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 30px;
}

.about-us .team {
  display: flex;
  flex-wrap: wrap;
}

.about-us .team-member {
  flex: 1 1 30%;
  margin-bottom: 30px;
  margin-left: 5px;
}

.about-us .team-member img {
  max-width: 100%;
  margin-bottom: 10px;
}

.about-us .team-member h4 {
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 5px;
  font-weight: bold;
}

.about-us .team-member p.job-title {
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 0;
}
</style>
