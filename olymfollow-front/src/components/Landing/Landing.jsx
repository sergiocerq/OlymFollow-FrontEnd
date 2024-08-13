import Lottie from "lottie-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import animationData from "../../assets/LottieLanding.json";
import { QuadroMedalhas } from "../Medalhas/QuadroMedalhas";
import "./landing.css";

export const Landing = () => {
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
        <h1
          style={{
            fontWeight: "900",
            fontFamily: "Inknut Antiqua",
            fontSize: "5rem",
          }}
        >
          OlympicsFollow
        </h1>
        <p
          style={{
            fontFamily: "Inknut Antiqua",
            letterSpacing: "1px",
            fontSize: "1.6rem",
          }}
        >
          Informação e Conexão nos <span>Jogos Olímpicos</span>
        </p>
        {!hasToken && (
          <div
            style={{
              display: "flex",
              gap: "2rem",
            }}
          >
            <button className="button-login" onClick={() => navigate("/login")}>
              Login
            </button>
            <button
              className="button-login"
              onClick={() => navigate("/register")}
              style={{ padding: "0 4rem" }}
            >
              Cadastrar
            </button>
          </div>
        )}
        {/* <Divider />
        <p>Acompanhe o quadro de medalhas <span>em tempo real</span></p> */}
        <div
          style={{ width: "100%", height: "3px", backgroundColor: "#f1f1f1" }}
        ></div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <em style={{ maxWidth: "30%", fontSize: "1.6rem", margin: "0 5rem" }}>
            No OlympicsFollow, você tem acesso instantâneo às atualizações do quadro
            de medalhas das Olimpíadas. Saiba quais países estão no topo e quem
            está ganhando mais medalhas em tempo real.
          </em>
          <div
            style={{
              width: "30%",
            }}
          >
            <Lottie animationData={animationData} />
          </div>
        </div>
        <Divider />
        <h2>
          Siga <span>seus</span> países favoritos
        </h2>
        <p>
          Selecione e siga os seus países favoritos para receber atualizações
          personalizadas e nunca perca uma conquista.
        </p>
        <img src="" alt="Foto da tabela com as opções dos países..." />
        <Divider />
      </div>
      <div
        style={{
          paddingBottom: "5rem",
        }}
      ></div>
      <QuadroMedalhas />
    </>
  );
};

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav
      style={{
        background: "#e9e9e9",
        width: "100%",
        padding: "2rem",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <img src="" alt="Logo OlympicsFollow" />
      <a onClick={() => navigate("/medalhas")}>Medalhas</a>
      <a onClick={() => navigate("/paises")}>Paises</a>
    </nav>
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
