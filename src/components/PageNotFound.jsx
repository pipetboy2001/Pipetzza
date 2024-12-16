import React from 'react';

const PageNotFound = () => {
    return (
        <div className="container text-center py-5">
            <div className="row justify-content-center">
                <div className="col-12">
                    {/* Pizza Icon using Bootstrap Icons */}
                    <div className="mb-4">
                        <i className="bi bi-cookie fs-1 text-danger animated-icon"></i>
                    </div>

                    <h1 className="display-4 text-danger mt-4 mb-3">¡Ups! No se encontró la pizza</h1>
                    <p className="lead text-muted mb-4">
                        Parece que hemos abandonado esta página como si fuera una pizza caliente. ¡Vamos a traerte algo delicioso!
                    </p>

                    <a
                        href="/"
                        className="btn btn-danger btn-lg shadow-sm d-inline-flex align-items-center"
                    >
                        <i className="bi bi-house-fill me-2"></i>
                        Volver al menú
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;