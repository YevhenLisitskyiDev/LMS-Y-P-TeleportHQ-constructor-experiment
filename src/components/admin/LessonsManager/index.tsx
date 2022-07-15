import React, { useState, useEffect, memo } from "react";
import styled from "styled-components";
import supabase from "./../../../services/supabase";
import store from "./../../../store/";
import { EditAndDeleteButtonsBundle } from "../../buttons";
import { LessonItemWrapper } from "./LessonsManagerItems";
import { deleteLessonHandler, updateLessonHandler } from "./UDHandlers";
import LessonsManagementForm from "./../../../teleporthq/components/lessons-management-form";

const LessonsManager = memo(({ id, isSelected }) => {
  if (!store.lessons[id])
    return <div style={{ width: "100%" }}>Loading lessons...</div>;

  const lessons = store.lessons[id]?.hook();
  const error = store.error.hook();

  useEffect(async () => {
    if (isSelected) {
      let { data: lessons, error } = await supabase
        .from("lessons")
        .select("*")
        .eq("course_id", id);

      if (!error) store.lessons[id].next(lessons);
      if (error) store.error.next(error);
    }
  }, [isSelected]);

  if (error) return <div>{error?.message}</div>;
  if (!lessons) return <div style={{ width: "100%" }}>Loading lessons...</div>;
  if (lessons.length === 0) return <div>No lessons</div>;

  return (
    <div style={{ width: "100%" }}>
      {lessons.map((lesson, index) => (
        <LessonItemWrapper>
          {lesson.name}
          <EditAndDeleteButtonsBundle
            editContent={() => (
              <LessonsManagementForm
                lessonNamePlaceholder={lesson.name}
                lessonNameClickHandler={(e) => (e.target.value = lesson.name)}
                lessonDescriptionPlaceholder={lesson.description}
                lessonDescriptionClickHandler={(e) =>
                  (e.target.value = lesson.description)
                }
                videoUrlPlaceholder={lesson.video_url}
                lessonVideoUrlClickHandler={(e) =>
                  (e.target.value = lesson.video_url)
                }
                submitHandler={(e) => updateLessonHandler(e, lesson.id, id)}
              />
            )}
            deleteHandler={() => deleteLessonHandler(lesson.id)}
          />
        </LessonItemWrapper>
      ))}
    </div>
  );
});

export default LessonsManager;
