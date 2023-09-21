import { useState } from "react";
import React from "react";
import Login from "./login";

export const UserDetails = React.createContext();

export default function Database() {
  const [data, setData] = useState({ username: "Lorenzo", password: "jef" });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <UserDetails.Provider value={data}>
        <Login />
      </UserDetails.Provider>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div
        style={{
          border: "1px solid red",
        }}
      >
        Cambia Database
        <input
          type="text"
          value={data.username}
          name="username"
          onChange={handleInput}
        />
        <input
          type="password"
          value={data.password}
          name="password"
          onChange={handleInput}
        />
      </div>
    </div>
  );
}
