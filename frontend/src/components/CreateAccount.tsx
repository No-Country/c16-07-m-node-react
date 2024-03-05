import { useForm } from "react-hook-form"

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

    const { register, handleSubmit, formState: { errors } } = useForm<ICreateAccount>()

    const handleCreateAccount = (data: ICreateAccount) => {
        console.log(data)
    }

    const handleChange = () => {
        setNewUser(!newUser);
    };

    return (
        <div className="max-w-sm mx-auto flex flex-col gap-4">
            <h1 className="text-center">Crear cuenta</h1>
            <form onSubmit={handleSubmit(handleCreateAccount)} className="flex flex-col gap-3">
                <input type="text" placeholder="Nombre de usuario"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...register('username')} />
                {errors.username && <span>Usuario es requerido</span>}
                <input type="text" placeholder="Correo" {...register('email')}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                {errors.email && <span>Email es requerido</span>}
                <input type="password" placeholder="Contraseña" {...register('password')}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                {errors.password && <span>Constraseña es requerida</span>}
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Crear cuenta</button>
            </form>
            <button
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={handleChange}>
                Ya tengo cuenta
            </button>
        </div>
    )
}