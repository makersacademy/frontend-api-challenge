import { AxiosError } from "axios";
import { useEffect, useState } from "react";

export type QueryKeyType = {
  userId?: string;
  peepId?: string;
  token?: string;
  handle?: string;
  password?: string;
};

type PropsType<T> = {
  querykey: QueryKeyType;
  queryFn: (queryKey: QueryKeyType) => Promise<T>;
};

export const useFetch = <T,>({ querykey, queryFn }: PropsType<T>) => {
  const [data, setData] = useState<T | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const apiData = await queryFn(querykey);
      setData(apiData);
    } catch (error) {
      const e = error as AxiosError;
      setIsError(true);
      setError(e.message);
    }
    setIsLoading(false);
  };

  return [data, isLoading, isError, error] as const;
};
