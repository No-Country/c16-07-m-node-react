import React from "react";
import Fondo from "./Fondo";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import logoMini from "../../../public/assets/image/logo_app_acompanar_mini.png"
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";

const Perfil = () => {
  const intereses = [
    "Viajes",
    "Gastronomía",
    "Meditación",
    "Fotografía",
    "Manualidades"
  ];
  return (
    <>
      <Fondo />
      <div className="navbar bg-[#0369A1] text-[#FFFFFF] rounded-box">
        <svg
          className="ml-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none">
          <path
            d="M18.4502 12.75C17.3252 11.4 15.9002 10.4625 14.3252 9.97501C15.9002 9.15001 16.9502 7.50001 16.9502 5.58751C16.9502 2.85001 14.7377 0.600006 11.9627 0.600006C9.1877 0.600006 7.0127 2.88751 7.0127 5.62501C7.0127 7.50001 8.0627 9.15001 9.6377 10.0125C8.0627 10.5 6.6752 11.4375 5.5127 12.7875C3.8627 14.7375 2.9252 17.4375 2.8877 20.4C2.8877 20.7375 3.0752 21.0375 3.3377 21.15C4.3502 21.675 8.0252 23.325 11.9627 23.325C16.2377 23.325 19.6502 21.6375 20.6252 21.1125C20.8877 20.9625 21.0752 20.6625 21.0752 20.3625C21.0377 17.4375 20.1002 14.7375 18.4502 12.75ZM12.0002 2.36251C13.8002 2.36251 15.3002 3.82501 15.3002 5.66251C15.3002 7.50001 13.8377 8.96251 12.0002 8.96251C10.1627 8.96251 8.7002 7.50001 8.7002 5.66251C8.7002 3.82501 10.2002 2.36251 12.0002 2.36251ZM12.0002 21.675C8.88769 21.675 5.8502 20.475 4.6127 19.875C4.7627 17.5125 5.5127 15.4125 6.8252 13.8375C8.1752 12.225 10.0127 11.325 12.0002 11.325C13.9877 11.325 15.8252 12.225 17.1752 13.8375C18.4877 15.375 19.2752 17.5125 19.3877 19.875C18.2252 20.475 15.3752 21.675 12.0002 21.675Z"
            fill="white"
          />
        </svg>
        <p className="text-white font-inter font-medium text-lg leading-6text-lg font-bold  ml-1">
          Perfil
        </p>
      </div>

      <div className="flex flex-col justify-center px-10 h-fit mb-24">
        <div className="card my-5 bg-base-100 shadow-xl border border-gray-300 p-3 min-w-96 md:mx-20 xl:mx-40">
          <div className="mx-5 my-5 flex items-start">
            <div className="avatar">
              <div className="min-w-40 rounded">
                <img src="https://s3-alpha-sig.figma.com/img/f8cd/4dbe/b2691ea8f32bad02f902520ac0f6bca0?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VGocWK-qIwG4sQjl9Nny9qGOCWOS61h4~kSG--cVeZofLj~hSFStLQ8xiu4K8P6wwBnxEhKEdeNwMCAdPYh3d3RD~U2jlMMkNwCVrZvXr8-u2oFh2hSLq0u0V0g2QqBDISZ3-6TrQu7bH65i6TFog6PBzCCwHgAUzk~VrAnrnBGt9waFbbV~oB0udqve7n9IlIcox~0mE24RM6IEnXBSa7ZNuUH9tzrX1XRCVjExq4gTq0Faxyq8DkTSq80y8M5v9Q7LQQrnBoiezYR2eEBam3~w-0cEx3K7A0yqqpGjOyvkd7veLmWBDJBWQgeYl4AUymw~aTvqGkt2jC2lnXVvZg__" />            
              </div>
            </div>
            <div className="flex flex-col  w-full">
              <Link to="/Login" className="btn ms-auto bg-amber-500 text-lg font-normal hover:bg-amber-400 active:bg-amber-300"><FontAwesomeIcon icon={faPenToSquare} /> Editar</Link>
              <div className="ps-6">
                <p className="font-semibold text-xl">Julio Alberto Duarte</p>
                <p className="text-gray-600">Jubilado</p>
                <p className="text-gray-600">78 años</p>
                <p className="text-gray-600">Embalse, Córdoba, Argentina</p>
                <p className="text-sky-700 font-bold">Quiero estar acompañado</p>
              </div>
            </div>
          </div>
          <div className="card-body border-t-2 border-amber-300">
            <h2 className="text-dark font-inter font-medium text-xl leading-[35.659px] card-title">
              Sobre mí
            </h2>
            <p className="text-primary-text font-inter font-normal text-lg leading-[32.687px]">
              Me considero una persona sociable y con mucha energía disponible,
              soy viudo desde hace 3 años, tengo 2 hijos y 3 nietos. Amigable,
              jovial y de buen gusto.
            </p>
            <h2 className="text-dark font-inter font-medium text-xl leading-[35.659px]">
              Mis intereses
            </h2>
            <div className="card-actions justify-center">
              {intereses.map((intereses, index) => (
                <div key={index} className="badge font-semibold bg-sky-500">
                  {intereses}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full justify-evenly">

          <div className="text-center card my-5 bg-base-100 shadow-xl border border-gray-300 p-6">
            <div className="flex">
              <div className="m-auto md:m-0">
                <img src={logoMini} alt="logo" className="w-12 md:me-4" />
              </div>
              <div className="hidden md:inline">
                <p className="text-xl font-semibold">Conexiones</p>
                <p className="text-gray-600">Último mes</p>              
              </div>
            </div>
            <p className="text-2xl my-4 font-bold">19/20</p>
            <progress className="hidden md:flex progress progress-primary w-56" value="19" max="20"></progress>
            <div className="md:hidden md:flex">
              <p className="md:hidden text-lg font-semibold">Conexiones</p>
              <p className="md:hidden text-gray-600">Último mes</p>              
            </div>
          </div>          

          <div className="text-center card my-5 bg-base-100 shadow-xl border border-gray-300 p-6">
            <div className="flex">
              <div className="m-auto md:m-0">
                <FontAwesomeIcon icon={faChartLine} className="text-5xl text-sky-500 md:me-4" />
              </div>
              <div className="hidden md:inline">
                <p className="text-lg font-semibold">Progreso</p>
                <p className="text-gray-600">Actividades</p>              
              </div>
            </div>
            <p className="text-2xl my-4 font-bold">38/100</p>
            <progress className="hidden md:flex progress progress-info w-56" value="38" max="100"></progress>
            <div className="md:hidden md:flex">
              <p className="md:hidden text-lg font-semibold">Progreso</p>
              <p className="md:hidden text-gray-600">Actividades</p>              
            </div>
          </div>   
          
          <div className="text-center card my-5 bg-base-100 shadow-xl border border-gray-300 p-6">
            <div className="flex">
              <div className="m-auto md:m-0">
                <FontAwesomeIcon icon={faStar} className="text-5xl text-amber-500  md:me-4" />
              </div>
              <div className="hidden md:inline">
                <p className="text-lg font-semibold">Logros obtenidos</p>
                <p className="text-gray-600">Esta semana</p>              
              </div>
            </div>
            <p className="text-2xl my-4 font-bold">25/40</p>
            <progress className="hidden md:flex progress progress-warning w-56" value="25" max="40"></progress>
            <div className="md:hidden md:flex">
              <p className="md:hidden text-lg font-semibold">Logros</p>
              <p className="md:hidden text-gray-600">Esta semana</p>              
            </div>
          </div>          
        </div>
      </div>
    </>
  );
};

export default Perfil;
