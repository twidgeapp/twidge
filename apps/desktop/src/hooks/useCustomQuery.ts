import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:8080/v1"

const axiosClient = axios.create({
    baseURL: API_URL,
})

const useCustomQuery = <T>(url: string, data: any, method: "GET" | "POST"): { isLoading: boolean; response: T | null; error: Error | null; refetch: () => Promise<void>;} => {
    const [isLoading, setIsLoading] = useState(true);
    const [response, setResponse] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    
    const fetchData = async () => {
        setIsLoading(true);
        
        axiosClient.request({
            url,
            method,
            data
        }).then((res)=>{
            setResponse(res.data);
            setIsLoading(false)
        }).catch((err)=>{
            setError(err);
            setIsLoading(false)
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {isLoading, response, error, refetch: fetchData}
}

export default useCustomQuery