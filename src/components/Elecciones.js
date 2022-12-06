import React from 'react'
import { Container } from 'react-bootstrap'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { MDBCheckbox } from 'mdb-react-ui-kit';

import { GiMeat } from 'react-icons/gi';
import { GiTomato } from 'react-icons/gi';
import { GiDoughRoller } from 'react-icons/gi';
import { TbCheese } from 'react-icons/tb';

export const Elecciones = () => {
  return (
    <Container>
      <div class="container" >
        <div class="row">
          <div class="col-9">
            <center>
              <h1>Tipo de pedido</h1>
              <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                <ToggleButton id="tbg-radio-1" className='Boton1Elecciones' value={1}>
                  delivery
                </ToggleButton>
                <ToggleButton id="tbg-radio-2" className='Boton1Elecciones' value={2}>
                  en local
                </ToggleButton>
              </ToggleButtonGroup>
            </center>
          </div>
        {/*Menu de elecciones*/ }
        <div class="angry-grid">
          <div id="item-0"> <div class="div2">
              <h2>Tipo de Masa<GiDoughRoller /></h2>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="tipoMasa" id="flexRadioDefault1" />
              <label class="form-check-label" for="flexRadioDefault1">
                Normal
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="tipoMasa" id="flexRadioDefault2" checked />
              <label class="form-check-label" for="flexRadioDefault2">
                Delgada
              </label>
            </div>
            <div class="div3"></div>
          </div></div>



          <div id="item-1"><div class="div1">
              <h2>Tamaño de pizza</h2>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="TamañoPizza" id="flexRadioDefault1" />
              <label class="form-check-label" for="flexRadioDefault3">
                Familiar
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="TamañoPizza" id="flexRadioDefault2" checked />
              <label class="form-check-label" for="flexRadioDefault4">
                Mediana
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="TamañoPizza" id="flexRadioDefault2" checked />
              <label class="form-check-label" for="flexRadioDefault4">
                Personal
              </label>
            </div>
          </div>
          </div>


          <div id="item-2"><div class="div3">
              <h2>Tipo de queso<TbCheese/></h2>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="tipoQueso" id="flexRadioDefault1" />
              <label class="form-check-label" for="flexRadioDefault1">
                Gouda
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="tipoQueso" id="flexRadioDefault2" checked />
              <label class="form-check-label" for="flexRadioDefault2">
                mozzarella
              </label>
            </div>
          </div></div>


          <div id="item-3"><div class="div4">
              <h2>Cantidad de queso</h2>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="cantidadQueso" id="flexRadioDefault1" />
              <label class="form-check-label" for="flexRadioDefault3">
                Normal
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="cantidadQueso" id="flexRadioDefault2" checked />
              <label class="form-check-label" for="flexRadioDefault4">
                Extra
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="cantidadQueso" id="flexRadioDefault2" checked />
              <label class="form-check-label" for="flexRadioDefault4">
                Doble
              </label>
            </div>
          </div>
          </div>


          <div id="item-4"><div class="div5">
              <h2>carnes <GiMeat /></h2>
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='carne' />
            <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='arne mechada' />
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='pepperoni' />
            <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='salchicha' />
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='jamón' />
            <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='pollo' />
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='tocino' />
          </div></div>

          <div id="item-5"><div class="div6">
              <h2>vegetales<GiTomato/></h2>
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='aceitunas' />
            <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='choclo' />
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='piña' />
            <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='cebolla' />
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='pimiento,' />
            <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='tomate' />
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='champiñones' />
          </div></div>
        </div>
          <br></br>
          <button type="button" class="btn btn-primary">Crear pedido</button>
        </div>



      </div>
    </Container>

  )
}
