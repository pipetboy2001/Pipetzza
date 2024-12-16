import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataContext } from '../data/DataProvider.jsx';


// Datos de precios (normalmente se cargarían desde un archivo externo)
const priceData = {
    "masas": [
        { "nombre": "Delgada", "precio": 1000 },
        { "nombre": "Gruesa", "precio": 1200 }
    ],
    "tamaños": [
        { "nombre": "Pequeña", "precio": 5000 },
        { "nombre": "Mediana", "precio": 7000 },
        { "nombre": "Grande", "precio": 9000 }
    ],
    "quesos": [
        { "nombre": "Mozzarella", "precio": 1500 },
        { "nombre": "Cheddar", "precio": 1600 },
        { "nombre": "Parmesano", "precio": 1800 }
    ],
    "carnes": [
        { "nombre": "Pepperoni", "precio": 800 },
        { "nombre": "Jamón", "precio": 700 },
        { "nombre": "Tocino", "precio": 900 },
        { "nombre": "Pollo", "precio": 600 },
        { "nombre": "Chorizo", "precio": 1100 },
        { "nombre": "Salami", "precio": 950 },
        { "nombre": "Jamon Serrano", "precio": 1600 },
    ],
    "vegetales": [
        { "nombre": "Tomate", "precio": 300 },
        { "nombre": "Champiñones", "precio": 400 },
        { "nombre": "Cebolla", "precio": 250 },
        { "nombre": "Pimiento", "precio": 350 },
        { "nombre": "Aceitunas", "precio": 200 },
        { "nombre": "Choclo", "precio": 150 },
        { "nombre": "Piña", "precio": 600 },
    ]
};

const PizzaCustomizer = () => {
    // Estados para cada opción de la pizza
    const [masa, setMasa] = useState('Delgada');
    const [tamaño, setTamaño] = useState('Pequeña');
    const [queso, setQueso] = useState('Mozzarella');
    const [cantidadQueso, setCantidadQueso] = useState(50);
    const [carnes, setCarnes] = useState([]);
    const [vegetales, setVegetales] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0);
    const { carrito, setCarrito } = useContext(DataContext);  // Usamos el contexto del carrito
    const [showNotification, setShowNotification] = useState(false);
    const [precio, setPrecio] = useState('');  // Guardar el precio total en el estado global   

    // Calcular precio total
    useEffect(() => {
        const calcularPrecioTotal = () => {
            let total = 0;

            // Precio base por masa, tamaño y queso
            const masaSeleccionada = priceData.masas.find(m => m.nombre === masa);
            const tamañoSeleccionado = priceData.tamaños.find(t => t.nombre === tamaño);
            const quesoSeleccionado = priceData.quesos.find(q => q.nombre === queso);

            total += masaSeleccionada ? masaSeleccionada.precio : 0;
            total += tamañoSeleccionado ? tamañoSeleccionado.precio : 0;
            total += quesoSeleccionado ? quesoSeleccionado.precio : 0;

            // Adicional por cantidad de queso
            total += (quesoSeleccionado ? quesoSeleccionado.precio : 0) * (cantidadQueso / 100);

            // Precio de carnes
            carnes.forEach(carneName => {
                const carneSeleccionada = priceData.carnes.find(c => c.nombre === carneName);
                total += carneSeleccionada ? carneSeleccionada.precio : 0;
            });

            // Precio de vegetales
            vegetales.forEach(vegetalName => {
                const vegetalSeleccionado = priceData.vegetales.find(v => v.nombre === vegetalName);
                total += vegetalSeleccionado ? vegetalSeleccionado.precio : 0;
            });

            setPrecioTotal(total);
            setPrecio(total);  // Guardar el precio total en el estado global
        };

        calcularPrecioTotal();
    }, [masa, tamaño, queso, cantidadQueso, carnes, vegetales]);

    // Manejar selección de carnes
    const handleCarneChange = (carneName) => {
        setCarnes(prev =>
            prev.includes(carneName)
                ? prev.filter(c => c !== carneName)
                : [...prev, carneName]
        );
    };

    // Manejar selección de vegetales
    const handleVegetalesChange = (vegetalName) => {
        setVegetales(prev =>
            prev.includes(vegetalName)
                ? prev.filter(v => v !== vegetalName)
                : [...prev, vegetalName]
        );
    };

    // Añadir pizza al carrito
    const añadirACarrito = () => {
        console.log('Añadir al carrito');  // Verificar en la consola
        // Verificar que se hayan seleccionado todas las opciones
        

            const pizzaPersonalizada = {
                id: Date.now(), // Generar un id único
                tipo: 'personalizada', // Indicar que es una pizza personalizada
                masa,
                tamaño,
                queso,
                cantidadQueso,
                carnes,
                vegetales,
                cantidad: 1, // Cantidad predeterminada
                price: precio, // Guardar el precio total
                description: `Pizza ${masa} ${tamaño} ${queso} con ${carnes.join(', ')} y ${vegetales.join(', ')}`, // Descripción basada en la selección
                image: "https://i.imgur.com/qTTQ8mB.png", // Imagen predeterminada para pizza personalizada
                title: `Pizza ${masa} ${tamaño} ${queso}`, // Título basado en la selección
            };

            console.log('Pizza personalizada:', pizzaPersonalizada);  // Verificar en la consola

            const newCarrito = [...carrito];
            newCarrito.push(pizzaPersonalizada);
            setCarrito(newCarrito);
            triggerNotification(); // Mostrar notificación al agregar un producto
            
        

        
    };

    const triggerNotification = () => {
        console.log("Notificación activada");  // Verifica si aparece en la consola
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    return (

        

        <div className="container mt-5">

            <div className={`notification ${showNotification ? 'show' : ''}`}>
                Producto añadido al carrito
            </div>

            
            <h1 className="mb-4 text-center">👨🏻‍🍳Crea tu pizza a tu gusto👩🏻‍🍳</h1>

            <div className="row">
                <div className="col-md-6">
                    {/* Tipo de Masa */}
                    <div className="mb-3">
                        <label className="form-label">Tipo de Masa <span style={{ color: 'red' }}>*</span></label>
                        <select
                            className="form-select"
                            value={masa}
                            onChange={(e) => setMasa(e.target.value)}
                        >
                            <option value="">Selecciona Masa</option>
                            {priceData.masas.map(m => (
                                <option key={m.nombre} value={m.nombre}>
                                    {m.nombre} (+${m.precio})
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Tamaño de Pizza */}
                    <div className="mb-3">
                        <label className="form-label">Tamaño <span style={{ color: 'red' }}>*</span></label>
                        <select
                            className="form-select"
                            value={tamaño}
                            onChange={(e) => setTamaño(e.target.value)}
                        >
                            <option value="">Selecciona Tamaño</option>
                            {priceData.tamaños.map(t => (
                                <option key={t.nombre} value={t.nombre}>
                                    {t.nombre} (+${t.precio})
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Tipo de Queso */}
                    <div className="mb-3">
                        <label className="form-label">Tipo de Queso <span style={{ color: 'red' }}>*</span></label>
                        <select
                            className="form-select"
                            value={queso}
                            onChange={(e) => setQueso(e.target.value)}
                        >
                            <option value="">Selecciona Queso</option>
                            {priceData.quesos.map(q => (
                                <option key={q.nombre} value={q.nombre}>
                                    {q.nombre} (+${q.precio})
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Cantidad de Queso */}
                    <div className="mb-3">
                        <label className="form-label">Cantidad de Queso ({cantidadQueso}%)</label>
                        <input
                            type="range"
                            className="form-range"
                            min="0"
                            max="100"
                            value={cantidadQueso}
                            onChange={(e) => setCantidadQueso(Number(e.target.value))}
                        />
                    </div>
                </div>

                <div className="col-md-6">
                    {/* Carnes */}
                    <div className="mb-3">
                        <label className="form-label">Carnes</label>
                        {priceData.carnes.map(carne => (
                            <div key={carne.nombre} className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id={`carne-${carne.nombre}`}
                                    checked={carnes.includes(carne.nombre)}
                                    onChange={() => handleCarneChange(carne.nombre)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor={`carne-${carne.nombre}`}
                                >
                                    {carne.nombre} (+${carne.precio})
                                </label>
                            </div>
                        ))}
                    </div>

                    {/* Vegetales */}
                    <div className="mb-3">
                        <label className="form-label">Vegetales</label>
                        {priceData.vegetales.map(vegetal => (
                            <div key={vegetal.nombre} className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id={`vegetal-${vegetal.nombre}`}
                                    checked={vegetales.includes(vegetal.nombre)}
                                    onChange={() => handleVegetalesChange(vegetal.nombre)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor={`vegetal-${vegetal.nombre}`}
                                >
                                    {vegetal.nombre} (+${vegetal.precio})
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mostrar precio total */}
            <div className="text-center mt-4">
                <h4>Total: ${precio}</h4>
                <button className="btn btn-primary" onClick={añadirACarrito}>
                    Añadir al Carrito
                </button>
            </div>


        </div>
    );
};

export default PizzaCustomizer;
