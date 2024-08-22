import {FetcherFactory} from "../../data/fetchers/FetcherFactory.js";
import {useState} from "react";
import {toast} from "sonner";
import {styleToastError} from "../../styles.js";

const fetcherFactory = new FetcherFactory();

export const useMedalha = () => {
    const [medalha, setMedalha] = useState({tipoMedalhaID : '', nomeAtleta: '', countryID: '', esporte: ''})
    const [isValidCredentials, setIsValidCredentials] = useState(true);


    const validateCredentials = () => {
        console.log(medalha);
        if(medalha.tipoMedalhaID === ""){
            toast.error("Selecione o tipo de medalha.", {
                style: styleToastError,
                duration: 3000,
            });
            setIsValidCredentials(false);
        }

        if(medalha.nomeAtleta === ""){
            toast.error("Digite o nome do atleta da medalha.", {
                style: styleToastError,
                duration: 3000,
            });
            setIsValidCredentials(false);
        }

        if(medalha.countryID === ""){
            toast.error("Selecione o país.", {
                style: styleToastError,
                duration: 3000,
            });
            setIsValidCredentials(false);
        }

        if(medalha.esporte === ""){
            toast.error("Selecione o esporte.", {
                style: styleToastError,
                duration: 3000,
            });
            setIsValidCredentials(false);
        }

        if(!isValidCredentials) return;
    }

    const handleSubmit = async () => {
        validateCredentials();
    }
    return { medalha, setMedalha, handleSubmit};
}