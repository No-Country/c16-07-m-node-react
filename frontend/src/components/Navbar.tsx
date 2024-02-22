import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-white py-4 px-4 absolute left-1/2 transform -translate-x-1/2 bottom-20 h-fit w-fit rounded-full 
            md:static md:h-fit md:left-0 md:w-full md:transform-none md:rounded-none">
      <nav className="container mx-auto flex items-center justify-between font-semibold">
        <ul className="space-x-4 hidden md:flex">  
          <li>
            <Link to="/" className="text-blue-900 hover:text-gray-800 text-2xl">
            </Link>         
          </li>
          <li>
            <Link to="/" className="hover:text-gray-800 text-2xl font-bold">
              <span className="text-blue-900 text-3xl">Acompañar</span> <span className="text-blue-600 text-4xl">+</span>
            </Link>              
          </li>            
        </ul>
        <ul className="flex space-x-4">
          <li>
            <Link to="/Home" className="text-blue-900 hover:text-gray-800">Home</Link>
          </li>
          <li>
            <Link to="/" className="text-blue-900 hover:text-gray-800">Eventos</Link>
          </li>
          <li>
            <Link to="/" className="text-blue-900 hover:text-gray-800">Ejercicios</Link>
          </li>
          <li>
            <Link to="/" className="text-blue-900 hover:text-gray-800">Acompañar</Link>
          </li>
        </ul>
        <ul className="flex space-x-4 ms-4">
          <li>
            <Link to="/Login" className="text-blue-900 hover:text-gray-800">Login</Link>
          </li>            
          <li>
            <Link to="/" className="text-blue-900 hover:text-gray-800">Ayuda</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}