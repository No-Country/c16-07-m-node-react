import { Link } from "react-router-dom";
import logo from "../../public/assets/image/logo_app_acompanar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCalendarAlt, faPuzzlePiece, faPeopleGroup, faCircleUser, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {  
    return (
      <div className="py-4 px-4 fixed left-1/2 transform -translate-x-1/2 bottom-8 h-fit z-10
                      md:static md:h-fit md:left-0 md:w-full md:transform-none md:rounded-none md:bg-green-100">
        <nav className="container mx-auto flex flex-wrap items-center justify-around font-semibold">
          <ul className="space-x-4 hidden md:flex">  
            <li className="">
              <Link to="/" className="text-green-700 hover:text-green-950 text-2xl ">
                <img src={logo} alt="logo" className="w-36" />
              </Link>         
            </li>              
          </ul>
          <ul className="flex space-x-4">
            <li className="flex flex-col justify-center w-20">
              <Link to="/Home" className="text-green-700 hover:text-blue-700 flex flex-col items-center text-blue-500"><FontAwesomeIcon icon={faHome} className="bg-black rounded-full p-4 md:hidden" />Home</Link>
            </li>
            <li className="flex flex-col justify-center w-20">
              <Link to="/" className="text-green-700 hover:text-blue-700 flex flex-col items-center text-blue-500"><FontAwesomeIcon icon={faCalendarAlt} className="bg-black rounded-full p-4 md:hidden" />Eventos</Link>
            </li>
            <li className="flex flex-col justify-center w-20">
              <Link to="/" className="text-green-700 hover:text-blue-700 flex flex-col items-center text-blue-500"><FontAwesomeIcon icon={faPuzzlePiece} className="bg-black rounded-full p-4 md:hidden" />Ejercicios</Link>
            </li>
            <li className="flex flex-col justify-center w-20">
              <Link to="/" className="text-green-700 hover:text-blue-700 flex flex-col items-center text-blue-500"><FontAwesomeIcon icon={faPeopleGroup} className="bg-black rounded-full p-4 md:hidden" />Acompañar</Link>
            </li>
          </ul>
          <ul className="flex space-x-4">
            <li className="flex flex-col justify-center w-20">
              <Link to="/Login" className="text-green-700 hover:text-blue-700 flex flex-col items-center text-blue-500"><FontAwesomeIcon icon={faCircleUser} className="bg-black rounded-full p-4 md:hidden" />Login</Link>
            </li>            
            <li className="flex flex-col justify-center w-20">
              <Link to="/" className="text-green-700 hover:text-blue-700 flex flex-col items-center text-blue-500"><FontAwesomeIcon icon={faQuestionCircle} className="bg-black rounded-full p-4 md:hidden" />Ayuda</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
}
