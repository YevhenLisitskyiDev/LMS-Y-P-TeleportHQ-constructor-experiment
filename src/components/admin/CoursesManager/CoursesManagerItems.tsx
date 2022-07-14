import React, { useState, useCallback, useRef, useEffect } from "react";
import styled from "styled-components";
import { deleteCourseHandler } from "./UDHandlers.ts";
import { XButton } from "../../../components/buttons";
import { PlusMinusIcon } from "../../Accordion/AccordionComponents";
import Curtain from "../../Curtain";
import LessonsList from "../LessonsList";
import OpenModalButton from "./../../OpenModalButton.tsx"

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

export const CousreTitleLayout = ({ course }) => {
  console.log(course);

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

const CourseTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

// export const CousreContentLayout = ({ data: course }) => {
//   return (
//     <CousreTitleLayoutWrapper>
//       {course.name} - {course.description}
//     </CousreTitleLayoutWrapper>
//   );
// };

const CourseItemWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 20px;
  & * {
    z-index: 1;
  }
`;

export const CourseItem = ({ data: course }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loadItemsTrigger, setLoadItemsTrigger] = useState(false);

  // Make toggle is open function with useCallback
  const toggleIsOpen = (e) => {
    if (e.target.nodeName === "BUTTON") {
      setIsOpen(false);
      return;
    }
    if (!loadItemsTrigger) setLoadItemsTrigger(true);
    setIsOpen(!isOpen);
  };

  return (
    <CourseItemWrapper>
      <CourseTitleWrapper onClick={(e) => toggleIsOpen(e)}>
        <PlusMinusIcon isOpen={isOpen} />
        <CousreTitleLayout course={course} />
      </CourseTitleWrapper>

      <Curtain isOpen={isOpen}>
        <LessonsList id={course.id} isSelected={loadItemsTrigger} />
        <OpenModalButton modalContent={()=> <span>Its working</span>}>Add lesson</OpenModalButton>
      </Curtain>
    </CourseItemWrapper>
  );
};
