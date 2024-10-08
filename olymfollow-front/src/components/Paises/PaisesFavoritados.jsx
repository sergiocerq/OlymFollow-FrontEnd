import React, { useEffect, useState } from "react";
import { CountryRow } from "./CountryRow.jsx";
import "./paises.css";

/**
 * Componente PaisesFavoritados para exibir e gerenciar a lista de países favoritados.
 *
 * @description Este componente é responsável por renderizar uma lista de países que foram marcados como favoritos pelo usuário.
 * Ele busca os dados dos países favoritados, permite que o usuário remova um país dos favoritos e atualiza a lista
 * conforme necessário.
 *
 * @example
 * <PaisesFavoritados />
 *
 * @returns {JSX.Element} O JSX do componente PaisesFavoritados.
 */
export const PaisesFavoritados = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countriesList, setCountriesList] = useState(countries);

  useEffect(() => {
    setCountriesList(countries);
  }, [countries]);

  const removeRow = (id) => {
    setCountriesList(countriesList.filter((row) => row.id !== id));
  };

  return (
    <>
      <h3>Países favoritos</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "700px",
          border: "3px solid #e4e4e4",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          {countriesList.length !== 0 ? (
            <>
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
                  {countriesList.map((country) => (
                    <CountryRow
                      key={country.id}
                      country={country}
                      setSelectedCountry={setSelectedCountry}
                      selectedCountry={selectedCountry}
                      removeRow={removeRow}
                    />
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <p>Você ainda não tem nenhum país favoritado</p>
          )}
        </div>
      </div>
    </>
  );
};
