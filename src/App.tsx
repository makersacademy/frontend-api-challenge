import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "./Context/globalContext";

function App() {
  const { client } = useGlobalContext();
  const { data, isLoading } = useQuery({
    queryKey: ["peeps"],
    queryFn: client.getAllPeeps,
  });

  return (
    <div className="font-bold text-xl">
      {isLoading && <h1>Loading...</h1>}
      {data && data.map((peep) => <h2 key={peep.id}>{peep.body}</h2>)}
    </div>
  );
}

export default App;
