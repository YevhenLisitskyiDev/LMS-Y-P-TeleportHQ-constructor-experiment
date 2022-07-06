import supabase from "../supabase";
import config from "../../config";
import store from "../../store";
import getCourseById from "./../courses/getCourseById";

const getLessonsByCourseId = async (courseId: number) => {
  if (
    store.courses.value?.find((course) => course.id == courseId)?.lessons
      .value !== null
  ) {
    getCourseById(courseId);
  }

  let { data: lessons, error } = await supabase
    .from("lessons")
    .select("*")
    .eq("course_id", courseId);

  if (!error) {
    store.courses.value?.find((course) => course.id == courseId).lessons =
      lessons;
    store.currentLessons.next(lessons);
    return;
  }
  store.error.next(error?.message);
};

export default getLessonsByCourseId;
