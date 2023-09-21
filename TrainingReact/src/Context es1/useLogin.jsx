import { UserDetails } from "./database";
import { useState, useContext } from "react";

export function useLogin() {
  const [isLogged, setLog] = useState(false);
  const [user, setUser] = useState({ username: "", password: "" });
  const value = useContext(UserDetails);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  function handleSubmit() {
    if (user.username === value.username && user.password === value.password) {
      setLog(true);
    } else {
      alert("User not exist");
    }
  }

  function handleReset() {
    setLog(false);
    setUser({ username: "", password: "" });
  }

  return { handleSubmit, handleReset, handleInput, isLogged, user };
}
