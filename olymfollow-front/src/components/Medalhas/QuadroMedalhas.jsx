import React, { useEffect, useState } from "react";
import "./medalhas.css";
import { FetcherFactory } from "../../data/fetchers/FetcherFactory.js";
import "./medalhas.css"
import {CountryRow} from "../Paises/CountryRow.jsx";
import {MedalRow} from "./MedalRow.jsx";

const fetcherFactory = new FetcherFactory();

export const QuadroMedalhas = () => {
  const [quadroMedalhas, setQuadroMedalhas] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');


  useEffect(() => {
    const fetchMedalhas = async () => {
      const medalhaFetcher = fetcherFactory.createMedalhaFetcher();
      const medalhas = await medalhaFetcher.getMedals();
      console.log(medalhas);
      setQuadroMedalhas(medalhas);
    };
    fetchMedalhas();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Quadro de Medalhas</h1>
        <table className="quadro-medalhas">
          <thead>
          <tr>
            <th>País</th>
            <th>
              Ouro <div className="gold"></div>
            </th>
            <th>
              Prata <div className="silver"></div>
            </th>
            <th>
              Bronze <div className="bronze"></div>
            </th>
            <th>Total</th>
            <th>Ações</th>
          </tr>
          </thead>
          <tbody>
          {
            quadroMedalhas.map(country => <MedalRow key={country.id} country={country}
                                                 setSelectedCountry={setSelectedCountry}
                                                 selectedCountry={selectedCountry}/>)
          }          
          </tbody>
        </table>
      </div>
    </div>
  );
};