export default function Ayuda() {
  return (
    
    <section className="flex flex-col items-center bg-white ">
      <div className="w-full h-0.5 bg-sky-100"></div>
      <div className="absolute overflow-hidden w-full h-3/4 bottom-[0] bg-gradient-to-t from-sky-500 opacity-40">        
      </div>
      <h1 className="text-sky-500 font-semibold my-10">PREGUNTAS FRECUENTES</h1>
      <h2 className="text-black text-center font-bold text-2xl mb-5">
        ¿Tienes preguntas?
      </h2>
      <p className="text-gray-800 px-10 text-center text-sky-800 mb-10 max-w-xl">Te mostramos algunas preguntas que nos suelen hacer y los medios de contacto por si no las podemos responder en esta sección.
      </p>
      <div className="space-y-5 px-10 md:flex md:flex-wrap md:justify-center md:space-y-0">
        <div className="md:w-1/2 md:min-h-56 md:p-2 ">
          <div className="collapse collapse-arrow bg-white md:">
            <input type="radio" name="accordion" defaultChecked />
            <div className="collapse-title text-lg font-medium text-black">
              ¿Cómo hago para publicar mi evento?
            </div>
            <div className="collapse-content text-sky-800">
              <p>Si eres organizador de algún evento o actividad en tu comunidad puedes mandarnos un correo a eventos@amas.com y ahí registramos tu solicitud y te damos respuesta.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:min-h-56 md:p-2 ">
          <div className="collapse collapse-arrow bg-white md:">
            <input type="radio" name="accordion" defaultChecked />
            <div className="collapse-title text-lg font-medium text-black">
              ¿Puedo hacer que otros tengan la misma aplicación?
            </div>
            <div className="collapse-content text-sky-800">
              <p>¡Claro! Tan solo dile a todos tus amigos y conocidos que pueden buscar la aplicación en su computador o celular y allí la podrán descargar.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:min-h-56 md:p-2 ">
          <div className="collapse collapse-arrow bg-white md:">
            <input type="radio" name="accordion" defaultChecked />
            <div className="collapse-title text-lg font-medium text-black">
              ¿Tengo que pagar para utilizar Acompañar+?
            </div>
            <div className="collapse-content text-sky-800">
              <p>La aplicación es gratuita para todos los que quieran ver la información disponible en la misma. 
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:min-h-56 md:p-2 ">
          <div className="collapse collapse-arrow bg-white md:">
            <input type="radio" name="accordion" defaultChecked />
            <div className="collapse-title text-lg font-medium text-black">
              Hay cosas que no puedo hacer o no encuentro, ¿Puedo recibir ayuda?
            </div>
            <div className="collapse-content text-sky-800">
              <p>¡Por supuesto!, puedes enviar un correo a ayuda@amas.com consultándonos lo que quieras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
