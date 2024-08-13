import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../../assets/LottieLanding.json";
import "./landing.css";
import { Loader } from "../loader/Loader";
import { QuadroMedalhas } from "../Medalhas/QuadroMedalhas";

export const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <NavBar /> */}
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
          OlymFollow
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
        <div>
          <button
            style={{ marginRight: "5rem" }}
            onClick={() => navigate("/login")}
          >
            <svg
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 1024 1024"
            >
              <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
            </svg>
            <span>Entrar</span>
          </button>
        </div>
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
            No Olymfollow, você tem acesso instantâneo às atualizações do quadro
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
      }}
    >
      <img src="" alt="Logo OlymFollow" />
      <a onClick={() => navigate("/medalhas")}>Medalhas</a>
      <a onClick={() => navigate("/noticias")}>Notícias</a>

      <button onClick={() => navigate("/login")}>Login</button>
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
