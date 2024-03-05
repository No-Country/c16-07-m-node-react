import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faGoogle } from "@fortawesome/free-brands-svg-icons/faGoogle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { set, useForm } from "react-hook-form";
import CompleteAccount from "./CompleteAccount";
import { RenderIf } from "./RenderIf";
import DatosSegundoNivel from "./DatosSegundoNivel";
import DatosExtras from "./DatosExtras";
import axios from "axios";

interface ICreateAccount {
  username: string;
  email: string;
  password: string;
}

interface IProps {
  newUser: boolean;
  setNewUser: (value: boolean) => void;
}

export const CreateAccount = ({ newUser, setNewUser }: IProps) => {
  const [createAccount, setCreateAccount] = useState(true);

  const [step, setStep] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateAccount>();

  const handleCreateAccount = async (data: ICreateAccount) => {
    console.log(data);
    try {
      const response = await axios.post(
        "https://c16-07-m-node-react.onrender.com/users/",
        data
      );
      setCreateAccount(!createAccount);
    } catch (error) {
      console.log("error al crear usuario", error);
    }
  };

  const handleChange = () => {
    setNewUser(!newUser);
  };

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 p-5">
      <RenderIf condition={step > 0}>
        <ul className="steps">
          <li className={`step ${step >= 1 ? "step-primary" : ""}`}>
            Datos principales
          </li>
          <li className={`step ${step >= 2 ? "step-primary" : ""}`}>
            Datos adicionales
          </li>
          <li className={`step ${step >= 3 ? "step-primary" : ""}`}>
            Datos Extra
          </li>
        </ul>
      </RenderIf>
      {createAccount ? (
        <>
          <h1 className="text-center">Crear cuenta</h1>
          <form
            onSubmit={handleSubmit(handleCreateAccount)}
            className="flex flex-col gap-3"
          >
            <input
              type="text"
              placeholder="Nombre de usuario"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("username")}
            />
            {errors.username && <span>Usuario es requerido</span>}
            <input
              type="text"
              placeholder="Correo"
              {...register("email")}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.email && <span>Email es requerido</span>}
            <input
              type="password"
              placeholder="Contraseña"
              {...register("password")}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.password && <span>Constraseña es requerida</span>}
            <button
              type="submit"
              className="w-full btn bg-amber-400"
              onClick={nextStep}
            >
              Crear cuenta
            </button>
          </form>
          <div className="w-full flex flex-col items-center gap-5">
            <div className="divider">O conectate con</div>
            <div className="flex justify-center gap-5">
              <button className="btn btn-outline btn-primary">
                <FontAwesomeIcon icon={faFacebook} />
                Facebook
              </button>
              <button className="btn btn-outline btn-primary">
                <FontAwesomeIcon icon={faGoogle} />
                Google
              </button>
            </div>
            <p>¿Ya tienes una cuenta?</p>
            <button
              className="btn btn-secondary btn-link w-min whitespace-nowrap"
              onClick={handleChange}
            >
              Iniciar sesión
            </button>
          </div>
        </>
      ) : (
        <>
          <RenderIf condition={step === 1}>
            <CompleteAccount />
          </RenderIf>
          <RenderIf condition={step === 2}>
            <DatosSegundoNivel />
          </RenderIf>
          <RenderIf condition={step === 3}>
            <DatosExtras />
          </RenderIf>
        </>
      )}
      <div className="w-full flex flex-row justify-end gap-5">
        <RenderIf condition={step !== 0}>
          <button className="btn btn-outline text-blue-500">
            Omitir ese paso
          </button>
          <button onClick={prevStep} className="btn bg-amber-400">
            Anterior
          </button>
        </RenderIf>
        <RenderIf condition={step <= 2}>
          <button className="btn bg-amber-400" onClick={nextStep}>
            Siguiente
          </button>
        </RenderIf>
        <RenderIf condition={step === 3}>
          <button className="btn bg-amber-400">Finalizar</button>
        </RenderIf>
      </div>
    </div>
  );
};
