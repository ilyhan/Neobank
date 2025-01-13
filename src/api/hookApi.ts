import {
    denyApplication,
    getApplication,
    postApplicationApply,
    postCode,
    postDocuments,
    postPrescroring,
    postSchedule,
    postScroring,
    subscribeNews
} from "@/api/api";
import useMutation from "@/api/useMutation";
import { IOffer, IPrescoring, IScoring } from "@/common/interfaces/form";
import useQuery from "@/api/useFetch";
import { ICreditApplication } from "@/common/interfaces/application";

export const useSubscribeNews = () => {
    return useMutation<any, string>({
        mutateFn: (data: string) => subscribeNews(data),
    });
};

export const usePostPrescoring = () => {
    return useMutation<IOffer[], IPrescoring>({
        mutateFn: (data: IPrescoring) => postPrescroring(data),
    })
};

export const usePostAppApply = () => {
    return useMutation<any, IOffer>({
        mutateFn: (data: IOffer) => postApplicationApply(data),
    })
};

export const usePostScoring = (applicationId: number) => {
    return useMutation<IOffer[], IScoring>({
        mutateFn: (data: IScoring) => postScroring(data, applicationId),
    })
};

export const useQueryApplication = (applicationId: number | string) => {
    return useQuery<ICreditApplication>({
        queryFn: () => getApplication(applicationId),
        staleTime: 0,
    });
};

export const usePostSchedule = (applicationId: number) => {
    return useMutation({
        mutateFn: () => postSchedule(applicationId),
    })
};

export const useDenyApplication = (applicationId: number) => {
    return useMutation({
        mutateFn: () => denyApplication(applicationId),
    })
};

export const usePostDocuments = (applicationId: number) => {
    return useMutation({
        mutateFn: () => postDocuments(applicationId),
    })
};

export const usePostCode = (applicationId: number) => {
    return useMutation({
        mutateFn: (data: string) => postCode(data, applicationId),
    })
};