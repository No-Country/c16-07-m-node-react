import React, { useEffect, useState } from "react";
import axios from "axios";

interface InteresesProps {
   onInterestSelect: (selectedInterest: string) => void;
}
export default function Intereses({ onInterestSelect }: InteresesProps) {
   const [intereses, setIntereses] = useState<string[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchIntereses = async () => {
         try {
            const response = await axios.get(
               "https://c16-07-m-node-react.onrender.com/interests"
            ); // Cambia la URL según tu API
            setIntereses(
               response.data.map((interes: { name: string }) => interes.name)
            );
            setLoading(false);
         } catch (error) {
            console.error("Error al obtener datos de intereses:", error);
            setError("¡Algo salió mal!");
            setLoading(false);
         }
      };
      fetchIntereses();
   }, []);

   if (loading) {
      return <p>Cargando...</p>;
   }

   if (error) {
      return <p>{error}</p>;
   }

   return (
      <div>
         <div className="relative flex w-full  flex-col rounded-xl  bg-clip-border text-gray-700">
            <nav className="grid grid-cols-6 gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
               {intereses.map((interes) => (
                  <div
                     key={interes}
                     role="button"
                     className="flex items-center mr-5 hover:bg-white w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                  >
                     <label
                        className="flex items-center w-full px-3 py-2 cursor-pointer"
                        htmlFor={`horizontal-list-${interes}`}
                     >
                        <div className="grid mr-3 place-items-center">
                           <div className="inline-flex items-center">
                              <label
                                 className="relative flex items-center p-0 rounded-full cursor-pointer"
                                 htmlFor={`horizontal-list-${interes}`}
                              >
                                 <input
                                    id={`horizontal-list-${interes}`}
                                    type="checkbox"
                                    onChange={(e) =>
                                       onInterestSelect(e.target.value)
                                    }
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                                 />
                                 <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    {/* Puedes reemplazar este SVG con tu propio ícono */}
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       className="h-3.5 w-3.5"
                                       viewBox="0 0 20 20"
                                       fill="currentColor"
                                       stroke="currentColor"
                                       strokeWidth="1"
                                    >
                                       <path
                                          fillRule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clipRule="evenodd"
                                       ></path>
                                    </svg>
                                 </span>
                              </label>
                           </div>
                        </div>
                        <p>{interes}</p>
                     </label>
                  </div>
               ))}
            </nav>
         </div>
      </div>
   );
}
