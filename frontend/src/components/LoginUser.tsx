import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { UserRegistrationContext } from "../context/UserRegistrationContext";
import { loginRequest } from "../api/auth";
interface IFormLogin {
    email: string; // Cambiado de username a email para reflejar el uso correcto
    password: string;
}

interface IProps {
    newUser: boolean;
    setNewUser: (value: boolean) => void;
}

export const LoginUser = ({ newUser, setNewUser }: IProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormLogin>();
    const { setUserData } = useContext(UserRegistrationContext);
    const navigate = useNavigate();

    const onSubmit = async (data: IFormLogin) => {
        try {
            // Asegúrate de que la estructura de data coincida con lo esperado por loginRequest
            const loginData = { email: data.email, password: data.password };
            const { token, user } = await loginRequest(loginData);
            localStorage.setItem('token', token);
            setUserData(user);
            navigate('/');
        } catch (error) {
            console.error('Error al iniciar sesión', error);
        }
    };

    const handleChange = () => {
        setNewUser(!newUser);
    };

    return (
        <div className="w-full flex flex-col gap-4 p-5">
            <p className="font-bold">Inicia Sesión</p>
            <p className="text-center text-2xl font-bold text-primary">Acompañar +</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Correo Electrónico
                    </label>
                    <div className="mt-1">
                        <input
                            id="email"
                            type="email"
                            {...register("email", { required: true })}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.email && (
                            <span className="text-red-500">El correo electrónico es requerido</span>
                        )}
                    </div>
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Contraseña
                    </label>
                    <div className="mt-1">
                        <input
                            id="password"
                            type="password"
                            {...register("password", { required: true })}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.password && (
                            <span className="text-red-500">La contraseña es requerida</span>
                        )}
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <button type="submit" className="btn btn-primary">
                        Iniciar Sesión
                    </button>
                </div>
            </form>
            <div className="w-full flex flex-col items-center gap-5">
                <div className="divider">O conéctate con</div>
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
                <p>¿No tienes cuenta?</p>
                <button
                    className="btn btn-secondary btn-link w-min whitespace-nowrap"
                    onClick={handleChange}>
                    Crear cuenta
                </button>
            </div>
        </div>
    );
};

export default LoginUser;
