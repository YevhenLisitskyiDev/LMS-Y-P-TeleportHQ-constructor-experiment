import supabase from "./supabase"
import store from "./../store"
import config from "./../config"

const setCurrentUserData = async () => {
  let { data: users, error } = await supabase
  .from('users')
  .select("*")
  .eq('email', store.auth.session.value.user.email)
  .eq('organization_id', config.ORGANIZATION_ID)

  if(!error && users) store.user.next(users[0])
}

export default setCurrentUserData