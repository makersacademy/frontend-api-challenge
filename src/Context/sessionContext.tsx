import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";

interface Session {
  userId: number | null;
  sessionKey: string | null;
  handle: string | null;
}

type Action = {
  type: string;
  userId?: number;
  sessionKey?: string;
  handle?: string;
};

const getSessionFromStorage = (): Session | null => {
  const sessionInStorge = localStorage.getItem("chitter_session");
  if (sessionInStorge) {
    return JSON.parse(sessionInStorge) as Session;
  } else {
    return null;
  }
};

const initialSession: Session = getSessionFromStorage() || {
  userId: null,
  sessionKey: null,
  handle: null,
};

const SessionContext = createContext(initialSession);
const SessionDispatchContext = createContext(
  (() => null) as React.Dispatch<Action>
);

const sessionReducer = (session: Session, action: Action): Session => {
  switch (action.type) {
    case "login": {
      const new_session = {
        userId: action.userId || null,
        sessionKey: action.sessionKey || null,
        handle: action.handle || null,
      };
      localStorage.setItem("chitter_session", JSON.stringify(new_session));
      return new_session;
    }
    case "logout": {
      return {
        userId: null,
        sessionKey: null,
        handle: null,
      };
    }
    default: {
      throw new Error(`Unknown action: ${action.type}`);
    }
  }
};

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, dispatch] = useReducer(sessionReducer, initialSession);

  return (
    <SessionContext.Provider value={session}>
      <SessionDispatchContext.Provider value={dispatch}>
        {children}
      </SessionDispatchContext.Provider>
    </SessionContext.Provider>
  );
};

export function useSession() {
  return useContext(SessionContext);
}

export function useSessionDispatch() {
  return useContext(SessionDispatchContext);
}
