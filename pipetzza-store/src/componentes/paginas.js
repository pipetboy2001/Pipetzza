import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Inicio} from './inicio/index'
import { ProductoLista } from './productos/index'

export const Paginas = () => {
  return (
    <section>
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/menu" exact component={ProductoLista} />
      </Switch>
    </section>
  )
}
