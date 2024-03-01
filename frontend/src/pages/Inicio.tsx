// para subir cambios
// git add .

import CompañiaConeccion from "../components/inicio/CompañiaConexion";
import EventosInicio from "../components/inicio/EventosInicio";
import JuegosInicio from "../components/inicio/JuegosInicio";

// git commit -m "comentario"

// git push
export default function Inicio() {
   return (
      <>
         <section className=" flex justify-center flex-col w-full h-fit py-0">
            <CompañiaConeccion />
         </section>
         <section className=" flex justify-center flex-col w-full h-fit py-0">
            <EventosInicio />
         </section>
         <section className=" flex justify-center flex-col w-full h-fit py-0">
            <JuegosInicio />
         </section>
      </>
   );
}
