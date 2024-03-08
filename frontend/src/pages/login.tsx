import { useState } from "react";
import { LoginUser } from "../components/LoginUser";
import { CreateAccount } from "../components/CreateAccount";
import LoginImg from "../../public/assets/image/login.jpg";
import fondoManos from '../../public/assets/image/fondomanos.png';



export default function Login() {

  const [newUser, setNewUser] = useState(true)


  return (
    <div className="w-full flex flex-row gap-3">
      <div className="w-full flex flex-col items-center max-sm:hidden">
        <img src={newUser ? LoginImg : fondoManos} width="60%" />
      </div>
      <div className="w-full flex flex-col items-start ">
        {newUser ?
          <LoginUser newUser={newUser} setNewUser={setNewUser} />
          :
          <CreateAccount newUser={newUser} setNewUser={setNewUser} />
        }
      </div>
    </div>
  );
}
