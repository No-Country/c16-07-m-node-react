import { useState } from "react";
import { LoginUser } from "../components/LoginUser";
import { CreateAccount } from "../components/CreateAccount";


export default function Login() {

  const [newUser, setNewUser] = useState(true)

  const handleNewUser = () => {
    setNewUser(!newUser)
  }
  return (
    <div>
      {newUser ?
        <LoginUser newUser setNewUser={handleNewUser} />
        :
        <CreateAccount newUser setNewUser={handleNewUser} />
      }
    </div>
  );
}
