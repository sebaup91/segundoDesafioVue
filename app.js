const { createApp } = Vue;

const Header = {
    props: {
        titulo: String
    },
    template: `
    <h1 class="titulo">{{titulo}}</h1>
    `
} 

const MainCards = {
    props: {
        titulo: String,
        costo: Number,
        portada: String
    },
    template: `
    <div class="card" align="center">
      <div>
          <img :src="portada" :title="titulo">
          <br><br>
          <h3>{{ titulo }}</h3>
          <p>$<strong> {{ costo }}</strong></p>
          <button class="btn">Agregar</button>
      </div>
    </div>
    `
}

createApp({
    components: {
        'header-component': Header,
        'main-cards': MainCards
    },
    data() {
        return {
        codermeals: [
          {
            id: 1,
            titulo: "Coctelera Boston",
            portada: "cocteleraboston.jpg",
            costo: 11500.00,
          },
          {
            id: 2,
            titulo: "Coctelera Cobbler",
            portada: "cocteleracobbler.jpg",
            costo: 10500.00,
          },
          {
            id: 3,
            titulo: "Coctelera Bahia",
            costo: 9750.00,
            portada: "coctelerabahia.webp"
          },
          {
            id: 4,
            titulo: "Jigger Japones",
            costo: 8000.00,
            portada: "jigger.webp"
          }
        ]
      }
    }
}).mount("#app")