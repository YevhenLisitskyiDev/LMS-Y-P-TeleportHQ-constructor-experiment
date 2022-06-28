import React, { useMemo } from "react";
import styled from "styled-components";

import getLessonsByCourseId from "./../../services/lessons/getLessonsByCourseId.ts";
import store from "./../../store/index";
import { useParams, useHistory } from "react-router-dom";

const CourseId = () => {
  let courseId: any;

  console.log(store);

  const history = useHistory();
  if (history) {
    const { id } = useParams();
    courseId = id;
    useMemo(() => getLessonsByCourseId(courseId), [courseId]);

    const lessons = store.courses.value
      ?.find((course) => course.id == courseId)
      .lessons.hook();

    return <div>Course id is {courseId}</div>;
  } else return <div>courses not loaded</div>;
};

export default CourseId;
