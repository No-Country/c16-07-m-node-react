import React from 'react';
import fondoAbuelos from '../../public/assets/image/fondoabuelos.png';

export default function Home() {
  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="flex justify-between items-center px-6 py-4">
          {/* Contenido del header */}
        </div>
      </header>
      <main>
      <section 
  className="relative text-white text-center flex items-center justify-center bg-no-repeat bg-cover bg-center  shadow-2xl"
  style={{ 
    backgroundImage: `url(${fondoAbuelos})`,
    height: '80vh' // Altura ajustada al 80% de la altura de la pantalla
  }}
>
  <div className="bg-sky-900 p-12 rounded-xl shadow-lg max-w-6xl mx-auto w-full"> {/* Ancho máximo y padding ajustados */}
    <h1 className="text-4xl font-bold mb-6">
      Compañía y Conexión
    </h1>
    <p className="mb-6 text-xl max-w-3xl mx-auto">
      Encuentra nuevas amistades, comparte intereses y disfruta de momentos significativos en compañía. En Acompañar+, te ofrecemos un espacio para conectar con otros afiliados, donde cada interacción es una oportunidad para enriquecer tu vida social y emocional.
    </p>
    <div className="flex flex-wrap justify-center gap-12 mt-6">
      <div className="relative rounded-lg overflow-hidden h-56 w-44">
        <img alt="Retrato de Mario Cortez sonriendo" className="absolute inset-0 h-full w-full object-cover" src="https://images.pexels.com/photos/3110392/pexels-photo-3110392.jpeg?cs=srgb&dl=pexels-marllon-cristhian-barbosa-3110392.jpg&fm=jpg" />
        <div className="absolute bottom-0 w-full bg-white p-2 rounded-b-lg">
          <p className="text-center text-black font-semibold">Mario Cortez</p>
        </div>
      </div>
      <div className="relative rounded-lg overflow-hidden h-56 w-44">
        <img alt="Retrato de Gloria Matter pensativa" className="absolute inset-0 h-full w-full object-cover" src="https://st2.depositphotos.com/1743476/44189/i/450/depositphotos_441890538-stock-photo-retired-senior-woman-laughing-her.jpg" />
        <div className="absolute bottom-0 w-full bg-white  p-2 rounded-b-lg">
          <p className="text-center text-black font-semibold">Gloria Matter</p>
        </div>
      </div>
      <div className="relative rounded-lg overflow-hidden h-56 w-44">
        <img alt="Retrato de Fabiola Ramirez riendo" className="absolute inset-0 h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuVx2ML7CCIF93S3eJbybwMCA0Yn--4WHN4_PIboiAvQ&s" />
        <div className="absolute bottom-0 w-full bg-white p-2 rounded-b-lg">
          <p className="text-center text-black font-semibold">Fabiola Ramirez</p>
        </div>
      </div>
      <div className="relative rounded-lg overflow-hidden h-56 w-44">
        <img alt="Retrato de Nicolas Segura con expresión serena" className="absolute inset-0 h-full w-full object-cover" src="https://bikiniburka.org/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-15-at-12.35.36-1170x600.jpeg"/>
        <div className="absolute bottom-0 w-full bg-white  p-2 rounded-b-lg">
          <p className="text-center text-black font-semibold">Nicolas Segura</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="py-12 px-6 mx-auto max-w-7xl">
  <h2 className="text-sky-900 text-4xl font-bold mb-6 text-center">
    Eventos recién agregados
  </h2>
  <p className="text-xl text-sky-900 font-semibold mb-6 mx-auto w-4/5 py-3 ">
  Descubre las últimas actividades y eventos locales agregados a nuestra plataforma. Desde charlas educativas hasta reuniones sociales, explora nuevas oportunidades para participar, aprender y conectar con tu comunidad en Acompañar+. Siempre hay algo emocionante por descubrir. </p>
  <div className="flex gap-8">
    <div className="text-sky-900 bg-white shadow rounded-lg overflow-hidden flex flex-col items-center w-1/3">
      <img className="w-full h-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKp9pw_txPguMVjcdX6eSnGJUudkigMEhMeyFIigi-dw&s" alt="Charla de bienestar"/>
      <button className="self-start text-black bg-amber-500 w-1/3 rounded-md  my-4">
         Mayo 25
      </button>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">
          Charla de bienestar
        </h3>
        <p className="text-md mb-4">
        Únete a nuestra charla sobre bienestar emocional y aprende técnicas para manejar el estrés y cultivar la tranquilidad en tu vida diaria. ¡Descubre cómo cuidar tu mente y tu corazón en comunidad!  </p>
      </div>
    </div>
    <div className="bg-white shadow rounded-lg overflow-hidden flex flex-col items-center w-1/3">
      <img className="w-full h-auto" src="https://media.istockphoto.com/id/485907782/es/foto/abuelos-y-nietos-caminando-en-el-parque.jpg?s=612x612&w=0&k=20&c=Nyr0uyEl4u99ayPWipXXIHJQBNaKudl8cesW6asc0KE=" alt="Paseo por el Parque"/>
      <button className=" self-start text-black bg-amber-500 w-1/3 rounded-md  my-4">
        Mayo 23
      </button>
      <div className="p-4">
        <h3 className="text-xl text-sky-900 font-bold mb-2">
          Paseo por el Parque
        </h3>
        <p className="text-md mb-4">
        Respira aire fresco, haz ejercicio suave y comparte conversaciones en un entorno natural y acogedor. ¡Una oportunidad perfecta para conectar con la naturaleza y con tus compañeros!        </p>
      </div>
    </div>
    <div className="bg-white shadow rounded-lg overflow-hidden flex flex-col items-center w-1/3">
      <img className="w-full h-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThU7UDQLB0rEMkfe0ZmuKJ0VfyjDmoYCIvR06IJAkTuw&s" alt="Tarde de Juegos de Mesa"/>
      <button className="self-start text-black bg-amber-500 w-1/3 rounded-md my-4">
        Mayo 27
      </button>
      <div className="p-4">
        <h3 className="text-xl text-sky-900 font-bold mb-2">
          Tarde de Juegos de Mesa
        </h3>
        <p className="text-md  mb-4">
        Únete a nuestra tarde de juegos de mesa y diviértete en buena compañía. Desde clásicos como ajedrez y dominó hasta juegos de cartas y estrategia, hay algo para todos. ¡Ven y disfruta de una tarde llena de diversión, risas y amistad!        </p>
      </div>
    </div>
  </div>
</section>

<section className="py-12 px-6 bg-gradient-to-b from-sky-100 via-sky-200 to-sky-900/50 relative text-white">
  <div className="text-center mb-12">
    <h2 className="font-bold text-4xl text-black">Brilla Con tus Logros</h2>
    <p className="font-semibold mx-auto leading-relaxed  text-xl px-6 text-black mt-6 w-2/3  ">
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
        <h4 className="font-bold text-sky-500">Memoria</h4>
        <p className="font-bold text-sky-900" >Recuerda y coincide</p>
        <button className="mx-auto mt-4 px-6 py-2 bg-amber-500 text-black rounded-md">
          Practicar
        </button>
      </div>
    </div>
    {/* Imagen 2 */}
    <div className="flex flex-col items-center w-1/5">
      <div className="h-64 w-full rounded-lg overflow-hidden">
        <img className="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxK535JcL0OBNcAdAPRY2Z6k48pxd071uTzl70OrdY8g&s" alt="Movilidad"/>
      </div>
      <div className="w-full text-center bg-white bg-opacity-75 p-4 text-gray-800 rounded-lg shadow-md mt-4">
        <h4 className="text-center font-bold text-sky-500">Movilidad</h4>
        <p className="font-bold text-sky-900" >Sesión de ejercicios</p>
        <button className="mx-auto mt-4 px-6 py-2 bg-amber-500 text-black rounded-md">
          Practicar
        </button>
      </div>
    </div>
    {/* Imagen 3 */}
    <div className="flex flex-col items-center w-1/5">
      <div className="h-64 w-full rounded-lg overflow-hidden">
        <img className="h-full w-full object-cover" src="https://emera-group.es/wp-content/uploads/2022/09/7_juegos_de_memoria_para_personas_mayores-900x563.webp" alt="Ingenio"/>
      </div>
      <div className="text-center w-full bg-white bg-opacity-75 p-4 text-gray-800 rounded-lg shadow-md mt-4">
        <h4 className="font-bold text-sky-500">Ingenio</h4>
        <p className="font-bold text-sky-900" >Desafía tu estrategia</p>
        <button className="mx-auto mt-4 px-6 py-2 bg-amber-500 text-black rounded-md">
          Practicar
        </button>
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
