import supabase from "../../../services/supabase";
import store from "../../../store";

export const deleteLessonHandler = async (id: string) => {
  let { data, error } = await supabase.from("lessons").delete().eq("id", id);
  if (!error) {
    const courseId = data[0].course_id;
    const lessons = store.lessons[courseId].value;
    store.lessons[courseId].next(lessons.filter((lesson) => lesson.id !== id));
  } else if (error) {
    store.error.next(error?.message);
  }
};

export const updateLessonHandler = async (e, lessonId: string, courseId) => {
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
    .from("lessons")
    .update(formData)
    .eq("id", lessonId);
  if (!error) {
    const newLesson = data[0];

    for (let i = 0; i < e.target.length; i++) {
      const { value } = e.target[i];
      e.target[i].placeholder = newLesson[e.target[i].name];
      e.target[i].value = null;
    }

    const oldLessons = store.lessons[courseId].value;
    const newLessons = oldLessons.map((lesson) =>
      lesson.id === lessonId ? newLesson : lesson
    );
    store.lessons[courseId].next(newLessons);
    store.modal.isOpen.toggle()

    alert("Lesson updated successfully")
  } else if (error) {
    store.error.next(error?.message);
  }
};
