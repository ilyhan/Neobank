import { useState } from "react";

interface IQueryOptions<T, U> {
    mutateFn: (data: U) => Promise<T>;
};

export interface IUseQueryResult<T, U> {
    data: T | null;
    error: any;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    mutate: (data: U) => Promise<void>;
};

function useMutation<T, U>({ mutateFn }: IQueryOptions<T, U>): IUseQueryResult<T, U> {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchData = async (data: U) => {
        setIsLoading(true);
        try {
            setIsLoading(true);
            const response = await mutateFn(data);
            setData(response);
            setError(null);
        } catch (err) {
            setError(err as Error);
            setData(null);
        } finally {
            setIsLoading(false);
        }
    };

    const mutate = async (data: U) => {
        fetchData(data);
    };

    return {
        data,
        error,
        isLoading,
        isSuccess: error === null,
        isError: error !== null,
        mutate
    };
}

export default useMutation;
