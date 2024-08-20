import React, { useEffect, useState } from "react";
import "./medalhas.css";
import { FetcherFactory } from "../../data/fetchers/FetcherFactory.js";
import "./medalhas.css"
import {MedalRow} from "./MedalRow.jsx";
import { Toaster } from "sonner";

const fetcherFactory = new FetcherFactory();

export const QuadroMedalhas = () => {
  const [quadroMedalhas, setQuadroMedalhas] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    const fetchMedalhas = async () => {
      const medalhaFetcher = fetcherFactory.createMedalhaFetcher();
      const medalhas = await medalhaFetcher.getMedals();
      medalhas.sort((a, b) => a.nome.localeCompare(b.nome));
      setQuadroMedalhas(medalhas);
    };
    fetchMedalhas();
  }, []);

  // console.log(quadroMedalhas)

  return (
   <>
    
    <Toaster position="top-right"/>
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          alignItems: "center",
          maxHeight: "73vh",
          overflow: "auto"
        }}
      >
        <table className="quadro-medalhas">
          <thead style={{
            top: 0,
            position: "sticky "
          }}>
          <tr style={{
            backgroundColor: "white",
            zIndex: 9999
          }}>
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
    </>
  );
};