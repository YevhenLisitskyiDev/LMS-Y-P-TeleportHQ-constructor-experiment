import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { deleteCourseHandler } from "./UDHandlers.ts";
import { XButton } from "../../../components/buttons";
import { PlusMinusIcon } from "../../Accordion/AccordionComponents";
import Curtain from "../../Curtain";

const CousreTitleLayoutWrapper = styled.div`
  width: 95%;
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

export const CousreTitleLayout = ({ course }) => {
  return (
    <CousreTitleLayoutWrapper>
      {course.name} - {course.description}
      <XButton
        onClick={(e) => {
          e.preventDefault();
          deleteCourseHandler(course.id);
        }}>
        Delete
      </XButton>
    </CousreTitleLayoutWrapper>
  );
};

const CourseTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CousreContentLayout = ({ data: course }) => {
  return (
    <CousreTitleLayoutWrapper>
      {course.name} - {course.description}
    </CousreTitleLayoutWrapper>
  );
};

const CourseItemWrapper = styled.div`
  width: 100%;
  position: relative;
`;

// Create memoized component to prevent re-rendering with id prop and test console.log(id)
export const CourseContentMemo = React.memo(({ id }) => {
  console.log("I'm rendering");
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
});

export const CourseItem = ({ data: course }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Make toggle is open function with useCallback
  const toggleIsOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <CourseItemWrapper>
      <CourseTitleWrapper onClick={toggleIsOpen}>
        <PlusMinusIcon isOpen={isOpen} />
        <CousreTitleLayout course={course} />
      </CourseTitleWrapper>

      <Curtain isOpen={isOpen}>
        <CourseContentMemo />
      </Curtain>
    </CourseItemWrapper>
  );
};
