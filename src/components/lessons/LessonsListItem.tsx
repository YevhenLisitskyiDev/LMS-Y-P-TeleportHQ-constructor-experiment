import React, { useMemo } from "react";
import styled from "styled-components";

const LessonsListItemContainer = styled.div<{ selected?: boolean }>`
    cursor: pointer;
    text-decoration: ${({ selected }) => (selected ? "underline" : "none")};
`;

interface LessonsListItemProps {
  name: string;
  selected?: boolean;
  onClick: () => void;
}

const LessonsListItem: React.FC<LessonsListItemProps> = ({
  name,
  onClick,
  selected,
}) => {
  return (
    <LessonsListItemContainer selected={selected} onClick={onClick}>
      {name}
    </LessonsListItemContainer>
  );
};

export default LessonsListItem;
