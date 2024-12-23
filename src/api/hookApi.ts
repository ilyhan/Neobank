import { subscribeNews } from "@/api/api";
import useMutation from "@/api/useMutation";

export const useSubscribeNews = () => {
    return useMutation<any, string>({
        mutateFn: (data: string) => subscribeNews(data),
    });
};