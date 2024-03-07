import { Link, useLocation } from "react-router-dom";
import logo from "../../public/assets/image/logo_app_acompanar.png";
import logoMini from "../../public/assets/image/logo_app_acompanar_mini.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../context/Auth.context";
import {
   faHome,
   faPuzzlePiece,
   faPeopleGroup,
   faCircleUser,
   faQuestionCircle,
   faCalendar,
   faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
   const { isAuthenticated, logout } = useAuth();
   const location = useLocation();

   return (
      <>
         <nav className="flex justify-between items-center bg-white font-semibold text-lg sticky top-0 z-10 md:hidden">
            <ul className="m-4">
               <li>
                  <Link to="/Landing">
                     <img src={logoMini} alt="logo" className="w-10" />
                  </Link>
               </li>
            </ul>
            <ul
               className={`flex-grow items-center justify-center mx-4 ${
                  isAuthenticated ? "hidden" : "flex"
               }`}
            >
               <li
                  className={`flex justify-center ${
                     location.pathname === "/"
                        ? "text-amber-500"
                        : "text-sky-900"
                  }`}
               >
                  <Link to="/" className="flex flex-col items-center">
                     <FontAwesomeIcon icon={faHome} className="text-3xl" />
                     Inicio
                  </Link>
               </li>
            </ul>
            <ul
               className={`flex-grow items-center justify-end mx-4 space-x-4 ${
                  isAuthenticated ? "hidden" : "flex"
               }`}
            >
               <li
                  className={`flex justify-center ${
                     location.pathname === "/Ayuda"
                        ? "text-amber-500"
                        : "text-sky-900"
                  }`}
               >
                  <Link to="/Ayuda" className="flex flex-col items-center">
                     <FontAwesomeIcon
                        icon={faQuestionCircle}
                        className="text-3xl"
                     />
                     Ayuda
                  </Link>
               </li>
               <li
                  className={`flex justify-center ${
                     location.pathname === "/Login"
                        ? "text-amber-500"
                        : "text-sky-900"
                  }`}
               >
                  <Link to="/Login" className="flex flex-col items-center">
                     <FontAwesomeIcon
                        icon={faCircleUser}
                        className="text-3xl"
                     />
                     Ingresar
                  </Link>
               </li>
            </ul>
            <ul
               className={`flex-grow items-center justify-center mx-4 space-x-4 ${
                  isAuthenticated ? "flex" : "hidden"
               }`}
            >
               <li
                  className={`flex justify-center ${
                     location.pathname === "/Home"
                        ? "text-amber-500"
                        : "text-sky-900"
                  }`}
               >
                  <Link to="/Home" className="flex flex-col items-center">
                     <FontAwesomeIcon icon={faHome} className="text-3xl" />
                     Tu espacio
                  </Link>
               </li>
               <li
                  className={`flex justify-center ${
                     location.pathname === "/Eventos"
                        ? "text-amber-500"
                        : "text-sky-900"
                  }`}
               >
                  <Link to="/Eventos" className="flex flex-col items-center">
                     <FontAwesomeIcon icon={faCalendar} className="text-3xl" />
                     Eventos
                  </Link>
               </li>
               <li
                  className={`flex justify-center ${
                     location.pathname === "/Ejercicios"
                        ? "text-amber-500"
                        : "text-sky-900"
                  }`}
               >
                  <Link to="/Ejercicios" className="flex flex-col items-center">
                     <FontAwesomeIcon
                        icon={faPuzzlePiece}
                        className="text-3xl"
                     />
                     Ejercicios
                  </Link>
               </li>
            </ul>
            <ul
               className={`flex-grow items-center justify-end mx-4 space-x-4 ${
                  isAuthenticated ? "flex" : "hidden"
               }`}
            >
               <li
                  className={`flex justify-center ${
                     location.pathname === "/Perfil"
                        ? "text-amber-500"
                        : "text-sky-900"
                  }`}
               >
                  <Link to="/Perfil" className="flex flex-col items-center">
                     <FontAwesomeIcon
                        icon={faPeopleGroup}
                        className="text-3xl"
                     />
                     Perfil
                  </Link>
               </li>
               <li
                  className={`flex justify-center ${
                     location.pathname === "/"
                        ? "text-amber-500"
                        : "text-sky-900"
                  }`}
               >
                  <Link
                     to="/"
                     onClick={logout}
                     className="flex flex-col items-center"
                  >
                     <FontAwesomeIcon
                        icon={faRightFromBracket}
                        className="text-3xl"
                     />
                     Logout
                  </Link>
               </li>
            </ul>
         </nav>

         <div className="fixed bottom-0 w-full h-fit z-10 bg-sky-900 md:static md:h-fit md:left-0 md:transform-none md:rounded-none md:bg-white md:p-4">
            <nav className="w-full flex flex-wrap items-center font-bold text-lg text-gray-100 md:text-sky-800 md:justify-between">
               <ul className="hidden md:flex md:flex-1 justify-center">
                  <li>
                     <Link to="/">
                        <img src={logo} alt="logo" className="w-36" />
                     </Link>
                  </li>
               </ul>
               <ul className="flex flex-1 justify-around md:justify-center space-x-4">
                  {!isAuthenticated && (
                     <Link
                        to="/"
                        className={`py-3 flex flex-col justify-center ${
                           location.pathname === "/"
                              ? "text-amber-500"
                              : "text-sky-900"
                        }`}
                     >
                        Inicio
                     </Link>
                  )}
                  {isAuthenticated && (
                     <>
                        <Link
                           to="/Home"
                           className={`py-3 flex flex-col justify-center ${
                              location.pathname === "/Home"
                                 ? "text-amber-500"
                                 : "text-sky-900"
                           }`}
                        >
                           Tu espacio
                        </Link>
                        <Link
                           to="/Eventos"
                           className={`py-3 flex flex-col justify-center ${
                              location.pathname === "/Eventos"
                                 ? "text-amber-500"
                                 : "text-sky-900"
                           }`}
                        >
                           Eventos
                        </Link>
                        <Link
                           to="/Ejercicios"
                           className={`py-3 flex flex-col justify-center ${
                              location.pathname === "/Ejercicios"
                                 ? "text-amber-500"
                                 : "text-sky-900"
                           }`}
                        >
                           Ejercicios
                        </Link>
                     </>
                  )}
               </ul>
               <ul className="hidden md:flex md:flex-1 justify-end space-x-4">
                  {!isAuthenticated && (
                     <>
                        <Link
                           to="/Ayuda"
                           className={`py-3 flex flex-col justify-center ${
                              location.pathname === "/Ayuda"
                                 ? "text-amber-500"
                                 : "text-sky-900"
                           }`}
                        >
                           Ayuda
                        </Link>
                        <Link
                           to="/Login"
                           className={`py-3 flex flex-col justify-center ${
                              location.pathname === "/Login"
                                 ? "text-amber-500"
                                 : "text-sky-900"
                           }`}
                        >
                           Ingresar
                        </Link>
                     </>
                  )}
                  {isAuthenticated && (
                     <>
                        <Link
                           to="/Perfil"
                           className={`py-3 flex flex-col justify-center ${
                              location.pathname === "/Perfil"
                                 ? "text-amber-500"
                                 : "text-sky-900"
                           }`}
                        >
                           Perfil
                        </Link>
                        <Link
                           to="/"
                           onClick={logout}
                           className={`py-3 flex flex-col justify-center ${
                              location.pathname === "/"
                                 ? "text-amber-500"
                                 : "text-sky-900"
                           }`}
                        >
                           Logout
                        </Link>
                     </>
                  )}
               </ul>
            </nav>
         </div>
      </>
   );
}
