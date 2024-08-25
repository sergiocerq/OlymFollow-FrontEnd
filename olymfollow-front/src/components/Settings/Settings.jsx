import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Settings.css";
import { NavBar } from "../navbar/NavBar.jsx";
import { PaisesFavoritados } from "../Paises/PaisesFavoritados.jsx";
import { FetcherFactory } from "../../data/fetchers/FetcherFactory";
import { UserInfo } from "../UserInfo/UserInfo.jsx";
import userImageDefault from "../../assets/user-profile-icon.png";
import { DangerZone } from "../DangeZone/DangeZone.jsx";
import { Toaster } from "sonner";
import gridPhoto from "../../assets/grid-user-info.png";
import { motion } from "framer-motion";

const fecherFactory = new FetcherFactory();

/**
 * Componente Settings para gerenciar as configurações do usuário.
 *
 * @description Este componente permite que o usuário visualize e atualize suas configurações. Ele utiliza hooks para gerenciar
 * o estado local e efeitos colaterais, como buscar as configurações atuais do usuário e salvar as alterações.
 *
 * @example
 * <Settings />
 *
 * @returns {JSX.Element} O JSX a ser renderizado, que contém as configurações do usuário.
 */
export const Settings = () => {
  const hasToken = sessionStorage.getItem("token");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [userImage, setUserImage] = useState("");
  const [isAdmin, setIsAdmin] = useState("");
  const [favoritesCountries, setFavoritesCountries] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const userFetcher = fecherFactory.createUserFetcher();
      const user = await userFetcher.getCurrentUser();
      setNome(user.username);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
      let userImageUrl = user.pictureUrl;
      if (!userImageUrl) userImageUrl = userImageDefault;
      setUserImage(userImageUrl);
      setFavoritesCountries(user.inscricoes);
    };
    fetchUser();
  }, []);

  return (
    <>
      {hasToken && <NavBar isAdmin={isAdmin} />}
      <Toaster position="top-right" />
      <div className="main-div-settings">
        <ul className="list-settings">
          <motion.li>
            <UserInfo nome={nome} email={email} userImage={userImage} />
          </motion.li>
          <li>
            <PaisesFavoritados countries={favoritesCountries} />
          </li>
          <li>
            <DangerZone />
          </li>
        </ul>
      </div>
    </>
  );
};
