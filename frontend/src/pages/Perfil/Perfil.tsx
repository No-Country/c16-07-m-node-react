import React from "react";
import Fondo from "./Fondo";

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

      <div className="flex justify-center">
        <div className="card w-1/2 my-5 bg-base-100 shadow-xl border border-gray-300">
          <div className="mx-5 my-5 flex items-start">
            <div className="avatar">
              <div className="w-24 rounded">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h2 className="text-dark font-inter font-medium text-xl leading-[35.659px] card-title">
              Sobre mi
            </h2>
            <p className="text-primary-text font-inter font-normal text-lg leading-[32.687px]">
              Me considero una persona sociable y con mucha energía disponible,
              soy viudo desde hace 3 años tengo 2 hijos y 3 nietos. Amigable,
              jovial y de buen gusto.
            </p>
            <h2 className="text-dark font-inter font-medium text-xl leading-[35.659px]">
              Mis intereses
            </h2>
            <div className="card-actions justify-center">
              {intereses.map((intereses, index) => (
                <div key={index} className="badge badge-primary">
                  {intereses}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Perfil;
