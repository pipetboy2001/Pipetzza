import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { divIcon, icon, Icon } from 'leaflet';
import { useState } from 'react';
import { useMapEvents } from 'react-leaflet';
//para que se vea bien el mapa
import 'leaflet/dist/leaflet.css';
//css propio para el mapa
import './Map.css';
//para que tenga icons
import { GiPizzaSlice } from 'react-icons/gi';
import { RiRoadMapLine } from 'react-icons/ri';





function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })

    return position === null ? null : (
        <Marker position={position} 
        icon={new Icon({
            iconUrl: 'https://i.imgur.com/aiGgtdI.png',
            iconSize: [50, 50]
        })}>
            <Popup>Tu estas aqui</Popup>
        </Marker>


    )
}

function RenderMap() {
    //Constante de posicion en santiago centro chile
    const positionUsach = [-33.451041, -70.681286];
    const positionMaipu = [-33.4876227, -70.7719958];

    //icono para el marcador
    const icono = new Icon({
        iconUrl: 'https://i.imgur.com/D1GXxkt.png',
        iconSize: [50, 50]
    });

    return (
        <>
            <div className="map" id="map" >
                <MapContainer center={{ lat: -33.4876227, lng: -70.7719958 }} zoom={12} scrollWheelZoom={false}>>
                    {/* constribuciones para que muestre el mapa */}
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LocationMarker />

                    <Marker position={positionUsach} icon={icono}>
                        <Popup>
                            <div>
                                <h3>Sede Estacion Central</h3>
                                <p>Romero 2029, Santiago, Estación Central, Región Metropolitana</p>
                            </div>
                        </Popup>
                    </Marker>

                    <Marker position={positionMaipu} icon={icono}>
                        <Popup>
                            <div>
                                <h3>Sede maípu</h3>
                                <p>Provincias Unidas 1337, Maipú, Región Metropolitana</p>
                            </div>
                        </Popup>
                    </Marker>




                </MapContainer>
            </div>
        </>
    );
}


export default function Locales() {
    return (
        <container>

            <div class="angry-grid2">
                <div id="item-izquierda">
                    <div>
                        <RenderMap />
                    </div>    
                </div>
                
                

                <div id="item-derecha">
                    <center>
                        <h1>Nuestros Locales <GiPizzaSlice /> </h1>
                    </center>
                    <div className='cards'>
                    <div className='card'>
                            <img src="https://th.bing.com/th/id/OIP.EMesVAPaG5ji0vyUcXEfrwHaE7?pid=ImgDet&rs=1" class="card-img-top" alt="Fissure in Sandstone" />
                        <div class="card-body">
                            <h5 class="card-title">Sede maípu</h5>
                            <p class="card-text">Provincias Unidas 1337, Maipú, Región Metropolitana</p>
                                <a href="#!" class="btn btn-primary">Ubicar <RiRoadMapLine /> </a>
                        </div>
                    </div>

                    <div className='card'>
                            <img src="https://th.bing.com/th/id/OIP.0JN5H7acFTAGwkQNgX6oRAAAAA?pid=ImgDet&w=400&h=266&rs=1" class="card-img-top" alt="Fissure in Sandstone" />
                        <div class="card-body">
                            <h5 class="card-title">Sede Estacion Central</h5>
                                <p class="card-text">Romero 2029, Santiago, Estación Central, Región Metropolitana</p>
                                <a href="#!" class="btn btn-primary">Ubicar <RiRoadMapLine /> </a>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>



            

        </container>
    );
}

