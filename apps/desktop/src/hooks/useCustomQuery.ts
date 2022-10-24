import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:8080/v1";

const axiosClient = axios.create({
	baseURL: API_URL,
});

const useCustomQuery = <T>(
	url: string | null,
	data: any,
	method: "GET" | "POST",
	onStart?: boolean
): {
	isLoading: boolean;
	response: T | null;
	error: Error | null;
	refetch: (c_data?: {}, c_url?: string) => Promise<void>;
} => {
	const [isLoading, setIsLoading] = useState(true);
	const [response, setResponse] = useState<T | null>(null);
	const [error, setError] = useState<Error | null>(null);

	const fetchData = async (c_data?: {}, c_url?: string) => {
		setIsLoading(true);

		axiosClient
			.request({
				url: url || c_url,
				method,
				data: data !== null ? data : c_data,
			})
			.then((res) => {
				console.log(res.data)
				setResponse(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				setError(err);
				setIsLoading(false);
			});
	};

	useEffect(() => {
		if (!onStart) {
			fetchData();
		}
	}, []);

	return { isLoading, response, error, refetch: fetchData };
};

export default useCustomQuery;
