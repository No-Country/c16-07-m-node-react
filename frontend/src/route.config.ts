import Home from "./pages/Home";
import Login from "./pages/login";
import MostrarOldman from "./oldMen/MostrarOldman";
import Eventos from "./pages/Eventos";

const rutas = [
   { path: "/oldMen/mostrar", element: MostrarOldman },
   { path: "/", element: Home },
   { path: "/Login", element: Login },
   { path: "/Eventos", element: Eventos },
];
export default rutas;
