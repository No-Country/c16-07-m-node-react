import React from "react";

import MostrarEventos from "../MostrarEventos";

export default function JuegosInicio() {
   return (
      <>
         <div
            className="m-auto text-center mr-20 ml-20"
            style={{
               background:
                  "linear-gradient(180deg, rgba(12, 74, 110, 0.13) 0%, rgba(12, 74, 110, 0.64) 100%)",
            }}
         >
            <h2 className="text-2xl font-semibold m-4">
               Brilla con tus logros
            </h2>
            <p className="text-justify p-12">
               Descubre una amplia gama de ejercicios diseñados para estimular
               tu mente y mantener tu cuerpo en movimiento. Completa desafíos,
               gana estrellas y destácate entre los demás mientras trabajas en
               tu bienestar integral.
            </p>
            <MostrarEventos />
         </div>
      </>
   );
}
