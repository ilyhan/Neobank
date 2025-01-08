import { IOffer, IPrescoring } from "@/common/interfaces/form";
import axios from "axios";

export const baseUrl = "http://localhost:8080";

//подписка на новости 
export const subscribeNews = async (data: string) => {
    const response = await axios.post(`${baseUrl}/email`, { email: data });
    return response.data;
};

//отпрвка prescoring
export const postPrescroring = async (data: IPrescoring): Promise<IOffer[]> => {
    const response = await axios.post<IOffer[]>(`${baseUrl}/application`, data);
    return response.data;
};

//отправка выбранного предложения 
export const postApplicationApply = async (data: IOffer) => {
    const response = await axios.post(`${baseUrl}/application/apply`, data);
    return response.data;
}