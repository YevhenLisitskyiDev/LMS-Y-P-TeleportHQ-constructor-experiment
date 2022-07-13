import React from "react";
import CourseCreationForm from "../../../../teleporthq/components/course-creation-form";
import submitHandler from "./submitHandler";


const CoursesCreator = () => {
  
  return (
    <>
      <CourseCreationForm submitHandler={(e) => submitHandler(e)} />
    </>
  );
};

export default CoursesCreator;
