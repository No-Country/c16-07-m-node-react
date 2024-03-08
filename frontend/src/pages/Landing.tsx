import { Link } from "react-router-dom";
import banner from "../../public/assets/image/banner.png";

export default function Landing() {
  return (
    <main className="bg-secondary-content bottom-20 min-h-screen w-full text-sky-900" >

      <section className="flex items-center flex-col w-full h-fit" style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>        
        <div className="card bg-white shadow-xl my-40 min-w-72 mx-10 ">        
          <div className="card-body items-center text-center text-sky-900">
            <h2 className="card-title text-4xl font-extrabold max-w-96">Conectando Generaciones</h2>
            <p className="my-4 font-bold">Un puente social para adultos mayores</p>
            <div className="card-actions w-5/6">
              <Link to="/Login" className="btn text-xl bg-amber-500 hover:bg-amber-400 active:bg-amber-300 w-full font-bold">Únete Ahora</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap justify-evenly">
        <div className="flex flex-col items-center justify-evenly my-10 min-h-96 md:my-auto px-10 text-center md:min-h-96 md:w-1/2 md:justify-evenly">
          <h2 className="text-4xl font-bold text-black">Eventos para compartir</h2>          
          <p className="text-xl my-4 font-semibold">¡Descubre un mundo de oportunidades emocionantes y conexiones significativas en nuestra sección de eventos! Comparte momentos inolvidables con personas que comparten tus intereses.</p>
          <Link to="/Login" className="btn bg-sky-700 text-white w-80 my-2 hover:bg-sky-500 active:bg-sky-900 font-bold">Quiero explorar los eventos</Link>
        </div>
        <div className="carousel carousel-center md:w-1/2 p-1 space-x-4 bg-sky-900 h-[600px]">
          <div className="carousel-item w-5/6">
            <img src="https://s3-alpha-sig.figma.com/img/a844/7b1c/eac32b8c2a97f64b7622e126f6804504?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k7975oKQ19RLIqJsdtjTD6hvj9O9nKDYZjkSo8rEKeJKqHNXRRbx9lTY6kwiS0m~BrsGBffCLoOnw3JKfnwerKcmEENt5Ablqn5BXT2S~KSJero2OvSbVjbs1oCbtaBEzQ3g7UtkL6PKsekOH3YNRaLSNe6Eo-R5SsjwbRevMwe1PfpNQYt9rdyNUij6KPIuLRk7nNI33HIroWgZmVVySSBc~Yrx828l2ihIFM4BBvWXX-kq~xkLMXRHl9nsPQIYnUOJpj6583o8AqZW~naB6v6Ijt5--Iz4eZ2LGdzpgFmXMRNeh7tVhD2JihAessfwREG-XE9Rh028ILdqxanE8Q__" className="object-cover" />
          </div> 
          <div className="carousel-item w-5/6">
            <img src="https://www.mexicodestinos.com/blog/wp-content/uploads/2015/08/danzon.jpg" className="object-cover" />
          </div> 
          <div className="carousel-item w-5/6">
            <img src="https://cultura.sanisidro.gob.ar/wp-content/uploads/2023/10/52498733867_3eebe0021d_o-2048x1593.jpg" className="object-cover" />
          </div> 
          <div className="carousel-item w-5/6">
            <img src="https://media.infocielo.com/p/23a89192ad262522a53c133ae8e8eec6/adjuntos/299/imagenes/001/580/0001580560/887x0/smart/324109505_1100884097975079_3187887053689046210_njpg.jpg" className="object-cover" />
          </div> 
        </div>
      </section>

      <section className="w-full h-fit text-white text-center min-h-screen md:flex md:flex-col md:justify-evenly md:items-center py-16" style={{ backgroundImage: 'linear-gradient(rgba(12, 74, 110, 0.8), rgba(12, 74, 110, 0.8)), url("../public/assets/image/people_group_landing.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">Conecta, acompaña, acompáñate</h2>
          <p className="text-xl font-semibold p-2">Programa encuentros, salidas o simplemente charlas para brindar o recibir compañía.</p>
        </div>
        <div className="flex flex-wrap justify-center ">
          <div className="card w-64 md:w-80 bg-base-100 shadow-xl m-4 text-sky-900">
            <img src="https://media.istockphoto.com/id/174960274/es/foto/vieja-y-j%C3%B3venes-de-la-mano.jpg?s=612x612&w=0&k=20&c=xWWLBVmVowlMF00DK59A70PdlOaj-5qLEqJZq02eOak=" className="rounded-xl h-60 object-cover" />
            <div className="card-body items-center text-center">
              <h2 className="card-title font-bold">Interactua</h2>
              <p className="font-semibold">Conoce y comparte momentos con los demás</p>                
            </div>
          </div>
          <div className="card w-64 md:w-80 bg-base-100 shadow-xl m-4 text-sky-900">
            <img src="https://storage-production.relish-life.com/19344/responsive-images/memory-games-senior-dementia___main-webp_1280_492.webp" className="rounded-xl h-60 object-cover" />
            <div className="card-body items-center text-center">
              <h2 className="card-title font-bold">Rompe la rutina</h2>
              <p className="font-semibold">Agiliza tus actividades físicas y cognitivas</p>                
            </div>
          </div>
          <div className="card w-64 md:w-80 bg-base-100 shadow-xl m-4 text-sky-900">
            <img src="https://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/16204735/Helping-the-elderly.jpg" className="rounded-xl h-60 object-cover" />
            <div className="card-body items-center text-center">
              <h2 className="card-title font-bold">Crea nexos</h2>
              <p className="font-semibold">Colabora con los demás y fomenta la empatía</p>                
            </div>
          </div>
        </div>
        <Link to="/Login" className="btn text-black bg-amber-500 w-80 my-4 hover:bg-amber-400 active:bg-amber-300 font-bold text-lg border-black">Quiero conectar</Link>
      </section>              

      <section className="text-white w-full h-fit py-10 pb-40">
        <div className="text-center my-6 text-sky-900">
          <h2 className="text-4xl font-bold m-4">Testimonios</h2>
          <p className="text-xl font-semibold p-2">Conoce la opinión de nuestra comunidad.</p>
        </div>
        <div className="flex flex-wrap justify-center ">
          <article className="w-72 bg-sky-500 rounded-xl shadow-2xl m-2">
            <div className="h-32 grid place-items-center">
              <div className="border-2 border-white p-1.5 rounded-full">
                <div className="relative h-20 w-20 rounded-full overflow-hidden">
                  <img
                    className="absolute w-full h-full top-0 left-0 object-cover"
                    src="https://www.65ymas.com/uploads/s1/11/51/79/9/bigstock-portrait-of-smiling-senior-man-264123457_1_621x621.jpeg"
                  />
                </div>
              </div>
            </div>
            <div className="text-white text-center bg-sky-700 p-5 rounded-xl">
              <p className="text-2xl font-semibold">Juan Pérez</p>
              <label className="text-xs mb-2">Jubilado</label>
              <p className="mb-2">
                “Gracias a Acompañar+, siento que pertenezco”
              </p>            
            </div>
          </article>
          <article className="w-72 bg-sky-500 rounded-xl shadow-2xl m-2">
            <div className="h-32 grid place-items-center">
              <div className="border-2 border-white p-1.5 rounded-full">
                <div className="relative h-20 w-20 rounded-full overflow-hidden">
                  <img
                    className="absolute w-full h-full top-0 left-0 object-cover"
                    src="https://st3.depositphotos.com/1011958/17204/i/450/depositphotos_172048874-stock-photo-portrait-of-smiling-beautiful-40.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="text-white text-center bg-sky-700 p-5 rounded-xl">
              <p className="text-2xl font-semibold">Ana Gómez</p>
              <label className="text-xs mb-2">Profesora</label>
              <p className="mb-2">
                “Esta plataforma ha cambiado mi vida social”
              </p>            
            </div>
          </article>
          <article className="w-72 bg-sky-500 rounded-xl shadow-2xl m-2">
            <div className="h-32 grid place-items-center">
              <div className="border-2 border-white p-1.5 rounded-full">
                <div className="relative h-20 w-20 rounded-full overflow-hidden">
                  <img
                    className="absolute w-full h-full top-0 left-0 object-cover"
                    src="https://st.depositphotos.com/1518767/2411/i/450/depositphotos_24112411-stock-photo-happy-man-in-kitchen.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="text-white text-center bg-sky-700 p-5 rounded-xl">
              <p className="text-2xl font-semibold">Luis Ramírez</p>
              <label className="text-xs mb-2">Comerciante</label>
              <p className="mb-2">
                “Siempre hay algo nuevo que descubrir aquí”
              </p>            
            </div>
          </article>
        </div>
      </section>            
      
    </main>
  )
  ;
}
