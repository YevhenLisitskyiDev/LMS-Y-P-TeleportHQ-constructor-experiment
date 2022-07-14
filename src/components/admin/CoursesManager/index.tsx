import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import config from "../../../config";
import store from "../../../store";
import supabase from "../../../services/supabase";
import { CourseItem } from "./CoursesManagerItems";

const CoursesManager = () => {
  const courses = store.courses.hook();
  const [error, setError] = useState(null);

  useEffect(async () => {
    let { data: courses, error } = await supabase
      .from("courses")
      .select("*")
      .eq("organization_id", config.ORGANIZATION_ID);

    if (!error) store.courses.next(courses);
    if (error) setError(error);
  }, []);

  if (error) return <div>{error?.message}</div>;
  if (!courses) return <div>Loading...</div>;
  if (courses.length && courses.length === 0) return <div>No courses</div>;

  return (
    <div>
      <h1>Courses</h1>
      {courses.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CoursesManager;
