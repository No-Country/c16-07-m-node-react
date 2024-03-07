import React, { useState, useEffect } from "react";
import CardAcomp, { acompD } from "../CardAcomp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

interface MostrarAcompaProps {
   ciudadSeleccionada: string;
   interesesSeleccionados: string[];
}

export function MostrarAcompa({
   ciudadSeleccionada,
   interesesSeleccionados,
}: MostrarAcompaProps) {
   var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
   };

   interface User {
      adultos: acompD[];
   }

   const [users, setUsers] = useState<User>({ adultos: [] });
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchUsers = async () => {
         try {
            const response = await axios.get(
               "https://c16-07-m-node-react.onrender.com/users"
            ); // Cambia la URL según tu API
            setUsers({ adultos: response.data });
            setLoading(false);
         } catch (error) {
            console.error("Error al obtener datos de usuarios:", error);
            setError("¡Algo salió mal!");
            setLoading(false);
         }
      };
      fetchUsers();
   }, []);

   if (loading) {
      return <p>Cargando...</p>;
   }

   if (error) {
      return <p>{error}</p>;
   }

   let usuariosFiltrados = users.adultos;

   if (ciudadSeleccionada || interesesSeleccionados.length > 0) {
      usuariosFiltrados = users.adultos.filter(
         (usuario) =>
            usuario.country === ciudadSeleccionada ||
            usuario.interests.some((interes) =>
               interesesSeleccionados.includes(interes)
            )
      );
   }
   console.log("Usuarios filtrados:", usuariosFiltrados);
   return (
      <>
         <div>
            <Slider {...settings}>
               {usuariosFiltrados.map((evento) => (
                  <CardAcomp evento={evento} key={evento.id} />
               ))}
            </Slider>
         </div>
      </>
   );
}

// const adultos: acompD[] = [
//    {
//       id: 1,
//       nombre: "Alicia Lopez",
//       foto: "https://s3-alpha-sig.figma.com/img/4bea/6217/0966294dcb0fd1ae4c52e854e178f467?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gIKNS30TPrIAz5RzmOe~UHg1~SCg4-3gAqOCRl6GTV6dNXKsIlr33SKK7~ajnWy5pYDCl0W7qVPlI8QWHKmi6m44XbRlOAcHrbmwTy18AfB63HDvmMIaPqOgoy2O3TjFsUQ7GSS2CnOvqLKNOYJ9KUigU2pwO07M4PbWGce5W4oYNZVUSGbp3dfplpB2qq33sOygbEmvHLgC-HKt1TxiDhExd2Tcppf1QnvU8v9h~W49JjGvo7Rn~iKH0ifSb~yOjn5KMXpCwlplM6UCW-h1XfIR5fYKqhWx-7cMrAF1mSGS-qqCGes61VDUH~6fde7em0iZbLr2PAVbIbslMt4F2A__",
//       ciudad: "Bogota",
//       edad: 70,
//    },
//    {
//       id: 2,
//       nombre: "Oscar Mhür",
//       foto: "https://s3-alpha-sig.figma.com/img/0165/580f/75362753bce825f5d157cebd3077fe2f?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A4hgUhDNky5XoV2Bbq635T8aOc9GSHr0irzFdRFZJYxnj373PVZ0EHXRCJzBxhm-MQGywOaIN-vqqV3hmS-2ZIqKqr1OGSZsB9qrEeu-yz5tAt9aa4wT5J-AzIpRfXtpNmj9CdZcyhR8N6T8qycosh3icoK0OWnxLs8YTclaxBbObXFFpmoVZ1-lTEt-dDRVPyOihZk1SFm4xw4YgSbZN3FJYkGGEEW7YvnAnYV6rofsfIxyGCGd00IBdsxO-XXjAYc52OoHt4nc6CSfidJ8RdvmZDvrNa8dNZoror4-fJMSXCfECbLQ2FZ91~UVa-MQumWF4iSXWG6eZc5T0nePIQ__",
//       ciudad: "Cordoba",
//       edad: 65,
//    },
//    {
//       id: 3,
//       nombre: "Juan Gomez",
//       foto: "https://s3-alpha-sig.figma.com/img/b6e1/9040/7879a669ccd4daad726f3c9b49f3d023?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OZR8uf9T-tzvTaracdYO8pzh1YK3LcgbyQCTMkbd2hMGMEazGy5uta2MAdZqm0KXC8Cia33KEddeaHB80GR6MnDMZ5S1Rc3h1fCDVI-05rdUm4z7qbtXVYJ6v7Gotm3dXwY4kksQvVlfBnWvx2cK0NU6r5sHww03yHB7zQf-Y619onqOwTpFI-j3Awc1HeZedBaRIRI2vzLH4HstvbJLpmeM40VPW1HNqXzyQrxz~rF353dYUX2qDeD6NRplsJt0XRfAXWm7gwF-Sm5six8njU9cGlY88jfcUOi2ZrmE49Bq8r-86bSkYMU2xa8457itaoHlqUKKY15bXgqKRMHlDg__",
//       ciudad: "Maracay",
//       edad: 80,
//    },
//
