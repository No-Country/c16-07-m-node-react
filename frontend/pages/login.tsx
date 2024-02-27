import { useState } from "react";
import { LoginUser } from "../src/components/LoginUser";
import { CreateAccount } from "../src/components/CreateAccount";
import loginImg from "../public/assets/image/login.jpg";


export default function Login() {

  const [newUser, setNewUser] = useState(true)

  const handleNewUser = () => {
    setNewUser(!newUser)
  }
  return (
    <div className="w-full flex flex-row gap-3">
      <div className="w-full flex flex-col items-center">
        <img src={loginImg} width="380" />
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
