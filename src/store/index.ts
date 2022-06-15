import { useState, useEffect } from "react";
import { Subject } from "subjecto";
import supabase from "../services/supabase";

// define hook function
Subject.prototype.hook = function () {
  const [value, setValue] = useState(this.value);
  useEffect(() => this.subscribe(setValue).unsubscribe, []);
  return value;
};

const store = {
  user: {
    isLogged: new Subject(false),
    session: new Subject<any>(supabase.auth.session()),
    signUp: (data: any) => supabase.auth.signUp(data),
    signIn: async (data: { email: string; password: string }) => {
      const res = await supabase.auth.signIn(data);
      console.log(res.user, res.session, res.error);
      if (!res.error) {
        store.user.session.next(res.session);
      }
    },
    signOut: () => supabase.auth.signOut(),
  },
  test: new Subject<number>(0),
};

supabase.auth.onAuthStateChange(async (event, session) => {
  store.user.session.next(session);
  console.log(event, session);
});

export default store;
