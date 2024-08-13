import { useState } from "react";
import { FetcherFactory } from "../../data/fetchers/FetcherFactory";

const fetcherFactory = new FetcherFactory();

export const useLogin = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async () => {
    const loginFetcher = fetcherFactory.createLoginFetcher();
    const user = await loginFetcher.login(login.email, login.password);

    console.log(user)
  };

  return { login, setLogin, showPassword, setShowPassword, handleSubmit };
};
