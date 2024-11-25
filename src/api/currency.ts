import axios from "axios";
import useQuery from "@/api/useFetch";
import { ICurrencyResponse } from "@/common/interfaces/currency";

const baseURL = "https://api.exchangeratesapi.io/v1";
const accessKey = "a1961b523d943b44e2a874117fd55c58";
const currencyUrl = `${baseURL}/latest?access_key=${accessKey}`;
const timeDelay = 15 * 60 * 1000;

const getCurrencyRates = async () => {
    const response = await axios.get<ICurrencyResponse>(currencyUrl);
    return response.data;
};

export const UseQueryResult = ()  => {
    return useQuery({
        queryFn: getCurrencyRates,
        staleTime: timeDelay, 
    });
};
