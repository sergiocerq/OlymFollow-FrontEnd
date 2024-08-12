import React, { useEffect, useState } from "react";
import { Pais } from "../../data/classes/pais";
import "./paises.css";
import { FecherFactory } from '../../data/fetchers/FetcherFactory';

const fecherFactory = new FecherFactory();

export const ListaPaises = () => {
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    const fetchPaises = async () => {
      const esporteFetcher = fecherFactory.createEsporteFetcher();
      const paises = await esporteFetcher.getPaises();
      setPaises(paises);
    }
    fetchPaises();
  }, [])

  return <div></div>;
};
