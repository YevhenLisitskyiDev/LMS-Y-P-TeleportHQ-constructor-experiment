import React, { useState, useEffect, memo } from "react";
import styled from "styled-components";
import supabase from "./../../../services/supabase";
import store from "./../../../store/";
import { EditAndDeleteButtonsBundle } from "../../buttons";
import { LessonItemWrapper } from "./LessonsManagerItems";

const LessonsManager = memo(({ id, isSelected }) => {
  const lessons = store.lessons[id]?.hook();
  const error = store.error.hook();

  useEffect(async () => {
    console.log("lessonsListt mounted");
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
  if (!lessons) return <div style={{width: "100%"}}>Loading lessons...</div>;
  if (lessons.length === 0) return <div>No lessons</div>;

  return (
    <div style={{width: "100%"}}>
      {lessons.map((lesson, index) => (
        <LessonItemWrapper>
          {lesson.name}
          <EditAndDeleteButtonsBundle />
        </LessonItemWrapper>
      ))}
    </div>
  );
});

export default LessonsManager;
