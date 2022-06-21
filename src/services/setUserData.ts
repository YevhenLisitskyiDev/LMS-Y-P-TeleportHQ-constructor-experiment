import supabase from "./supabase";
import store from "./../store";
import config from "./../config";
import createNewUser from "./createNewUser";
import isAdminCheck from "./isAdminCheck";

const setUserData = async (mode: "login" | "signUp") => {
  console.log("session", store.auth.session.value);

  let { data: users, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", store.auth.session.value.user.email)
    .eq("organization_id", config.ORGANIZATION_ID);
  console.log();
  console.log("users", users);
  if (!error && users) store.user.next(users[0]);
  mode === "login" && isAdminCheck();
  mode === "signUp" && createNewUser();
};

export default setUserData;
