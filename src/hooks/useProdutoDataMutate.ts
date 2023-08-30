import axios, { AxiosPromise } from "axios";
import { ProdutoData } from "../interface/ProdutoData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useProdutoDataMutate() {
    const postData = async (data: ProdutoData): AxiosPromise<any> => {
        const API_URL = "http://localhost:8080";
        const response = axios.post(API_URL + "/produtos", data);
        return response;
    };

    const queryClient = useQueryClient();

    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(["produto-data"]);
        }
    });

    return mutate;
};
