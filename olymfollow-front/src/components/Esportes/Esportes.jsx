import React, { useEffect, useState } from "react";
import { Esporte } from "../../data/classes/esporte.js";
import "./esportes.css";

export const ListaEsportes = () => {
  const [esportes, setEsportes ] = useState();

  useEffect(() => {
    const fetchEsportes = async () => {
      const esporteFetcher = fetcherFactory.createEsporteFetcher();
      const esportes = await esporteFetcher.getEsportes();
      setEsportes(esportes);
    }
  }, [])

  return <div>Esportes</div>;
};
