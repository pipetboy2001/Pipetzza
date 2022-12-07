import React from 'react'

export const Efectivo = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="row">
                            <h3 className="text-center">Pago con efectivo al entregar</h3>
                        </div>
                    </div>
                    <div className="panel-body">
                        <form role="form">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label>Nombre</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" name="cardName" placeholder="Nombre Completo"/>
                                            <span className="input-group-addon"><span className="fa fa-user"></span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label>Apellido</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" name="cardNumber" placeholder="Apellido"/>
                                            <span className="input-group-addon"><span className="fa fa-credit-card"></span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-4 col-md-4">
                                    <div className="form-group">
                                        <label><span className="hidden-xs">Fecha de</span><br/>nacimiento</label>
                                        <input type="text" className="form-control" name="cardExpiry" placeholder="MM/YY"/>
                                    </div>
                                </div>
                                <div className="col-xs-4 col-md-4 pull-right">
                                    <div className="form-group">
                                        <label>Telefono</label>
                                        <input type="text" className="form-control" name="cardCVC"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{display: "none"}}>
                                <div className="col-xs-12">
                                    <p className="payment-errors"></p>
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
