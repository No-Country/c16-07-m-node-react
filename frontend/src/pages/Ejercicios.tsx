export default function Ejercicios() {
  return (
    <section className="w-full h-fit relative">     
      <div className="absolute overflow-hidden w-full h-3/4 bottom-0 bg-gradient-to-t from-sky-300 opacity-40">        
      </div>
      <div className="container mx-auto px-4 py-8 max-w-screen-xl relative">
        <h2 className="text-2xl font-bold mt-3 pb-2">EJERCICIOS</h2>   
        <div className="flex flex-wrap">
          <p className="text-xl my-6 font-semibold pe-4 md:w-1/2 md:my-auto ">Al igual que el ejercicio físico, que fortalece el cuerpo, los ejercicios cerebrales ayudan a mantener ágil y saludable la mente. Estos ejercicios estimulan diversas áreas del cerebro, lo que puede mejorar la memoria, la concentración y la capacidad de resolución de problemas.         
          </p>
          <img src="https://cdn-khplf.nitrocdn.com/OmdgVHdEXVHvElCYusahWMtymWaywmqA/assets/images/source/rev-c64cc8a/aviv-clinics.com/wp-content/uploads/2023/02/brain-games2.jpg" className="md:w-1/2" />         
        </div>
        <h2 className="text-2xl font-bold mt-8 pb-2">Para todos</h2>   
        <p className="text-xl my-4 font-semibold pe-4 md:my-auto ">Te invitamos a que pruebes algunos de los siguientes ejercicios, son libres y gratuitos.
        </p>
          <div className="flex flex-wrap justify-center my-10">
        
            <div className="card w-64 md:w-80 bg-base-100 shadow-xl m-4 text-sky-900">
              <a href="https://www.juegosdememoriagratis.com/" target="_blank">
                <img src="https://www.kiddy123.com/custom/domain_1/image_files/sitemgr_photo_46824.jpg" className="rounded-xl h-60 object-cover" />
                <div className="card-body items-center text-center">
                  <h2 className="card-title font-bold">Memoria</h2>
                  <p className="font-semibold">Pon a prueba tu memoria con estos juegos
                  </p>                
                </div>
              </a>
            </div>

            <div className="card w-64 md:w-80 bg-base-100 shadow-xl m-4 text-sky-900">
              <a href="https://solitarios-online.com/" target="_blank">
                <img src="https://www.laweekly.com/wp-content/uploads/2023/10/Screenshot-2023-10-18-at-3.27.47%E2%80%AFPM.jpg" className="rounded-xl h-60 object-cover" />
                <div className="card-body items-center text-center">
                  <h2 className="card-title font-bold">Solitario</h2>
                  <p className="font-semibold">El clásico juego de cartas "Solitario"
                  </p>                
                </div>
                </a>
            </div>

            <div className="card w-64 md:w-80 bg-base-100 shadow-xl m-4 text-sky-900">
              <a href="https://www.jspuzzles.com/indexes.php" target="_blank">
                <img src="https://images.ecestaticos.com/VfYIE4xp2bnAOoWOHrkkPF2cMS8=/0x0:1000x750/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F541%2Fa86%2Fcf2%2F541a86cf21b407325614ca146e278c3c.jpg" className="rounded-xl h-60 object-cover" />
                <div className="card-body items-center text-center">
                  <h2 className="card-title font-bold">Rompecabezas</h2>
                  <p className="font-semibold">Con dificultad e imágenes variadas
                  </p>                
                </div>
                </a>
            </div>

            <div className="card w-64 md:w-80 bg-base-100 shadow-xl m-4 text-sky-900">
              <a href="https://www.chess.com/es/play/computer" target="_blank">
                <img src="https://misutmeeple.com/wp-content/uploads/2022/06/ajedrez_detalle_rey_dama.jpg" className="rounded-xl h-60 object-cover" />
                <div className="card-body items-center text-center">
                  <h2 className="card-title font-bold">Ajedrez</h2>
                  <p className="font-semibold">Si te gusta la estrategia, este es el juego ideal
                  </p>                
                </div>
                </a>
            </div>

            <div className="card w-64 md:w-80 bg-base-100 shadow-xl m-4 text-sky-900">
              <a href="https://www.epasatiempos.es/crucigramas.php" target="_blank">
                <img src="https://www.lavanguardia.com/andro4all/hero/2020/10/resolver-crucigramas.jpg?width=1200" className="rounded-xl h-60 object-cover" />
                <div className="card-body items-center text-center">
                  <h2 className="card-title font-bold">Crucigramas</h2>
                  <p className="font-semibold">Recurre a tus conocimientos y entrenar la mente al mismo tiempo
                  </p>                
                </div>
              </a>
            </div>

            <div className="card w-64 md:w-80 bg-base-100 shadow-xl m-4 text-sky-900">
              <a href="https://www.minidamas.com/" target="_blank">
                <img src="https://s1.eestatic.com/2023/11/02/actualidad/806679907_237293837_1200x630.jpg" className="rounded-xl h-60 object-cover" />
                <div className="card-body items-center text-center">
                  <h2 className="card-title font-bold">Damas</h2>
                  <p className="font-semibold">El clásico juego de mesa te espera para empezar una partida
                  </p>                
                </div>
                </a>
            </div>

          </div>
      </div>
    </section>
  );
}
