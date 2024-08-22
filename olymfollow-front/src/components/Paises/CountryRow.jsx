import React, {useEffect, useState} from "react";
import "./paises.css"
import {toast} from "sonner";
import {styleToastError, styleToastSucess} from "../../styles.js";
import {FetcherFactory} from "../../data/fetchers/FetcherFactory.js";


const fetcherFactory = new FetcherFactory();

export const CountryRow = (
    {
        country: {
            id,
            nome,
            urlImage,
            numberOfGolds,
            numberOfSilvers,
            numberOfBronze,
            numberOfMedal
        },
        setSelectedCountry,
        selectedCountry,
        removeRow
    }
) => {

    const [selectedCountryID, setSelectedCountryID] = useState(id);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        if (isDialogOpen) {
            console.log("Dialog opened with ID:", selectedCountryID);
        }
    }, [isDialogOpen, selectedCountryID]);

    const openDialog = () => {
        setIsDialogOpen(true);
        setSelectedCountry(nome)
        setSelectedCountryID(id);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    const unsubscribe = async () => {
        const userFetcher = fetcherFactory.createUserFetcher();
        let response = await userFetcher.unsubscribe(selectedCountryID);
        closeDialog()
        removeRow(selectedCountryID)
        if (response.status === 200){
            toast.error("Não possível seguir o país", {
                style: styleToastError,
                duration: 3000,
            });
            return;
        }
    };

    return (
        <>
            {isDialogOpen &&(<dialog open style={{
                top: "50%",
                left: "25%"
            }}>
                <button type="button" className="close" onClick={() => closeDialog()}>
                    <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"></path>
                    </svg>
                </button>
                <div className="content">
                    <span className="title">Parar de receber notificações do {selectedCountry}?</span>
                    <br/>
                    <br/>
                    <div className="actions">
                            <a onClick={() => unsubscribe()} className="unsubscribe">Sim</a>
                    </div>
                </div>
            </dialog>)}
            <tr>
                <td style={{
                    textAlign: "start"
                }}>
                    <img src={urlImage} alt={nome + "Bandeira"}/>
                    {nome}
                </td>
                <td>{numberOfGolds}</td>
                <td>{numberOfSilvers}</td>
                <td>{numberOfBronze}</td>
                <td>{numberOfMedal}</td>
                <td>
                    <button className="mytooltip" onClick={openDialog}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 448 512">
                            <path
                                d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/>
                        </svg>
                        <span className="tooltiptext">Parar de receber notificações</span>
                    </button>
                </td>
            </tr>
        </>
    );
}