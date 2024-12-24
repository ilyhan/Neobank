import axios from "axios";
import useQuery from "@/api/useFetch";
import { ICurrencyResponse } from "@/common/interfaces/currency";

const baseURL = "https://api.exchangeratesapi.io/v1";
const accessKey = "9a4cc928c16f005b568b70a288de57ed";
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
