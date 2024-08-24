import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Settings.css";
import {NavBar} from "../navbar/NavBar.jsx";
import {PaisesFavoritados} from "../Paises/PaisesFavoritados.jsx";
import { FetcherFactory } from '../../data/fetchers/FetcherFactory';
import {UserInfo} from "../UserInfo/UserInfo.jsx";
import userImageDefault from "../../assets/user-profile-icon.png"
import {DangerZone} from "../DangeZone/DangeZone.jsx";
import {Toaster} from "sonner";

const fecherFactory = new FetcherFactory();

export const Settings = () => {
  const navigate = useNavigate();

  const hasToken = sessionStorage.getItem("token");
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
    const [userImage, setUserImage] = useState('');
    const [isAdmin, setIsAdmin] = useState('');
  const [favoritesCountries, setFavoritesCountries] = useState([]);

  useEffect(()=>{
      const fetchUser = async () => {
          const userFetcher = fecherFactory.createUserFetcher();
          const user = await userFetcher.getCurrentUser();
          setNome(user.username)
          setEmail(user.email)
          setIsAdmin(user.isAdmin)
          let userImageUrl = user.pictureUrl;
          if(!userImageUrl) userImageUrl = userImageDefault;
          setUserImage(userImageUrl)
          setFavoritesCountries(user.inscricoes)
      }
      fetchUser();
  },[])

  return (
    <>
      {hasToken && <NavBar isAdmin={isAdmin}/>}
        <Toaster position="top-right" />
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: " center",
                gap: "2rem",
                marginTop: "7rem",
            }}
        >
            <UserInfo nome={nome} email={email} userImage={userImage}/>
            <PaisesFavoritados countries={favoritesCountries}/>
            <DangerZone/>
            <Divider/>
        </div>
    </>
  );
};



const Divider = () => {
    return (
        <>
            <div className="divider">
                {Array.from({length: 33}).map((_, index) => (
                    <div
                        className="divider-child"
                        key={index}
                        style={{
                            borderLeft: index % 11 === 0 ? "1px solid black" : "none",
                        }}
                    />
                ))}
            </div>
        </>
    );
};
