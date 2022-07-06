import React, { useMemo } from "react";
import styled from "styled-components";

import getCourseById from "./../../services/courses/getCourseById";
import getLessonsByCourseId from "./../../services/lessons/getLessonsByCourseId";
import store from "./../../store/index";
import { useParams, useHistory } from "react-router-dom";

const CourseId = () => {
  const history = useHistory();

  if (history) {
    const { id } = useParams();
    useMemo(() => getLessonsByCourseId(id), [id]);
    const lessons = store.currentLessons.hook();
    const error = store.error.hook();

    return (
      <>
        <div>
          Coure id: {id} <br /> Lessons count {lessons?.length}
        </div>
      </>
    );
  } else return <div>courses not loaded</div>;
};

export default CourseId;
