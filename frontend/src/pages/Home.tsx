import React from 'react';

export default function Home() {
  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="flex justify-between items-center px-6 py-4">
          {/* Contenido del header */}
        </div>
      </header>
      <main>
      <section className="bg-sky-900 text-white py-16 px-6 text-center mx-auto max-w-7xl max-h-7xl rounded-xl shadow-2xl">


          <h1 className="text-3xl font-bold mb-6">
            Compañía y Conexión
          </h1>
          <p className="mb-6 mx-auto max-w-3xl">
            Encuentra nuevas amistades, comparte intereses y disfruta de momentos significativos en compañía. En Acompañar+, te ofrecemos un espacio para conectar con otros afiliados, donde cada interacción es una oportunidad para enriquecer tu vida social y emocional.
          </p>
          <div className="flex flex-wrap justify-center gap-12 mt-6">

            <div className="relative rounded-lg overflow-hidden h-56 w-44">
              <img alt="Portrait of Mario Cortez smiling" className="absolute inset-0 h-full w-full object-cover" src="https://images.pexels.com/photos/3110392/pexels-photo-3110392.jpeg?cs=srgb&dl=pexels-marllon-cristhian-barbosa-3110392.jpg&fm=jpg" />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-75 p-2 rounded-b-lg">
                <p className="text-center text-white font-semibold">Mario Cortez</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden h-56 w-44">
              <img alt="Portrait of Gloria Matter looking thoughtful" className="absolute inset-0 h-full w-full object-cover" src="https://st2.depositphotos.com/1743476/44189/i/450/depositphotos_441890538-stock-photo-retired-senior-woman-laughing-her.jpg" />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-75 p-2 rounded-b-lg">
                <p className="text-center font-semibold">Gloria Matter</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden h-56 w-44">
              <img alt="Portrait of Fabiola Ramirez laughing" className="absolute inset-0 h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuVx2ML7CCIF93S3eJbybwMCA0Yn--4WHN4_PIboiAvQ&s" />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-75 p-2 rounded-b-lg">
                <p className="text-center font-semibold">Fabiola Ramirez</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden h-56 w-44">
              <img alt="Portrait of Nicolas Segura with a serene expression" className="absolute inset-0 h-full w-full object-cover" src="https://bikiniburka.org/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-15-at-12.35.36-1170x600.jpeg"/>
              <div className="absolute bottom-0 w-full bg-black bg-opacity-75 p-2 rounded-b-lg">
                <p className="text-center font-semibold">Nicolas Segura</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 px-6 mx-auto max-w-7xl">
      <h2 className="text-sky-900 text-2xl font-bold mb-6 text-center">
        Eventos recién agregados
      </h2>
      <p className="mb-6 mx-auto max-w-3xl">
  Descubre las últimas actividades y eventos locales agregados a nuestra plataforma. Desde charlas educativas hasta reuniones sociales, explora nuevas oportunidades para participar, aprender y conectar con tu comunidad en Acompañar+. Siempre hay algo emocionante por descubrir.
</p>
      <div className="flex gap-8">
        <div className="text-sky-900 bg-white shadow rounded-lg overflow-hidden flex flex-col items-center w-1/3">
          <img className="w-full h-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKp9pw_txPguMVjcdX6eSnGJUudkigMEhMeyFIigi-dw&s" alt="Charla de bienestar"/>
          <div className="p-4">
            <h3 className="font-bold mb-2">
              Charla de bienestar
            </h3>
            <p className="text-sm mb-4">
              Descubre cómo mejorar tu calidad de vida con consejos prácticos para el bienestar físico y emocional.
            </p>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg overflow-hidden flex flex-col items-center w-1/3">
          <img className="w-full h-auto" src="https://media.istockphoto.com/id/485907782/es/foto/abuelos-y-nietos-caminando-en-el-parque.jpg?s=612x612&w=0&k=20&c=Nyr0uyEl4u99ayPWipXXIHJQBNaKudl8cesW6asc0KE=" alt="Paseo por el Parque"/>
          <div className="p-4">
            <h3 className="text-sky-900 font-bold mb-2">
              Paseo por el Parque
            </h3>
            <p className="text-sm mb-4">
              Conéctate con la naturaleza y disfruta de una caminata relajante en buena compañía.
            </p>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg overflow-hidden flex flex-col items-center w-1/3">
          <img className="w-full h-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThU7UDQLB0rEMkfe0ZmuKJ0VfyjDmoYCIvR06IJAkTuw&s" alt="Tarde de Juegos de Mesa"/>
          <div className="p-4">
            <h3 className="text-sky-900 font-bold mb-2">
              Tarde de Juegos de Mesa
            </h3>
            <p className="text-sm mb-4">
              Ejercita tu mente y diviértete con una variedad de juegos de mesa en un ambiente amistoso y distendido.
            </p>
          </div>
        </div>
      </div>
    </section>

 
    <section className="py-12 px-6 bg-gradient-to-b from-sky-100 to sky-500 relative text-white">
  <div className="text-center mb-12">
    <h2 className="font-bold text-4xl text-sky-900">Brilla Con tus Logros</h2>
    <p className="mx-auto leading-relaxed max-w-2xl text-lg px-6 text-sky-900 mt-6">
      Descubre una amplia gama de ejercicios diseñados para estimular tu mente y mantener tu cuerpo en movimiento. Completa desafíos, gana estrellas y destácate entre los demás mientras trabajas en tu bienestar integral.
    </p>
  </div>
  <div className="flex justify-center gap-8 mt-6">
    {/* Imagen 1 */}
    <div className="flex flex-col items-center w-1/5">
      <div className="h-64 w-full rounded-lg overflow-hidden">
        <img className="h-full w-full object-cover" src="https://concepto.de/wp-content/uploads/2018/09/fotografia2-e1537978531632.jpg" alt="Memoria"/>
      </div>
      <div className="w-full text-center bg-white bg-opacity-75 p-4 text-gray-800 rounded-lg shadow-md mt-4">
        <h4 className="font-bold text-sky-900">Memoria</h4>
        <p>Recuerda y coincide</p>
      </div>
    </div>
    {/* Imagen 2 */}
    <div className="flex flex-col items-center w-1/5">
      <div className="h-64 w-full rounded-lg overflow-hidden">
        <img className="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxK535JcL0OBNcAdAPRY2Z6k48pxd071uTzl70OrdY8g&s" alt="Movilidad"/>
      </div>
      <div className="w-full text-center bg-white bg-opacity-75 p-4 text-gray-800 rounded-lg shadow-md mt-4">
        <h4 className="text-center font-bold text-sky-900">Movilidad</h4>
        <p>Sesión de ejercicios</p>
      </div>
    </div>
    {/* Imagen 3 */}
    <div className="flex flex-col items-center w-1/5">
      <div className="h-64 w-full rounded-lg overflow-hidden">
        <img className="h-full w-full object-cover" src="https://emera-group.es/wp-content/uploads/2022/09/7_juegos_de_memoria_para_personas_mayores-900x563.webp" alt="Ingenio"/>
      </div>
      <div className="text-center w-full bg-white bg-opacity-75 p-4 text-gray-800 rounded-lg shadow-md mt-4">
        <h4 className="font-bold text-sky-900">Ingenio</h4>
        <p>Desafía tu estrategia</p>
      </div>
    </div>
  </div>
</section>

        {/* ... otras secciones ... */}
      </main>
      {/* ... footer ... */}
    </div>
  );
}
