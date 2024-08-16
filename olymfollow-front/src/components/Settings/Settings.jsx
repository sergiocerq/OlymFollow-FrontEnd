import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Settings.css";
import {NavBar} from "../navbar/NavBar.jsx";
import {PaisesFavoritados} from "../Paises/PaisesFavoritados.jsx";
import { FetcherFactory } from '../../data/fetchers/FetcherFactory';

const fecherFactory = new FetcherFactory();

export const Settings = () => {
  const navigate = useNavigate();

  const hasToken = sessionStorage.getItem("token");
  const [favoritesCountries, setFavoritesCountries] = useState([]);

  useEffect(()=>{
      const fetchUser = async () => {
          const userFetcher = fecherFactory.createUserFetcher();
          const user = await userFetcher.getCurrentUser();
          console.log(user.inscricoes)
          setFavoritesCountries(user.inscricoes)
      }
      fetchUser();
  },[])

  return (
    <>
      {hasToken && <NavBar />}
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: " center",
                gap: "2rem",
                marginTop: "7rem",
            }}
        >
            <h1>Países favoritos</h1>
            <PaisesFavoritados countries={favoritesCountries}/>
            <Divider/>
        </div>
    </>
  );
};

const Divider = () => {
  return (
    <>
      <div className="divider">
        {Array.from({ length: 22 }).map((_, index) => (
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
