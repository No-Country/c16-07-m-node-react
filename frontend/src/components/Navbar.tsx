import { Link } from "react-router-dom";
import logo from "../../public/assets/image/logo_app_acompanar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCalendarAlt, faPuzzlePiece, faPeopleGroup, faCircleUser, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {  
    return (
      <div className="py-4 px-4 fixed left-1/2 transform -translate-x-1/2 bottom-8 h-fit z-10
                      md:static md:h-fit md:left-0 md:w-full md:transform-none md:rounded-none md:bg-gray-100">
        <nav className="container mx-auto flex flex-wrap items-center justify-around font-bold text-sm">
          <ul className="space-x-4 hidden md:flex">  
            <li className="">
              <Link to="/">
                <img src={logo} alt="logo" className="w-36" />
              </Link>         
            </li>              
          </ul>
          <ul className="flex space-x-4 ">
            <li className="flex flex-col justify-center w-20 ">
              <Link to="/" className="text-sky-700 hover:text-blue-500 active:text-blue-900 flex flex-col items-center text-blue-500"><FontAwesomeIcon icon={faHome} className="bg-gray-200 rounded-full p-4 md:hidden text-2xl" />Home</Link>
            </li>
            <li className="flex flex-col justify-center w-20">
              <Link to="/Eventos" className="text-sky-700 hover:text-blue-500 active:text-blue-900 flex flex-col items-center text-blue-500"><FontAwesomeIcon icon={faCalendarAlt} className="bg-gray-200 rounded-full p-4 md:hidden text-2xl" />Eventos</Link>
            </li>
            <li className="flex flex-col justify-center w-20">
              <Link to="/Ejercicios" className="text-sky-700 hover:text-blue-500 active:text-blue-900 flex flex-col items-center text-blue-500"><FontAwesomeIcon icon={faPuzzlePiece} className="bg-gray-200 rounded-full p-4 md:hidden text-2xl" />Ejercicios</Link>
            </li>
            <li className="flex flex-col justify-center w-20">
              <Link to="/Acompañar" className="text-sky-700 hover:text-blue-500 active:text-blue-900 flex flex-col items-center text-blue-500"><FontAwesomeIcon icon={faPeopleGroup} className="bg-gray-200 rounded-full p-4 w-6 md:hidden text-2xl" />Acompañar</Link>
            </li>
          </ul>
          <ul className="flex space-x-4">
            <li className="flex flex-col justify-center w-20">
              <Link to="/Login" className="text-sky-700 hover:text-blue-500 active:text-blue-900 flex flex-col items-center text-blue-500"><FontAwesomeIcon icon={faCircleUser} className="bg-gray-200 rounded-full p-4 md:hidden text-2xl" />Login</Link>
            </li>            
            <li className="flex flex-col justify-center w-20">
              <Link to="/Ayuda" className="text-sky-700 hover:text-blue-500 active:text-blue-900 flex flex-col items-center text-blue-500"><FontAwesomeIcon icon={faQuestionCircle} className="bg-gray-200 rounded-full p-4 md:hidden text-2xl" />Ayuda</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
}
