import { oldManD } from "./oldMen/oldMen.model";

interface CardHomeProps {
   oldman: oldManD;
}
export default function CardHome(props: CardHomeProps) {
   return (
      <>
         <article className="w-72 bg-neutral rounded-xl shadow-xl m-2">
            <div className="h-32 grid place-items-center">
               <div className="border-2 border-stone-800 p-1.5 rounded-full">
                  <div className="relative h-20 w-20 rounded-full overflow-hidden">
                     <img
                        className="absolute w-full h-full top-0 left-0 object-cover"
                        src={props.oldman.foto}
                     />
                  </div>
               </div>
            </div>
            <div className="text-white text-center bg-neutral p-5 rounded-xl">
               <p className="text-2xl font-semibold">{props.oldman.nombre}</p>
               <label className="text-xs text-stone-400 mb-2">
                  {props.oldman.profesion}
               </label>
            </div>
         </article>
      </>
   );
}
