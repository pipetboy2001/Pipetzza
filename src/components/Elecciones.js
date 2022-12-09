import React, { useContext } from 'react'
//css
import { Container } from 'react-bootstrap'
//react-router-dom
import { Link } from 'react-router-dom'

//datacontext
import { DataContext } from 'context/DataProvider';

//iconos
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { MDBCheckbox } from 'mdb-react-ui-kit';
import { GiMeat } from 'react-icons/gi';
import { GiTomato } from 'react-icons/gi';
import { GiDoughRoller } from 'react-icons/gi';
import { TbCheese } from 'react-icons/tb';
import { MdOutlineDeliveryDining } from 'react-icons/md'
import { MdLocalDining } from 'react-icons/md'

export const Elecciones = () => {
  const value = useContext(DataContext); // Ocupar las variables globales
  const addCarrito = value.addCarrito; // Para acceder a la FUNCION addCarrito
  const [items] = value.productos; // Importar el repositorio de productos

  // El item de id=17 es la pizza personalizada
  // La idea es agregar dentro de su atributo "ingredientes"
  // los ingredientes que tenga

  // Datos
  const ingredientesCarnes = [
    "carne",
    "carne mechada",
    "pepperoni",
    "salchicha",
    "jamón",
    "pollo",
    "tocino",
  ];
  const ingredientesVegetales = [
    "aceitunas",
    "choclo",
    "piña",
    "cebolla",
    "pimiento",
    "tomate",
    "champiñones",
  ];
  const tipoQueso = ["Gouda", "Mozzarella"];
  const cantidadQueso = ["Normal", "Extra", "Doble"];
  const tipoMasa = ["Normal", "Delgada"];
  const tamanoPizza = ["Familiar", "Mediana", "Personal"];
  
  // Estados
  const [ingredientesCarnesEstado, setIngredientesCarnes] = React.useState(
    ""
  );
  const [ingredientesVegetalesEstado, setIngredientesVegetales] = React.useState(
    ""
  );
  const [tipoQuesoEstado, setTipoQuesoEstado] = React.useState("");
  const [cantidadQuesoEstado, setCantidadQuesoEstado] = React.useState("");
  const [tipoMasaEstado, setTipoMasaEstado] = React.useState("");
  const [tamanoPizzaEstado, setTamanoPizzaEstado] = React.useState("");

  // Funcion
  const crearPizzaPersonalizada = () => {
    console.log("Creando pizza personalizada...");
    const salida = [
      ingredientesCarnesEstado,
      ingredientesVegetalesEstado,
      tipoQuesoEstado,
      cantidadQuesoEstado,
      tipoMasaEstado,
      tamanoPizzaEstado,
    ].map((element) => element + ", ");
    console.log("Características: ", salida);

    // Obtener objeto pizza personalizada
    const pizzaPersonalizada = items.filter((element) => {
      return element.id === 17;
    })[0]

    // Asignar ingredientes
    pizzaPersonalizada.description = salida;
    console.log("Pizza personalizada: ", pizzaPersonalizada);

    // Agregar al carrito
    addCarrito(pizzaPersonalizada.id);
  };



  return (
    <Container>
      <div class="container" >
        <div class="row">
          <center>
            <div class="col-9">
              <h1><MdOutlineDeliveryDining /> Tipo de pedido <MdLocalDining /></h1>
              <ToggleButtonGroup type="radio" name="options" className='Boton2Elecciones' defaultValue={1}>
                <ToggleButton id="tbg-radio-1" className='Boton1Elecciones' value={1}>
                  delivery
                </ToggleButton>
                <ToggleButton id="tbg-radio-2" className='Boton1Elecciones' value={2}>
                  en local
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </center>
          {/*Menu de elecciones*/}
          <div class="angry-grid">
            <div id="item-0"> <div class="div2">
              <h2>Tipo de Masa<GiDoughRoller /></h2>
              {tipoMasa.map((element) => (
                <div>
                  <label>{element}</label>
                  <input class="form-check-input" value={element} type={"radio"} name="masa" onChange={(e) => {
                      setTipoMasaEstado(e.target.value);
                      console.log("Estado tipo masa: " + e.target.value);
                    }}
                  />
                </div>
              ))}
            </div>
            </div>

            <div id="item-1"><div class="div1">
              <h2>Tamaño de pizza</h2>
              {tamanoPizza.map((element) => (
                <div>
                  <label>{element}</label>
                  <input class="form-check-input"
                    value={element}
                    type={"radio"}
                    name="tamano"
                    onChange={(e) => {
                      setTamanoPizzaEstado(e.target.value);
                      console.log("Estado tamaño pizza: " + e.target.value);
                    }}
                  />
                </div>
              ))}
            </div>
            </div>

            <div id="item-2"><div class="div3">
              <h2>Tipo de queso<TbCheese /></h2>
              {tipoQueso.map((element) => (
                <div>
                  <label>{element}</label>
                  <input class="form-check-input" value={element} type={"radio"} name="queso" onChange={(e) => {
                      setTipoQuesoEstado(e.target.value);
                      console.log("Estado tipo queso: " + e.target.value);
                    }}
                  />
                </div>
              ))}
            </div>
            </div>

            <div id="item-3"><div class="div4">
              <h2>Cantidad de queso</h2>
              {cantidadQueso.map((element) => (
                <div>
                  <label>{element}</label>
                  <input class="form-check-input" value={element} type={"radio"} name="cantidadQueso" onChange={(e) => {
                      setCantidadQuesoEstado(e.target.value);
                      console.log("Estado cantidad queso: " + e.target.value);
                    }}
                  />
                </div>
              ))}
            </div>
            </div>

            <div id="item-4"><div class="div5">
              <h2>carnes <GiMeat /></h2>
              {ingredientesCarnes.map((element) => (
                <div>
                  <label>{element}</label>
                  <input class="form-check-input"
                    value={element} 
                    type={"radio"}
                    name="cantidadCarne"
                    onChange={(e) => {
                      setIngredientesCarnes(e.target.value);
                      console.log("Ingredientes carnes: " + e.target.value);
                    }}
                  />
                </div>
              ))}
            </div></div>

            <div id="item-5"><div class="div6">
              <h2>vegetales<GiTomato /></h2>
              {ingredientesVegetales.map((element) => (
                <div>
                  <label>{element}</label>
                  <input class="form-check-input"
                    value={element}
                    type={"radio"}
                    name="vegetales"
                    onChange={(e) => {
                      setIngredientesVegetales(e.target.value);
                      console.log("Ingredientes vegetales: " + e.target.value);
                    }}
                  />
                </div>
              ))}
            </div></div>

          </div>
          <br></br>

          <button
            onClick={() => crearPizzaPersonalizada()}
            type="button" class="btn btn-succes"
          >
            Crear pedido
          </button>
        </div>
      </div>
    </Container>

  )
}
