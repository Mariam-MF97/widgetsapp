import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selectedItem, onSelectChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderOptions = options.map((option) => {
    if (option.value === selectedItem.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectChange(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? `visible active` : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selectedItem.label}</div>
          <div className={`menu ${open ? `visible transition` : ""}`}>
            {renderOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
/*<h3 style={{ color: `${selectedItem.value}`,marginTop: "10px" }} >{`you've selected The ${selectedItem.label} Color!`}</h3>*/
