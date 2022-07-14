import React from "react";
import styled from "styled-components";
import OpenModalButton from "./OpenModalButton";

// create x closing button for modal window  with styled component

export const XButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: #f44336;
  color: #fff;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  border: none;
  cursor: pointer;
  z-index: 9999;

  opacity: 1;
  transition: 0.3s;
  &:hover {
    opacity: 0.5;
  }
`;

// create add course button with styled component
export const ColoredButton = styled.button<{ mode?: "edit" | "add" | "delete" }>`
  background-color: ${({ mode }) => {
    if (mode === "edit") {
      return "#ffc107";
    } else if (mode === "add") {
      return "#4caf50";
    } else if (mode === "delete") {
      return "#f44336";
    } 

    else {
      return "#00acc1";
    }
  }};
  color: #fff;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  cursor: pointer;
  opacity: 1;
  transition: 0.3s;
  &:hover {
    opacity: 0.5;
  }
`;

const EditAndDeleteButtonsBundleWrapper = styled.div`

  & button {
    margin-left: 20px;
    z-index: 1;
    position: relative;
    top: unset;
    right: 0;
  }
`;

export const EditAndDeleteButtonsBundle = ({
  editHandler = () => {},
  deleteHandler = () => {},
  editContent = null,
  deleteContent = null,
}) => {
  console.log(editContent);
  return (
    <EditAndDeleteButtonsBundleWrapper>
      {editContent ? (
        <OpenModalButton modalContent={editContent} mode={"edit"}>
          Edit
        </OpenModalButton>
      ) : (
        <ColoredButton mode={"edit"} onClick={editHandler}>
          Edit
        </ColoredButton>
      )}

      {deleteContent ? (
        <OpenModalButton modalContent={deleteContent} mode={"delete"}>
          Delete
        </OpenModalButton>
      ) : (
        <XButton onClick={deleteHandler}>Delete</XButton>
      )}
      
    </EditAndDeleteButtonsBundleWrapper>
  );
};
