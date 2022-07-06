import { Subject } from "subjecto";
import supabase from "../services/supabase";

const user = {
  isLogged: new Subject(false),
  session: new Subject<any>(supabase.auth.session()),
  signUp: (data: any) => supabase.auth.signUp(data),
  signIn: async (data: { email: string; password: string }) => {
    const res = await supabase.auth.signIn(data);
    // console.log(res.user, res.session, res.error);
    if (!res.error) {
      user.session.next(session);
    }
  },
  signOut: () => supabase.auth.signOut(),
};

export default user;
