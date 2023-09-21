import { UserDetails } from "./database";
import { useContext } from "react";

export function Welcome() {
  const value = useContext(UserDetails);
  return <h1>Ciao,{value.username}</h1>;
}
