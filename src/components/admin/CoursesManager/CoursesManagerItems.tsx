import React, { useState, useCallback, useRef, useEffect } from "react";
import styled from "styled-components";
import { deleteCourseHandler, updateCourseHandler } from "./UDHandlers.ts";
import { EditAndDeleteButtonsBundle } from "../../../components/buttons";
import ToggleListItem from "../../ToggleListItem";
import LessonsCreator from "./../LessonsCreator/index";
import LessonsManager from "./../LessonsManager/";
import CoursesManagementForm from "./../../../teleporthq/components/courses-management-form";

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
        editContent={() => (
          <CoursesManagementForm
            courseNamePlaceholder={course.name}
            courseNameClickHandler={(e) => (e.target.value = course.name)}
            courseDescriptionPlaceholder={course.description}
            courseDescriptionClickHandler={(e) =>
              (e.target.value = course.description)
            }
            authorNamePlaceholder={course.author_name}
            courseAuthorClickHandler={course.author_name}
            submitHandler={(e) => updateCourseHandler(e, course.id)}
          />
        )}
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
