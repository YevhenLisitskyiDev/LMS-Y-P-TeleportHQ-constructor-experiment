import supabase from "../../../services/supabase";
import store from "../../../store";

export const deleteCourseHandler = async (id: string) => {
  let { data, error } = await supabase.from("courses").delete().eq("id", id);
  if (!error) {
    const courses = store.courses.value;
    store.courses.next(courses.filter((course) => course.id !== id));
  } else if (error) {
    store.error.next(error?.message);
  }
};

export const updateCourseHandler = async (e, courseId) => {
  e.preventDefault();
  const button = e.target[e.target.length - 1];
  button.disabled = true;
  const formData = {};

  for (let i = 0; i < e.target.length; i++) {
    const fieldName = e.target[i].name;
    const fieldValue = e.target[i].value;
    if (fieldName && fieldValue) formData[fieldName] = fieldValue;
  }

  let { data, error } = await supabase
    .from("courses")
    .update(formData)
    .eq("id", courseId);
  if (!error) {
    const newCourse = data[0];

    for (let i = 0; i < e.target.length; i++) {
      const { value } = e.target[i];
      e.target[i].placeholder = newCourse[e.target[i].name];
      e.target[i].value = null;
    }

    const oldCourses = store.courses.value;
    const newCourses = oldCourses.map((course) =>
      course.id === courseId ? newCourse : course
    );
    store.courses.next(newCourses);
    store.modal.isOpen.toggle()

    alert("Course updated successfully")
  } else if (error) {
    store.error.next(error?.message);
  }
};
