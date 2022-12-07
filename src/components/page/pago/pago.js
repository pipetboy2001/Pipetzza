import React from 'react'
// React Bootstrap
import { Form, Button } from "react-bootstrap"
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

    return (
        <>
            <div className="container">
                <br></br>
                <center><h1>Pago 💸</h1></center>
                <div class="angry-grid">
                    <div id="item-0">
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

                    <div id="item-1">
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
                    <Link to="/confirmacion">
                        <button type="button" class="btn btn-succes btn-lg btn-block">              PAGAR                 </button>
                    </Link>
                </div>
            </div>



        </>

    )
}
