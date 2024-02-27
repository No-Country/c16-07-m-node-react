export default function Ayuda() {
  return (
    <section className="flex flex-col items-center bg-white">
      <div className="absolute overflow-hidden w-full h-3/4 bottom-[0] bg-gradient-to-t from-sky-500 opacity-40">        
      </div>
      <h1 className="text-sky-500 font-semibold my-10">FAQ</h1>
      <h2 className="text-black text-center font-bold text-2xl mb-5">
        ¿Tienes dudas? Tenemos respuestas.
      </h2>
      <p className="text-gray-800 px-10 text-center mb-10">Puedes revisar nuestras preguntas frecuentes o ponerte en contacto con nosotros para resolver tus inquietudes.        
      </p>

      <div className="space-y-5 px-10 md:flex md:flex-wrap md:justify-center md:space-y-0">
        <div className="md:w-1/2 md:min-h-56 md:p-2 ">
          <div className="collapse collapse-arrow bg-white md:">
            <input type="radio" name="accordion" defaultChecked />
            <div className="collapse-title text-lg font-medium text-sky-800">
              ¿La aplicación tiene algún costo?
            </div>
            <div className="collapse-content text-gray-600">
              <p>El servicio de <b>Acompañar+</b> es completamente gratuito y de libre uso.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:min-h-56 md:p-2 ">
          <div className="collapse collapse-arrow bg-white md:">
            <input type="radio" name="accordion" defaultChecked />
            <div className="collapse-title text-lg font-medium text-sky-800">
              ¿La aplicación tiene algún costo?
            </div>
            <div className="collapse-content text-gray-600">
              <p>El servicio de <b>Acompañar+</b> es completamente gratuito y de libre uso.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:min-h-56 md:p-2 ">
          <div className="collapse collapse-arrow bg-white md:">
            <input type="radio" name="accordion" defaultChecked />
            <div className="collapse-title text-lg font-medium text-sky-800">
              ¿La aplicación tiene algún costo?
            </div>
            <div className="collapse-content text-gray-600">
              <p>El servicio de <b>Acompañar+</b> es completamente gratuito y de libre uso.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:min-h-56 md:p-2 ">
          <div className="collapse collapse-arrow bg-white md:">
            <input type="radio" name="accordion" defaultChecked />
            <div className="collapse-title text-lg font-medium text-sky-800">
              ¿La aplicación tiene algún costo?
            </div>
            <div className="collapse-content text-gray-600">
              <p>El servicio de <b>Acompañar+</b> es completamente gratuito y de libre uso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
