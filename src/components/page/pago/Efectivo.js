import React from 'react'

export const Efectivo = () => {
  return (
    <div className="container">
        <div className="row">
            <div >
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
                                        <label>Nombre Completo</label>
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
                                        <label>Correo Electrónico</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" name="cardNumber" placeholder="Correo Electrónico"/>
                                            <span className="input-group-addon"><span className="fa fa-envelope"></span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-4 col-md-4">
                                    <div className="form-group">
                                        <label><span className="hidden-xs">Teléfono</span><br/></label>
                                        <input type="text" className="form-control" name="cardExpiry" placeholder="Teléfono"/>
                                    </div>
                                </div>
                                <div className="col-xs-4 col-md-4 pull-right">
                                    <div className="form-group">
                                        <label>Dirección</label>

                                        <input type="text" className="form-control" name="cardCVC" placeholder="Dirección"/>
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
