import React, { useMemo, useState, useEffect } from "react";
import BlogPostCard from "./../../teleporthq/components/blog-post-card";
import getCourses from "./../../services/courses/getCourses";
import store from "./../../store/index";
import Container from "../../components/layout/Container";

const CoursesList = () => {
  useMemo(() => getCourses(), []);

  const courses = store.courses.hook();
  const error = store.error.hook();

  let content: any = "";
  if (courses !== null)
    content = store.courses.value.map((course: any) => (
      <BlogPostCard {...course} />
    ));
  if (error) content = error?.message;
  return <Container>{content}</Container>;
};

export default CoursesList;
