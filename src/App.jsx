import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Importamos el Header
import Home from './components/Home'; // Importamos el componente Home
import Crear from './components/Crear'; // Importamos el componente Crear
import Locales from './components/Locales'; // Importamos el componente Locales
import { DataProvider } from './data/DataProvider.jsx'; // Importamos el DataProvider
import './App.css';

function App() {
  return (
    <DataProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crear" element={<Crear />} />
          <Route path="/locales" element={<Locales />} />
        </Routes>
      </div>
    </DataProvider>
  );
}


export default App;
