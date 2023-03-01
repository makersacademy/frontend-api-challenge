import { useQuery } from "react-query";

function Peeps() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((res) =>
      res.json()
    )
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="peeps-container">
      {data.map((peep, index) => {
        return (
          <div key={index} className="peep">
            {peep.body}
          </div>
        );
      })}
    </div>
  );
}

export default Peeps;
