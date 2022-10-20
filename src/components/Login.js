import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [data, setData] = useState({
    userName: "john doe",
    password: "r3@ct",
  });

  const [inputData, setInputData] = useState({
    userName: "",
    password: "",
    submit: false,
  });
  const navigate = useNavigate();

  const submitHandle = (e) => {
    e.preventDefault();

    if (
      data.userName === inputData.userName &&
      data.password === inputData.password
    ) {
      console.log(inputData);

      navigate("/home");
    } else {
      setInputData({ ...inputData, submit: true });
    }
  };

  return (
    <>
      <h1>Login</h1>
      {inputData.submit && (
        <p className="alertPara">The username or password is incorrect!</p>
      )}
      <form action="POST" onSubmit={submitHandle}>
        <input
          onChange={(e) =>
            setInputData({ ...inputData, userName: e.target.value })
          }
          type="text"
          name="userName"
          placeholder="Username"
        />

        <input
          onChange={(e) =>
            setInputData({ ...inputData, password: e.target.value })
          }
          type="password"
          name="password"
          placeholder="Password"
        />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
