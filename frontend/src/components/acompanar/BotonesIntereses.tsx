import React from "react";
interface BotonesInteresesProps {
   boton: botonI;
}
export default function BotonesIntereses(props: BotonesInteresesProps) {
   return (
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-2">
         {props.boton.nombre}
      </button>
   );
}
export interface botonI {
   id: number;
   nombre: string;
}
