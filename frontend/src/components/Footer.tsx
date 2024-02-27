import { Link } from "react-router-dom";
import logo from "../../public/assets/image/logo_app_acompanar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faXTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {  
  return (  
    <footer className="hidden md:relative md:flex justify-evenly py-8 bg-white z-10">
      <div>  
        <Link to="/">
          <img src={logo} alt="logo" className="w-64" />
        </Link>                       
      </div>
      <div className="flex flex-col space-y-1">        
        <h3 className="font-semibold">Sobre nosotros</h3>
        <Link to="/" className="text-sm text-sky-800 hover:text-sky-500 active:text-sky-900">
          Nuestro equipo
        </Link>
        <Link to="/" className="text-sm text-sky-800 hover:text-sky-500 active:text-sky-900">
          Conocer más
        </Link>
      </div>
      <div className="flex flex-col space-y-1">        
        <h3 className="font-semibold">Ayuda</h3>
        <Link to="/Ayuda" className="text-sm text-sky-800 hover:text-sky-500 active:text-sky-900">
          Preguntas frecuentes
        </Link>
        <Link to="/" className="text-sm text-sky-800 hover:text-sky-500 active:text-sky-900">
          Contáctanos
        </Link>
      </div>
      <div className="flex flex-col space-y-1"> 
        <h3 className="font-semibold">Encontranos en</h3>
        <div className="text-center space-x-4">
          <Link to="/">
            <FontAwesomeIcon icon={faFacebook} className="text-blue-800" />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faXTwitter} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faYoutube} className="text-red-500" />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faLinkedin} className="text-blue-500" />
          </Link>
        </div>
        <p className="text-gray-500 text-sm">© 2024 Acompañar+</p>
        
      </div>
    </footer>
  )
}