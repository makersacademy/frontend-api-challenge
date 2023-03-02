import { AxiosError } from "axios";
import { useEffect, useState } from "react";

type propsType = {
  querykey?: {
    userId?: string;
    peepId?: string;
    token?: string;
  };
  queryFn: (queryKey: any) => Promise<any>;
};

export const useFetch = ({ querykey, queryFn }: propsType) => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const api_data = await queryFn(querykey);
      setData(api_data);
    } catch (error) {
      const e = error as AxiosError;
      setIsError(true);
      setError(e.message);
    }
    setIsLoading(false);
  };

  return [data, isLoading, isError, error] as const;
};
