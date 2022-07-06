import supabase from "../supabase";
import config from "../../config";
import store from "../../store";
import { Subject } from "subjecto";

const getCourseById = async (courseId: number) => {
  if (store.courses.value && store.courses.value.find(course => course.id == courseId)) return;

  let { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .eq("organization_id", config.ORGANIZATION_ID)
    .eq("id", courseId);

  if (!error && courses.length) {
    store.courses.value ? store.courses.nextPush(courses[0]) : store.courses.next(courses);
    return;
  }
  store.error.next(error?.message);
};

export default getCourseById;
