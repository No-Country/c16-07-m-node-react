import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Button from './components/ui/button'
import { Routes, Route } from "react-router-dom";

import rutas from "./route.config";
import { UserRegistrationProvider } from "./context/UserRegistrationContext";
//import IndividualOldMan from "./oldMen/IndividualOldMan";

function App() {
   return (
      <>
      <UserRegistrationProvider>
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
         <Footer />
         </UserRegistrationProvider>
      </>
   );
}

export default App;
