import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Modal, ProgressBar, Alert } from 'react-bootstrap';
import { GoogleLogin } from '@react-oauth/google';
import { FaUser, FaEnvelope, FaLock, FaCreditCard, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Usuarios de prueba para el inicio de sesión
const testUsers = [
    { email: 'usuario1@ejemplo.com', password: 'password123', name: 'Juan Pérez', phone: '1234567890' },
    { email: 'usuario2@ejemplo.com', password: 'test456', name: 'María Gómez', phone: '0987654321' }
];

const CheckoutPage = () => {
    
    const [guestInfo, setGuestInfo] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [checkoutMethod, setCheckoutMethod] = useState(null);
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        phone: '',
        loginEmail: '',
        loginPassword: ''
    });
    
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const { carrito = [], total = 0 } = location.state || {};
    if (carrito.length === 0) {
        return <Navigate to="/" replace />;
    }

    const handleGuestInfoChange = (e) => {
        const { name, value } = e.target;
        setGuestInfo(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckoutMethodSelect = (method) => {
        setCheckoutMethod(method);
    };

    console.log('Total a enviar:', total);

    const handleLogin = (e) => {
        e.preventDefault();
        const user = testUsers.find(
            u => u.email === userInfo.loginEmail && u.password === userInfo.loginPassword
        );

        if (user) {
            setUserInfo(prev => ({
                ...prev,
                name: user.name
            }));
            setShowLoginModal(false);
            setCheckoutMethod('registered');
            setCurrentStep(2);
            setLoginError('');
        } else {
            setLoginError('Credenciales incorrectas');
        }
    };

    const handleUserInfoChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmitOrder = async () => {
        try {
            const orderData = {
                total,
                paymentMethod,
                userInfo: {
                    name: userInfo.name,
                    email: userInfo.email,
                    phone: userInfo.phone
                }
            };

            console.log('Enviando datos de la orden:', orderData);
            
            const response = await fetch('https://pipetzza-backend.vercel.app/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if (response.ok) {
                const data = await response.json();
                alert('Pedido confirmado exitosamente');
                // Aquí podrías redirigir a una página de confirmación
            } else {
                const errorData = await response.json();
                alert('Error al procesar el pedido');
            }
        } catch (error) {
            console.error('Error al hacer la solicitud:', error);
            alert('Error de conexión');
        }
    };

    const renderUserForm = () => (
        <Card className="mb-4 shadow-sm">
            <Card.Header as="h5" style={{ backgroundColor: 'orange', color: 'white' }}>
                Información del Cliente
            </Card.Header>
            <Card.Body>
                <Form>
                    <Row className="g-3">
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Nombre Completo</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={userInfo.name}
                                    onChange={handleUserInfoChange}
                                    placeholder="Tu nombre"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Correo Electrónico</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={userInfo.email}
                                    onChange={handleUserInfoChange}
                                    placeholder="tu@email.com"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="phone"
                                    value={userInfo.phone}
                                    onChange={handleUserInfoChange}
                                    placeholder="Tu teléfono"
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );

    const renderPaymentMethods = () => (
        <Card className="mb-4 shadow-sm">
            <Card.Header as="h5" style={{ backgroundColor: 'orange', color: 'white' }}>
                Método de Pago
            </Card.Header>
            <Card.Body>
                <Row className="g-3">
                    <Col md={4}>
                        <Button
                            variant={paymentMethod === 'tarjeta' ? 'primary' : 'outline-primary'}
                            className="w-100 py-3"
                            onClick={() => setPaymentMethod('tarjeta')}
                        >
                            <FaCreditCard className="me-2" /> Tarjeta de Crédito/Débito
                        </Button>
                    </Col>
                    <Col md={4}>
                        <Button
                            variant={paymentMethod === 'paypal' ? 'primary' : 'outline-primary'}
                            className="w-100 py-3"
                            disabled
                        >
                            PayPal (En Construcción)
                        </Button>
                    </Col>
                    <Col md={4}>
                        <Button
                            variant={paymentMethod === 'efectivo' ? 'primary' : 'outline-primary'}
                            className="w-100 py-3"
                            onClick={() => setPaymentMethod('efectivo')}
                        >
                            Pago en Efectivo
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );

    const renderOrderSummary = () => (
        <Card className="mb-4 shadow-sm">
            <Card.Header as="h5" style={{ backgroundColor: 'orange', color: 'white' }}>
                Resumen de Orden
            </Card.Header>
            <Card.Body>
                {carrito.map((item) => (
                    <Row key={item.id} className="mb-2">
                        <Col>{item.title}</Col>
                        <Col className="text-end">
                            ${(item.price * item.cantidad).toLocaleString()}
                        </Col>
                    </Row>
                ))}
                <hr />
                <Row className="fw-bold">
                    <Col>Total:</Col>
                    <Col className="text-end">${total.toLocaleString()}</Col>
                </Row>
            </Card.Body>
        </Card>
    );

    // Función para navegar entre pasos
    const goToStep = (step) => {
        setCurrentStep(step);
    };

    const renderCheckoutMethod = () => (
        <Card className="mb-4 shadow-sm">
            <Card.Header as="h5" style={{ backgroundColor: 'orange', color: 'white' }}>
                Elige cómo deseas continuar
            </Card.Header>
            <Card.Body>
                <Row className="g-3">
                    <Col md={4}>
                        <Button
                            variant="outline-primary"
                            className="w-100 py-3"
                            onClick={() => {
                                setCheckoutMethod('guest');
                                setCurrentStep(2);
                            }}
                        >
                            <FaUser className="me-2" /> Continuar como Invitado
                        </Button>
                    </Col>
                    <Col md={4}>
                        <Button
                            variant="outline-success"
                            className="w-100 py-3"
                            onClick={() => setShowLoginModal(true)}
                        >
                            <FaEnvelope className="me-2" /> Iniciar Sesión
                        </Button>
                    </Col>
                    <Col md={4}>
                        <Button
                            variant="outline-info"
                            className="w-100 py-3"
                            disabled
                        >
                            <FaLock className="me-2" />
                            Registro (En Construcción)
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );

    return (
        <Container fluid="md" className="py-4">
            <ProgressBar
                className="mb-4"
                now={(currentStep / 4) * 100}
                label={`Paso ${currentStep} de 4`}
            />

            <Row>
                <Col md={8}>
                    {currentStep === 1 && renderCheckoutMethod()}
                    {currentStep === 2 && (
                        <>
                            {renderUserForm()}
                            <div className="d-flex justify-content-between">
                                <Button
                                    variant="secondary"
                                    onClick={() => goToStep(1)}
                                >
                                    <FaArrowLeft /> Atrás
                                </Button>
                                <Button
                                    variant="primary"
                                    onClick={() => goToStep(3)}
                                >
                                    Siguiente <FaArrowRight />
                                </Button>
                            </div>
                        </>

                    )}
                    {currentStep === 3 && (
                        <>
                            {renderPaymentMethods()}
                            <div className="d-flex justify-content-between">
                                <Button
                                    variant="secondary"
                                    onClick={() => goToStep(2)}
                                >
                                    <FaArrowLeft /> Atrás
                                </Button>
                                <Button
                                    variant="primary"
                                    onClick={() => goToStep(4)}
                                    disabled={!paymentMethod}
                                >
                                    Siguiente <FaArrowRight />
                                </Button>
                            </div>
                        </>
                    )}
                    {currentStep === 4 && (
                        <>
                            <Button
                                variant="success"
                                size="lg"
                                className="w-100 mb-3"
                                onClick={handleSubmitOrder}
                            >
                                Confirmar Pedido
                            </Button>
                            <div className="d-flex justify-content-between">
                                <Button
                                    variant="secondary"
                                    onClick={() => goToStep(3)}
                                >
                                    <FaArrowLeft /> Atrás
                                </Button>
                            </div>
                        </>
                    )}
                </Col>
                <Col md={4}>
                    {renderOrderSummary()}
                </Col>
            </Row>

            {/* Modal de Inicio de Sesión */}
            <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Iniciar Sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {loginError && <Alert variant="danger">{loginError}</Alert>}
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control
                                type="email"
                                name="loginEmail"
                                value={userInfo.loginEmail}
                                onChange={handleUserInfoChange}
                                placeholder="Ingresa tu correo"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                name="loginPassword"
                                value={userInfo.loginPassword}
                                onChange={handleUserInfoChange}
                                placeholder="Contraseña"
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">
                            Iniciar Sesión
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <p className="text-muted">Usuarios de prueba:</p>
                    <ul>
                        <li>usuario1@ejemplo.com / password123</li>
                        <li>usuario2@ejemplo.com / test456</li>
                    </ul>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default CheckoutPage;
