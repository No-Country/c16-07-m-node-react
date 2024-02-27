// src/Login.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useForm } from "react-hook-form";

interface IFromLogin {
    username: string;
    password: string;
}

interface IProps {
    newUser: boolean;
    setNewUser: (value: boolean) => void;
}

export const LoginUser = ({ newUser, setNewUser }: IProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFromLogin>();

    const handleSubmitLogin = (data: IFromLogin) => {
        console.log(data);
        //push to home 
        window.location.href = "/";
    };
    const handleChange = () => {
        setNewUser(!newUser);
    };

    return (
        <div className="w-full flex flex-col gap-4 p-5">
            <p className="font-bold">Inicia Sesón</p>

            <p className="text-center text-2xl font-bold text-primary">Acompañar +</p>
            <form
                onSubmit={handleSubmit(handleSubmitLogin)}
                className="mt-8 space-y-6"
            >
                <div>
                    <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Usuario o Correo
                    </label>
                    <div className="mt-1">
                        <input
                            id="username"
                            type="text"
                            {...register("username", { required: true })}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.username && (
                            <span className="text-red-500">Username is required</span>
                        )}
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Contraseña
                    </label>
                    <div className="mt-1">
                        <input
                            type="password"
                            id="password"
                            {...register("password", { required: true })}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Iniciar Sesión
                    </button>
                </div>
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
