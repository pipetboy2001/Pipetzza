import React from "react"
import {Header} from "./componentes/header"
import {ProductoLista} from "./componentes/productos/index"
import 'boxicons';

function App() {
  return (
    <div className="App">

      <Header />
      <ProductoLista />
      <h1>Hola mundo</h1>
    </div>
  );
}

export default App;
