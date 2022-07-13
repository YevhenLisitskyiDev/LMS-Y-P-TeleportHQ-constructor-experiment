import React from "react";
import CoursesManagementForm from "./../../../../teleporthq/components/courses-management-form.js";
import submitHandler from "./submitHandler";


const CoursesCreator = () => {
  
  return (
    <>
      <CoursesManagementForm submitHandler={(e) => submitHandler(e)} />
    </>
  );
};

export default CoursesCreator;
