import React from "react";
import BotonesIntereses, { botonI } from "./BotonesIntereses";
import MostrarOldman from "../oldMen/MostrarOldman";
const botones: botonI[] = [
   {
      id: 1,
      nombre: "Viajes",
   },
   {
      id: 2,
      nombre: "Gastronomia",
   },
   {
      id: 3,
      nombre: "Deporte",
   },
   {
      id: 4,
      nombre: "Meditacion",
   },
   {
      id: 5,
      nombre: "Fotografia",
   },
];

export default function AcompanarAdulto() {
   return (
      <div>
         <div className=" m-auto text-center mr-20 ml-20">
            <h2 className="text-justify font-semibold m-4">
               Quiero acompañar a un adulto
            </h2>
            <p className="text-justify  p-2">
               Utiliza los filtros para encontrar esa persona que deseas
               acompañar
            </p>
            <form className="max-w-sm mx-auto">
               <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
               >
                  Elije tu ciudad para que te conectemos con personas cercanas a
                  ti.
               </label>
               <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               >
                  <option value="US">Estados Unidos</option>
                  <option value="CA">Canadá</option>
                  <option value="FR">Francia</option>
                  <option value="DE">Alemania</option>
               </select>
            </form>
            <h1 className="text-2xl font-semibold m-4">
               Ahora prueba con los intereses que te conectan
            </h1>
            <div className="flex items-center justify-center mb-2 ">
               {botones.map((boton) => (
                  <BotonesIntereses boton={boton} key={boton.id} />
               ))}
            </div>
            <h1 className="text-2xl font-semibold m-4">Tus resultados</h1>
            <MostrarOldman />
         </div>
      </div>
   );
}
