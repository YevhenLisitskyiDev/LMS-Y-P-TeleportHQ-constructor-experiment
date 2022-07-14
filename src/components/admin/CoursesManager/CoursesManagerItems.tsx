import React, { useState, useCallback, useRef, useEffect } from "react";
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
`;

// Create memoized component to prevent re-rendering with id prop and test console.log(id)
export const CourseContentMemo = React.memo(({ id, loadItemsTrigger }) => {

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
});

export const CourseItem = ({ data: course }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loadItemsTrigger, setLoadItemsTrigger] = useState(false);


  // Make toggle is open function with useCallback
  const toggleIsOpen = useCallback(() => {
    if (!loadItemsTrigger) setLoadItemsTrigger(true)
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <CourseItemWrapper>
      <CourseTitleWrapper onClick={toggleIsOpen}>
        <PlusMinusIcon isOpen={isOpen} />
        <CousreTitleLayout course={course} />
      </CourseTitleWrapper>

      <Curtain isOpen={isOpen}>
        <CourseContentMemo id={course.id} loadItemsTrigger={loadItemsTrigger} />
      </Curtain>
    </CourseItemWrapper>
  );
};
