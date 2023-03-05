/// <reference types="vite-plugin-svgr/client" />

import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GlobalContext } from "./Context/globalContext";
import ChitterClient from "./utils/chitterClient";
import { HashRouter } from "react-router-dom";
import { SessionProvider } from "./Context/sessionContext";

const chitterClient = new ChitterClient();

// sets values for GlobalContext
const globalContext = {
  client: chitterClient,
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GlobalContext.Provider value={globalContext}>
    <SessionProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </SessionProvider>
  </GlobalContext.Provider>
);
