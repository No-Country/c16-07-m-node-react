import React from "react";
import MostrarOldman from "../oldMen/MostrarOldman";
export default function CompañiaConeccion() {
   const backgroundImage =
      "https://s3-alpha-sig.figma.com/img/d4f2/7a73/64a09625eb4f6795c6c532d6dfd634d6?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p~po9yjgfLsnBzZfYiskfa0Q5a27JJsLVe5YRvovTKp5-Qx2qhawtalIHonAYNxabzPjUE168VnQyuppD33ZioKwR8m8YwXwTKyOFeMGZKtj0FtDHC3BuEIQH9oCBkcS2lKGGSurGVt24VawIksDwDK33tohD9tfhWSO0SAcvTdJOzCcKF33DBL3D2CTDq2WItPANv1j~LU9chLIYe0UJf69Zl8SC4z5f4nh-P4qmtI~KSwLADYYlDOdMUVzJLPDSqJGwk~ky0T8o-uoG3J2jZaeNDTCdfQ~4rpjGomJ4ZMQXy0kaHnr57lG9j0Y8DhOjHsps8dkyQgtrDus~D41Jg__";

   return (
      <>
         <div className=" relative mt-16  mr-20 ml-20 lg:mt-6">
            <img
               className=" left-0 top-0 w-full h-50 max-w-none rounded-md bg-white/5 ring-1 ring-white/10 "
               src={backgroundImage}
               width="100%"
               height="770px"
            />
            <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center ">
               <div className="w-full  bg-[#0C4A6EF2] rounded-lg text-center px-2 mr-10 ml-10  ">
                  <h1 className="text-4xl text-white font-bold title-font mb-4">
                     Compañía y Conexión
                  </h1>
                  <p className="text-lg font-semibold text-white ">
                     Encuentra nuevas amistades, comparte intereses y disfruta
                     de momentos significativos en compañía. En Acompañar, te
                     ofrecemos un espacio para conectar con personas afines,
                     donde cada interacción es una oportunidad para enriquecer
                     tu vida social y emocional.
                  </p>
                  <MostrarOldman />
               </div>
            </div>
         </div>
      </>
   );
}

//    const divStyle: React.CSSProperties = {
//       backgroundImage: `url(${backgroundImage})`,
//       backgroundSize: "cover", // Ajusta según tus necesidades
//       width: "100%",
//       height: "770px", // Ajusta la altura según tus necesidades
//    };
//    <div className=" " style={divStyle}>
//             {/* Contenido dentro del div */}
//             <h1 className="text-white">Mi contenido</h1>
//          </div>

{
   /* <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">
                     Pay once, own it forever
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                     <span className="text-5xl font-bold tracking-tight text-gray-900">
                        $349
                     </span>
                     <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                        USD
                     </span>
                  </p> 
               </div>*/
}
{
   /* <a
href="#"
className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>
Get access
</a>
<p className="mt-6 text-xs leading-5 text-gray-600">
Invoices and receipts available for easy company
reimbursement
</p> */
}
