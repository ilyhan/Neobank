import { EApplicationStatus } from "@/common/enums/application";
import { ICreditApplication } from "@/common/interfaces/application";
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
export const getApplication = async (applicationId: number | string): Promise<ICreditApplication> => {
    const response = await axios.get<ICreditApplication>(`${baseUrl}/admin/application/${applicationId}`);
    if (response.data.status == EApplicationStatus.CC_DENIED) {
        localStorage.removeItem('application');
    }
    return response.data;
};

//согласование графика платежей
export const postSchedule = async (applicationId: number) => {
    const response = await axios.post(`${baseUrl}/document/${applicationId}`);
    return response.data;
};

//отказ от заявки
export const denyApplication = async (applicationId: number) => {
    const response = await axios.post(`${baseUrl}/application/${applicationId}/deny`);
    return response.data;
};

//согласование документов
export const postDocuments = async (applicationId: number) => {
    const response = await axios.post(`${baseUrl}/document/${applicationId}/sign`);
    return response.data;
};

//подтверждение кода
export const postCode = async (data: string, applicationId: number) => {
    const response = await axios.post(`${baseUrl}/document/${applicationId}/sign/code`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};