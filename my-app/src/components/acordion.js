import React from 'react';
 
import 'react-accessible-accordion/dist/fancy-example.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

export default function Acordion() {
    return (
        <>
            <Accordion>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Distraction-free video distribution program
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div>
                            <div className="grid_item"> </div>
                            <div className="grid_item"> </div>
                            <div className="grid_item"> </div>
                        </div>
                        <p>I am a React Developer who likes connections A lot,
                             in the future I would like to attend many Tech events knowing as many events that can I attend to.</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                        Yes Vancity
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>A website developed for my dfirst clinets</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Immigration Medical
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        Images
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </>   
    );
}