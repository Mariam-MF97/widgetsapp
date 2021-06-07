import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ lang, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setDebouncedText(text);
    }, 500);
      return () => {
          clearTimeout(timeoutID);
      }
     
  }, [text]);
    
  useEffect(() => {
    const translateText = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: lang.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    translateText();
  }, [lang, debouncedText]);

  return <h1 className="ui header">{translated}</h1>;
};

export default Convert;
