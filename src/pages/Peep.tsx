import { useParams } from "react-router-dom";
import { peepType } from "../../types/apiData";
import { useGlobalContext } from "../Context/globalContext";
import { useFetch } from "../hooks/useFetch";

export const Peep = () => {
  const { id } = useParams();
  const { client } = useGlobalContext();
  const [data, isLoading, isError, error] = useFetch({
    querykey: { peepId: id },
    queryFn: client.findPeepById,
  });

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>{error}</h1>}
      {data && <PeepContent {...data} />}
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
