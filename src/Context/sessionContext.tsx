import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";

interface Session {
  userId: number | null;
  sessionKey: string | null;
}

type Action = {
  type: string;
  userId?: number;
  sessionKey?: string;
};

const initialSession: Session = {
  userId: null,
  sessionKey: null,
};

const SessionContext = createContext(initialSession);
const SessionDispatchContext = createContext(
  (() => null) as React.Dispatch<Action>
);

const sessionReducer = (session: Session, action: Action): Session => {
  switch (action.type) {
    case "login": {
      return {
        userId: action.userId || null,
        sessionKey: action.sessionKey || null,
      };
    }
    case "logout": {
      return {
        userId: null,
        sessionKey: null,
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
