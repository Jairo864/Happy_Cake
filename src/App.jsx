import Home from './vistas/Home';
import Contacto from "./vistas/Contacto"
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import BarraNav from './componentes/BarraNav';
import "./App.css"


const App= ()=> {
  
  return (
    <>
    <BarraNav />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        
      </Routes>
    </>
  )
}

export default App;
