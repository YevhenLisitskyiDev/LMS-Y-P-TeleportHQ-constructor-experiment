import React from "react";
import CourseCreationForm from "./../../../teleporthq/components/course-creation-form";
import supabase from "./../../../services/supabase.ts";
import config from "./../../../config.ts";

const CoursesCreator = () => {
  const submitHandler = async (e) => {
    e.preventDefault();
    const button = e.target[e.target.length - 1];
    button.disabled = true;
    console.log(button);
    const formData = { organization_id: config.ORGANIZATION_ID };

    for (let i = 0; i < e.target.length; i++) {
      const fieldName = e.target[i].name;
      const fieldValue = e.target[i].value;
      if (fieldName) formData[fieldName] = fieldValue;
    }

    const { data, error } = await supabase.from("courses").insert([formData]);
    if (!error) {
      for (let i = 0; i < e.target.length; i++) {
        const fieldValue = e.target[i].value;
        if (fieldValue) e.target[i].value = "";

      }
      button.disabled = false;

      //   alert("Course created successfully");
    } else alert(error?.message);
  };
  return (
    <>
      <CourseCreationForm submitHandler={(e) => submitHandler(e)} />
    </>
  );
};

export default CoursesCreator;
