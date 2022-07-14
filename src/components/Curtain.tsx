import React from "react";
import styled from "styled-components";

// Make Curtain component that will hide content behind it using height 0
const Curtain = styled.div<{ isOpen: boolean }>`
  height: ${({ isOpen }) => (isOpen ? "0" : "100%")};
  transition: height 0.3s ease-in-out;
  overflow: hidden;

  width: 100%;
  background: #fff;
  z-index: 1;
`;

export default Curtain;
