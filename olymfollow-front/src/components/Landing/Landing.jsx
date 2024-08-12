import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../../assets/LottieLanding.json";
import "./landing.css";

export const Landing = () => {
  return (
    <>
      {/* <NavBar /> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: " center",
          gap: "2rem",
          marginTop: "1rem",
        }}
      >
        <h1
          style={{
            fontWeight: "900",
            fontFamily: "Inknut Antiqua",
            fontSize: "5rem",
          }}
        >
          OlymFollow
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
        <div style={{ display: "flex", alignItems: "center" }}>
          <em style={{ maxWidth: "50%", fontSize: "1.5rem", margin: "0 5rem" }}>
            No Olymfollow, você tem acesso instantâneo às atualizações do quadro
            de medalhas das Olimpíadas. Saiba quais países estão no topo e quem
            está ganhando mais medalhas em tempo real.
          </em>
          <div
            style={{
              width: "35%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Lottie animationData={animationData} />
          </div>
        </div>
      </div>
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
      }}
    >
      <img src="" alt="Logo OlymFollow" />
      <a
        href="/"
        // onClick={() => navigate("/medalhas")}
      >
        Medalhas
      </a>
      <a
        href="/"
        //  onClick={() => navigate("/noticias")}
      >
        Notícias
      </a>

      <button>Login</button>
    </nav>
  );
};
