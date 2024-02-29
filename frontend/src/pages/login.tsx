import { useState } from "react";
import { LoginUser } from "../components/LoginUser";
import { CreateAccount } from "../components/CreateAccount";
import LoginImg from "../../public/assets/image/login.jpg";


export default function Login() {

  const [newUser, setNewUser] = useState(true)

  const handleNewUser = () => {
    setNewUser(!newUser)
  }
  return (
    <div className="w-full flex flex-row gap-3">
      <div className="w-full flex flex-col items-center">
        <img src={LoginImg} width="380" />
      </div>
      <div className="w-full flex flex-col items-start">
        {newUser ?
          <LoginUser newUser setNewUser={handleNewUser} />
          :
          <CreateAccount newUser setNewUser={handleNewUser} />
        }
      </div>
    </div>
  );
}
