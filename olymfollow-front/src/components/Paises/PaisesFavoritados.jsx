import React, {useState} from "react";
import {CountryRow} from "./CountryRow.jsx";
import "./paises.css"


export const PaisesFavoritados = ({countries}) =>{
    const [selectedCountry, setSelectedCountry] = useState('');

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
                    borderRadius: "10px"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%"
                    }}
                >
                    {
                        countries.length != 0 ?
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
                                    {
                                        countries.map(country => <CountryRow key={country.id} country={country}
                                                                             setSelectedCountry={setSelectedCountry}
                                                                             selectedCountry={selectedCountry}/>)
                                    }
                                    </tbody>
                                </table>
                            </>
                            : <p>Você não tem nenhum país favoritado</p>
                    }
                </div>
            </div>
        </>
    );
}