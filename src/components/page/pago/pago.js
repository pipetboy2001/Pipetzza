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
import { DataContext } from "context/DataProvider";
import { useContext } from 'react';

export const Pago = () => {
    // para escojer que pasaria si
    const [pago, setPago] = React.useState("Tarjeta")
    const [propina, setPropina] = React.useState("Nada")

    // para mostrar que fue procesado el pago
    const PagoProcesado = () => {
        // mostrar por pantalla pago listo
        alert("Pago procesado🤑 Comprobante enviado a su correo")
        }

    //para vaciar el carrito completo
    const value = useContext(DataContext);
    const [carrito, setCarrito] = value.carrito;
    const vaciarCarrito = () => {
            carrito.forEach((item, index) => {
                item.cantidad = 1000;
                carrito.splice(index, 1000)
            })
            setCarrito([...carrito])
        }
    //para realizar la funcion vaciarCarrito y PagoPorcesado
    const PagoProcesadoYvaciarCarrito = () => {
        vaciarCarrito()
        PagoProcesado()
    }
    //añadir propina al valor total
    const [total] = value.total;
    //sumarle al total propina 
    const [totalPropina, setTotalPropina] = React.useState(total)
    const sumarPropina = () => {
        if (propina === "Nada") {
            setTotalPropina(total)
        }
        if (propina === "10% 😊") {
            setTotalPropina(total + (total * 0.1))
        }
        if (propina === "15% 🥰") {
            setTotalPropina(total + (total * 0.15))
        }
        if (propina === "20% 😍") {
            setTotalPropina(total + (total * 0.2))
        }
    }


    //total = totalpropina
    React.useEffect(() => {
        sumarPropina()
    }, [propina])



    //para mostrar el tipo de pedido
    const [Delivery, setDelivery] = React.useState(true)
    const [EnLocal, setEnLocal] = React.useState(false)
    const sumarDelivery = () => {
        setDelivery(true)
        setEnLocal(false)
        /*Se añade 2000 por el envio */
        setTotalPropina(total + 2000)

    }
    const mostrarEnLocal = () => {
        setDelivery(false)
        setEnLocal(true)
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
                        <ToggleButton value={Delivery} onClick={sumarDelivery} className='Boton2Elecciones'>Delivery 🛵</ToggleButton>
                        <ToggleButton value={EnLocal} onClick={mostrarEnLocal} className='Boton2Elecciones'>En local 🍕</ToggleButton>
                    </ToggleButtonGroup>
                </center>
                
                

                <div class="angry-grid">
                    <div id="item-6">
                        {/* Tipo de pago */}
                        <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Forma de pago</Form.Label>
                                <Form.Control as="select" onChange={(e) => setPago(e.target.value)}>
                                    <option>Tarjeta💳</option>
                                    <option>Efectivo💵</option>
                                    <option>WebPay📇</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        <div className="row">
                            {pago === "Tarjeta💳" && <Tarjeta />}
                            {pago === "Efectivo💵" && <Efectivo />}
                            {pago === "WebPay📇" && <WebPay />}
                        </div>
                    </div>

                    <div id="item-7">
                        {/* si click en delivery form de unicacion*/}
                        {Delivery && <Form>
                            <Form.Group controlId="formBasicEmail">

                                <Form.Label>Dirección</Form.Label>  
                                <Form.Control type="text" placeholder="Ingrese su dirección" />
                                <Form.Text className="text-muted">
                                    No compartiremos su dirección con nadie🤫.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Comuna</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese su comuna" />
                            </Form.Group>

                            <Form.Label>De quien es la pizza❓</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su nombre" />
                        </Form>}

                        {/* si click en en local debe escojer entre los 2 locales*/}
                        {EnLocal && <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Seleccione su local</Form.Label>
                                <Form.Control as="select" onChange={(e) => setLocal(e.target.value)}>
                                    <option>Sede Maipu</option>
                                    <option>Sede Estacion central </option>
                                </Form.Control>
                                <Form.Label>De quien es la pizza❓</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese su nombre" />

                            </Form.Group>
                        </Form>}




                        {/* Propina */}
                        <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Propina</Form.Label>
                                <Form.Control as="select" onChange={(e) => setPropina(e.target.value)}>
                                    <option>Nada</option>
                                    <option>10% 😊</option>
                                    <option>15% 🥰</option>
                                    <option>20% 😍</option>

                                </Form.Control>
                            </Form.Group>
                        </Form>
                        <center>
                            <Button variant="outline-success" onClick={sumarPropina}>Agregar propina</Button>
                        </center>
                        <br></br>
                        {/* Total */}
                        <h3>Total: ${total}</h3>
                        <h3>Total con propina: ${totalPropina}</h3>






                    </div>
                </div>

                <center>
                    <Link to="/">
                        <div className='Confirmaccion'>
                            <button class="btn btn-succes btn-lg btn-block" type="button" onClick={PagoProcesadoYvaciarCarrito} >Pagar</button>
                        </div>
                    </Link>
                </center>
                
            </div>
        </>

    )
}
