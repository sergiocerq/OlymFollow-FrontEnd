import React, {useEffect, useRef, useState} from "react";
import "./medalhas.css";
import { FetcherFactory } from "../../data/fetchers/FetcherFactory.js";
import { useNavigate } from "react-router-dom";
import {toast} from "sonner";
import {styleToastError, styleToastSucess} from "../../styles.js";


const fetcherFactory = new FetcherFactory();

/**
 * @description Componente MedalRow para exibir e gerenciar uma linha de dados de medalha.
 *
 * @param {Object} props - As propriedades passadas para o componente.
 * @param {Object} props.medalha - O objeto que representa os dados da medalha.
 * @param {string} props.medalha.tipoMedalha - O tipo da medalha.
 * @param {string} props.medalha.nomeAtleta - O nome do atleta.
 * @param {string} props.medalha.countryID - O ID do país.
 * @param {string} props.medalha.esporte - O esporte.
 * @param {Function} props.onEdit - Função chamada ao editar a medalha.
 * @param {Function} props.onDelete - Função chamada ao deletar a medalha.
 *
 * @example
 * <MedalRow 
 *   medalha={{ tipoMedalha: 'Ouro', nomeAtleta: 'João Silva', countryID: 'BRA', esporte: 'Natação' }} 
 *   onEdit={handleEdit} 
 *   onDelete={handleDelete} 
 * />
 * 
 * @returns {JSX.Element} O JSX do componente MedalRow.
 */
export const MedalRow = (
    {
        key,
        country: {
            id,
            nome,
            urlImage,
            numberOfGolds,
            numberOfSilvers,
            numberOfBronze,
            numberOfMedal,
            medalhas
        },
        setSelectedCountry,
        selectedCountry
    }
) => {

    const navigate = useNavigate();
    const hasToken = sessionStorage.getItem("token");
    const [selectedCountryID, setSelectedCountryID] = useState(id);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [height, setHeight] = useState("0px");
    const contentRef = useRef(null);


    useEffect(() => {
        setHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : "0px");
    }, [isDialogOpen, selectedCountryID, isExpanded]);

    const openDialog = () => {
        setIsDialogOpen(true);
        setSelectedCountry(nome)
        setSelectedCountryID(id);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    const subscribe = async () => {
        const userFetcher = fetcherFactory.createUserFetcher();
        let response = await userFetcher.subscribe(selectedCountryID);
        closeDialog()
        if (response.status === 200){
            toast.success("Sucesso: você está seguindo " + selectedCountry, {
                style: styleToastSucess,
                duration: 1000,
            });
            return;
        }
        if (response.response.status === 409){
            toast.error("Você já segue esse país", {
                style: styleToastError,
                duration: 1000,
            });
            return;
        }
        toast.error("Não possível seguir o país", {
            style: styleToastError,
            duration: 1000,
        });
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            {isDialogOpen && (<dialog open style={{
                top: "50%",
                left: "34%"
            }}>
            <button type="button" className="close" onClick={() => closeDialog()}>
                <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"></path>
                </svg>
            </button>
            <div className="content">
                <span className="title">Deseja receber notificações quando {selectedCountry} ganhar medalhas?</span>
                <br/>
                <br/>
                <div className="actions">
                    {!hasToken && (<div>
                        <a onClick={() => navigate("/login")} className="doLogin">Fazer login</a>
                    </div>)}
                    {hasToken && (<div>
                        <a onClick={() => subscribe()} className="unsubscribe">Sim</a>
                    </div>)}
                </div>
            </div>
        </dialog>)}
            <tr style={{cursor: "pointer"}}>
                <td onClick={toggleExpand}>{isExpanded ? "↑" : "↓"}</td>
                <td style={{
                    textAlign: "start"
                }} onClick={toggleExpand}>
                    <img src={urlImage} alt={nome + " Bandeira"}/>
                    {nome}
                </td>
                <td onClick={toggleExpand}>{numberOfGolds}</td>
                <td onClick={toggleExpand}>{numberOfSilvers}</td>
                <td onClick={toggleExpand}>{numberOfBronze}</td>
                <td onClick={toggleExpand}>{numberOfMedal}</td>
                <td>
                    <button className="mytooltip" onClick={openDialog}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 448 512">
                            <path
                                d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/>
                        </svg>
                    </button>
                </td>
            </tr>
            {isExpanded && (
                <tr>
                    <td colSpan="8" style={{ textAlign: "center" }}>
                        <div
                            ref={contentRef}
                            style={{
                            display: "flex",
                            maxHeight: height,
                            overflow: "hidden",
                            transition: "max-height 0.5s ease"
                        }}>
                            <table>
                                <tbody>
                                {/* eslint-disable-next-line react/prop-types */}
                                {medalhas.map((data, index) => (
                                    <TableRow key={index} medal={data}/>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
}


export const TableRow = (data) => {

    return (
        <>
            <tr>
                <td>
                    <svg style={{
                        margin: "10px"
                    }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0L133.9 0c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0L487.4 0C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"/>
                    </svg>
                </td>
                <td style={{ padding: "10px" }}>{data.medal.medalha}</td>
                <td style={{ padding: "10px" }}>{data.medal.nomeAtleta}</td>
                <td style={{ padding: "10px" }}>{data.medal.esporte}</td>
            </tr>
        </>
    );
}