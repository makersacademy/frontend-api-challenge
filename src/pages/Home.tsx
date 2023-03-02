import { peepType } from "../../types/apiData";
import { useGlobalContext } from "../Context/globalContext";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const { client } = useGlobalContext();
  const [data, isLoading] = useFetch({
    queryFn: client.getAllPeeps,
  });

  return (
    <div className="font-bold text-xl">
      {isLoading && <h1>Loading...</h1>}
      {data && data.map((peep: peepType) => <h2 key={peep.id}>{peep.body}</h2>)}
    </div>
  );
}

export default Home;
