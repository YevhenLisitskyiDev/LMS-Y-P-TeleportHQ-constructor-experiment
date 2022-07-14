import React, { useState, useEffect } from "react";
import styled from "styled-components";
import submitHandler from "./submitHandler";
import OpenModalButton from "./../../OpenModalButton";
import LessonsManagementForm from "./../../../teleporthq/components/lessons-management-form"

const LessonsCreator = ({id}) => {
  return (
    <OpenModalButton
      mode={"add"}
      modalContent={() => (
        <LessonsManagementForm submitHandler={(e) => submitHandler(e, id)}/>
      )}
    >
      Add Lesson
    </OpenModalButton>
  );
};

export default LessonsCreator;
