import React from 'react'
// React Bootstrap
import { Form, Button } from "react-bootstrap"
// React Router
import { Link } from "react-router-dom"
// React Icons
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa"
// Styles



export const Pago = () => {

    return (
        <>
            <div className="container">
                <div className="row">   
                    <div className="col-12 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Datos de la tarjeta</h5>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Nombre del titular</Form.Label>
                                        <Form.Control type="text" placeholder="Nombre" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Número de tarjeta</Form.Label>
                                        <Form.Control type="text" placeholder="Número de tarjeta" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Fecha de expiración</Form.Label>
                                        <Form.Control type="text" placeholder="Fecha de expiración" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Código de seguridad</Form.Label>
                                        <Form.Control type="text" placeholder="Código de seguridad" />
                                    </Form.Group>   
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <Link to="/pago">
                                                <Button variant="primary" type="submit">
                                                    Pagar
                                                </Button>
                                            </Link>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <Link to="/pago">
                                                <Button variant="primary" type="submit">
                                                    Cancelar
                                                </Button>
                                            </Link>
                                        </div>

                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Métodos de pago</h5>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Tarjeta de crédito</h5>
                                                <FaCcVisa className="icono" />
                                                <FaCcMastercard className="icono" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="card">

                                            <div className="card-body">
                                                <h5 className="card-title">Paypal</h5>
                                                <FaCcPaypal className="icono" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </>

    )
}
