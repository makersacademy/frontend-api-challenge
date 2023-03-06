import { AxiosError } from "axios";
import { useState } from "react";
import { QueryKeyType } from "./useFetch";

type PropsType<T> = {
  queryFn: (queryKey: QueryKeyType) => Promise<T>;
};

export const useSubmitForm = <T,>({ queryFn }: PropsType<T>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const callSubmit = async (querykey: QueryKeyType) => {
    setIsError(false);
    setIsLoading(true);
    try {
      const apiData = await queryFn(querykey);
      setIsLoading(false);
      return apiData;
    } catch (error) {
      const e = error as AxiosError;
      setIsError(true);
      setError(e.message);
      setIsLoading(false);
    }
  };

  return { isLoading, isError, error, callSubmit } as const;
};
