import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import { GoogleLogin } from '@react-oauth/google';
import { FaUser, FaEnvelope, FaLock, FaCreditCard } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const CheckoutPage = () => {
    const [checkoutMethod, setCheckoutMethod] = useState(null);
    const [guestInfo, setGuestInfo] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [paymentMethod, setPaymentMethod] = useState('');
    const [showLoginModal, setShowLoginModal] = useState(false);

    const location = useLocation();
    const { carrito = [], total = 0 } = location.state || {};
    // Redirect to home if cart is empty
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

    const handleGoogleLoginSuccess = (credentialResponse) => {
        // Lógica de autenticación con Google
        console.log(credentialResponse);
    };

    const handleSubmitOrder = () => {
        // Lógica final de procesamiento de orden
        console.log('Procesando orden', {
            checkoutMethod,
            guestInfo,
            paymentMethod,
            cartItems,
            total
        });
    };

    const renderCheckoutOptions = () => {
        return (
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
                                onClick={() => handleCheckoutMethodSelect('guest')}
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
                                onClick={() => handleCheckoutMethodSelect('register')}
                            >
                                <FaLock className="me-2" /> Registrarse
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    };



    const renderGuestForm = () => {
        return (
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
                                        value={guestInfo.name}
                                        onChange={handleGuestInfoChange}
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
                                        value={guestInfo.email}
                                        onChange={handleGuestInfoChange}
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
                                        value={guestInfo.phone}
                                        onChange={handleGuestInfoChange}
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
    };

    const renderPaymentMethods = () => {
        return (
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
                                <FaCreditCard className="me-2" /> Tarjeta de Crédito
                            </Button>
                        </Col>
                        <Col md={4}>
                            <Button
                                variant={paymentMethod === 'paypal' ? 'primary' : 'outline-primary'}
                                className="w-100 py-3"
                                onClick={() => setPaymentMethod('paypal')}
                            >
                                PayPal
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
    };

    const renderOrderSummary = () => {
        return (
            <Card className="mb-4 shadow-sm">
                <Card.Header as="h5" style={{ backgroundColor: 'orange', color: 'white' }}>
                    Resumen de Orden
                </Card.Header>
                <Card.Body>
                    {carrito.map((item, index) => (
                        <Row key={item.id} className="mb-2">
                            <Col>{item.title}</Col>
                            <Col className="text-end">
                                ${(item.price * (item.cantidad || 1)).toLocaleString()}
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
    };

    return (
        <Container fluid="md" className="py-4">
            <Row>
                <Col md={8}>
                    {!checkoutMethod && renderCheckoutOptions()}
                    {checkoutMethod === 'guest' && renderGuestForm()}
                    {checkoutMethod && renderPaymentMethods()}

                    {checkoutMethod && paymentMethod && (
                        <Button
                            variant="success"
                            size="lg"
                            className="w-100"
                            onClick={handleSubmitOrder}
                        >
                            Confirmar Pedido
                        </Button>
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
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Ingresa tu correo" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">
                            Iniciar Sesión
                        </Button>
                    </Form>

                    <div className="text-center my-3">
                        <GoogleLogin
                            onSuccess={handleGoogleLoginSuccess}
                            onError={() => console.log('Login Failed')}
                        />
                    </div>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default CheckoutPage;