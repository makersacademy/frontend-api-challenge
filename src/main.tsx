import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./index.css";
import { GlobalContext } from "./Context/globalContext";
import ChitterClient from "./utils/chitterClient";

const queryClient = new QueryClient();
const chitterClient = new ChitterClient();

// sets values for GlobalContext
const globalContext = {
  client: chitterClient,
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <GlobalContext.Provider value={globalContext}>
        <App />
      </GlobalContext.Provider>
    </React.StrictMode>
  </QueryClientProvider>
);
