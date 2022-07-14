import React, { useState, useCallback, useRef, useEffect } from "react";
import styled from "styled-components";
import { deleteCourseHandler } from "./UDHandlers.ts";
import { XButton } from "../../../components/buttons";
import LessonsList from "../LessonsList";
import OpenModalButton from "./../../OpenModalButton.tsx";
import ToggleListItem from "../../ToggleListItem";

const CousreTitleLayoutWrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  list-style: none;

  & button {
    margin-left: 20px;
    z-index: 1;
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
          deleteCourseHandler(course.id);
        }}>
        Delete
      </XButton>
    </CousreTitleLayoutWrapper>
  );
};

export const CousreContentLayout = ({ data: course, isSelected }) => {
  return (
    <>
      <LessonsList id={course.id} isSelected={isSelected} />
      <OpenModalButton modalContent={() => <span>{course.id}</span>}>
        Add lesson
      </OpenModalButton>
    </>
  );
};

export const CourseItem = ({ data: course }) => {
  return (
    <ToggleListItem
      data={course}
      itemTitleLayout={CousreTitleLayout}
      itemContentLayout={CousreContentLayout}
    />
  );
};
