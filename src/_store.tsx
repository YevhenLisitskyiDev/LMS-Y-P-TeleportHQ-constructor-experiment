import React, { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://wchctogongeqwpfcyivw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjaGN0b2dvbmdlcXdwZmN5aXZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ1NDQxOTcsImV4cCI6MTk3MDEyMDE5N30.c5zL7vX0mZJVkVeWVBXWfP1ErauVgV2spruaktUF10M"
);

interface State {
  title: string;
}

interface Props {
  signUp: any;
  signIn: any;
  signOut: any;
  user: any;
  children?: JSX.Element;
}

export const AppStateContext = createContext<Props | null>(null);

export const AppStateProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState<State>({
    title: "teleport-project-react",
  });

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = supabase.auth.session();

    //setUser(session?.user ?? null);
    setLoading(false);

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event: any, session: any) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  const value = {
    signUp: (data: any) => supabase.auth.signUp(data),
    signIn: (data: any) => supabase.auth.signIn(data),
    signOut: () => supabase.auth.signOut(),
    user,
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("AppState is missing.");
  }
  return context;
};
