import Home from "./pages/Home";
import Login from "./pages/login";
import MostrarOldman from "./oldMen/MostrarOldman";
import Eventos from "./pages/Eventos";
import Ayuda from "./pages/Ayuda";
import Landing from "./pages/Landing";
import Ejercicios from "./pages/Ejercicios";
import Perfil from "./pages/Perfil/Perfil";

const rutas = [
  { path: "/oldMen/mostrar", element: MostrarOldman },
  { path: "/", element: Home },
  { path: "/Login", element: Login },
  { path: "/Eventos", element: Eventos },
  { path: "/Ayuda", element: Ayuda },
  { path: "/Landing", element: Landing },
  { path: "/Perfil", element: Perfil },
  { path: "/Ejercicios", element: Ejercicios }
];
export default rutas;
