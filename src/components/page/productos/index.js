import React, { useContext } from 'react'
import { DataContext } from "context/DataProvider";
import { ProductoItem } from "./ProductoItem";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import { ProductosOnlyPizza } from './ProductosOnlyPizza';
import { ProductosOnlyPersonalizada } from './ProductosOnlyPersonalizada';
import { ProductosOnlyRefresco } from './ProductosOnlyRefresco';
import { ProductosOnlySalsa } from './ProductosOnlySalsa';

export const ProductosList = () => {
	const value = useContext(DataContext)
	const [productos] = value.productos;
	return (
		<>
			<center>
				<center>
					<h1 className="produ">🍕Catálogo de pizzas🍕</h1>
					<h1 className='tipePedido'>Tipo de pedido 📌</h1>
				</center>
				<ToggleButtonGroup type="radio" name="options" defaultValue={1}>
					<ToggleButton id="tbg-radio-1" value={1}>
						delivery
					</ToggleButton>
					<ToggleButton id="tbg-radio-2" value={2}>
						Retirar en local
					</ToggleButton>
				</ToggleButtonGroup>
			</center>
			<ProductosOnlyPizza />
			<h2>Personaliza tu pizza 🍕</h2>
			<ProductosOnlyPersonalizada />
			<h2>Añade algo para tomar 🥤</h2>
			<ProductosOnlyRefresco />
			<h2>Añade tus salsas favoritas</h2>
			<ProductosOnlySalsa />
		</>
	)
}
