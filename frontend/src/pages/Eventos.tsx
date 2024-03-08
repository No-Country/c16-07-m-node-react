import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


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
      location: 'Plaza Principal',
      image:'https://colisee.es/wp-content/uploads/2022/04/ejercicios-divertidos-para-entrenar-la-memoria-en-el-adulto-mayor.jpeg'
    }
  ];

  const eventoInteres = eventos.find(evento => evento.title === 'Tango para principiantes');

  return (
    <div>
      <div className="bg-sky-900 text-white text-sm font-bold rounded-md py-3 px-4 w-full flex items-center">
        <FontAwesomeIcon icon={faCalendarDay} className="mr-2" />
        Eventos
      </div>
      <div className="bg-gradient-to-b from-sky-100 via-sky-200 flex justify-center">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-center mt-8">
            <div className="relative border lg:border-2 rounded-lg w-full md:w-1/3 mx-4">
              <input className="py-2 pl-4 pr-10 w-full rounded-lg" placeholder="Escribe aquí lo que quieres buscar" />
              <FontAwesomeIcon icon={faSearch} className="absolute right-0 top-0 bottom-0 my-auto mr-3 text-gray-400" style={{ fontSize: '1rem' }} />
            </div>
          </div>
  
          <section className="mt-8">
            <h2 className="text-4xl font-bold text-black mb-4 text-center pb-6">
              Todos los eventos
            </h2>
            <p className="text-lg font-semibold text-gray-600 mb-6">
              Participa en una variedad de eventos culturales y recreativos pensados para enriquecer tu vida social y ofrecerte nuevas experiencias.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventos.map((evento, index) => (
                <div key={index} className="bg-white/70 rounded-lg overflow-hidden my-4 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                  <img src={evento.image} alt={evento.title} className="rounded-lg w-full h-48 object-cover" />
                  <div className="p-4">
                    <div className="flex items-center bg-sky-900 text-sm w-3/5 text-white px-2 py-1 mb-2 rounded-md">
                      <FontAwesomeIcon icon={faCalendarAlt} className="text-white text-xs mr-2" />
                      {evento.date}
                    </div>
                    <div className="flex items-center bg-sky-900 w-3/5 text-sm text-white px-2 py-1 rounded-md">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-xs mr-2" />
                      {evento.location}
                    </div>
                    <h3 className="font-semibold text-md mb-4">
                      {evento.title}
                    </h3>
                    <div className="text-center">
                      <button className="bg-amber-500 text-sm font-semibold text-black py-2 px-4 rounded hover:bg-amber-600">
                        Más información
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
  
          <section className="mt-8">
            <h2 className="text-4xl font-bold text-black mb-4 text-center py-6">
              Eventos según tus intereses
            </h2>
            <p className="text-lg font-semibold text-gray-600 mb-6">
              Descubre eventos seleccionados especialmente para ti, basados en tus intereses y actividades anteriores.
            </p>
            {eventoInteres && (
              <div className="bg-white/70 rounded-lg overflow-hidden my-4 mx-4 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl md:w-1/3">
                <img src={eventoInteres.image} alt={eventoInteres.title} className="rounded-lg w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="flex items-center w-3/5 bg-sky-900 text-sm text-white px-2 py-1 mb-2 rounded-md">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-white text-xs mr-2" />
                    {eventoInteres.date}
                  </div>
                  <div className="flex items-center w-3/5 bg-sky-900 text-sm text-white px-2 py-1 rounded-md">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-xs mr-2" />
                    {eventoInteres.location}
                  </div>
                  <h3 className="font-semibold text-md mb-4 ">
                    {eventoInteres.title}
                  </h3>
                  <div className="text-center pb-10">
                    <button className="bg-amber-500 text-sm font-semibold text-black py-2 px-4 rounded hover:bg-amber-600">
                      Más información
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
  
  
};

export default EventosPage;
