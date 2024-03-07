import Home from "./pages/Home";
import Login from "./pages/login";

import Eventos from "./pages/Eventos";
import Ayuda from "./pages/Ayuda";
import Landing from "./pages/Landing";
import Ejercicios from "./pages/Ejercicios";
import Perfil from "./pages/Perfil/Perfil";
import Inicio from "./pages/Inicio";
import Acompañar from "./pages/Acompañar";
import AcompanarAdulto from "./components/acompanar/AcompanarAdulto";
import AdultoAcompanado from "./components/acompanar/AdultoAcompanado";

const rutas = [
   { path: "/Home", element: Home },
   { path: "/Login", element: Login },
   { path: "/Eventos", element: Eventos },
   { path: "/Ayuda", element: Ayuda },
   { path: "/", element: Landing },
   { path: "/Perfil", element: Perfil },
   { path: "/Ejercicios", element: Ejercicios },
   { path: "/Inicio", element: Inicio },
   { path: "/Acompanar", element: Acompañar },
   { path: "/acompanar-adulto", element: AcompanarAdulto },
   { path: "/adulto-acompanado", element: AdultoAcompanado },
];
export default rutas;
