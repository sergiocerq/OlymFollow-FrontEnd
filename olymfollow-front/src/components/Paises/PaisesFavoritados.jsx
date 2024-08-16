import React from "react";
import {CountryRow} from "./CountryRow.jsx";


export const PaisesFavoritados = ({countries}) =>{
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
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
                }}
            >
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
                            countries.map(country => <CountryRow key={country.id} country={country}/>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}