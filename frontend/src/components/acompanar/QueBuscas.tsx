import React from "react";

export default function QueBuscas() {
   const backgroundImage =
      "https://s3-alpha-sig.figma.com/img/7153/708b/f4cd967b3cc850dfe9309251844f682a?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JbhwuU8UfPieV8x58wpMtS8M4iz77DvjYHR-XXEBKLrzb2LKbu3Mfuq3BFYFQ6hH30PHeCdu7XzRC60Q7waYduCJYd~iqtRJyRnF9f-USkwQR-yzfxhQCL7ufm2zJxOpu7I0huCvqyoc3EN44LQ7OcqRVftaF5oyr1y7E5p41Tvr41-cV6AgKBtX5lwbqinbV2gVsfBBrNA6xKsM5iqn4zKft4-jDJR-CWcp4fYwIC1dHDhJ-p2KGRg93G7qt4R27C1PZfsf64LagsQLdxeZjtZDiSVRCzvXZ4u8HSq2cSlS~s8EDAbcjevsUR4x4yTpY64c5jKUw4BRTz3bQAWA8g__";
   return (
      <>
         <div className=" relative mt-16  mr-20 ml-20 lg:mt-6">
            <div className="flex">
               <div className="w-1/2 ">
                  <img
                     className=" left-0 top-0 w-full h-50 max-w-none rounded-md bg-white/5 ring-1 ring-white/10 "
                     src={backgroundImage}
                     width="100%"
                     height="770px"
                  />
               </div>
               <div className="w-1/2 flex justify-center mt-10">
                  <div>
                     <div className=" m-auto text-center mr-20 ml-20">
                        <h2 className="text-2xl font-semibold m-4">
                           ¿Qué estas buscando?
                        </h2>
                        <p className="text-justify  p-2">
                           Es esta sección podras encontrar nuevas amistades,
                           compartir intereses y disfrutar de momentos
                           significativos en compañía.
                        </p>
                        <div className="flex flex-col space-y-4">
                           <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                              ¡Haz clic aquí!
                           </button>
                           <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                              ¡Otro botón!
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
