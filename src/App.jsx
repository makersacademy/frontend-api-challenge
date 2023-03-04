import { Fragment, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Peeps from "./components/Peeps";

const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState("Home");
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <Peeps />
      </QueryClientProvider>
    </Fragment>
  );
}

export default App;
