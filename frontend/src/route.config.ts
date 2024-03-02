import Home from "./pages/Home";
import Login from "./pages/login";
import MostrarOldman from "./components/oldMen/MostrarOldman";
import Eventos from "./pages/Eventos";
import Ayuda from "./pages/Ayuda";
import Inicio from "./pages/Inicio";
import Acompañar from "./pages/Acompañar";
import AcompanarAdulto from "./components/acompanar/AcompanarAdulto";

const rutas = [
   { path: "/oldMen/mostrar", element: MostrarOldman },
   { path: "/", element: Home },
   { path: "/Login", element: Login },
   { path: "/Eventos", element: Eventos },
   { path: "/Ayuda", element: Ayuda },
   { path: "/Inicio", element: Inicio },
   { path: "/Acompanar", element: Acompañar },
   { path: "/acompanar-adulto", element: AcompanarAdulto },
];
export default rutas;
