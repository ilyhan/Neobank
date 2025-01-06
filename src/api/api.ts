import { IPrescoring } from "@/common/interfaces/form";
import axios from "axios";

export const baseUrl = "http://localhost:8080";

//подписка на новости 
export const subscribeNews = async (data: string) => {
    const response = await axios.post(`${baseUrl}/email`, { email: data });
    return response.data;
};

//отпрвка prescoring
export const postPrescroring = async (data: IPrescoring) => {
    const response = await axios.post(`${baseUrl}/application`, data);
    return response.data;
};