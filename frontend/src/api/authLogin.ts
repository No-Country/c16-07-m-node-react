import instance from './axios';
interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: any; // Reemplaza 'any' con el tipo adecuado para tus datos de usuario
}

export const loginRequest = async (data: LoginData): Promise<LoginResponse> => {
  try {
    const response = await instance.post('/users/login', data);
    const token = response.headers.authorization.split(' ')[1];
    // Aquí asumimos que la información del usuario viene en el cuerpo de la respuesta
    const user = response.data;
    console.log('Response:', response); // Imprime la respuesta completa
    console.log('Token:', token); // Imprime el token
    console.log('User:', user); // Imprime los datos del usuario
    
    return { token, user };
  } catch (error) {
    console.log('Error:', error); // Imprime el error
    throw error;
  }
};
