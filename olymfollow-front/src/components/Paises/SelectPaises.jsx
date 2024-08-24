import {useEffect, useState} from "react";
import {FetcherFactory} from "../../data/fetchers/FetcherFactory.js";

const fetcherFactory = new FetcherFactory();

/**
 * @description Componente SelectPaises para selecionar um país a partir de uma lista.
 *
 * @param {Function} props.onChange - Função chamada ao alterar o país selecionado.
 *
 * @example
 * <SelectPaises onChange={handleCountryChange} />
 * 
 * @returns {JSX.Element} O JSX do componente SelectPaises.
 */
export const SelectPaises = ({setCountryID}) => {

    const [options, setOptions] = useState([]);

    const handleChange = (e) =>{
        setCountryID(e.target.value);
    }

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
        <select onChange={handleChange}>
            <option>Selecione o país</option>
            {
                options.map(value => <option value={value.id}>{value.nome}</option>)
            }
        </select>
    )
        ;
}