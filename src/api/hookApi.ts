import {
    getApplication,
    postApplicationApply,
    postPrescroring,
    postScroring,
    subscribeNews
} from "@/api/api";
import useMutation from "@/api/useMutation";
import { IOffer, IPrescoring, IScoring } from "@/common/interfaces/form";
import useQuery from "@/api/useFetch";

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
    return useQuery({
        queryFn: () => getApplication(applicationId),
        staleTime: 0,
    });
};