import React, { useState } from "react";
import "./login.css";
import { FetcherFactory } from "../../data/fetchers/FetcherFactory";

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
