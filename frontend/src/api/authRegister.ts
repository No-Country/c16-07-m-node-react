// authRegister.ts

import instance from './axios';

interface ICreateAccount {
  email: string;
  password: string;
  // se puede agregar aquí cualquier otro campo que se necesite para el registro
}

// Esta función se encarga de registrar un nuevo usuario en el backend.
export const registerUser = async (data: ICreateAccount) => {
  try {
    const response = await instance.post('/users/', data);
    return response.data; // Asumimos que queremos devolver los datos de la respuesta
  } catch (error) {
    // Aquí podrías manejar el error de manera más específica si es necesario
    throw error;
  }
};
