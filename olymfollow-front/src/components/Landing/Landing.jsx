import Lottie from "lottie-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import animationData from "../../assets/LoadingAnimation.json";
import { QuadroMedalhas } from "../Medalhas/QuadroMedalhas";
import OlympicRings from "../../assets/Olympic_rings.svg";
import "./landing.css";
import { NavBar } from "../navbar/NavBar";

export const Landing = () => {
  const navigate = useNavigate();

  const hasToken = sessionStorage.getItem("token");

  return (
      <>
          <NavBar/>
          <div
              style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: " center",
                  gap: "2rem",
              }}
          >
              <div
                  style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                  }}
              >
                  <div>
                      <h1
                          style={{
                              fontWeight: "800",
                              fontFamily: "Inknut Antiqua",
                              fontSize: "4rem",
                          }}
                      >
                          OlympicsFollow
                      </h1>
                      <p
                          style={{
                              fontFamily: "Inknut Antiqua",
                              letterSpacing: "1px",
                              fontSize: "1.4rem",
                          }}
                      >
                          Informação e Conexão nos <span>Jogos Olímpicos</span>
                      </p>
                  </div>
                  <div
                      style={{
                          width: "25%",
                      }}
                  >
                      <Lottie animationData={animationData}/>
                  </div>
              </div>
              <div
                  style={{width: "100%", height: "3px", backgroundColor: "#f1f1f1"}}
              ></div>
              <QuadroMedalhas/>
              <h2>
                  Siga <span>seus</span> países favoritos
              </h2>
              <p>
                  Selecione e siga os seus países favoritos para receber atualizações
                  personalizadas e nunca perca uma conquista.
              </p>
              <Divider/>
          </div>
      </>
  );
};

const Divider = () => {
    return (
        <>
            <div className="divider">
                {Array.from({length: 22}).map((_, index) => (
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
