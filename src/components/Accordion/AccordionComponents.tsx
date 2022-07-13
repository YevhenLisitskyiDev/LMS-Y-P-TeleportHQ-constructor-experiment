import styled, { css } from "styled-components";

export const AccordionContainer = styled.div``;
export const AccordionInner = styled.div`
  position: relative;
  width: 100%;
  z-index: 200;

  & * {
    z-index: 200;
  }

  @media (max-width: 960px) {
    padding-bottom: 50px;
  }
  @media (max-width: 425px) {
    padding-right: 0;
  }
`;

export const AccordionItemWrapper = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  &:last-of-type {
    border: none;
  }
`;

export const AccordionTitle = styled.div`
  margin: 0;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  & div {
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
  }
`;
interface AccordionIconContainerProps {
  selected?: boolean;
}

export const AccordionIconContainer = styled.div<AccordionIconContainerProps>`
  display: inline !important;
  max-width: 30px;
  transition: 0.3s;

  
`;

export const AccordionTitleContainer = styled.div`
  width: 100%;
  align-items: center;

  padding: 20px 0;
  & h3 {
    margin: 0;
    text-transform: none;
    margin: 3px 10px 0;
  }

  & p {
    margin: 0;
    padding-right: 8%;
  }

  & > div {
    width: 95%;

    svg {
      margin-top: 7px;
      width: 30px;
    }

    div {
      width: calc(60% - 15px);
    }

    p {
      width: calc(40% - 15px);
    }
  }

  @media (max-width: 1800px) {
    & p {
      padding-right: 5%;
    }

    & > div {
      width: 95%;

      svg {
        width: 30px;
      }

      div {
        width: calc(56% - 15px);
      }

      p {
        width: calc(44% - 15px);
      }
    }
  }

  @media (max-width: 1500px) {
    & p {
      padding-right: 8%;
    }

    & > div {
      width: 95%;

      svg {
        width: 30px;
      }

      div {
        width: calc(60% - 15px);
      }

      p {
        width: calc(40% - 15px);
      }
    }
  }

  @media (max-width: 980px) {
    & > div {
      width: 95%;

      div {
        width: calc(100% - 30px);
      }

      p {
        width: calc(100%);
        padding: 10px 40px 10px 42px;
      }
    }
  }
`;

interface PlusMinusIconProps {
  isOpen: boolean;
}

export const PlusMinusIcon = styled.div<PlusMinusIconProps>`
  width: 5% !important;
  padding: 0;
  border: 0;
  font-size: 1.5em;
  position: relative;

  &:before,
  &:after {
    position: absolute;
    transition: 0.3s;
    background: #fff;
    border-radius: 2px;
    width: 27px;
    height: 2px;
    display: inline-block;
    content: "";
  }

  &:after {
    transform: rotate(${({ isOpen }) => (isOpen ? 180 : 90)}deg);
  }
`;

export const PlusIcon = styled.span`
  width: 5%;
  &:after {
    display: block;
    color: #fff;
    font-size: 50px;
    line-height: 100%;
    content: "+";
  }
`;

interface AccordionBodyProps {
  active: boolean;
  bodyHeight: number;
}

export const AccordionBody = styled.div<AccordionBodyProps>`
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  height: 0;
  overflow: hidden;
  transition: height 0.3s;

  ${({ active, bodyHeight }) =>
    active &&
    css`
      height: ${bodyHeight}px;
    `}
`;

export const AccordionContent = styled.div`
  margin: 0;
  padding: 0 20px 20px;
  width: 58%;
  height: auto;

  @media screen and {
    @media screen and (max-height: 800px) {
      width: 55%;
    }
  }

  & ul {
    margin-bottom: 15px;
    padding-left: 52px;
    padding-bottom: 5px;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 140%;
    color: #fff;

    li {
      margin-bottom: 10px;
    }
  }

  @media (max-width: 950px) {
    width: 100%;
    padding-right: 100px;
  }

  @media (max-width: 950px) {
    padding-right: 50px;
  }
`;
