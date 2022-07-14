import React, { useState, useCallback, useRef, useEffect } from "react";
import styled from "styled-components";
import { deleteCourseHandler } from "./UDHandlers.ts";
import { EditAndDeleteButtonsBundle } from "../../../components/buttons";
import OpenModalButton from "./../../OpenModalButton.tsx";
import ToggleListItem from "../../ToggleListItem";
import LessonsCreator from "./../LessonsCreator/index";
import LessonsManager from "./../LessonsManager/";

export const CourseManagerWrapper = styled.div`
width: 100%`;

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
    right: 0;
  }
`;

export const CousreTitleLayout = ({ data: course }) => {
  return (
    <CousreTitleLayoutWrapper>
      {course.name} - {course.description}
      <EditAndDeleteButtonsBundle
        deleteHandler={() => deleteCourseHandler(course.id)}
      />
    </CousreTitleLayoutWrapper>
  );
};

const CousreContentLayoutWrapper = styled.div`
  width: 100%;

  padding-top: 40px;
  padding-left: calc(5% + 20px);
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CousreContentLayout = ({ data: course, isSelected }) => {
  return (
    <CousreContentLayoutWrapper>
      <LessonsManager id={course.id} isSelected={isSelected} />
      <LessonsCreator id={course.id} />
    </CousreContentLayoutWrapper>
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
