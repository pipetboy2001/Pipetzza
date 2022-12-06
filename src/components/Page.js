import React from "react";
import { Switch, Route} from "react-router-dom";
import Inicio from "./page/inicio";
import { ProductosList } from "./page/productos";
import { ProductosDetalles } from "./page/productos/ProductosDetalles";
import {Crear} from "./page/crear/crear"
import {Pago} from "./page/pago/pago" 

export default function Page() {
  return (
    <section>
      <Switch>
				<Route path="/" exact component={Inicio} />
				<Route path="/Menu" exact component={ProductosList} />
        <Route path="/Menu/:id" exact component={ProductosDetalles} />
        <Route path="/Crear" exact component={Crear} />
        <Route path="/Pago" exact component={Pago} />
			</Switch>
    </section>
  );
}
