import React from 'react'
// React Bootstrap
import { Form, Button } from "react-bootstrap"
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
// React Router
import { Link } from "react-router-dom"
// React Icons
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa"
// components
import { Tarjeta } from "./Tarjeta"
import { Efectivo } from "./Efectivo"
import { WebPay } from "./WebPay"

export const Pago = () => {
    // para escojer que pasaria si
    const [pago, setPago] = React.useState("Tarjeta")
    const [propina, setPropina] = React.useState("Nada")

    const PagoProcesado = () => {
        // mostrar por pantalla pago listo
        alert("Pago procesado")
        

        }

    return (
        <>
            <div className="container">
                <br></br>
                <center>
                    <h1>Pago 💸</h1>
                    <h1 className='tipePedido'>📌Tipo de pedido 📌</h1>
                </center>
                <center>
                    <ToggleButtonGroup type="radio" name="options" className='Boton2Elecciones' defaultValue={1}>
                        <ToggleButton id="tbg-radio-1" className='Boton1Elecciones' value={1}>
                            Delivery
                        </ToggleButton>
                        <ToggleButton id="tbg-radio-2" className='Boton1Elecciones' value={2}>
                            En Local
                        </ToggleButton>
                    </ToggleButtonGroup>
                </center>
                


                <div class="angry-grid">
                    <div id="item-6">
                        {/* Tipo de pago */}
                        <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Forma de pago</Form.Label>
                                <Form.Control as="select" onChange={(e) => setPago(e.target.value)}>
                                    <option>Tarjeta</option>
                                    <option>Efectivo</option>
                                    <option>WebPay</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        <div className="row">
                            {pago === "Tarjeta" && <Tarjeta />}
                            {pago === "Efectivo" && <Efectivo />}
                            {pago === "WebPay" && <WebPay />}
                        </div>
                    </div>

                    <div id="item-7">
                        {/* Propina */}
                        <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Propina</Form.Label>
                                <Form.Control as="select" onChange={(e) => setPropina(e.target.value)}>
                                    <option>Nada</option>
                                    <option>10%</option>
                                    <option>15%</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        {propina === "Nada" && <h3>Propina: $0</h3>}
                        {propina === "10%" && <h3>Propina: $10</h3>}
                        {propina === "15%" && <h3>Propina: $15</h3>}
                    </div>
                </div>
                <div className='Confirmaccion'>
                    <button  class="btn btn-succes btn-lg btn-block" type="button" onClick={PagoProcesado}>Pagar</button>
                </div>
            </div>
        </>

    )
}
