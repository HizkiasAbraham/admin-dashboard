"use client";

import { useState, useEffect } from "react";
import { Icon } from "../icon";
import { AccordionProps } from "./types";

export function Accordion(props: AccordionProps) {
  const { key, title, content } = props;
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  useEffect(() => {
    setAccordionOpen(false);
  }, []);

  return (
    <div className="py-2">
      <div>
        <button
          className={`flex items-center gap-2 pl-4 w-full bg-light-grey rounded-xl ${
            accordionOpen ? "rounded-b-none" : "none"
          } text-left font-semibold py-2`}
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${key}`}
        >
          <span>
            {!accordionOpen ? (
              <Icon.CircularPlus className="h-6 w-6 text-green" />
            ) : (
              <Icon.CircularMinus className="h-6 w-6 text-red" />
            )}
          </span>
          <span className="font-semibold text-sm text-baseline">{title}</span>
        </button>
      </div>
      <div
        id={`accordion-text-${key}`}
        role="region"
        aria-labelledby={`accordion-title-01`}
        className={`grid text-sm rounded-b-xl text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden bg-light-grey flex gap-2 md:pl-8">
          <p className="p-4 pt-2 md:md-6 text-sm text-grey font-medium">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
