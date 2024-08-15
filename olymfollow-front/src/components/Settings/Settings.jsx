import Lottie from "lottie-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import animationData from "../../assets/LoadingAnimation.json";
import { QuadroMedalhas } from "../Medalhas/QuadroMedalhas";
import OlympicRings from "../../assets/Olympic_rings.svg";
import "./Settings.css";
import {NavBar} from "../navbar/NavBar.jsx";
import {PaisesFavoritados} from "../Paises/PaisesFavoritados.jsx";

export const Settings = () => {
  const navigate = useNavigate();

  const hasToken = sessionStorage.getItem("token");

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
      <PaisesFavoritados />
        <Divider />
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
