import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Modal, ProgressBar, Alert } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaLock, FaCreditCard, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTruck, FaStore } from 'react-icons/fa';

// Usuarios de prueba para el inicio de sesión
const testUsers = [
    { email: 'usuario1@ejemplo.com', password: 'password123', name: 'Juan Pérez', phone: '1234567890' },
    { email: 'usuario2@ejemplo.com', password: 'test456', name: 'María Gómez', phone: '0987654321' }
];

// Lista de pizzerías para recoger
const pizzerias = [
    { id: 1, name: 'Pizzería Central', address: 'Av. Principal 123' },
    { id: 2, name: 'Pizzería del Barrio', address: 'Calle Secundaria 456' },
    { id: 3, name: 'Pizzería Gourmet', address: 'Plaza Mayor 789' }
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
    const [deliveryMethod, setDeliveryMethod] = useState(null);
    const [selectedStore, setSelectedStore] = useState(null);
    const [deliveryAddress, setDeliveryAddress] = useState({
        street: '',
        number: '',
        apartment: '',
        city: '',
        postalCode: ''
    });
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: ''
    });
    
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const { carrito = [], total = 0 } = location.state || {};
    if (carrito.length === 0) {
        return <Navigate to="/" replace />;
    }

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
                name: user.name,
                email: user.email,
                phone: user.phone

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

    const handleDeliveryMethodSelect = (method) => {
        setDeliveryMethod(method);
        setSelectedStore(null);
    };

    const handleStoreSelection = (store) => {
        setSelectedStore(store);
    };

    const handleDeliveryAddressChange = (e) => {
        const { name, value } = e.target;
        setDeliveryAddress(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCardDetailsChange = (e) => {
        const { name, value } = e.target;
        setCardDetails(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const renderDeliveryMethod = () => (
        <Card className="mb-4 shadow-sm">
            <Card.Header as="h5" style={{ backgroundColor: 'orange', color: 'white' }}>
                Método de Entrega
            </Card.Header>
            <Card.Body>
                <Row className="g-3">
                    <Col md={6}>
                        <Button
                            variant={deliveryMethod === 'delivery' ? 'primary' : 'outline-primary'}
                            className="w-100 py-3"
                            onClick={() => handleDeliveryMethodSelect('delivery')}
                        >
                            <FaTruck className="me-2" /> Entrega a Domicilio
                        </Button>
                    </Col>
                    <Col md={6}>
                        <Button
                            variant={deliveryMethod === 'pickup' ? 'primary' : 'outline-primary'}
                            className="w-100 py-3"
                            onClick={() => handleDeliveryMethodSelect('pickup')}
                        >
                            <FaStore className="me-2" /> Recoger en Tienda
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );

    const renderDeliveryAddress = () => (
        <Card className="mb-4 shadow-sm">
            <Card.Header as="h5" style={{ backgroundColor: 'orange', color: 'white' }}>
                Dirección de Entrega
            </Card.Header>
            <Card.Body>
                <Form>
                    <Row className="g-3">
                        <Col md={8}>
                            <Form.Group>
                                <Form.Label>Calle</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="street"
                                    value={deliveryAddress.street}
                                    onChange={handleDeliveryAddressChange}
                                    placeholder="Nombre de la calle"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Número</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="number"
                                    value={deliveryAddress.number}
                                    onChange={handleDeliveryAddressChange}
                                    placeholder="Número"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Apartamento/Piso</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="apartment"
                                    value={deliveryAddress.apartment}
                                    onChange={handleDeliveryAddressChange}
                                    placeholder="Opcional"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Ciudad</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="city"
                                    value={deliveryAddress.city}
                                    onChange={handleDeliveryAddressChange}
                                    placeholder="Ciudad"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Código Postal</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="postalCode"
                                    value={deliveryAddress.postalCode}
                                    onChange={handleDeliveryAddressChange}
                                    placeholder="Código Postal"
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );

    const renderStorePickup = () => (
        <Card className="mb-4 shadow-sm">
            <Card.Header as="h5" style={{ backgroundColor: 'orange', color: 'white' }}>
                Selecciona una Pizzería para Recoger
            </Card.Header>
            <Card.Body>
                <Row className="g-3">
                    {pizzerias.map((store) => (
                        <Col md={4} key={store.id}>
                            <Button
                                variant={selectedStore?.id === store.id ? 'primary' : 'outline-primary'}
                                className="w-100 py-3"
                                onClick={() => handleStoreSelection(store)}
                            >
                                <h6>{store.name}</h6>
                                <small>{store.address}</small>
                            </Button>
                        </Col>
                    ))}
                </Row>
            </Card.Body>
        </Card>
    );

    const renderCardDetails = () => (
        <Card className="mb-4 shadow-sm">
            <Card.Header as="h5" style={{ backgroundColor: 'orange', color: 'white' }}>
                Detalles de la Tarjeta
            </Card.Header>
            <Card.Body>
                <Form>
                    <Row className="g-3">
                        <Col md={12}>
                            <Form.Group>
                                <Form.Label>Número de Tarjeta</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="cardNumber"
                                    value={cardDetails.cardNumber}
                                    onChange={handleCardDetailsChange}
                                    placeholder="1234 5678 9012 3456"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Nombre en la Tarjeta</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="cardName"
                                    value={cardDetails.cardName}
                                    onChange={handleCardDetailsChange}
                                    placeholder="Nombre completo"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group>
                                <Form.Label>Fecha de Expiración</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="expiryDate"
                                    value={cardDetails.expiryDate}
                                    onChange={handleCardDetailsChange}
                                    placeholder="MM/AA"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group>
                                <Form.Label>CVV</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="cvv"
                                    value={cardDetails.cvv}
                                    onChange={handleCardDetailsChange}
                                    placeholder="123"
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );

    const handleSubmitOrder = async () => {
        try {
            const orderData = {
                total,
                paymentMethod,
                deliveryMethod,
                userInfo: {
                    name: userInfo.name,
                    email: userInfo.email,
                    phone: userInfo.phone
                },
                ...(deliveryMethod === 'delivery' && { deliveryAddress }),
                ...(deliveryMethod === 'pickup' && { selectedStore }),
                ...(paymentMethod === 'tarjeta' && { cardDetails })
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
                now={(currentStep / 5) * 100}
                label={`Paso ${currentStep} de 5`}
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
                            {renderDeliveryMethod()}
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
                                    disabled={!deliveryMethod}
                                >
                                    Siguiente <FaArrowRight />
                                </Button>
                            </div>
                        </>
                    )}
                    {currentStep === 4 && (
                        <>
                            {deliveryMethod === 'delivery' ? renderDeliveryAddress() : renderStorePickup()}
                            <div className="d-flex justify-content-between">
                                <Button
                                    variant="secondary"
                                    onClick={() => goToStep(3)}
                                >
                                    <FaArrowLeft /> Atrás
                                </Button>
                                <Button
                                    variant="primary"
                                    onClick={() => goToStep(5)}
                                    disabled={
                                        (deliveryMethod === 'delivery' &&
                                            (!deliveryAddress.street || !deliveryAddress.number || !deliveryAddress.city || !deliveryAddress.postalCode)) ||
                                        (deliveryMethod === 'pickup' && !selectedStore)
                                    }
                                >
                                    Siguiente <FaArrowRight />
                                </Button>
                            </div>
                        </>
                    )}
                    {currentStep === 5 && (
                        <>
                            {renderPaymentMethods()}
                            {paymentMethod === 'tarjeta' && renderCardDetails()}

                            {/* // Botón para enviar la orden */}
                            <Button
                                variant="success"
                                size="lg"
                                className="w-100 mb-3"
                                onClick={handleSubmitOrder}
                                disabled={
                                    (paymentMethod === 'tarjeta' &&
                                        (!cardDetails.cardNumber || !cardDetails.cardName || !cardDetails.expiryDate || !cardDetails.cvv))
                                }
                            >
                                Confirmar Pedido
                            </Button>




                            <div className="d-flex justify-content-between">
                                <Button
                                    variant="secondary"
                                    onClick={() => goToStep(4)}
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
