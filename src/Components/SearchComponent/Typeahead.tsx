import { useState, FC, ChangeEvent } from "react";

export interface Option {
  id: number;
  text: string;
}
const isEqual = (str1: string, str2: string) =>
  str1.toLowerCase() === str2.toLowerCase();

interface TypeaheadProps {
  options: Option[];
  onChange: (text: string) => void;
}
export const Typeahead: FC<TypeaheadProps> = ({ options, onChange }) => {
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
    onChange(value);
  };

  function getHighlightedText(data: Option) {
    // split and capturing the search term
    const parts = data.text.split(new RegExp(`(${text})`, "gi"));

    return (
      <div>
        {parts.map((part, i) => (
          <span key={i} className={isEqual(part, text) ? "highlight" : ""}>
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
      {text && options.map(getHighlightedText)}
    </div>
  );
};
