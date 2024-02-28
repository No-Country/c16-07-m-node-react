import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faGoogle } from "@fortawesome/free-brands-svg-icons/faGoogle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CompleteAccount from "./CompleteAccount";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateAccount>();

  const handleCreateAccount = (data: ICreateAccount) => {
    console.log(data);
    if(data !== null){
      setCreateAccount(!createAccount);
    }
  };

  const handleChange = () => {
    setNewUser(!newUser);
  };

  return (
    <div className="w-full flex flex-col gap-4 p-5">
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
            <button type="submit" className="w-full btn btn-primary ">
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
        <CompleteAccount />
      )}
    </div>
  );
};
