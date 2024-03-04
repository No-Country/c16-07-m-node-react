import React from 'react';

const EventosPage = () => {
  const eventos = [
    {
      title: 'Tango para principiantes',
      date: '23 de Marzo',
      location: 'Espacio Creativo',
      image: 'https://rb.gy/f7e8xe'
    },
    {
      title: 'Taller de costura',
      date: '30 de Marzo',
      location: 'Espacio Creativo',
      image:'https://rb.gy/o5dolv'
    },
    {
      title: 'Música en la plaza',
      date: '01 de Abril',
      location: 'Plaza Principal',
      image:'https://rb.gy/luvr4o'
    },
    {
      title: 'Movilidad y elongación',
      date: '23 de Marzo',
      location: 'Espacio Creativo',
      image:'https://rb.gy/s2kj21'
    },
    {
      title: 'Yoga para principiantes', 
      date: '01 de Abril',
      location: 'Espacio Creativo',
      image:'https://rb.gy/ixlm6u'
    },
    {
      title: 'Ejercita tu memoria',
      date: '23 de Mayo',
      location: 'Plaza Principal' ,
      image:'https://colisee.es/wp-content/uploads/2022/04/ejercicios-divertidos-para-entrenar-la-memoria-en-el-adulto-mayor.jpeg'
    }
  ];
  
 // Supongamos que 'eventoInteres' es el evento de tu interés que quieres renderizar.
 const eventoInteres = eventos.find(evento => evento.title === 'Tango para principiantes');

 return (
  
  <div className="bg-gradient-to-b from-sky-600/50 to-sky-300">
    
    <div className="bg-sky-900 text-white font-semibold p-4 rounded-md">
  <div className="overflow-hidden">
    <span className="float-left">eventos</span>
  </div>
</div>
     
  <div className="flex items-center py-8 mb-8 "> 
  <div className="flex items-center justify-center w-full">
    <div className="w-full max-w-sm"> {/* Aumentado el ancho máximo */}
      <input type="text" placeholder="Escribe aquí lo que quieras buscar" className="border border-gray-300  rounded py-2 px-3 w-full" /> {/* Reducido el padding horizontal */}
    </div>
  </div>
</div>

    <div className="container mx-auto px-4 py-8">
     
      <section className="mt-8 ">
        <h2 className="text-4xl font-bold text-black mb-4">
          Todos los eventos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {eventos.map((evento, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 w-90 py-4 my-4">
              <img src={evento.image} alt={evento.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <div className="bg-sky-900 text-white px-2 py-1 mb-2 w-1/3 rounded-md">
                  {evento.date}
                </div>
                <div className="bg-sky-900 text-white px-2 py-1 mb-2 w-1/3 rounded-md">
                  {evento.location}
                </div>
                <h3 className="font-semibold text-xl mb-4">
                  {evento.title}
                </h3>
                <div className="text-center">
                  <button className="bg-amber-500 font-semibold text-black py-2 px-4 rounded hover:bg-amber-600">
                    Más información
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 ">
        <h2 className="text-4xl font-bold text-black mb-4 ">
          Eventos según tus intereses
        </h2>
        {eventoInteres && (
          <div className="w-full md:w-1/2 lg:w-1/3 bg-white rounded-lg shadow p-4 mb-4 mx-auto my-8">
            <img src={eventoInteres.image} alt={eventoInteres.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <div className="bg-sky-900 text-white px-2 py-1 mb-2 w-1/3 rounded-md ">
                {eventoInteres.date}
              </div>
              <div className="bg-sky-900 text-white px-2 py-1 mb-2 w-1/3 rounded-md">
                {eventoInteres.location}
              </div>
              <h3 className="font-semibold mb-4">
                {eventoInteres.title}
              </h3>
              <div className="text-center">
                <button className="bg-amber-500 font-semibold text-black py-2 px-4 rounded hover:bg-amber-600">
                  Más información
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  </div>
);
};

export default EventosPage;