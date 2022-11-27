import React from "react"
import {Header} from "./componentes/header"
import {ProductoLista} from "./componentes/productos/index"
import HeroSlider from './componentes/publicidad/carousel-item';
import {Footer} from './componentes/footer';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'boxicons';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSlider />
      <h2>Ofertas tiempo limitado!</h2>
      <ProductoLista />
      <h2>Escoge alguna de nuestras pizzas</h2>
      <ProductoLista />

      <Footer />
    </div>
  );
}

export default App;
