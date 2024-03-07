import axios from "axios";
import React, { useState, useEffect } from "react";

interface SeleccionarCiudadProps {
   onCitySelect: (selectedCity: string) => void;
}

export function SeleccionarCiudad({ onCitySelect }: SeleccionarCiudadProps) {
   const [ciudades, setCiudades] = useState<string[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchCountries = async () => {
         try {
            const response = await axios.get(
               "https://c16-07-m-node-react.onrender.com/users"
            );
            setLoading(false);
            const nombresCiudades = response.data.map(
               (user: { country: string }) => {
                  return user.country ? user.country.toLowerCase() : "";
               }
            );
            const ciudadesUnicas: string[] = Array.from(
               new Set(nombresCiudades)
            );
            const ciudadesOrdenadas = ciudadesUnicas.sort();
            setCiudades(ciudadesOrdenadas);
         } catch (error) {
            console.error("Error al obtener datos de usuarios:", error);
            setError("¡Algo salió mal!");
            setLoading(false);
         }
      };
      fetchCountries();
   }, []);

   const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedCity = e.target.value;
      onCitySelect(selectedCity);
   };

   if (loading) {
      return <p>Cargando...</p>;
   }

   if (error) {
      return <p>{error}</p>;
   }

   return (
      <select
         id="countries"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         onChange={handleCityChange}
      >
         <option value="">-- Selecciona una ciudad --</option>
         {ciudades.map((ciudad) => (
            <option key={ciudad} value={ciudad}>
               {ciudad}
            </option>
         ))}
      </select>
   );
}
