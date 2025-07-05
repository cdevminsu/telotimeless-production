"use client";

import { useState, useRef, useEffect } from "react";

function AccordionItem({ title, content, isOpen, onClick }) {
  const accordionContentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (accordionContentRef.current) {
      setContentHeight(accordionContentRef.current.offsetHeight);
    }
  }, [isOpen]);

  return (
    <div className={`cs_accordian ${isOpen ? "active" : ""}`}>
      <h2 className="cs_accordian_head cs_heading_color" onClick={onClick}>
        {title}
        <span className="cs_accordian_arrow">
          <svg
            width={28}
            height={28}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 14C0 21.7195 6.28053 28 14 28C21.7195 28 28 21.7195 28 14C28 6.28053 21.7195 0 14 0C6.28053 0 0 6.28053 0 14ZM26.25 14C26.25 20.7548 20.7548 26.25 14 26.25C7.24522 26.25 1.75 20.7548 1.75 14C1.75 7.24522 7.24522 1.75 14 1.75C20.7548 1.75 26.25 7.24522 26.25 14ZM13.38 8.13C13.72 7.79 14.28 7.79 14.62 8.13L18.99 12.51C19.16 12.68 19.25 12.9 19.25 13.12C19.25 13.35 19.16 13.57 18.99 13.74C18.65 14.09 18.1 14.09 17.76 13.74L14.88 10.86V19.25C14.88 19.73 14.48 20.12 14 20.12C13.52 20.12 13.13 19.73 13.13 19.25V10.86L10.24 13.74C9.9 14.09 9.35 14.09 9.01 13.74C8.66 13.4 8.66 12.85 9.01 12.51L13.38 8.13Z"
              fill="#307BC4"
            />
          </svg>
        </span>
      </h2>
      <div
        className="cs_accordian_body_wrap"
        style={{ height: isOpen ? `${contentHeight}px` : "0" }}
      >
        <div className="cs_accordian_body" ref={accordionContentRef}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default function Accordion({ data, variant }) {
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  const handleItemClick = (index) => {
    setOpenItemIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  useEffect(() => {
    if (firstItemOpen && data?.length > 0) {
      setOpenItemIndex(2); // 또는 0 (첫 번째 항목)
      setFirstItemOpen(false);
    }
  }, [firstItemOpen, data]);

  return (
    <div className={`cs_accordians cs_heading_color ${variant || ""}`}>
      {data?.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={index === openItemIndex}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
}
