import React from "react";
import logo from "../images/amanda.jpg";
import "../stylesheets/App.scss";

function App() {
  return (
    <div className="App">
      <header className="Header">
        <img src={logo} className="Header__photo" alt="mi foto" />
        <h1 className="Header__name">Amanda Elena Padilla Santiago</h1>
        <p className="Header__date">Miércoles 5 de Septiembre de 2019</p>
        <p>
          Mi imaginación, creatividad, multipotencialidad e iniciativa me han
          llevado a investigar y adoptar nuevas formas de comunicación. Mis
          campos de acción van desde el periodismo, el diseño, los medios
          audiovisuales o el género documental al VR, la gamificación, el
          transmedia, la visualización de datos o las experiencias de usuario.
          Amante de hackatones y experiencias colectivas interdisciplinares
          alrededor del mundo, voy siempre a la búsqueda de nuevos aprendizajes.
          Es posible encontrarme actualmente desarrollando código como
          programadora Front-End en Adalab.
        </p>
        <a
          className="Header__read-more"
          href="https://www.linkedin.com/in/amandapadillasantiago/"
        >
          Leer más...
        </a>
        <i class="fas fa-heart">55</i>
      </header>
    </div>
  );
}

export default App;
