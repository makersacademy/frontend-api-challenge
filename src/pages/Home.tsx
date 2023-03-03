import { Link } from "react-router-dom";
import { peepType } from "../../types/apiData";
import { Loader } from "../components/Loader";
import { PeepCard } from "../components/PeepCard";
import { useGlobalContext } from "../Context/globalContext";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const { client } = useGlobalContext();
  const [data, isLoading] = useFetch<peepType[]>({
    querykey: {},
    queryFn: client.getAllPeeps,
  });

  return (
    <div>
      {isLoading && <Loader />}
      <div className="flex flex-col">
        {!isLoading && data && data.map((peep) => <PeepCard {...peep} />)}
      </div>
    </div>
  );
}

export default Home;
