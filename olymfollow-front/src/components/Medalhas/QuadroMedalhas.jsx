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
        <table className="quadro-medalhas" id="quadro-medalhas">
          <thead>
            <tr>
              <th>#</th>
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
            <tr>
              <td>1</td>
              <td>Brasil</td>
              <td>1</td>
              <td>
                <img
                  src="https://s.sde.globo.com/media/nationalities/Brasil-65.png"
                  alt=""
                />
                Brasil{" "}
              </td>

              <td>7</td>
              <td>5</td>
              <td>3</td>
              <td>15</td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Estados Unidos</td>

              <td>
                <img
                  src="https://s.sde.globo.com/media/nationalities/Estados_Unidos-65.png"
                  alt=""
                />
                Estados Unidos{" "}
              </td>
              <td>5</td>
              <td>4</td>
              <td>3</td>
              <td>12</td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td>China</td>
              <td>
                <img
                  src="https://s.sde.globo.com/media/nationalities/China-65.png"
                  alt=""
                />
                China
              </td>
              <td>4</td>
              <td>3</td>
              <td>2</td>
              <td>9</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
