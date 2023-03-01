import { QueryClient, QueryClientProvider } from "react-query";
import Peeps from "./components/Peeps";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Peeps />
    </QueryClientProvider>
  );
}

export default App;
