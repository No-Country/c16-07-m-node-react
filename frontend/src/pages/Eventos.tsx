import React from 'react';

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
export default function EventosPage() {
return (
    <div className="bg-gradient-to-t from-sky-500/30">
      <div className="w-full h-0.5 bg-sky-100"></div>
      {/* Contenedor general con padding y ancho máximo */}
      <div className="container mx-auto px-4 py-8 max-w-screen-xl">
        
        {/* Contenedor para el título y la búsqueda */}
        <div className="flex items-end justify-between mb-8">
          <h1 className="text-2xl font-bold">EVENTOS</h1>
          <div className="flex items-center">
            <div className="w-full max-w-xs">
              <input type="text" placeholder="Escribe aquí lo que quieras buscar" className="border border-gray-300 rounded py-2 px-4 w-full" />
            </div>
            <button className="ml-2 bg-sky-500 text-white rounded py-2 px-4">BUSCAR</button>
          </div>
        </div>

        {/* Contenedor para las tarjetas de eventos con ancho máximo más pequeño */}
        <div className="max-w-screen-lg mx-auto">
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Tus próximos eventos</h2>
            <div className="grid grid-cols-3 gap-6">
              {eventos.slice(0, 2).map((evento, index) => (
                <div key={index} className="shadow-lg rounded-lg overflow-hidden">
                  <img src={evento.image} alt={evento.title} className="w-full object-cover" style={{ height: '180px' }} />
                  <div className="p-4 bg-gray-200 rounded-b-lg">
                    <h3 className="font-bold mb-2">{evento.title}</h3>
                    <p className="text-gray-600 mb-1">{evento.date}</p>
                    <p className="text-gray-600">{evento.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Eventos según tus intereses</h2>
            <div className="grid grid-cols-3 gap-6">
              {eventos.slice(2, 5).map((evento, index) => (
                <div key={index} className="shadow-lg rounded-lg overflow-hidden">
                  <img src={evento.image} alt={evento.title} className="w-full object-cover" style={{ height: '180px' }} />
                  <div className="p-4 bg-gray-200 rounded-b-lg">
                    <h3 className="font-bold mb-2">{evento.title}</h3>
                    <p className="text-gray-600 mb-1">{evento.date}</p>
                    <p className="text-gray-600">{evento.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Eventos a los que has asistido</h2>
            <div className="grid grid-cols-3 gap-6">
              {eventos.slice(5).map((evento, index) => (
                <div key={index} className="shadow-lg rounded-lg overflow-hidden">
                  <img src={evento.image} alt={evento.title} className="w-full object-cover" style={{ height: '180px' }} />
                  <div className="p-4 bg-gray-200 rounded-b-lg">
                    <h3 className="font-bold mb-2">{evento.title}</h3>
                    <p className="text-gray-600 mb-1">{evento.date}</p>
                    <p className="text-gray-600">{evento.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
 }
