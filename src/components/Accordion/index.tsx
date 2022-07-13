import React, { useState, useRef, useEffect } from 'react';

import { AccordionContainer, AccordionInner } from './AccordionComponents';
import AccordionItem from "./AccordionItem"

function Accordion({ content }) {
    const [currentAccordion, setCurrentAccordion] = useState(null as number);
    const [bodyHeight, setBodyHeight] = useState(0);

    const itemsRefs = useRef<HTMLDivElement[]>([]);
    itemsRefs.current = [];

    const addItemsToRefs = (el) => {
        if (el && !itemsRefs.current.includes(el)) itemsRefs.current.push(el);
    };

    const accordionItemProps = {
        itemsRefs,
        bodyHeight,
        setBodyHeight,
        addItemsToRefs,
        currentAccordion,
        setCurrentAccordion,
    };

    useEffect(() => {
        document.addEventListener('keydown', escFunction, false);

        return () => document.removeEventListener('keydown', escFunction, false);
    }, []);

    const escFunction = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setCurrentAccordion(null);
        }
    };

    return (
        <>
            <AccordionContainer>
                <AccordionInner>
                    {content?.map((item) => (
                      <AccordionItem />
                    ))}
                </AccordionInner>
            </AccordionContainer>
        </>
    );
}

export default Accordion;
