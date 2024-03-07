import React from "react";

const Fondo = () => {
  return (
    <>
      <div className="absolute w-full h-3/4 bottom-0 bg-gradient-to-t from-sky-500 opacity-40"></div>
      <div
        className="sm:-translate-x-1"
        style={{
          position: "absolute",
          top: "30%",
          left: "78%"
        }}>
        <svg
          //   className="w-20 h-100 sm:w-auto sm:h-72"
          className="sm:w-auto h-100 sm:h-72"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 211"
          fill="none">
          <g className="opacity-50">
            <path
              d="M63.1579 0C75.6757 0 86.6762 2.55541 96.1593 7.66623C105.769 12.6493 113.166 19.9961 118.35 29.7066C123.66 39.2894 126.316 50.8526 126.316 64.3963V136.842H88.7624V107.135H36.9844V136.842H0V64.3963C0 50.8526 2.59207 39.2894 7.7762 29.7066C13.0868 19.9961 20.4836 12.6493 29.9668 7.66623C39.5764 2.55541 50.6401 0 63.1579 0ZM88.7624 77.8122V61.1381C88.7624 51.2998 86.4233 43.8891 81.7449 38.9061C77.0665 33.923 70.8077 31.4315 62.9682 31.4315C55.0024 31.4315 48.6803 33.923 44.0019 38.9061C39.3235 43.8891 36.9844 51.2998 36.9844 61.1381V77.8122H88.7624Z"
              fill="#0369A1"
            />
            <path
              d="M105.262 176.681V150.019H199.999V176.681H105.262ZM138.43 115.792H167.03V210.529H138.43V115.792Z"
              fill="#0EA5E9"
            />
          </g>
        </svg>
      </div>
    </>
  );
};

export default Fondo;
