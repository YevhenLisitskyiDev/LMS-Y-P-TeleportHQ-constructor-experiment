import styled from "styled-components";

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

  &:hover {
    background-color: #00bcd4;
    color: #fff;
  }
`;

// create add course button with styled component
export const AddSomethingButton = styled.button<{ mode?: "edit" | "add" }>`
  background-color: ${({ mode }) => {
    if (mode === "edit") {
      return "#00acc1";
    } else if (mode === "add") {
      return "#00acc1";
    } else {
      return "#4caf50";
    }
  }};
  color: #fff;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  cursor: pointer;
  &:hover {
    background-color: #00acc1;
  }
`;
