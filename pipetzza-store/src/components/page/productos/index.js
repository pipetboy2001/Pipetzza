import React, {useContext} from 'react'
import { DataContext } from "context/DataProvider";
import { ProductoItem } from "./ProductoItem";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export const ProductosList = () => {
	const value = useContext(DataContext)
	const [productos] = value.productos;
    return (
			<>
			

			<center>
				<h1 className="produ">Catálogo de pizzas</h1>
				<h1>Tipo de pedido</h1>
				<ToggleButtonGroup type="radio" name="options" defaultValue={1}>
					<ToggleButton id="tbg-radio-1" value={1}>
						delivery
					</ToggleButton>
					<ToggleButton id="tbg-radio-2" value={2}>
						Retirar en local
					</ToggleButton>
				</ToggleButtonGroup>
			</center>


        <div className="productos">
            {
							productos.map(producto =>(
								<ProductoItem 
									key={producto.id}
									title={producto.title}
									image={producto.image}
									category={producto.category}
									price={producto.price}
									id={producto.id}
								/>
							))
						}					
        </div>
				</>
    )
}
