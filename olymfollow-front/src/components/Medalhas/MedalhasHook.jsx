import {FetcherFactory} from "../../data/fetchers/FetcherFactory.js";
import {useState} from "react";
import {toast} from "sonner";
import {styleToastError} from "../../styles.js";

const fetcherFactory = new FetcherFactory();

export const useMedalha = () => {
    const [tipoMedalhaID, setTipoMedalhaID] = useState(0);
    const [nomeAtleta, setNomeAtleta] = useState("");
    const [countryID, setcountryID] = useState(0);
    const [esporte, setEsporte] = useState("");
    const [isValidCredentials, setIsValidCredentials] = useState(true);


    const validateCredentials = () => {

        if(tipoMedalhaID === ""){
            toast.error("Selecione o tipo de medalha.", {
                style: styleToastError,
                duration: 3000,
            });
            setIsValidCredentials(false);
        }

        if(nomeAtleta === ""){
            toast.error("Digite o nome do atleta da medalha.", {
                style: styleToastError,
                duration: 3000,
            });
            setIsValidCredentials(false);
        }

        if(countryID === ""){
            toast.error("Selecione o país.", {
                style: styleToastError,
                duration: 3000,
            });
            setIsValidCredentials(false);
        }

        if(esporte === ""){
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
    return { setTipoMedalhaID , setNomeAtleta, setcountryID, setEsporte, handleSubmit};
}