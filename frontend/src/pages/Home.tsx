import React from "react";

export default function Home() {
  return (
    <main className="bg-secondary-content bottom-20 min-h-screen w-full text-primary-content" >

      <section className="flex justify-center flex-col w-full h-fit" style={{ backgroundImage: 'url("../public/assets/image/banner.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="bg-neutral-content">
          <img src="../public/assets/image/logo_app_acompanar.png" className="m-auto" />
        </div>
        <div className="card bg-accent shadow-xl max-h-64 mx-auto my-40">        
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl">Conectando Generaciones</h2>
            <p>Un puente social para adultos mayores</p>
            <div className="card-actions">
              <button className="btn btn-info">Únete ahora</button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap justify-evenly text-primary my-10">
        <div className="my-auto text-center">
          <h2 className="text-2xl font-semibold m-4">Eventos</h2>          
          <p className="text-xl p2 mb-4">Aqui encontrarás todos los eventos de la comunidad</p>
        </div>
        <div className="carousel carousel-center max-w-md p-1 space-x-4 bg-neutral rounded-box">
          <div className="carousel-item h-96 w-96">
            <img src="https://www.mexicodestinos.com/blog/wp-content/uploads/2015/08/danzon.jpg" className="rounded-box" />
          </div> 
          <div className="carousel-item h-96 w-96">
            <img src="https://www.mexicodestinos.com/blog/wp-content/uploads/2015/08/Untitled-design-6.png" className="rounded-box" />
          </div> 
          <div className="carousel-item h-96 w-96">
            <img src="https://cultura.sanisidro.gob.ar/wp-content/uploads/2023/10/52498733867_3eebe0021d_o-2048x1593.jpg" className="rounded-box" />
          </div> 
          <div className="carousel-item h-96 w-96">
            <img src="https://media.infocielo.com/p/23a89192ad262522a53c133ae8e8eec6/adjuntos/299/imagenes/001/580/0001580560/887x0/smart/324109505_1100884097975079_3187887053689046210_njpg.jpg" className="rounded-box" />
          </div> 
        </div>
      </section>

      <section className="w-full h-fit text-primary my-10">
        <div className="m-auto text-center">
          <h2 className="text-2xl font-semibold m-4">Acompañar</h2>
          <p className="text-xl p-2">Programa encuentros, salidas o simplemente charlas para brindar o recibir compañía.</p>
        </div>
        <div className="flex flex-wrap justify-center ">
          <div className="card min-w-64 max-w-96 bg-base-100 shadow-xl m-4">
            <img src="https://media.istockphoto.com/id/174960274/es/foto/vieja-y-j%C3%B3venes-de-la-mano.jpg?s=612x612&w=0&k=20&c=xWWLBVmVowlMF00DK59A70PdlOaj-5qLEqJZq02eOak=" className="rounded-xl h-60 object-cover" />
            <div className="card-body items-center text-center">
              <h2 className="card-title">Interactua</h2>
              <p>Conoce y comparte momentos con los demás</p>                
            </div>
          </div>
          <div className="card min-w-64 max-w-96 bg-base-100 shadow-xl m-4">
            <img src="https://storage-production.relish-life.com/19344/responsive-images/memory-games-senior-dementia___main-webp_1280_492.webp" className="rounded-xl h-60 object-cover" />
            <div className="card-body items-center text-center">
              <h2 className="card-title">Rompe la rutina</h2>
              <p>Agiliza tus actividades físicas y cognitivas</p>                
            </div>
          </div>
          <div className="card min-w-64 max-w-96 bg-base-100 shadow-xl m-4">
            <img src="https://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/16204735/Helping-the-elderly.jpg" className="rounded-xl h-60 object-cover" />
            <div className="card-body items-center text-center">
              <h2 className="card-title">Crea nexos</h2>
              <p>Colabora con los demás y fomenta la empatía</p>                
            </div>
          </div>
        </div>
      </section>              

      <section className="bg-accent w-full h-fit py-10">
        <div className="m-auto text-center">
          <h2 className="text-2xl font-semibold m-4">Testimonios</h2>
          <p className="text-xl p-2">Conoce la opinion de nuestra comunidad.</p>
        </div>
        <div className="flex flex-wrap justify-center ">
          <article className="w-72 bg-neutral rounded-xl shadow-xl m-2">
            <div className="h-32 grid place-items-center">
              <div className="border-2 border-stone-800 p-1.5 rounded-full">
                <div className="relative h-20 w-20 rounded-full overflow-hidden">
                  <img
                    className="absolute w-full h-full top-0 left-0 object-cover"
                    src="https://www.65ymas.com/uploads/s1/11/51/79/9/bigstock-portrait-of-smiling-senior-man-264123457_1_621x621.jpeg"
                  />
                </div>
              </div>
            </div>
            <div className="text-white text-center bg-neutral p-5 rounded-xl">
              <p className="text-2xl font-semibold">Juan Pérez</p>
              <label className="text-xs text-stone-400 mb-2">Jubilado</label>
              <p className="text-stone-300 mb-2">
                “Gracias a Acompañar+, siento que pertenezco”
              </p>            
            </div>
          </article>
          <article className="w-72 bg-neutral rounded-xl shadow-xl m-2">
            <div className="h-32 grid place-items-center">
              <div className="border-2 border-stone-800 p-1.5 rounded-full">
                <div className="relative h-20 w-20 rounded-full overflow-hidden">
                  <img
                    className="absolute w-full h-full top-0 left-0 object-cover"
                    src="https://st3.depositphotos.com/1011958/17204/i/450/depositphotos_172048874-stock-photo-portrait-of-smiling-beautiful-40.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="text-white text-center bg-neutral p-5 rounded-xl">
              <p className="text-2xl font-semibold">Ana Gómez</p>
              <label className="text-xs text-stone-400 mb-2">Profesora</label>
              <p className="text-stone-300 mb-2">
                “Esta plataforma ha cambiado mi vida social”
              </p>            
            </div>
          </article>
          <article className="w-72 bg-neutral rounded-xl shadow-xl m-2">
            <div className="h-32 grid place-items-center">
              <div className="border-2 border-stone-800 p-1.5 rounded-full">
                <div className="relative h-20 w-20 rounded-full overflow-hidden">
                  <img
                    className="absolute w-full h-full top-0 left-0 object-cover"
                    src="https://st.depositphotos.com/1518767/2411/i/450/depositphotos_24112411-stock-photo-happy-man-in-kitchen.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="text-white text-center bg-neutral p-5 rounded-xl">
              <p className="text-2xl font-semibold">Luis Ramírez</p>
              <label className="text-xs text-stone-400 mb-2">Comerciante</label>
              <p className="text-stone-300 mb-2">
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
