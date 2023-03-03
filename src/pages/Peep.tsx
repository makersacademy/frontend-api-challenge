import { useParams } from "react-router-dom";
import { peepType } from "../../types/apiData";
import { Loader } from "../components/Loader";
import { useGlobalContext } from "../Context/globalContext";
import { useFetch } from "../hooks/useFetch";

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
      {isError && <h1>{error}</h1>}
      {!isLoading && data && <PeepContent {...data} />}
    </>
  );
};

const PeepContent = ({ id, body, user }: peepType) => {
  return (
    <>
      <pre>{id}</pre>
      <h1>{user.handle}</h1>
      <p>{body}</p>
    </>
  );
};
