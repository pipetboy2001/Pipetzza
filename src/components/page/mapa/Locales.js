import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { divIcon, icon, Icon } from 'leaflet';
import { useState } from 'react';
import { useMapEvents } from 'react-leaflet';
//para que se vea bien el mapa
import 'leaflet/dist/leaflet.css';
//css propio para el mapa
import './Map.css';


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
                                <h3>Pipetzza</h3>
                                <p>Universidad de Santiago de Chile </p>
                            </div>
                        </Popup>
                    </Marker>

                    <Marker position={positionMaipu} icon={icono}>
                        <Popup>
                            <div>
                                <h3>Pipetzza</h3>
                                <p>Maipu</p>
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
            <center>
                <h1>Locales</h1>
            </center>
            <div>
                <RenderMap />
            </div>

        </container>
    );
}

