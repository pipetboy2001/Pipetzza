import { useState } from 'react';
import { GiPizzaSlice } from 'react-icons/gi';
import { RiRoadMapLine } from 'react-icons/ri';



export default function Locales() {
    return (
        <container>
            <div class="angry-grid2">
                <div id="item-izquierda">
                    <div>
                        <h2>MAPA</h2>
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
                                <h5 class="card-title">Sede Maipú</h5>
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

