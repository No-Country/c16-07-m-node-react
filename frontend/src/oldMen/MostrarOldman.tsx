import { useState } from "react";
import ListadoOldMan from "./ListadoOldman";
import { oldManDTO } from "./oldMen.model";

export default function MostrarOldman() {
   const [oldmen, setGeneros] = useState<oldManDTO[]>([]);
   return (
      <>
         <h3> Mostrar </h3>
         <ListadoOldMan oldmen={oldmen} />
      </>
   );
}
