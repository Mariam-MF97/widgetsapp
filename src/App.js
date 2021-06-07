import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content:
      "React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.",
  },
  {
    title: "why use React?",
    content:
      "Being simple to read and easy to use made React easy to understand and implement, allowing businesses to hit the ground running and build what they need as quickly as possible.",
  },
  {
    title: "How does React app work?",
    content:
      "React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.",
  },
  {
    title: "How much time is needed to learn React?",
    content:
      "If you know the basics of React, it will take you between one and six months to become proficient in React Js. This depends on your prior software development experience and the time you can invest in learning.",
  },
];

const options = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Blue",
    value: "blue",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Purple",
    value: "purple",
  },
  {
    label: "Yellow",
    value: "yellow",
  },
  {
    label: "Black",
    value: "black",
  },
  {
    label: "Orange",
    value: "orange",
  },
  {
    label: "Cyan",
    value: "cyan",
  },
  {
    label: "Fuchsia",
    value: "fuchsia",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    /* <div style={{ margin: "20px" }}>
      {showDropdown ? (
        <Dropdown
          label : "Please Select a Color:"
          options={options}
          selectedItem={selected}
          onSelectChange={setSelected}
        />
      ) : null}
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        style={{ marginTop: "10px" }}
      >
        Toggle Dropdown
      </button>
    </div> */
    <div>
      <Header style={{marginBottom : "20px"}}/>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/dropdown">
        <div style={{ margin: "20px" }}>
          {showDropdown ? (
            <Dropdown
              label="Please Select a Color:"
              options={options}
              selectedItem={selected}
              onSelectChange={setSelected}
            />
          ) : null}
          <h3
            style={{ color: `${selected.value}` }}
          >{`You've Selected The ${selected.label} Color!`}</h3>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            style={{ marginTop: "10px" }}
          >
            Toggle Dropdown
          </button>
        </div>
      </Route>
      <Route path="/search">
        <Search/>
      </Route>
      <Route path="/translate">
        <Translate/>
      </Route>
    </div>
  );
};
