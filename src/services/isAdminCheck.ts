import supabase from "./supabase";
import store from "./../store";
import config from "./../config";

const isAdminCheck = async () => {
  if (!store.user.value) return;

  let { data: admins, error } = await supabase
    .from("admins")
    .select("*")
    .eq("id", store.auth.session.value.user.id)

    // console.log("admins", admins)
    
  if (!error && !store.isAdmin.value && admins.length) store.isAdmin.toggle();
};

export default isAdminCheck;
