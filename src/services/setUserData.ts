import supabase from "./supabase";
import store from "./../store";
import config from "./../config";
import createNewUser from "./createNewUser";
import isAdminCheck from "./isAdminCheck";

const setUserData = async () => {

let { data: users, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", store.auth.session.value.user.id)
    .eq("organization_id", config.ORGANIZATION_ID);
  // console.log("users", users);
  // console.log("session", store.auth.session.value.user.id);
  if (!error && users) store.user.next(users[0]);
  isAdminCheck();
  return

};

export default setUserData;