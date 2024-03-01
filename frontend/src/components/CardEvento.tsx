interface CardEventoProps {
   evento: eventoD;
}
export default function CardEvento(props: CardEventoProps) {
   return (
      <>
         <div className="card min-w-64 max-w-96 bg-base-100 shadow-xl m-4">
            <img
               src={props.evento.foto}
               className="rounded-xl h-60 object-cover"
            />
            <div className="card-body items-center text-center">
               <h2 className="card-title">{props.evento.nombre} </h2>
               <p>{props.evento.resumen} </p>
            </div>
         </div>
      </>
   );
}
export interface eventoD {
   id: number;
   nombre: string;
   foto: string;
   resumen: string;
   fecha: Date;
}
