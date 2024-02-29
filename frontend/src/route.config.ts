import Home from "./pages/Home";
import Login from "./pages/login";
import MostrarOldman from "./components/oldMen/MostrarOldman";
import Eventos from "./pages/Eventos";
import Ayuda from "./pages/Ayuda";

const rutas = [
   { path: "/oldMen/mostrar", element: MostrarOldman },
   { path: "/", element: Home },
   { path: "/Login", element: Login },
   { path: "/Eventos", element: Eventos },
   { path: "/Ayuda", element: Ayuda },
];
export default rutas;
