import React, { useMemo, useState, useEffect } from "react";
import BlogPostCard from "./../../teleporthq/components/blog-post-card";
import getCourses from "./../../services/courses/getCourses";
import store from "./../../store/index";

const CoursesList = () => {
  useMemo(() => getCourses(), []);

  const courses = store.courses.hook();
  let content: any = "";
  if (courses !== null)
    content = store.courses.value.map((course: any) => <BlogPostCard {...course} />);
  return <div>{content}</div>;
};

export default CoursesList;
