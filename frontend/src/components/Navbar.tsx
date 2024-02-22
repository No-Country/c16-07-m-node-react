import { Link } from "react-router-dom";
//import logo from "../assets/logo.png"

export default function Navbar() {
  
    return (
      <div className="bg-green-100 py-4 px-4 absolute left-1/2 transform -translate-x-1/2 bottom-20 h-fit w-fit rounded-full 
                      md:static md:h-fit md:left-0 md:w-full md:transform-none md:rounded-none">
        <nav className="container mx-auto flex items-center justify-between font-semibold">
          <ul className="space-x-4 hidden md:flex">  
            <li>
              <Link to="/" className="text-green-700 hover:text-green-950 text-2xl">
                {/* <img src={logo} alt="logo" className="w-9 inline p-auto" />             */}
              </Link>         
            </li>
            <li>
              <Link to="/" className="text-green-700 hover:text-green-950 text-2xl font-bold">
                Acompañar + 
              </Link>                
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
              <Link to="/" className="text-green-700 hover:text-green-950">Ejercicios</Link>
            </li>
            <li>
              <Link to="/" className="text-green-700 hover:text-green-950">Acompañar</Link>
            </li>
          </ul>
          <ul className="flex space-x-4 ms-4">
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
