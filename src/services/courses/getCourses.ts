import supabase from "../supabase";
import config from "../../config";
import store from "../../store";
import { Subject } from "subjecto";

const getCourses = async () => {
  if (store.courses.value !== null) return;

  let { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .eq("organization_id", config.ORGANIZATION_ID);

  if (!error) {
    store.courses.next(courses);
    return;
  }
  store.error.next(error?.message);
};

export default getCourses;
