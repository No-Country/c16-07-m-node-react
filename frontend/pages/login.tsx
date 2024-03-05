import { useState } from "react";
import { LoginUser } from "../src/components/LoginUser";
import { CreateAccount } from "../src/components/CreateAccount";


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
