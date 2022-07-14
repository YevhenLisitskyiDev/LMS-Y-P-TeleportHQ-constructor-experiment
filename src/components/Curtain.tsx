import React from "react";
import styled from "styled-components";

// Make Curtain component that will hide content behind it using height 0
const Curtain = styled.div<{ isOpen: boolean }>`
  height: auto;
  max-height: ${({ isOpen }) => (!isOpen ? 0 : "100vh")};

	/* Set our transitions up. */
	-webkit-transition: max-height 0.8s;
	-moz-transition: max-height 0.8s;
	transition: max-height 0.8s;
  transition: max-height 0.5s;

  overflow: hidden;
position: relative;
  width: 100%;
  background: #fff;
  z-index: 1;
`;

export default Curtain;
