import { useState } from "react";
import { FetcherFactory } from "../../data/fetchers/FetcherFactory";
import { toast } from "sonner";
import { styleToastError } from "../../styles";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const fetcherFactory = new FetcherFactory();

export const useRegister = () => {
  const navigator = useNavigate();
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmationPassword, setShowConfirmationPassword] =
    useState(false);
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);

  const handleSubmit = async () => {
    validateCredentials();
    if(!isInvalidPassword) {
      // const loginFetcher = fetcherFactory.createRegisterFetcher();
      // const user = await loginFetcher.register(register);

      // console.log(user)

    }
    const response = await axios.post("http://localhost:8080/user/register", {
      email: register.email,
      password: register.password,
      username: register.username,
    }).catch(reason => {
      if(reason.response.status === 400){
        reason.response.data.foreach((value) => {
          toast.error(value, {
            style: styleToastError,
            duration: 3000,
          });
        });
        return;
      }
      toast.error(reason.response.data, {
        style: styleToastError,
        duration: 3000,
      });
    }).then(response => {
      if(response.status === 201) navigator("/");
    });

  };

  const validateCredentials = () => {
    if (register.username === "" || !register.username) {
      setIsInvalidPassword(true);
      toast.error("Nome inválido. Por favor, insira um nome válido.", {
        style: styleToastError,
        duration: 3000,
      });
    }
    if (register.email === "" || !register.email.includes("@")) {
      setIsInvalidPassword(true);
      toast.error("Email inválido. Por favor, insira um email válido.", {
        style: styleToastError,
        duration: 3000,
      });
    }
    if (!register.password || register.password.length < 4) {
      setIsInvalidPassword(true);
      toast.error("Senha inválida. Por favor, insira uma senha válida.", {
        style: styleToastError,
        duration: 3000,
      });
    }
    if (register.password !== register.passwordConfirmation) {
      setIsInvalidPassword(true);
      toast.error("Senhas não conferem. Por favor, insira senhas iguais.", {
        style: styleToastError,
        duration: 3000,
      });
    }
  };

  return {
    register,
    setRegister,
    showPassword,
    setShowPassword,
    handleSubmit,
    isInvalidPassword,
    setIsInvalidPassword,
    showConfirmationPassword,
    setShowConfirmationPassword,
  };
};
