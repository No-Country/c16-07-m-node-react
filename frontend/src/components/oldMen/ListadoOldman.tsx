import { oldManD } from "./oldMen.model";

interface ListadoOldManProps {
   oldman: oldManD;
}

export default function ListadoOldMan(props: ListadoOldManProps) {
   return (
      <>
         <div className="relative w-72 mt-10 mx-5 rounded-lg">
            <img
               src={props.oldman.foto}
               alt="Foto"
               className="w-full sm:w-30 sm:h-40 md:h-40 rounded-lg"
            />

            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-4 md:max-w-full relative">
               <ul className="list-none flex-col space-y-1 z-10 ">
                  <li className="name">
                     <a className="font-coriss-ambady  flex items-center justify-center  ">
                        {props.oldman.nombre}
                     </a>
                  </li>
                  <li className="flex items-center justify-center">
                     <a style={{ color: "#0369A1" }}>
                        {props.oldman.profesion}
                     </a>
                  </li>
               </ul>

               <div
                  className="absolute bottom-0 left-0 z-0"
                  style={{
                     backgroundColor: "#13C2961C",
                     width: "10vw",
                     height: "5vh",
                     borderRadius: "0 2rem 0 0",
                  }}
               ></div>
            </div>
         </div>
      </>
   );
}
