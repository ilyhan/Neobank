import { postPrescroring, subscribeNews } from "@/api/api";
import useMutation from "@/api/useMutation";
import { IPrescoring } from "@/common/interfaces/form";

export const useSubscribeNews = () => {
    return useMutation<any, string>({
        mutateFn: (data: string) => subscribeNews(data),
    });
};

export const usePostPrescoring = () => {
    return useMutation<any, IPrescoring>({
        mutateFn: (data: IPrescoring) => postPrescroring(data),
    })
};