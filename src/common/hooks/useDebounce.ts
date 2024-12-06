import { useCallback, useRef } from "react";

export function useDebounce<T extends any[]>(callback: (...args: T) => void, delay: number) {
    const timer = useRef<number | null>(null);

    const debounceCallback = useCallback((...args: T) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }

        timer.current = window.setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);

    return debounceCallback;
}