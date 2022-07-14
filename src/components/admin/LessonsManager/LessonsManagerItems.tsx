import React, { useState, useCallback, useRef, useEffect } from "react";
import styled from "styled-components";
import { deleteCourseHandler } from "./UDHandlers.ts";

export const LessonItemWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
`