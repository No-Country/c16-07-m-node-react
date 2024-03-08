import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/Auth.context";

interface CreateAccountFormData {
  address: string;
  aboutMe: string;
  birthdate: string;
  country: string;
  email: string;
  firstName: string;
  lastName: string;
  observations: string;
  password: string;
  phone: string;
  postalCode: string;
}
interface IProps {
  newUser: boolean;
  setNewUser: (value: boolean) => void;
}

export const CreateAccount = ({ newUser, setNewUser }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountFormData>();
  

  const {signup} =useAuth();
  

  

  const handleChange = () => {
    setNewUser(!newUser);
  };
  const onSubmit = (data: CreateAccountFormData) => {
    signup(data, handleChange);
  };
  

  return (
    <section className="w-full max-w-xl mx-auto  bg-white rounded-lg   ">
     
      
<div className= "gap-2 p-12 " >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4 ">
        Crea Cuenta
      </h2>
      <p className="text-center text-xl font-bold text-sky-500">Acompañar +</p>
  
   </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            id="firstName"
            {...register("firstName", { required: true })}
            placeholder="Nombre"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.firstName && (
            <span className="text-xs text-red-600">
              El nombre es requerido.
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="text-sm font-medium text-gray-700"
          >
            Apellido
          </label>
          <input
            id="lastName"
            {...register("lastName", { required: true })}
            placeholder="Apellido"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.lastName && (
            <span className="text-xs text-red-600">
              El apellido es requerido.
            </span>
          )}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Correo electrónico
          </label>
          <input
            id="email"
            {...register("email", { required: true })}
            placeholder="Correo electrónico"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.email && (
            <span className="text-xs text-red-600">
              El correo electrónico es requerido.
            </span>
          )}
        </div>

       <div>
          <label
            htmlFor="password"
             className="text-sm font-medium text-gray-700"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            {...register("password", { required: true })}
            placeholder="Contraseña"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.password && (
            <span className="text-xs text-red-600">
              La contraseña es requerida.
            </span>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Teléfono
          </label>
          <input
            id="phone"
            {...register("phone", { required: true })}
            placeholder="Teléfono"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.phone && (
            <span className="text-xs text-red-600">
              El teléfono es requerido.
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="address"
            className="text-sm font-medium text-gray-700"
          >
            Dirección
          </label>
          <input
            id="address"
            {...register("address", { required: true })}
            placeholder="Dirección"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.address && (
            <span className="text-xs text-red-600">
              La dirección es requerida.
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="country"
            className="text-sm font-medium text-gray-700"
          >
            País
          </label>
          <input
            id="country"
            {...register("country", { required: true })}
            placeholder="País"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.country && (
            <span className="text-xs text-red-600">El país es requerido.</span>
          )}
        </div>

        <div>
          <label
            htmlFor="postalCode"
            className="text-sm font-medium text-gray-700"
          >
            Código postal
          </label>
          <input
            id="postalCode"
            {...register("postalCode", { required: true })}
            placeholder="Código postal"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.postalCode && (
            <span className="text-xs text-red-600">
              El código postal es requerido.
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="birthdate"
            className="text-sm font-medium text-gray-700"
          >
            Fecha de nacimiento
          </label>
          <input
            id="birthdate"
            type="date"
            {...register("birthdate", { required: true })}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.birthdate && (
            <span className="text-xs text-red-600">
              La fecha de nacimiento es requerida.
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="aboutMe"
            className="text-sm font-medium text-gray-700"
          >
            Sobre mí
          </label>
          <textarea
            id="aboutMe"
            {...register("aboutMe")}
            placeholder="Sobre mí"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="observations"
            className="text-sm font-medium text-gray-700"
          >
            Observaciones
          </label>
          <textarea
            id="observations"
            {...register("observations")}
            placeholder="Observaciones"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleChange}
            className="px-6 py-3 my-3 mx-3 bg-amber-500 text-white font-semibold rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-opacity-50"
          >
            Iniciar Sesión
          </button>
          <button
            type="submit"
            className="px-6 py-3 my-3 bg-sky-500 text-white font-semibold rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-opacity-50"
          >
            Crear Cuenta
          </button>
          
        </div>
        
      </form>
     
    </section>
  );
};

export default CreateAccount;
