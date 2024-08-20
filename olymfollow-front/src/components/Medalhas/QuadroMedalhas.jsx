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
          <tr>
            <td style={{
              textAlign: "start"
            }}>
              <img src={"https://s.sde.globo.com/media/nationalities/Brasil-65.png"} alt={"Bandeira"}/>
              Brasil
            </td>
            <td>{0}</td>
            <td>{0}</td>
            <td>{0}</td>
            <td>{0}</td>
            <td>
              <button className="likeIcon" onClick={() => {
                document.getElementById('dialog-box').showModal()
              }}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 512 512">
                  <path
                      d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
                </svg>
              </button>
            </td>
          </tr>
          <tr>
            <td style={{
              textAlign: "start"
            }}>
              <img src={"https://s.sde.globo.com/media/nationalities/Estados_Unidos-65.png"} alt={"Bandeira"}/>
              Estados Unidos
            </td>
            <td>{0}</td>
            <td>{0}</td>
            <td>{0}</td>
            <td>{0}</td>
            <td>
              <button className="likeIcon" onClick={() => {
                document.getElementById('dialog-box').showModal()
              }}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 512 512">
                  <path
                      d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
                </svg>
              </button>
            </td>
          </tr>
          <tr>
            <td style={{
              textAlign: "start"
            }}>
              <img src={"https://s.sde.globo.com/media/nationalities/Estônia-65.png"} alt={"Bandeira"}/>
              Estônia
            </td>
            <td>{0}</td>
            <td>{0}</td>
            <td>{0}</td>
            <td>{0}</td>
            <td>
              <button className="likeIcon" onClick={() => {
                document.getElementById('dialog-box').showModal()
              }}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 512 512">
                  <path
                      d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
                </svg>
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
