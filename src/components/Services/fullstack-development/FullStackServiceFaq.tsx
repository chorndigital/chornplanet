"use client";

import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from "react-accessible-accordion";
import {sanitizeUUID} from "@/lib/utils";
import {IFullStackFaq} from "@/data/fullstack/model/IFullStackFaq";

export default function FullStackServiceFaq({faqs}: { faqs: IFullStackFaq[] }) {
    if (faqs.length === 0) {
        return null;
    }

    return (
        <div className="faq-accordion mt-3">
            <Accordion allowZeroExpanded preExpanded={[`${sanitizeUUID(faqs[0].question)}`]}>
                {faqs.map((item, index: number) => (
                    <AccordionItem key={index} uuid={sanitizeUUID(item.question)}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <span>{item.question}</span>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>{item.answer}</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
