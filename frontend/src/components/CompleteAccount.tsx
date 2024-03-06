import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserRegistrationContext } from "../context/UserRegistrationContext";
import { registerUser } from "../api/authRegister";

interface CompleteAccountFormData {
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

export default function CompleteAccount() {
  const { register, handleSubmit, formState: { errors } } = useForm<CompleteAccountFormData>();
  const context = useContext(UserRegistrationContext);

  if (!context) {
    throw new Error('CompleteAccount debe estar dentro del ámbito de un UserRegistrationProvider');
  }

  // Corrección: Se elimina 'updateRegistrationData' si no se está utilizando.
  const { userData } = context;

  const handleCompleteAccount = async (data: CompleteAccountFormData) => {
    // Combina los datos de userData con los de CompleteAccount
    const completeData = {
      ...userData,
      ...data
    };

    try {
      // Envía todos los datos combinados al backend
      const response = await registerUser(completeData);
      console.log(response.data); // Aquí puedes manejar la respuesta del servidor
      // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito
    } catch (error) {
      console.error(error); // Manejo de errores
      // Aquí puedes mostrar un mensaje de error al usuario
    }
  };

  return (
    <section className="w-full flex flex-col gap-5">
      <p className="text-center font-bold text-xl">Completa tus datos</p>
      <form onSubmit={handleSubmit(handleCompleteAccount)} className="w-full flex flex-col">
        <input {...register("address", { required: true })} placeholder="Dirección" />
        {errors.address && <span>La dirección es requerida.</span>}

        <textarea {...register("aboutMe")} placeholder="Sobre mí" />
        
        <input type="date" {...register("birthdate", { required: true })} placeholder="Fecha de nacimiento" />
        {errors.birthdate && <span>La fecha de nacimiento es requerida.</span>}

        <input {...register("country", { required: true })} placeholder="País" />
        {errors.country && <span>El país es requerido.</span>}

        <input {...register("email", { required: true })} placeholder="Correo electrónico" />
        {errors.email && <span>El correo electrónico es requerido.</span>}

        <input {...register("firstName", { required: true })} placeholder="Nombre" />
        {errors.firstName && <span>El nombre es requerido.</span>}

        <input {...register("lastName", { required: true })} placeholder="Apellido" />
        {errors.lastName && <span>El apellido es requerido.</span>}

        <textarea {...register("observations")} placeholder="Observaciones" />

        <input type="password" {...register("password", { required: true })} placeholder="Contraseña" />
        {errors.password && <span>La contraseña es requerida.</span>}

        <input {...register("phone", { required: true })} placeholder="Teléfono" />
        {errors.phone && <span>El teléfono es requerido.</span>}

        <input {...register("postalCode", { required: true })} placeholder="Código postal" />
        {errors.postalCode && <span>El código postal es requerido.</span>}

        <div className="w-full flex justify-end mt-4">
          <button type="submit" className="btn btn-primary">
            Crear Cuenta
          </button>
        </div>
      </form>
    </section>
  );
}
