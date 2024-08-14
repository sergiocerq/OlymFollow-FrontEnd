import { useState } from "react";
import { FetcherFactory } from "../../data/fetchers/FetcherFactory";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { styleToastError } from "../../styles";
import {handleToken} from "../../utils.js";

const fetcherFactory = new FetcherFactory();

export const useLogin = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [isValidCredentials, setIsValidCredentials] = useState(true);

  const validateCredentials = () => {
    if (login.email === "" || !login.email.includes("@")) {
      toast.error("Email inválido. Por favor, insira um email válido.", {
        style: styleToastError,
        duration: 3000,
      });
      setIsValidCredentials(false);
    }
    if (!login.password || login.password.length < 4) {
      toast.error("Senha inválida. Por favor, insira uma senha válida.", {
        style: styleToastError,
        duration: 3000,
      });
      setIsValidCredentials(false);
    }
  }

  const handleSubmit = async () => {
    validateCredentials();
    if(isValidCredentials) {

      const loginFetcher = fetcherFactory.createLoginFetcher();
      const user = await loginFetcher.login(login.email, login.password);

      let token = handleToken(user.headers['authorization']);
      sessionStorage.setItem("token", token);
      
      if (token) {
        navigate("/");
      }
    }
  };

  return { login, setLogin, showPassword, setShowPassword, handleSubmit };
};
