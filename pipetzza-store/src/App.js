import React from "react"
import {Header} from "./componentes/header"
import {ProductoLista} from "./componentes/productos/index"
import {Footer} from './componentes/footer';
import {Paginas} from './componentes/Paginas'; 

import { BrowserRouter as Router} from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'boxicons';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
 


      <Paginas />

      <Footer />
      </Router>
    </div>
  );
}

export default App;
