import { postApplicationApply, postPrescroring, subscribeNews } from "@/api/api";
import useMutation from "@/api/useMutation";
import { IOffer, IPrescoring } from "@/common/interfaces/form";

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