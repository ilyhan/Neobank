import { useState, useEffect } from "react";

interface IQueryOptions<T> {
    queryFn: () => Promise<T>;
    staleTime?: number;
};

export interface IUseQueryResult<T> {
    data: T | null;
    error: any;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    refetch: () => Promise<void>;
};

function useQuery<T>({ queryFn, staleTime = 0 }: IQueryOptions<T>): IUseQueryResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isStale, setIsStale] = useState<boolean>(staleTime > 0);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await queryFn();
            setData(response);
            setError(null);
            setIsStale(false);
        } catch (err) {
            setError(err as Error);
            setData(null);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (isStale || staleTime == 0) {
            fetchData();
        } else {
            const timer = setTimeout(() => {
                setIsStale(true);
            }, staleTime);

            return () => clearTimeout(timer);
        }
    }, [isStale, queryFn, staleTime]);

    const refetch = async () => {
        fetchData();
    };

    return {
        data,
        error,
        isLoading,
        isSuccess: error == null,
        isError: error != null,
        refetch
    };
}

export default useQuery;
