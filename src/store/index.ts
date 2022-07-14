import { useState, useEffect } from "react";
import { Subject } from "subjecto";
import supabase from "../services/supabase";
import setUserData from "../services/users/setUserData";
import createNewUser from "../services/users/createNewUser"

import config from "./../config"

// define hook function
Subject.prototype.hook = function () {
  const [value, setValue] = useState(this.value);
  useEffect(() => this.subscribe(setValue).unsubscribe, []);
  return value;
};

const store = {
  auth: {
    session: new Subject<any>(supabase.auth.session()),
    signUp: async (data: { email: string; password: string }) => {
      const res = await supabase.auth.signUp(data);
    //   console.log(res.user, res.session, res.error);
      if (!res.error) {
        store.auth.session.next(res.session);
        createNewUser()
        return true;
      }
      return false;
    },
    signIn: async (data: { email: string; password: string }) => {
      const res = await supabase.auth.signIn(data);
    //   console.log(res.user, res.session, res.error);
      if (!res.error) {
        store.auth.session.next(res.session);
        setUserData();
        return true;
      }

      return false;
    },
    signOut: async () => {
      const { error } = await supabase.auth.signOut();

      if (!error) {
        store.user.next(null);
        store.isAdmin.toggle();
      }
    },
  },
  user: new Subject<any>(null),
  isAdmin: new Subject<boolean>(false),
  courses: new Subject<any>(null),
  lessons: {},
  message: new Subject<any>(null),
  error: new Subject<any>(null),
  modal: {
    isOpen: new Subject<boolean>(false),
    content: new Subject<any>("null"),
  }
};

supabase.auth.onAuthStateChange(async (event, session) => {
  store.auth.session.next(session);
});

export default store;
