import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { peepType } from "../../types/apiData";
import { Loader } from "../components/Loader";
import { PeepContent } from "../components/PeepContent";
import { useGlobalContext } from "../Context/globalContext";
import { useFetch } from "../hooks/useFetch";
import { Error } from "./Error";

export const Peep = () => {
  const { id } = useParams();
  const { client } = useGlobalContext();
  const [data, isLoading, isError, error] = useFetch<peepType>({
    querykey: { peepId: id },
    queryFn: client.findPeepById,
  });

  return (
    <>
      {isLoading && <Loader />}
      {isError && <Error message={error} />}
      {!isLoading && data && <PeepContent {...data} />}
    </>
  );
};
