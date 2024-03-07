import React from "react";
import CalcularEdad from "./acompanar/CalcularEdad";
interface CardAcompProps {
   evento: acompD;
}
export default function CardAcomp(props: CardAcompProps) {
   return (
      <>
         <div className="card w-96 bg-base-100 shadow-xl m-4">
            <figure className="px-10 pt-10">
               <img
                  src={props.evento.imageUrl}
                  alt="Foto"
                  className="rounded-xl"
               />
            </figure>
            <div className="card-body items-center text-center">
               <h2 className="card-title">
                  {props.evento.firstName} {props.evento.lastName}
               </h2>
               <p>{CalcularEdad(props.evento.birthdate)} </p>
               <p>{props.evento.country} </p>
               <div className="card-actions">
                  <button className="btn btn-primary">Ver perfil</button>
               </div>
            </div>
         </div>
      </>
   );
}
export interface acompD {
   id: number;
   lastName: string;
   firstName: string;
   birthdate: string;
   country: string;
   imageUrl: string;
   interests: [];
}
