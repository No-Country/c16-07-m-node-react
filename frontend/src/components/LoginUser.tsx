// src/Login.tsx
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
    };
    const handleChange = () => {
        setNewUser(!newUser);
    };

    return (
        <div className="max-w-sm mx-auto flex flex-col gap-4">
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

                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Iniciar Sesión
                    </button>
                </div>
            </form>
            <button
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={handleChange}>
                Crear cuenta
            </button>
        </div>
    );
};
