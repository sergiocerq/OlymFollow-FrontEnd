import {useEffect, useState} from "react";
import {FetcherFactory} from "../../data/fetchers/FetcherFactory.js";

const fetcherFactory = new FetcherFactory();


export const SelectPaises = () => {

    const [options, setOptions] = useState([]);


    useEffect(() => {
        const fetchPaises =  async () =>{
            let countryFetcher = fetcherFactory.createPaisFetcher()
            let countries = await countryFetcher.getPaises()
            countries.sort((a, b) => a.nome.localeCompare(b.nome));
            setOptions(countries)
        }
        fetchPaises();
    },[])

    return (
        <select>
            <option>Selecione o país</option>
            {
                options.map(value => <option value={value.id}>{value.nome}</option>)
            }
        </select>
    )
        ;
}