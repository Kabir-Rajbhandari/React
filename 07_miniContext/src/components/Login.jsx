import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

//fetch
export default function Login() {
  //state changer
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // context
  const { setUser } = useContext(UserContext);

  //method
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <>
      <div
        className="w-[100%] h-[500px] flex
       items-center justify-center flex-col"
      >
        <h2>Login </h2>
        <div className="my-4 block">
          <label>Username: </label>
          <input
            className="px-2 py-1 text-black"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div>
          <label>Password: </label>
          <input
            className="px-2 py-1 text-black"
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          className="bg-white px-4 py-2 font-bold mt-3 rounded text-black"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
}
