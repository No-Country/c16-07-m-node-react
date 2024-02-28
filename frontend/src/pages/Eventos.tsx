import React from 'react';

const eventos = [
  {
    description: 'Deporte',
    shortDescription: 'Mantente activo y saludable con nuestras actividades deportivas.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-EVo2ChbA6iP1q4n_wOLiugixqecOKOQhn-j00HOclg&s'
  },
  {
    description: 'Juegos de mesa',
    shortDescription: 'Diviértete y socializa con nuestros juegos de mesa.',
    imageUrl: 'https://www.abueloactual.com/wp-content/uploads/2016/05/personasmayoresjugando-ortopediaAbueloActual-1920w.webp'
  },
  {
    description: 'Eventos musicales',
    shortDescription: 'Aprende a tocar un instrumento o únete a nuestro coro.',
    imageUrl: 'https://us.123rf.com/450wm/zinkevych/zinkevych1709/zinkevych170900109/85190622-abuelo-de-abuelo-y-nieto-que-tiene-la-pr%C3%A1ctica-de-la-guitarra.jpg?ver=6'
  },
  {
    description: 'Club de lectura',
    shortDescription: 'Disfruta de la lectura y discute libros en nuestro club de lectura.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfC4pRLYunM-c0-BYV9nRV3G_6QBM_4HF9fpdX33EHw&s'
  }
];

export default function Eventos() {
    return (
      <div className="p-4 bg-white">
        {/* Aquí se agrega la imagen y el título centrado */}
        <div className="text-center mb-20">
          <img src="https://media.istockphoto.com/id/1342104096/es/v%C3%ADdeo/abuelo-feliz-teniendo-tanta-diversi%C3%B3n-y-alegr%C3%ADa-con-su-nieto-durante-el-tiempo-de-piggyback.jpg?s=640x640&k=20&c=loQeVn55RlXfCmRaETRdH7w1Doy88O4GEOCT8j3G5Kw=" alt="Imagen de eventos" className="mx-auto w-1/4 h-auto object-cover rounded-lg mb-10" />
          <h1 className="text-3xl font-semibold text-blue-900 mb-10">Eventos</h1>
          <p className="text-black mb-10">Aquí encontrarás las actividades en tu ciudad...</p>
        </div>
  
        {/* Aquí se muestra la cuadrícula de eventos */}
        <section className="grid grid-cols-2 gap-10">
          {eventos.map((evento, i) => (
            <div key={i} className="bg-gray-200 rounded-lg overflow-hidden">
              <img src={evento.imageUrl} alt={evento.description} className="mx-auto w-3/4 h-64 object-cover mb-4" />
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold text-blue-900 mb-2">{evento.description}</h2>
                <p className="text-black">{evento.shortDescription}</p>
                <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Ir al evento
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  };

import React from 'react';

const eventos = [
  {
    description: 'Deporte',
    shortDescription: 'Mantente activo y saludable con nuestras actividades deportivas.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-EVo2ChbA6iP1q4n_wOLiugixqecOKOQhn-j00HOclg&s'
  },
  {
    description: 'Juegos de mesa',
    shortDescription: 'Diviértete y socializa con nuestros juegos de mesa.',
    imageUrl: 'https://www.abueloactual.com/wp-content/uploads/2016/05/personasmayoresjugando-ortopediaAbueloActual-1920w.webp'
  },
  {
    description: 'Eventos musicales',
    shortDescription: 'Aprende a tocar un instrumento o únete a nuestro coro.',
    imageUrl: 'https://us.123rf.com/450wm/zinkevych/zinkevych1709/zinkevych170900109/85190622-abuelo-de-abuelo-y-nieto-que-tiene-la-pr%C3%A1ctica-de-la-guitarra.jpg?ver=6'
  },
  {
    description: 'Club de lectura',
    shortDescription: 'Disfruta de la lectura y discute libros en nuestro club de lectura.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfC4pRLYunM-c0-BYV9nRV3G_6QBM_4HF9fpdX33EHw&s'
  }
];

export default function Eventos() {
    return (
      <div className="p-4 bg-white">
        {/* Aquí se agrega la imagen y el título centrado */}
        <div className="text-center mb-20">
          <img src="https://media.istockphoto.com/id/1342104096/es/v%C3%ADdeo/abuelo-feliz-teniendo-tanta-diversi%C3%B3n-y-alegr%C3%ADa-con-su-nieto-durante-el-tiempo-de-piggyback.jpg?s=640x640&k=20&c=loQeVn55RlXfCmRaETRdH7w1Doy88O4GEOCT8j3G5Kw=" alt="Imagen de eventos" className="mx-auto w-1/4 h-auto object-cover rounded-lg mb-10" />
          <h1 className="text-3xl font-semibold text-blue-900 mb-10">Eventos</h1>
          <p className="text-black mb-10">Aquí encontrarás las actividades en tu ciudad...</p>
        </div>
  
        {/* Aquí se muestra la cuadrícula de eventos */}
        <section className="grid grid-cols-2 gap-14 max-w-4xl mx-auto">
          {eventos.map((evento, i) => (
            <div key={i} className="bg-gray-200 rounded-lg overflow-hidden">
              <img src={evento.imageUrl} alt={evento.description} className="mx-auto w-3/4 h-64 object-cover mb-4" />
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold text-blue-900 mb-2">{evento.description}</h2>
                <p className="text-black">{evento.shortDescription}</p>
                <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Ir al evento
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  };