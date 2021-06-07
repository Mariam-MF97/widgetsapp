import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onQuestionClick = (index) => {
    setActiveIndex(index);
  };

  const renderItems = items.map((item, index) => {

    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onQuestionClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion acc" style={{margin : "20px"}}>
      <h2 style={{textAlign : "center",padding : "10px"}}>React.js Accordion</h2>
      {renderItems}
    </div>
  );
};

export default Accordion;
