import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert"

const options = [
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "English",
    value: "en",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Korean",
    value: "ko",
  },
  {
    label: "Russian",
    value: "ru",
  },
  {
    label: "Turkish",
    value: "tr",
  },
  {
    label: "Urdu",
    value: "ur",
  },
];
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div style={{margin:"20px"}}>
      <div className="ui form">
        <div className="field">
          <label className="label">Enter Text:</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Please Select a Language:"
        options={options}
        selectedItem={language}
        onSelectChange={setLanguage}
          />
          <h4 className="label">Output:</h4>
          <Convert lang={language} text={ text}/>
    </div>
  );
};

export default Translate;
