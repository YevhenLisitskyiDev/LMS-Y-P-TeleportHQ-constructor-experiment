import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CoursesManagementForm from "../../../teleporthq/components/courses-management-form";
import submitHandler from "./submitHandler";
import OpenModalButton from "./../../OpenModalButton";

const CoursesCreator = () => {
  return (
    <OpenModalButton
      modalContent={() => (
        <CoursesManagementForm submitHandler={(e) => submitHandler(e)} />
      )}
    >
      Add Course
    </OpenModalButton>
  );
};

export default CoursesCreator;
