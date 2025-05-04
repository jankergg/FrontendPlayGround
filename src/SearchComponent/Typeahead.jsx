import { useState } from "react";

const isEqual = (str1, str2)=> str1.toLowerCase()===str2.toLowerCase();

export const Typeahead = ({ options, onChange }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    onChange(value);
  };

  function getHighlightedText(data) {
    // split and capturing the search term
    const parts = data.text.split(new RegExp(`(${text})`, "gi"));
    console.log("parts:", parts);
    return (
      <div>
        {parts.map((part, i) => (
          <span
            key={i}
            style={isEqual(part, text) ? { fontWeight: "bold" } : {}}
          >
            {part}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="search-component">
      <label htmlFor="search-box">Search: </label>
      <input
        type="input"
        name="search-box"
        value={text}
        onChange={handleChange}
      />
      {options.map(getHighlightedText)}
    </div>
  );
};
