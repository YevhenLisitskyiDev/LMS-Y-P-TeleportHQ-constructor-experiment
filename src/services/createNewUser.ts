import supabase from "./supabase";
import store from "./../store";
import config from "./../config";

const createNewUser = async () => {
  console.log("session", store.auth.session.value);

  const { data, error } = await supabase
    .from("users")
    .insert([
      {
        email: store.auth.session.value.user.email,
        organization_id: config.ORGANIZATION_ID,
      },
    ]);
//   console.log("data",data, "error", error);
    if(!error && data) store.user.next(data[0])
};

export default createNewUser;
