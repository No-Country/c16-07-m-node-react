import React, { useState, useEffect } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface User {
   id: number;
   lastName: string;
   firstName: string;
   birthdate: string;
   country: string;
   imageUrl: string;
   // Agrega más propiedades según la estructura de tus datos de usuario
}

export default function Pruev() {
   const [users, setUsers] = useState<User[]>([]);
   const [ciudades, setCiudades] = useState<string[]>([]); // Nuevo estado para las ciudades
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null); // Nuevo estado para las ciudades

   useEffect(() => {
      const fetchUsers = async () => {
         try {
            const response = await axios.get(
               "https://c16-07-m-node-react.onrender.com/users"
            ); // Cambia la URL según tu API
            setUsers(response.data);
            setLoading(false);
            const nombresCiudades = response.data.map(
               (user: User) => user.country
            );
            setCiudades(nombresCiudades);
         } catch (error) {
            console.error("Error al obtener datos de usuarios:", error);
            setError("¡Algo salió mal!");
            setLoading(false);
         }
      };

      fetchUsers();
   }, []);
   console.log(users);
   if (loading) {
      return <p>Cargando...</p>;
   }

   if (error) {
      return <p>{error}</p>;
   }

   const calculateAge = (birthdate: string): string => {
      const today = new Date();
      const birthDate = new Date(birthdate);
      const ageInMilliseconds = today.getTime() - birthDate.getTime();
      const ageDate = new Date(ageInMilliseconds);

      const years = ageDate.getUTCFullYear() - 1970;
      //const months = ageDate.getUTCMonth();
      //const days = ageDate.getUTCDate();

      return `${years} años,`;
   };
   console.log("Ciudades:", ciudades);
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
   };
   return (
      <div>
         <Slider {...settings}>
            {users.map((user) => (
               <div key={user.id}>
                  <p>
                     {user.firstName} {user.lastName}{" "}
                  </p>
                  <p>Edad: {calculateAge(user.birthdate)}</p>
                  <img src={user.imageUrl} alt={user.firstName} />
               </div>
            ))}
         </Slider>
         <ul>
            {ciudades.map((ciudad) => (
               <li key={ciudad}>{ciudad}</li>
            ))}
         </ul>
      </div>
   );
}
