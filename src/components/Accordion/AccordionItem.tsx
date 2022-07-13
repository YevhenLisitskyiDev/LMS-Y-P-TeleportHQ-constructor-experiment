import {
  AccordionItemWrapper,
  AccordionBody,
  AccordionContent,
  AccordionTitle,
  AccordionTitleContainer,
  PlusMinusIcon,
  AccordionIconContainer,
} from "./AccordionComponents";
import useWindowSize from "./../../utils/hooks/useWindowSize";

const AccordionItem = ({ title, content }) => {
  const {
    bodyHeight,
    setBodyHeight,
    currentAccordion,
    setCurrentAccordion,
    addItemsToRefs,
    itemsRefs,
    itemIndex,
  } = blok;
  const Icon = accordionIcons[blok.icon];
  const { height, width } = useWindowSize();

  const clickHandler = () => {
    const itemIsOnTop =
      itemsRefs?.current[itemIndex]?.getBoundingClientRect().y < height / 2.9;
    const itemIsOnBottom =
      height - itemsRefs?.current[itemIndex]?.getBoundingClientRect().y <
      height / 4;
    const isEdgeCase = itemIsOnTop || itemIsOnBottom;
    const isCorrectSize = true;
    // const isCorrectSize = width <= 1400 || height <= 800;
    if (
      isCorrectSize &&
      currentAccordion !== itemIndex &&
      itemsRefs.current.length &&
      isEdgeCase
    ) {
      setTimeout(
        () =>
          itemsRefs?.current[itemIndex]?.scrollIntoView({
            behavior: "smooth",
            block: width <= 1400 ? "center" : "end",
          }),
        300
      );
    }
    setCurrentAccordion((prevState) =>
      prevState === itemIndex ? null : itemIndex
    );
    setBodyHeight(itemsRefs.current[itemIndex].clientHeight);
  };

  return (
    <AccordionItemWrapper>
      <AccordionTitle onClick={clickHandler}>
        <PlusMinusIcon isOpen={currentAccordion === itemIndex} />
        <AccordionTitleContainer>Test title</AccordionTitleContainer>
      </AccordionTitle>
      
      <AccordionBody
        active={currentAccordion === itemIndex}
        bodyHeight={bodyHeight}
      >
        <AccordionContent ref={addItemsToRefs}>Test content</AccordionContent>
      </AccordionBody>
    </AccordionItemWrapper>
  );
};

export default AccordionItem;
