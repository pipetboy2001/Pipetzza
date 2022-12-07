import React from 'react'
// React Bootstrap
import { Form, Button } from "react-bootstrap"
// React Router
import { Link } from "react-router-dom"
// React Icons
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa"
// components
import { Tarjeta } from "./Tarjeta"
import {Efectivo} from "./Efectivo"
import {WebPay} from "./WebPay"

export const Pago = () => {
    // para escojer que pasaria si
    const [pago, setPago] = React.useState("Tarjeta")
    const [propina,setPropina] = React.useState("Nada")

    return (
        <>
        <h2>Escoja tipo de pago</h2>
        <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
            <Form.Control as="select" onChange={(e) => setPago(e.target.value)}>
                <option>Tarjeta</option>
                <option>Efectivo</option>
                <option>WebPay</option>
            </Form.Control>
        </Form.Group>
        {pago === "Tarjeta" && <Tarjeta />}
        {pago === "Efectivo" && <Efectivo />}
        {pago === "WebPay" && <WebPay />}


        <h2>Desea añadir propina?</h2>
        <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
            <Form.Control as="select" onChange={(e) => setPropina(e.target.value)}>
                <option>Nada</option>
                <option>10%</option>
                <option>15%</option>
                <option>20%</option>
            </Form.Control>
        </Form.Group>
        {propina === "Nada" && <p>No añadir propina</p>}
        {propina === "10%" && <p>Añadir 10% de propina</p>}
        {propina === "15%" && <p>Añadir 15% de propina</p>}
        {propina === "20%" && <p>Añadir 20% de propina</p>}


        

        <Link to="/checkout">
            <Button variant="primary" type="submit">
                Continuar
            </Button>
        </Link>

        





        </>

    )
}
