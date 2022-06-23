import { createClient } from "@supabase/supabase-js";
import config from "../config";

const supabase = createClient(
  config.REACT_APP_SUPABASE_URL,
  config.REACT_APP_SUPABASE_PUBLIC_KEY
);

export default supabase;
