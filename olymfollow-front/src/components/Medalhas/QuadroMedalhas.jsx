import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { QuadroMedalha } from "../../data/classes/quadroMedalha.js";
import "./medalhas.css";
import { FetcherFactory } from "../../data/fetchers/FetcherFactory.js";

const fetcherFactory = new FetcherFactory();

export const QuadroMedalhas = () => {

  const [quadroMedalhas, setQuadroMedalhas] = useState();

  useEffect(() => {
    const fetchMedalhas = async () => {
      const medalhaFetcher = fetcherFactory.createMedalhaFetcher();
      const medalhas = await medalhaFetcher.getMedals();
      setQuadroMedalhas(medalhas);
    }
    fetchMedalhas();
  }, [])

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <h1>ESTOU AQUI NO QUADRO DE MEDALHAS</h1>
    </div>
  );
};
