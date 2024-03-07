import { Link, useLocation } from "react-router-dom";
import logo from "../../public/assets/image/logo_app_acompanar.png";
import logoMini from "../../public/assets/image/logo_app_acompanar_mini.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faHome,
   faPuzzlePiece,
   faPeopleGroup,
   faCircleUser,
   faQuestionCircle,
   faCalendar,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
   const location = useLocation();

   return (
      <>
         <nav className="flex justify-between bg-white font-semibold border-b-2 border-sky-500 text-lg sticky top-0 z-10 md:hidden">
            <ul className="m-4 ">
               <li className="">
                  <Link to="/">
                     <img src={logoMini} alt="logo" className="w-10" />
                  </Link>
               </li>
            </ul>
            <ul className="flex">
               <li
                  className={`flex flex-col justify-center w-20 ${
                     location.pathname === "/Ayuda"
                        ? "text-amber-500"
                        : "text-sky-900"
                  }`}
               >
                  <Link
                     to="/Ayuda"
                     className="hover:text-amber-500 flex flex-col items-center"
                  >
                     <FontAwesomeIcon
                        icon={faQuestionCircle}
                        className="text-3xl"
                     />
                     Ayuda
                  </Link>
               </li>
               <li
                  className={`flex flex-col justify-center w-20 ${
                     location.pathname === "/Login"
                        ? "text-amber-500"
                        : "text-sky-900"
                  }`}
               >
                  <Link
                     to="/Login"
                     className="hover:text-amber-500 flex flex-col items-center"
                  >
                     <FontAwesomeIcon
                        icon={faCircleUser}
                        className="text-3xl"
                     />
                     Ingresar
                  </Link>
               </li>
            </ul>
         </nav>

         <div
            className="fixed bottom-0 w-full h-fit z-10 bg-sky-900 
                      md:static md:h-fit md:left-0 md:transform-none md:rounded-none md:bg-white md:p-4 md:border-b-2 md:border-sky-500"
         >
            <nav className="w-full flex flex-wrap items-center font-bold text-lg text-gray-100  md:text-sky-800 md:justify-between">
               <ul className="space-x-4 hidden md:flex">
                  <li className="">
                     <Link to="/">
                        <img src={logo} alt="logo" className="w-36" />
                     </Link>
                  </li>
               </ul>

               <ul className="flex justify-around w-full md:w-auto md:space-x-4">
                  <li
                     className={`py-3 flex flex-col justify-center border-t-4 ${
                        location.pathname === "/"
                           ? "border-amber-500 text-amber-500"
                           : "border-sky-900"
                     } active:border-amber-500 md:border-0`}
                  >
                     <Link
                        to="/"
                        className="hover:text-amber-500 md:hover:text-sky-500 md:active:text-blue-900 flex flex-col items-center"
                     >
                        <FontAwesomeIcon
                           icon={faHome}
                           className="p-1 md:hidden text-2xl"
                        />
                        Inicio
                     </Link>
                  </li>
                  <li
                     className={`py-3 flex flex-col justify-center border-t-4 ${
                        location.pathname === "/Acompa%C3%B1ar"
                           ? "border-amber-500 text-amber-500"
                           : "border-sky-900"
                     } active:border-amber-500 md:border-0`}
                  >
                     <Link
                        to="/Acompanar"
                        className="hover:text-amber-500 md:hover:text-sky-500 md:active:text-blue-900 flex flex-col items-center"
                     >
                        <FontAwesomeIcon
                           icon={faPeopleGroup}
                           className="p-1 md:hidden text-2xl"
                        />
                        Acompañar
                     </Link>
                  </li>
                  <li
                     className={`py-3 flex flex-col justify-center border-t-4 ${
                        location.pathname === "/Eventos"
                           ? "border-amber-500 text-amber-500"
                           : "border-sky-900"
                     } active:border-amber-500 md:border-0`}
                  >
                     <Link
                        to="/Eventos"
                        className="hover:text-amber-500 md:hover:text-sky-500 md:active:text-blue-900 flex flex-col items-center"
                     >
                        <FontAwesomeIcon
                           icon={faCalendar}
                           className="p-1 md:hidden text-2xl"
                        />
                        Eventos
                     </Link>
                  </li>
                  <li
                     className={`py-3 flex flex-col justify-center border-t-4 ${
                        location.pathname === "/Ejercicios"
                           ? "border-amber-500 text-amber-500"
                           : "border-sky-900"
                     } active:border-amber-500 md:border-0`}
                  >
                     <Link
                        to="/Ejercicios"
                        className="hover:text-amber-500 md:hover:text-sky-500 md:active:text-blue-900 flex flex-col items-center"
                     >
                        <FontAwesomeIcon
                           icon={faPuzzlePiece}
                           className="p-1 md:hidden text-2xl"
                        />
                        Ejercicios
                     </Link>
                  </li>
               </ul>

               <ul className="flex space-x-4 hidden md:flex">
                  <li
                     className={`flex flex-col justify-center w-20 ${
                        location.pathname === "/Ayuda"
                           ? "text-amber-500"
                           : "text-sky-900"
                     }`}
                  >
                     <Link
                        to="/Ayuda"
                        className="hover:text-amber-500 md:hover:text-sky-500 md:active:text-blue-900 flex flex-col items-center"
                     >
                        <FontAwesomeIcon
                           icon={faQuestionCircle}
                           className="p-1 md:hidden"
                        />
                        Ayuda
                     </Link>
                  </li>
                  <li
                     className={`flex flex-col justify-center w-20 ${
                        location.pathname === "/Login"
                           ? "text-amber-500"
                           : "text-sky-900"
                     }`}
                  >
                     <Link
                        to="/Login"
                        className="hover:text-amber-500 md:hover:text-sky-500 md:active:text-blue-900 flex flex-col items-center "
                     >
                        <FontAwesomeIcon
                           icon={faCircleUser}
                           className="p-1 md:hidden"
                        />
                        Ingresar
                     </Link>
                  </li>
               </ul>
            </nav>
         </div>
      </>
   );
}
