import supabase from "../supabase";
import config from "../../config";
import store from "../../store";

const getLessonsByCourseId = async (courseId: number) => {
  if (
    store.courses.value?.find((course) => course.id == courseId)?.lessons
      .value !== null
  )
    return;

  console.log("check");

  let { data: lessons, error } = await supabase
    .from("lessons")
    .select("*")
    .eq("course_id", config.ORGANIZATION_ID);

  if (!error) {
    console.log("lessons", lessons);
    console.log("courseId", courseId);
    console.log(
      "course",
      store.courses.value.forEach(course => console.log(course.id == courseId))
    );
    store.courses.value
      ?.find((course) => course.id == courseId)
      ?.lessons.next(lessons);
    return;
  }
  store.error.next(error?.message);
};

export default getLessonsByCourseId;
