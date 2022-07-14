import React, { useState } from "react";
import styled from "styled-components";
import { PlusMinusIcon } from "./Accordion/AccordionComponents";
import Curtain from "./Curtain";

const ItemTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  margin-bottom: 20px;
`;

const ListItemWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 20px;
  & * {
    z-index: 1;
  }
`;

const ToggleListItem = ({
  data,
  itemTitleLayout: ItemTitleLayout,
  itemContentLayout: ItemContentLayout,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loadItemsTrigger, setLoadItemsTrigger] = useState(false);

  // Make toggle is open function with useCallback
  const toggleIsOpen = (e) => {
    // console.log(data)
    if (e.target.nodeName === "BUTTON") {
      setIsOpen(false);
      return;
    }
    if (!loadItemsTrigger) setLoadItemsTrigger(true);
    setIsOpen(!isOpen);
  };

  return (
    <ListItemWrapper>
      <ItemTitleWrapper onClick={(e) => toggleIsOpen(e)}>
        <PlusMinusIcon isOpen={isOpen} />
        <ItemTitleLayout data={data} />
      </ItemTitleWrapper>

      <Curtain isOpen={isOpen}>
        <ItemContentLayout data={data} isSelected={loadItemsTrigger} />
      </Curtain>
    </ListItemWrapper>
  );
};

export default ToggleListItem;
