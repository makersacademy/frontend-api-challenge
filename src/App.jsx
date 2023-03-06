import { Fragment, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import CreateUser from "./components/CreateUser";
import Peeps from "./components/Peeps";

const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState("Home");

  const onChangePage = (newPage) => {
    setPage(newPage);
  };

  const onCreateUser = () => {
    setPage("Create-User");
  };
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        {page === "Home" && (
          <>
            <button
              id="create-user-btn"
              onClick={onCreateUser}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Create User
            </button>
            <Peeps />
          </>
        )}
        {page === "Create-User" && (
          <>
            <CreateUser onChangePage={onChangePage} />
          </>
        )}
      </QueryClientProvider>
    </Fragment>
  );
}

export default App;
