import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > div {
    flex: 0 1 33%;
    cursor: pointer;
  }

  & .blog-post-card-container {
    width: 100%;
  }
`;

export default Container
