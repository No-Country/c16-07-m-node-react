import React, { createContext, useState, ReactNode } from 'react';

// Define la forma de los datos de registro
interface RegistrationData {
  address?: string;
  aboutMe?: string;
  birthdate?: string;
  country?: string;
  email: string; // email y password son obligatorios para el registro
  firstName?: string;
  lastName?: string;
  observations?: string;
  password: string;
  phone?: string;
  postalCode?: string;
  // Agrega aquí cualquier otro campo que necesites
}

// Define la forma del valor del contexto
interface RegistrationContextValue {
  userData: RegistrationData;
  setUserData: (newData: RegistrationData) => void;
}

// Crea el contexto con un valor inicial que coincida con la estructura de RegistrationContextValue
const defaultRegistrationContextValue: RegistrationContextValue = {
  userData: {} as RegistrationData, // asume que userData puede empezar como un objeto vacío
  setUserData: () => {}, // proporciona una función vacía como placeholder
};

export const UserRegistrationContext = createContext<RegistrationContextValue>(defaultRegistrationContextValue);

// Define las props para el componente proveedor
interface UserRegistrationProviderProps {
  children: ReactNode;
}

// Define el componente proveedor con los tipos correctos
export const UserRegistrationProvider: React.FC<UserRegistrationProviderProps> = ({ children }) => {
  // Inicializa userData con un objeto vacío y asértalo al tipo RegistrationData
  const [userData, setUserData] = useState<RegistrationData>({} as RegistrationData);

  // Retorna el proveedor del contexto con el valor actualizado y los children
  return (
    <UserRegistrationContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserRegistrationContext.Provider>
  );
};
