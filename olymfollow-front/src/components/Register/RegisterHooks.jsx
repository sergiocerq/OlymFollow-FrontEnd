import { useState } from "react";
import { FetcherFactory } from "../../data/fetchers/FetcherFactory";

const fetcherFactory = new FetcherFactory();

export const useRegister = () => {
  const [register, setRegister] = useState({ username: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmationPassword, setShowConfirmationPassword ] = useState(false)
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);

  const handleSubmit = async () => {
    const loginFetcher = fetcherFactory.createRegisterFetcher();
    const user = await loginFetcher.register(register);
  };

  return { register, setRegister, showPassword, setShowPassword, handleSubmit, isInvalidPassword, setIsInvalidPassword, showConfirmationPassword, setShowConfirmationPassword};
};
