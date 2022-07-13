import supabase from "../supabase";
import store from "../../store";
import config from "../../config";

const getUsers = async () => {
  let { data: users, error } = await supabase
  .from('users')
  .select('*')
    
  // console.log("data: ", users, "error: ", error)
};

export default getUsers;