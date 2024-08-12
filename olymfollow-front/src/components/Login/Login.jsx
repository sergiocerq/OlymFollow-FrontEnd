import React, { useState } from "react";
import "./login.css";

const fetcherFactory = new FetcherFactory();

export const Login = () => {

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    const loginFetcher = fetcherFactory.createLoginFetcher();
    const user = await loginFetcher.login(login.email, login.password);
  }

  return <div>Login</div>;
};
