import { useEffect } from "react";

import { Welcome } from "./welcomeuser";
import { useLogin } from "./useLogin";

export default function Login() {
  const { handleSubmit, handleReset, handleInput, isLogged, user } = useLogin();

  useEffect(() => {
    return () => {
      console.log(user.username);
    };
  }, [user.username]);

  return (
    <div>
      <input
        type="text"
        value={user.username}
        name="username"
        onChange={handleInput}
      />
      <input
        type="password"
        value={user.password}
        name="password"
        onChange={handleInput}
      />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleReset}>Reset</button>
      <div>{isLogged ? <Welcome /> : "Please Log in"}</div>
    </div>
  );
}
