import {useEffect, useState} from "react";
import {FetcherFactory} from "../../data/fetchers/FetcherFactory.js";

const fetcherFactory = new FetcherFactory();


export const SelectEsportes = () => {

    const [options, setOptions] = useState([]);


    useEffect(() => {
        const fetchEsportes =  async () =>{
            let esporteFetcher = fetcherFactory.createEsporteFetcher()
            let esportes = await esporteFetcher.getEsportes()
            esportes.sort((a, b) => a.nome.localeCompare(b.nome));
            setOptions(esportes)
        }
        fetchEsportes();
    },[])

    return (
        <select>
            <option>Selecione o esporte</option>
            {
                options.map(value => <option value={value.id}>{value.nome}</option>)
            }
        </select>
    )
        ;
}