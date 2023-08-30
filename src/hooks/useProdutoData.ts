import axios, { AxiosPromise } from "axios";
import { ProdutoData } from "../interface/ProdutoData";
import { useQuery } from "@tanstack/react-query";

export function useProdutoData() {
    const fetchData = async (): AxiosPromise<ProdutoData[]> => {
        const API_URL = "http://localhost:8080";
        const response = axios.get(API_URL + "/produtos");
        return response;
    };

    const query = useQuery({
        queryFn: fetchData,
        queryKey: ["produto-data"],
        retry: 2
    });

    return {
        ...query,
        data: query.data?.data
    };
};
