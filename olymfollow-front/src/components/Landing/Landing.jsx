import Lottie from "lottie-react";
import React from "react";
import animationData from "../../assets/LoadingAnimation.json";
import { QuadroMedalhas } from "../Medalhas/QuadroMedalhas";
import "./landing.css";
import { NavBar } from "../navbar/NavBar";
import soccerSVG from "../../assets/olympic-sports/soccer.svg";
import basketballSVG from "../../assets/olympic-sports/basketball.svg";
import swimmingSVG from "../../assets/olympic-sports/swim.svg";
import athleticsSVG from "../../assets/olympic-sports/athletic.svg";
import gymnasticsSVG from "../../assets/olympic-sports/gymnastic.svg";
import { motion } from "framer-motion";

/**
 *
 * @description Componente que renderiza a landing page do OlympicsFollow, contendo informações sobre o site e o quadro de medalhas.
 * @name Landing
 */
export const Landing = () => {
  const olympicSports = [
    {
      name: "Futebol",
      frase:
        "O futebol é um esporte de equipe jogado entre dois times de 11 jogadores cada um e um árbitro que se ocupa da correta aplicação das normas. É considerado o desporto mais popular do mundo, pois cerca de 270 milhões de pessoas participam das suas várias competições.",
      img: soccerSVG,
    },

    {
      name: "Natação",
      frase:
        "A natação nas Olimpíadas é um dos eventos mais emocionantes e tradicionais dos Jogos Olímpicos. As competições de natação são realizadas em piscina olímpica, de 50 metros de comprimento, na qual os atletas competem em diversas modalidades, como estilo livre, costas, peito e borboleta.",
      img: swimmingSVG,
    },
    {
      name: "Basquete",
      frase:
        "O basquete é um esporte praticado por duas equipes de cinco jogadores em uma quadra retangular coberta. Os atletas usam as mãos para controlar a bola e marcar pontos, lançando a bola até um aro suspenso a 3,05m do chão. As partidas Olímpicas de basquete são divididas em quatro períodos de 10 minutos",
      img: basketballSVG,
    },
    {
      name: "Atletismo",
      frase:
        "O atletismo é uma modalidade esportiva composta por diferentes tipos de provas que envolvem corrida, saltos e arremessos. É considerado o esporte mais antigo dos Jogos Olímpicos.",
      img: athleticsSVG,
    },
    {
      name: "Ginástica",
      frase:
        "A ginástica artística é uma modalidade esportiva que contempla diferentes habilidades motoras do corpo humano, como força e flexibilidade. Por meio do treinamento de rendimento, os atletas apresentam verdadeiros espetáculos que envolvem movimentos artísticos com o corpo.",
      img: gymnasticsSVG,
    },
  ];

  return (
    <>
      <NavBar />
      <div className="main-div-landing">
        <motion.p
          className="first-paragraph"
          initial={{ y: 2500 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          Faça parte da jornada olímpica. <br /> Conecte-se, siga e celebre com
          as nações de todo o mundo!
        </motion.p>
        <div className="div-olympicsfollow-lottie">
          <div>
            <motion.h1
              className="title-olympicsfollow"
              initial={{ y: 2500 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              OlympicsFollow
            </motion.h1>
            <motion.p
              className="little-description"
              initial={{ y: 2500 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Informação e Conexão nos <span>Jogos Olímpicos</span>
            </motion.p>
          </div>
          <motion.div
            className="div-lottie-rings"
            initial={{ y: 2500 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Lottie animationData={animationData} />
          </motion.div>
        </div>
        <ul className="items-info-olympicsfollow">
          <motion.li
            initial={{ y: 2500 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14 4.4375C15.3462 4.4375 16.4375 3.34619 16.4375 2H17.5625C17.5625 3.34619 18.6538 4.4375 20 4.4375V5.5625C18.6538 5.5625 17.5625 6.65381 17.5625 8H16.4375C16.4375 6.65381 15.3462 5.5625 14 5.5625V4.4375ZM1 11C4.31371 11 7 8.31371 7 5H9C9 8.31371 11.6863 11 15 11V13C11.6863 13 9 15.6863 9 19H7C7 15.6863 4.31371 13 1 13V11ZM17.25 14C17.25 15.7949 15.7949 17.25 14 17.25V18.75C15.7949 18.75 17.25 20.2051 17.25 22H18.75C18.75 20.2051 20.2051 18.75 22 18.75V17.25C20.2051 17.25 18.75 15.7949 18.75 14H17.25Z"></path>
            </svg>
            <h1>Experiência Personalizada</h1>
            <p>
              Garantimos que cada usuário tenha uma experiência única e
              personalizada, com foco nos países que mais lhe interessam.
            </p>
          </motion.li>
          <motion.li
            initial={{ y: 2500 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64L80 64l0 320 224 0 0-320z" />
            </svg>
            <h1>Acessibilidade</h1>
            <p>
              Nossa plataforma está comprometida em ser inclusiva e acessível a
              todos, com uma interface fácil de usar e compatível com
              dispositivos móveis.
            </p>
          </motion.li>
          <motion.li
            initial={{ y: 2500 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z" />
            </svg>
            <h1>Histórico Olímpico</h1>
            <p>
              Veja o histórico de participações dos países, com detalhes sobre
              medalhas e os atletas que venceram as modalidades.
            </p>
          </motion.li>
        </ul>
        <div
          style={{ width: "100%", height: "3px", backgroundColor: "#f1f1f1" }}
        ></div>
        <QuadroMedalhas />
        <Divider />
        <motion.h2
          className="title-sports-olympics"
          initial={{ y: 2500 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          "As Olimpíadas unem o mundo em cada modalidade, onde atletas desafiam
          limites e inspiram gerações em cada competição."
        </motion.h2>
        <motion.p
          className="signature"
          initial={{ y: 2500 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Victor Lopes
        </motion.p>
        <ul className="olympics-sports">
          {olympicSports.map((sport, index) => (
            <motion.li
              initial={{ x: index % 2 === 0 ? -2000 : 2000 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              key={index}
              className="sport-info"
              style={{
                backgroundColor: index % 2 === 0 ? "#f1f1f1" : "white",
                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              }}
            >
              <img
                src={sport.img}
                alt={sport.name}
                width={index % 2 === 0 ? "380px" : "400px"}
              />
              <div>
                <h2>{sport.name}</h2>
                <p>{sport.frase}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
};

/**
 *
 * @returns Componente que renderiza um divisor estilizado para a landing page.
 */
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
