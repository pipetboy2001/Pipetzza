import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import ubicaciones from './../data/ubicaciones.json'; // Importamos el JSON de ubicaciones
import pizzaIconImg from './../assets/Pipetzza 1000x1000.png';  // Importamos el icono de pizza como un módulo

import { Container, Row, Col, Card, Button, Form, ListGroup, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// React Icons
import {
    MdLocationOn,
    MdDirections,
    MdDeliveryDining,
    MdAccessTime,
    MdMyLocation
} from 'react-icons/md';
import { IoRestaurant } from 'react-icons/io5';

const PizzeriasMap = () => {
    const [location, setLocation] = useState([0, 0]); // Estado para ubicación actual
    const [userAddress, setUserAddress] = useState(''); // Estado para la dirección del usuario
    const [closestPizzeria, setClosestPizzeria] = useState(null); // Estado para la pizzería más cercana
    const [suggestions, setSuggestions] = useState([]); // Estado para las sugerencias de búsqueda
    const mapRef = useRef(null); // Referencia al mapa
    const [error, setError] = useState(null); // Añadido estado para manejar errores
    

    // Obtener ubicación actual del usuario
    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const userLocation = [position.coords.latitude, position.coords.longitude];
                setLocation(userLocation);
                const closest = findClosestPizzeria(userLocation); // Encontrar la más cercana
                setClosestPizzeria(closest); // Guardar la pizzería más cercana

                if (mapRef.current && closest) {
                    // Ajustar la vista del mapa para que se vea tanto la ubicación del usuario como la pizzería
                    const [centerLat, centerLng] = getMapCenter(userLocation, closest);
                    const zoomLevel = getZoomLevel(userLocation, closest);
                    mapRef.current.setView([centerLat, centerLng], zoomLevel); // Cambiar el centro y el zoom
                }
            }, () => {
                alert('No se pudo obtener tu ubicación.');
            });
        } else {
            alert('La geolocalización no está soportada por este navegador.');
        }
    };

    // Calcular el centro del mapa entre la ubicación del usuario y la pizzería
    const getMapCenter = (userLocation, pizzeriaLocation) => {
        const lat = (userLocation[0] + pizzeriaLocation.lat) / 2;
        const lng = (userLocation[1] + pizzeriaLocation.lng) / 2;
        return [lat, lng];
    };

    // Calcular el nivel de zoom en base a la distancia entre el usuario y la pizzería
    const getZoomLevel = (userLocation, pizzeriaLocation) => {
        const distance = calculateDistance(userLocation[0], userLocation[1], pizzeriaLocation.lat, pizzeriaLocation.lng);
        if (distance < 1) return 14; // Si la distancia es menor a 1 km, un zoom alto
        if (distance < 5) return 12; // Si está entre 1 y 5 km, zoom medio
        return 10; // Si está más lejos, un zoom bajo
    };

    // Icono personalizado de Leaflet (con mayor tamaño)
    const pizzaIcon = new L.Icon({
        iconUrl: pizzaIconImg, // Usamos la variable importada
        iconSize: [60, 60], // Aumentamos el tamaño del icono
    });

    // Cálculo de la distancia (misma función que ya tienes)
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Radio de la Tierra en kilómetros
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distancia en kilómetros
    };

    // Encontrar la pizzería más cercana
    const findClosestPizzeria = (userLocation) => {
        let closest = null;
        let minDistance = Infinity;

        ubicaciones.forEach((pizzeria) => {
            const distance = calculateDistance(
                userLocation[0], userLocation[1],
                pizzeria.lat, pizzeria.lng
            );

            if (distance < minDistance) {
                closest = pizzeria;
                minDistance = distance;
            }
        });

        return closest; // Devolver la pizzería más cercana
    };

    // Función para buscar direcciones utilizando la API de Nominatim
    const searchAddress = async (address) => {
        if (address.length > 3) { // Solo buscar si la dirección tiene más de 3 caracteres
            try {
                // Modificar la URL de la API para incluir el parámetro 'countrycodes' con el valor 'CL' (Chile)
                const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${address}&countrycodes=CL&limit=5`);
                const data = await response.json();
                setSuggestions(data); // Guardamos las sugerencias en el estado
            } catch (error) {
                console.error('Error al obtener direcciones:', error);
            }
        } else {
            setSuggestions([]); // Limpiar sugerencias si la dirección tiene menos de 4 caracteres
        }
    };


    // Función para manejar el cambio en el input de la dirección
    const handleAddressChange = async (event) => {
        const value = event.target.value;
        setUserAddress(value);
        await searchAddress(value); // Llamamos a la API cada vez que el usuario escribe
    };

    // Manejar selección de una sugerencia
    const handleSuggestionClick = (lat, lon) => {
        const userLocation = [lat, lon];
        setLocation(userLocation);
        findClosestPizzeria(userLocation); // Encontrar la pizzería más cercana
        if (mapRef.current) {
            mapRef.current.setView([lat, lon], 16); // Mover el mapa a la dirección seleccionada
        }
        setSuggestions([]); // Limpiar sugerencias después de seleccionar una
    };

    // Función para abrir Google Maps con la ruta más cercana
    const openGoogleMapsRoute = () => {
        if (closestPizzeria && location[0] !== 0) {
            const googleMapsUrl = `https://www.google.com/maps/dir/${location[0]},${location[1]}/${closestPizzeria.lat},${closestPizzeria.lng}`;
            window.open(googleMapsUrl, '_blank'); // Abre en una nueva pestaña
        } else {
            setError('No se ha encontrado tu ubicación o la pizzería más cercana.');
        }
    };

    const renderOperatingHours = () => {
        const days = [
            { day: 'Lun', hours: '11:30 - 00:00' },
            { day: 'Mar', hours: '11:30 - 00:00' },
            { day: 'Mie', hours: '11:30 - 00:00' },
            { day: 'Jue', hours: '11:30 - 01:00' },
            { day: 'Vie', hours: '11:30 - 01:00' },
            { day: 'Sab', hours: '11:30 - 01:00' },
            { day: 'Dom', hours: '11:30 - 00:00' }
        ];

        return (
            <div className="operating-hours">
                <h6 className="mb-2">
                    <MdAccessTime className="me-2" /> Horarios de Atención
                </h6>
                <div className="d-flex flex-wrap">
                    {days.map((dayInfo, index) => (
                        <div
                            key={index}
                            className="me-3 mb-2 d-flex align-items-center"
                        >
                            <strong className="me-2">{dayInfo.day}</strong>
                            <span>{dayInfo.hours}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    };


    return (
        <Container fluid className="vh-100">
            <Row className="h-100">
                {/* Columna de Información y Búsqueda */}
                <Col
                    md={4}
                    lg={3}
                    className="bg-light p-4 overflow-auto"
                    style={{ maxHeight: '100vh' }}
                >
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title className="h3 text-center mb-3">
                                Localiza tu Pizzería
                            </Card.Title>
                            <Card.Text className="text-muted text-center mb-4">
                                Encuentra la pizzería más cercana en tu ciudad.
                            </Card.Text>

                            <Button
                                variant="primary"
                                onClick={getUserLocation}
                                className="w-100 mb-3"
                            >
                                <MdMyLocation className="me-2" /> Obtener mi ubicación
                            </Button>

                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Escribe tu dirección"
                                    value={userAddress}
                                    onChange={(e) => {
                                        setUserAddress(e.target.value);
                                        searchAddress(e.target.value);
                                    }}
                                />
                            </Form.Group>

                            {error && (
                                <Alert variant="danger">{error}</Alert>
                            )}

                            {suggestions.length > 0 && (
                                <ListGroup>
                                    {suggestions.map((suggestion, index) => (
                                        <ListGroup.Item
                                            key={index}
                                            action
                                            onClick={() => handleSuggestionClick(suggestion.lat, suggestion.lon)}
                                            className="small"
                                        >
                                            {suggestion.display_name}
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}

                            {closestPizzeria && (
                                <Card className="mt-4">
                                    <Card.Body>
                                        <Card.Title className="h5">
                                            <MdDeliveryDining className="me-2" /> Pizzería más cercana
                                        </Card.Title>
                                        <Card.Text>
                                            <strong>{closestPizzeria.nombre}</strong>
                                        </Card.Text>
                                        <Card.Text>
                                            {closestPizzeria.direccion}
                                        </Card.Text>

                                        {renderOperatingHours()}

                                        <Button
                                            variant="success"
                                            onClick={openGoogleMapsRoute}
                                            className="w-100 mt-3"
                                        >
                                            <MdDirections className="me-2" /> Buscar ruta más cercana
                                        </Button>
                                    </Card.Body>
                                </Card>
                            )}
                        </Card.Body>
                    </Card>
                </Col>

                {/* Columna del Mapa */}
                <Col md={8} lg={9} className="p-0">
                    <MapContainer
                        center={[-33.4489, -70.6693]}
                        zoom={5}
                        className="custom-map-height"
                        style={{
                            height: '80vh',
                            maxHeight: '1000px',  // Optional: set a maximum height
                            minHeight: '400px'   // Optional: set a minimum height
                        }}
                        ref={mapRef}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />

                        {ubicaciones.map((ubicacion, idx) => (
                            <Marker
                                key={idx}
                                position={[ubicacion.lat, ubicacion.lng]}
                                icon={new L.Icon({
                                    iconUrl: pizzaIconImg,
                                    iconSize: [60, 60]
                                })}
                            >
                                <Popup>{ubicacion.nombre}</Popup>
                            </Marker>
                        ))}

                        {location[0] !== 0 && (
                            <Marker position={location}>
                                <Popup>Tu ubicación</Popup>
                            </Marker>
                        )}

                        {closestPizzeria && (
                            <Marker
                                position={[closestPizzeria.lat, closestPizzeria.lng]}
                                icon={new L.Icon({
                                    iconUrl: pizzaIconImg,
                                    iconSize: [60, 60]
                                })}
                            >
                                <Popup>{closestPizzeria.nombre}</Popup>
                            </Marker>
                        )}
                    </MapContainer>
                </Col>
            </Row>
        </Container>
    );
};

export default PizzeriasMap;