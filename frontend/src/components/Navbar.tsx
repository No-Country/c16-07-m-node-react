import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

export default function Navbar() {
  
    return (
      <div className="bg-green-100 py-4 px-4 w-full">
        <nav className="container mx-auto flex items-center justify-between text-xl">
          <ul className="flex space-x-4">  
            <li>
              <Link to="/" className="text-green-700 hover:text-green-950 text-2xl">
                <img src={logo} alt="logo" className="w-9 inline p-auto" />            
              </Link>         
            </li>
            <li>
              <Link to="/" className="text-green-700 hover:text-green-950 text-2xl font-bold">Acompañar + </Link>                
            </li>            
          </ul>
          <ul className="flex space-x-4">
            <li>
              <Link to="/Home" className="text-green-700 hover:text-green-950">Home</Link>
            </li>
            <li>
              <Link to="/" className="text-green-700 hover:text-green-950">Eventos</Link>
            </li>
            <li>
              <Link to="/" className="text-green-700 hover:text-green-950">Acompañar</Link>
            </li>
          </ul>
          <ul className="flex space-x-4">
            <li>
              <Link to="/Login" className="text-green-700 hover:text-green-950">Login</Link>
            </li>
            <li>
              <Link to="/" className="text-green-700 hover:text-green-950">Ayuda</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
}
