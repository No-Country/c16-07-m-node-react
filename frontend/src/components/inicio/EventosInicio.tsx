import React from "react";
import MostrarEventos from "../MostrarEventos";

export default function EventosInicio() {
   return (
      <>
         <div className=" m-auto text-center mr-20 ml-20">
            <h2 className="text-2xl font-semibold m-4">
               Eventos recién agregados
            </h2>
            <p className="text-justify  p-2">
               {" "}
               Descubre las últimas actividades y eventos locales agregados a
               nuestra plataforma. Desde charlas educativas hasta reuniones
               sociales, explora nuevas oportunidades para participar, aprender
               y conectar con tu comunidad en Acompañar+. Siempre hay algo
               emocionante por descubrir.
            </p>
            <MostrarEventos />
         </div>
      </>
   );
}
