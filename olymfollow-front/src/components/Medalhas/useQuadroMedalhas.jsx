import { useEffect, useState } from "react";
import { FetcherFactory } from "../../data/fetchers/FetcherFactory";
const fetcherFactory = new FetcherFactory();

export const useQuadroMedalhas = () => {
  const [quadroMedalhas, setQuadroMedalhas] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMedalhas = async () => {
      const medalhaFetcher = fetcherFactory.createMedalhaFetcher();
      const medalhas = await medalhaFetcher.getMedals();
      medalhas.sort((a, b) => {
        if (b.numberOfGolds !== a.numberOfGolds)
          return b.numberOfGolds - a.numberOfGolds;
        return b.numberOfMedal - a.numberOfMedal;
      });
      setIsLoading(false);
      
      setQuadroMedalhas(medalhas);
    };
    fetchMedalhas();
  }, []);

  const hasSomeMedal = quadroMedalhas.length > 0;

  return {
    quadroMedalhas,
    selectedCountry,
    setSelectedCountry,
    isLoading,
    hasSomeMedal,
  };
};
