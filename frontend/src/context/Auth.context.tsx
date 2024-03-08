import { useEffect } from "react";
import { createContext, useContext, useState,ReactNode } from "react";
import Cookies from "js-cookie";
import {registerUser} from "../api/authRegister";
import {loginRequest} from "../api/authLogin"; 


type AuthContextType = {
    user: any; // Reemplaza any con el tipo adecuado para tu usuario
    signin: (email: string, password: string) => Promise<void>;
    signup: (user: any, handleChange: () => void) => Promise<void>;// Reemplaza any con el tipo adecuado para tu usuario
    logout: () => void;
    isAuthenticated: boolean;
    errors: any[]; // Reemplaza any con el tipo adecuado para tus errores
    loading: boolean;
  };

  const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within a AuthProvider");
    return context;
  };


  export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);
  
 
  
    // clear errors after 5 seconds
    useEffect(() => {
      if (errors.length > 0) {
        const timer = setTimeout(() => {
          setErrors([]);
        }, 5000);
        return () => clearTimeout(timer);
      }
    }, [errors]);
  
    /** 
     * ? Signup es una función asíncrona que hace una solicitud HTTP al servidor para registrar un usuario.
     * *se usa en el componente Register.jsx
     */

// En tu contexto

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

const signup = async (data: CreateAccountFormData, handleChange: () => void) => {
    try {
      const userData = await registerUser(data);
      setUser(userData);
      handleChange(); // Llama a handleChange que redirecciona al inicio de sesión
    } catch (error) {
      console.error(error);
      // Aquí  se puede mostrar un mensaje de error al usuario
    }
  };

  

// En tu contexto
const signin = async (email: string, password: string) => {
  try {
    const loginData = { email, password };
    const { token, user } = await loginRequest(loginData);
    Cookies.set('token', token);
    setUser(user);
    setIsAuthenticated(true);
  } catch (error) {
    console.error('Error al iniciar sesión', error);
  }
};



  /**
   * ? Signin es una función asíncrona que hace una solicitud HTTP al servidor para iniciar sesión. 
   * *Se usa en el componente Login.jsx
   */
  
  
  
    const logout = () => {
      Cookies.remove("token");// Aquí se eliminan las cookies
      setUser(null);
      setIsAuthenticated(false);
    };
  /** 
   * ? Aquí se verifica si el usuario está autenticado o no.
   * *Se usa en el componente App.jsx, esto es para que el usuario no pueda acceder a las rutas protegidas si no está autenticado.
   * *El useEffect dentro del AuthProvider se activa cuando este componente se monta, es decir, cuando se renderiza por primera vez.
    */
  
   useEffect(() => {
  const checkLogin = () => {
    const cookies = Cookies.get();
    if (!cookies.token) {
      setIsAuthenticated(false);
      setLoading(false);
    } else {
      setIsAuthenticated(true);
      setLoading(false);
    }
  };
  checkLogin();
}, []);
  
    return (
      <AuthContext.Provider
        value={{
          user,
          signup,
          signin,
          logout,
          isAuthenticated,
          errors,
          loading,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthContext;