import React, { useState, useEffect, memo } from "react";
import styled from "styled-components";
import supabase from "./../../services/supabase";
import store from "./../../store/";

const LessonsList = memo(({ data, isSelected }) => {
  const [lessons, setLessons] = useState(null);
  const error = store.error.hook();
  const id = data.id;

  useEffect(async () => {
    console.log("lessonsListt mounted");
    if (isSelected) {
      let { data: lessons, error } = await supabase
        .from("lessons")
        .select("*")
        .eq("course_id", id);

      if (!error) setLessons(lessons);
      if (error) store.error.next(error);
    }
  }, []);

  if (error) return <div>{error?.message}</div>;
  if (!lessons) return <div>Loading lessons...</div>;
  if (lessons.length === 0) return <div>No lessons</div>;

  return (
    <div>
      {lessons.map((lesson, index) => (
        <div>{lesson.name}</div>
      ))}
    </div>
  );
});

export default LessonsList;
