import { IOffer, IPrescoring, IScoring } from "@/common/interfaces/form";
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
};

//отправка scoring
export const postScroring = async (data: IScoring, applicationId: number) => {
    const response = await axios.put(`${baseUrl}/application/registration/${applicationId}`, data);
    return response.data;
};

//получение данных о заявке 
export const getApplication = async (applicationId: number | string) => {
    const response = await axios.get(`${baseUrl}/admin/application/${applicationId}`);
    return response.data;
};