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
               className="w-full rounded-lg"
            />

            <div className="absolute bottom-[1rem] left-2 right-2 bg-white p-4 text-black rounded-lg text-center">
               <ul className="menu">
                  <li className="name ">
                     <a className=" font-coriss-ambady">
                        {props.oldman.nombre}{" "}
                     </a>
                  </li>
                  <li className="profecion">
                     <a style={{ color: "#0369A1" }}>
                        {props.oldman.profesion}{" "}
                     </a>
                  </li>
               </ul>
               <div
                  className="absolute top-0 right-0 w-3 h-3 bg-white rounded-bl-lg"
                  style={{
                     backgroundImage:
                        "radial-gradient(circle, #F59E0B 1px, transparent 1px)",
                     backgroundSize: "10px 10px",
                  }}
               ></div>

               <div
                  style={{
                     backgroundColor: "#13C2961C", // Color de fondo del círculo
                     width: "3rem", // Ancho del círculo (puedes ajustarlo según tus necesidades)
                     height: "2rem", // Altura del círculo
                     borderRadius: "0 2rem 0 0", // Redondeo de la esquina inferior izquierda
                     position: "absolute",
                     bottom: 0, // Alineación en la esquina inferior
                     left: 0,
                     // Alineación en la esquina izquierda
                  }}
               ></div>
            </div>
         </div>
      </>
   );
}
