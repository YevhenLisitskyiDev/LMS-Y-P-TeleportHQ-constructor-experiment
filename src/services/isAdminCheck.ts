import supabase from "./supabase";
import store from "./../store";
import config from "./../config";

const isAdminCheck = async () => {
  if (!store.user.value) return;

  let { data: admins, error } = await supabase
    .from("admins")
    .select("*")
    .eq("id", store.user.value.id)
    .eq("organization_id", config.ORGANIZATION_ID);

  // console.log(store.user.value)
  if (!error && admins) store.isAdmin.toggle();
};

export default isAdminCheck;
