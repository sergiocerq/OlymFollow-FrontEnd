import React, { useEffect, useState } from "react";
import "./medalhas.css";
import { FetcherFactory } from "../../data/fetchers/FetcherFactory.js";
import "./medalhas.css";
import { MedalRow } from "./MedalRow.jsx";
import { Toaster } from "sonner";
import { Loader } from "../loader/Loader.jsx";

const fetcherFactory = new FetcherFactory();

/**
 * Componente QuadroMedalhas para exibir e gerenciar o quadro de medalhas.
 *
 * @example
 * <QuadroMedalhas />
 *
 * @returns {JSX.Element} O JSX do componente QuadroMedalhas.
 */
export const QuadroMedalhas = () => {
  const [quadroMedalhas, setQuadroMedalhas] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMedalhas = async () => {
      const medalhaFetcher = fetcherFactory.createMedalhaFetcher();
      const medalhas = await medalhaFetcher.getMedals();
      medalhas.sort((a, b) => {
        if (b.numberOfGolds !== a.numberOfGolds)
          return b.numberOfGolds - a.numberOfGolds;
        return b.numberOfMedal - a.numberOfMedal;
      });
      setIsLoading(false);
      setQuadroMedalhas(medalhas);
    };
    fetchMedalhas();
  }, []);

  console.log(quadroMedalhas)

  return (
    <>
      <Toaster position="top-right" />
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
            overflow: "auto",
          }}
        >
          {isLoading ? (
            <Loader />
          ) : (
            <table className="quadro-medalhas">
              <thead
                style={{
                  top: 0,
                  position: "sticky",
                }}
              >
                <tr
                  style={{
                    backgroundColor: "white",
                    zIndex: 9999,
                  }}
                >
                  <th></th>
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
                {quadroMedalhas.map((country) => (
                  <MedalRow
                    key={country.id}
                    country={country}
                    setSelectedCountry={setSelectedCountry}
                    selectedCountry={selectedCountry}
                  />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};
