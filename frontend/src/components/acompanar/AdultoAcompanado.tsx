import React, { useState } from "react";

import background_image_2 from "../../utils/imagenes/background_image_2.png";
import Intereses from "./Intereses";
import { MostrarAcompa } from "./MostrarAcompa";
import { SeleccionarCiudad } from "./SeleccionarCiudad";

export default function AdultoAcompanado() {
   const [ciudadSeleccionada, setCiudadSeleccionada] = useState("");
   const [interesesSeleccionados, setInteresesSeleccionados] = useState<
      string[]
   >([]);

   const handleCitySelect = (selectedCity: string) => {
      setCiudadSeleccionada(selectedCity);
   };

   const handleInterestSelect = (selectedInterest: string) => {
      if (interesesSeleccionados.includes(selectedInterest)) {
         setInteresesSeleccionados((prevIntereses) =>
            prevIntereses.filter((interes) => interes !== selectedInterest)
         );
      } else {
         setInteresesSeleccionados((prevIntereses) => [
            ...prevIntereses,
            selectedInterest,
         ]);
      }
   };
   return (
      <>
         <div className="text-sm breadcrumbs bg-[#0369A1] text-white rounded-md">
            <ul>
               <li>
                  <a>Acompañar</a>
               </li>
               <li>
                  <a>Buscar</a>
               </li>
            </ul>
         </div>
         <div
            className="bg-cover bg-center relative h-screen"
            style={{ backgroundImage: `url(${background_image_2})` }}
         >
            <div className=" m-auto text-center mr-20 ml-20">
               <h2 className="text-justify text-3xl  font-semibold m-2">
                  Quiero acompañar a un adulto
               </h2>
               <p className="text-justify m-2 ">
                  Utiliza los filtros para encontrar esa persona que deseas
                  acompañar
               </p>

               <form className="max-w-sm mx-0 text-left ml-20">
                  <label
                     htmlFor="countries"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                     Elije tu ciudad para que te conectemos con personas
                     cercanas a ti.
                  </label>
                  <div>
                     <SeleccionarCiudad onCitySelect={handleCitySelect} />
                  </div>
               </form>
               <h1 className="text-justify text-3xl font-semibold ml-20 mt-4 mb-2">
                  Ahora prueba con los intereses que te conectan
               </h1>
               <Intereses onInterestSelect={handleInterestSelect} />
            </div>
            <h1 className="text-center text-2xl font-semibold mt-8">
               Tus resultados
            </h1>

            <MostrarAcompa
               ciudadSeleccionada={ciudadSeleccionada}
               interesesSeleccionados={interesesSeleccionados}
            />
         </div>
      </>
   );
}
