import { INewsResponse } from "@/common/interfaces/news";
import axios from "axios";
import useQuery from "@/api/useFetch";

const baseUrl = "https://newsapi.org/v2/top-headlines";
const apikey = "c4ad639f1c854593a878388c7f0da4df";
const param = `?country=us&category=business&apiKey=${apikey}`;
const newsUrl = baseUrl + param;

const timeDelay = 15 * 60 * 1000;

const getNews = async () => {
    const response = await axios.get<INewsResponse>(newsUrl);
    return response.data;
};

export const useNews = ()  => {
    return useQuery({
        queryFn: getNews,
        staleTime: timeDelay, 
    });
};