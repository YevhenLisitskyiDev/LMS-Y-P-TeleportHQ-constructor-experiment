import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import config from "../../../config";
import store from "../../../store";
import supabase from "../../../services/supabase";
import { deleteCourseHandler } from "./UDHandlers.ts";

const CoursesManager = () => {
  const courses = store.courses.hook();
  const [error, setError] = useState<string>("");

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
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.name} - {course.description}
            <button onClick={() => deleteCourseHandler(course.id, setError)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesManager;
