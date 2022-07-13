import React, { useState, useEffect } from "react";
import styled from "styled-components";
import config from "../../../../config";
import supabase from "../../../../services/supabase";

const CoursesManager = () => {
  const [courses, setCourses] = useState(null);
  const [error, setError] = useState(null);

  useEffect(async () => {
    let { data: courses, error } = await supabase
      .from("courses")
      .select("*")
      .eq("organization_id", config.ORGANIZATION_ID);

    if (!error) setCourses(courses);
    if (error) setError(error);
  }, []);

  if (courses.length && courses.length === 0) return <div>No courses</div>;
  if (error) return <div>{error?.message}</div>;
  if (!courses) return <div>Loading...</div>;

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.name} - {course.description}
          </li>
        ))}
      </ul>
    </div>
  );
};
