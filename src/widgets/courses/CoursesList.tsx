import React, { useMemo, useState, useEffect } from "react";
import styled from "styled-components";

import getCourses from "./../../services/courses/getCourses";
import store from "./../../store/index";
import supabase from "./../../services/supabase";

import { Link } from "react-router-dom";
import BlogPostCard from "./../../teleporthq/components/blog-post-card";
import Container from "../../components/layout/Container";

const CourseContainer = styled.div`
width: 33%
`;

const CoursesList = () => {
  useMemo(() => getCourses(), []);

  const courses = store.courses.hook();
  const error = store.error.hook();

  let content: any = "";
  if (courses !== null)
    content = store.courses.value.map((course: any) => (
      <Link to={`courses/${course.id}`}>
        {" "}
          <BlogPostCard {...course} />
      </Link>
    ));
  if (error) content = error?.message;
  return <Container>{content}</Container>;
};

export default CoursesList;
