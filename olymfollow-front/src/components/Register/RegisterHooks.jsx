import { useState } from "react";
import { FetcherFactory } from "../../data/fetchers/FetcherFactory";
import { toast } from "sonner";
import { styleToastError } from "../../styles";

const fetcherFactory = new FetcherFactory();

export const useRegister = () => {
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
      const loginFetcher = fetcherFactory.createRegisterFetcher();
      const user = await loginFetcher.register(register);
    }
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
