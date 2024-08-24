import React, { useEffect, useState } from "react";
import { Pais } from "../../data/classes/pais";
import "./paises.css";
import { FetcherFactory } from '../../data/fetchers/FetcherFactory';

const fecherFactory = new FetcherFactory();

/**
 * @description Componente ListaPaises para exibir e gerenciar a lista de países.
 *
 * @example
 * <ListaPaises />
 * 
 * @returns {JSX.Element} O JSX do componente ListaPaises.
 */
export const ListaPaises = () => {
  const [paises, setPaises] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

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
