import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { QuadroMedalha } from "../../data/classes/quadroMedalha.js";
import "./medalhas.css";

const fecherFactory = new FecherFactory();

export const ListaMedalhas = () => {

  const [quadroMedalhas, setQuadroMedalhas] = useState();
  console.log(quadroMedalhas)

  useEffect(() => {
    const fetchMedalhas = async () => {
      const medalhaFetcher = fetcherFactory.createMedalhaFetcher();
      const medalhas = await medalhaFetcher.getMedals();
      setQuadroMedalhas(medalhas);
    }
    fetchMedalhas();
  }, [])

  return <></>;
};
