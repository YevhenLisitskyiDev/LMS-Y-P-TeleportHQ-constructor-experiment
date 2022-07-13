import React from "react";
import styled from "styled-components";
import { deleteCourseHandler } from "./UDHandlers.ts";
import { XButton } from "../../../components/buttons";

const CousreTitleLayoutWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 20px;
list-style: none;

& button {
margin-left: 20px;

position: relative;
top: unset;
}
`;

export const CousreTitleLayout = ({ data: course }) => {
  return (
    <CousreTitleLayoutWrapper>
      {course.name} - {course.description}
      <XButton
        onClick={(e) => {
          e.preventDefault();
          deleteCourseHandler(course.id);
        }}
      >
        Delete
      </XButton>
    </CousreTitleLayoutWrapper>
  );
};

export const CousreContentLayout = ({ data: course }) => {
  return (
    <CousreTitleLayoutWrapper>
      {course.name} - {course.description}
    </CousreTitleLayoutWrapper>
  );
};
