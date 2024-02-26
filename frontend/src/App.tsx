import "./App.css";
import Navbar from "./components/Navbar";
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
               <Route
                  key={ruta.path}
                  path={ruta.path}
                  element={<ruta.element />}
               />
            ))}
         </Routes>
      </>
   );
}

export default App;
