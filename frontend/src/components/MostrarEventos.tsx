import React from "react";
import CardEvento, { eventoD } from "./CardEvento";

export default function MostrarEventos() {
   const eventos: eventoD[] = [
      {
         id: 1,
         nombre: "Charla de bienestar",
         foto: "https://s3-alpha-sig.figma.com/img/d03a/2bab/2ae33439cfe1c3f5ba8c0226b2a3680f?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HOS~qlf77YK0o3VSZQ5nu6fqbTIPWvBR1uluenGsaS7kGtjqeLYj~73E3f7p-U5YChP9sLfAbARXvWnDupGY8mHSBW3TC89IVHuS2od63e35qXsfWu1J9ncv5oaPvf5GSCdS~I8vSwRjBt10X3xhHihgy~BtIXx9EoU5D7EI4wwKBETD0IMbg~5xgv7Dmb-OuI3hBbpEWUjG7prnQK9eec6ffNOMeaevZ-umbfAyxrHv8NsCDz9ldHII-FwHUgY~motnCcly4q3iFW71zE3GsJ4tk9b6yEwisXVB3BUu2WTWtVo19IQGjDcv9brwXmwjTtppdAvGWQqf7VEckLYECg__",
         resumen:
            "Únete a nuestra charla sobre bienestar emocional y aprende técnicas para manejar el estrés y cultivar la tranquilidad en tu vida diaria. ¡Descubre cómo cuidar tu mente y tu corazón en comunidad!",
         fecha: new Date(2024, 4, 24),
      },
      {
         id: 2,
         nombre: "Paseo por el Parque",
         foto: "https://s3-alpha-sig.figma.com/img/a14d/9865/e1caa8c8fc642c26a55a4bb793f67182?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HK5XKIcNkeRUcOBOYNzSvC9xIEbtpV4NEiVNGNHj-3k~7FC-HLIZNb1RTiDj-8fKi4EaoMeho9Wt-p2SvQ4dlry8KOys9Bj3KivFtVkTTlh5NY4Y~pzhCb0n5Jb7cI0NA5jgP2rn1sPr114CLDOeQyGZbOof3Wx7wqkRgi~RoyB8waV22xkZNOfVYbT51Em9NCD5qObS1mMeGLNS5e6je22-~ybKvL8gMPSFR2HFeDcok~ZWdCaNPaFos8UgPDVrGCNr4ON7Iq5gVTv00LFg3ZRLYFrc8YGA~wxaGb9NzG2PqvQ0zoYgIDPzlmXdMrRMtahq3tB~R0CzhQDrQXoTSg__",
         resumen:
            "Respira aire fresco, haz ejercicio suave y comparte conversaciones en un entorno natural y acogedor. ¡Una oportunidad perfecta para conectar con la naturaleza y con tus compañeros!",
         fecha: new Date(2024, 3, 13),
      },
      {
         id: 3,
         nombre: "Tarde de Juegos de Mesa",
         foto: "https://s3-alpha-sig.figma.com/img/87a1/d0e5/52203f52bcd72fca76e0de095f8166ec?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H-~A~3jRW07qztdPF9ZF71OZ36k0SWsaHWOcRQQpL7mUJmYbXsFx6Z~yOmuGCtySejlg~Vz~tPK1lYkSZuqGBQUBoEuhEwwwCx~sn3Kiv8dnI89b7IjQghTSfhz4QCO-NgxZup6XFNlkWwEK-gEWROCFvprUbU4LcjSARa5ieJ~LpYPfSiMJPJ2Mva6pUa99mNqkHtlLlBZqzLHH3DZBT3FKSy4fCe2dRpyOPA0wrXHPpswf4MXgsJ3gyHMXXRSg9Sbr7JFgYAnX~utKkenXUiauFPV7aRqDAljI9yEsZInllt2T4V5SrPxTbv9LAgWQwLlG~n1qwu~YzRD3i0l2gg__",
         resumen:
            " Únete a nuestra tarde de juegos de mesa y diviértete en buena compañía. Desde clásicos como ajedrez y dominó hasta juegos de cartas y estrategia, hay algo para todos. ¡Ven y disfruta de una tarde llena de diversión, risas y amistad!",
         fecha: new Date(2024, 5, 25),
      },
   ];

   return (
      <>
         <div className="flex items-center justify-center mb-2 ">
            {eventos.map((evento) => (
               <CardEvento evento={evento} key={evento.id} />
            ))}
         </div>
      </>
   );
}
