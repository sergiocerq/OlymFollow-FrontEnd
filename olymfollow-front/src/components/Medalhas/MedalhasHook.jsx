import {FetcherFactory} from "../../data/fetchers/FetcherFactory.js";
import {useState} from "react";
import {toast} from "sonner";
import {styleToastError, styleToastSucess} from "../../styles.js";

const fetcherFactory = new FetcherFactory();

/**
 * Custom hook para gerenciar dados de medalhas e lidar com o envio de formulários.
 *
 * @returns {Object} - Retorna um objeto contendo o estado da medalha, a função setMedalha e a função handleSubmit.
 *
 * @example
 * const { medalha, setMedalha, handleSubmit } = useMedalha();
 *
 * // Atualizar o estado de medalha
 * setMedalha({ tipoMedalha: 'Ouro', nomeAtleta: 'João Silva', countryID: 54, esporte: 'Natação' });
 *
 * // Lidar com o envio do formulário
 * handleSubmit(setIsLoading);
 */
export const useMedalha = () => {
    const [medalha, setMedalha] = useState({tipoMedalha : '', nomeAtleta: '', countryID: '', esporte: ''})
    const [isValidCredentials, setIsValidCredentials] = useState(true);


    const validateCredentials = () => {
        if(medalha.tipoMedalha === ""){
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
    }

    const handleSubmit = async (setIsLoading) => {
        validateCredentials();
        if(isValidCredentials){
            setIsLoading(true)
            let medalFetcher = fetcherFactory.createMedalhaFetcher()
            let response = await medalFetcher.saveMedal(medalha)
            document.getElementById('dialog-medal').close()
            setIsLoading(false)
            if(response.status !== 201){
                toast.error("Ocorreu um erro ao cadastrar medalha", {
                    style: styleToastError,
                    duration: 3000,
                });
                return;
            }

            toast.success("Medalha Cadastrada com sucesso!", {
                style: styleToastSucess,
                duration: 3000,
            });
        }
    }
    return { medalha, setMedalha, handleSubmit};
}