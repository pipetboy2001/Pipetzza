import React from 'react'

// React Icons
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa"

export const Tarjeta = () => {
    return (

        <div className="container">
            <div className="row">
                <div >
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <div className="row">
                                <img className="img-responsive cc-img" src="http://www.prepbootstrap.com/Content/images/shared/misc/creditcardicons.png" />
                            </div>
                        </div>
                        <div className="panel-body">
                            <form role="form">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="form-group">
                                            <label>NOMBRE EN LA TARJETA</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" name="cardName" placeholder="Nombre Completo" />
                                                <span className="input-group-addon"><span className="fa fa-user"></span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="form-group">
                                            <label>NÚMERO DE TARJETA <FaCcMastercard />
                                                <FaCcVisa />
                                                <FaCcPaypal /> </label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" name="cardNumber" placeholder="Número de Tarjeta" required />
                                                <span className="input-group-addon"><span className="fa fa-credit-card"></span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-4 col-md-4">
                                        <div className="form-group">
                                            <label><span className="hidden-xs">FECHA DE</span><br />EXPIRACIÓN</label>
                                            <input type="text" className="form-control" name="cardExpiry" placeholder="MM/YY" required />
                                        </div>
                                    </div>
                                    <div className="col-xs-4 col-md-4 pull-right">
                                        <div className="form-group">
                                            <label>CÓDIGO DE SEGURIDAD</label>
                                            <input type="text" className="form-control" name="cardCVC" placeholder="CVC" maxlength="3" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <p className="payment-errors"></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="form-group">
                                            <label>Correo Electrónico</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" name="cardNumber" placeholder="Correo Electrónico" maxlength="40" required />
                                                <span className="input-group-addon"><span className="fa fa-envelope"></span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
