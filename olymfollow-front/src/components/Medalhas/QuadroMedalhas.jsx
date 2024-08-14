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
    <div style={{display: "flex", flexDirection: "column", gap: "3rem",justifyContent: "center", alignItems: "center"}}>
      <h1>ESTOU AQUI NO QUADRO DE MEDALHAS</h1>
      <table className="quadro-medalhas">
        <thead>
          <tr>
            <th>#</th>
            <th>País</th>
            <th>Ouro <div className="gold"></div></th>
            <th>Prata <div className="silver"></div></th>
            <th>Bronze <div className="bronze"></div></th>
            <th>Total</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Brasil</td>
            <td>7</td>
            <td>5</td>
            <td>3</td>
            <td>15</td>
            <td>
              
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Estados Unidos</td>
            <td>5</td>
            <td>4</td>
            <td>3</td>
            <td>12</td>
            <td>
              
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>China</td>
            <td>4</td>
            <td>3</td>
            <td>2</td>
            <td>9</td>
            <td>
            </td> 
          </tr>


        </tbody>
      </table>
    </div>
  );
};
