import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Button from './components/ui/button'
import { Routes, Route } from "react-router-dom";

import rutas from "./route.config";
//import IndividualOldMan from "./oldMen/IndividualOldMan";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {rutas.map((ruta) => (
          // @ts-ignore
          <Route key={ruta.path} path={ruta.path} element={<ruta.element />} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
