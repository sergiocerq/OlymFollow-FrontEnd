import { useState } from "react";
import { FetcherFactory } from "../../data/fetchers/FetcherFactory";
import { useNavigate } from "react-router-dom";

const fetcherFactory = new FetcherFactory();

export const useLogin = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const loginFetcher = fetcherFactory.createLoginFetcher();
    const user = await loginFetcher.login(login.email, login.password);

    sessionStorage.setItem("token", user.token);

    if (user.token) {
      navigate("/");
    }
  };

  return { login, setLogin, showPassword, setShowPassword, handleSubmit };
};
