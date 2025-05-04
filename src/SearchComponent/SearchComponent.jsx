import { useState } from "react";
import data from "./data.json";
import { Typeahead } from "./Typeahead";

const allOptions = data.map((d, i) => ({ id: i, text: d }));

export const SearchComponent = () => {
  const [suggestions, setSugestions] = useState([]);

  const onSearch = (text) => {
    setSugestions(
      allOptions.filter((option) => option.text.toLowerCase().includes(text.toLowerCase()))
    );
  };

  return (
    <div className="search-component">
      <Typeahead onChange={onSearch} options={suggestions} />
    </div>
  );
};
