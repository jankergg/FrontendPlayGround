import { useState } from "react";
import data from "./data.json";
import { Typeahead, Option } from "./Typeahead";
import "./SearchComponent.css";

const allOptions: Option[] = data.map((d, i) => ({
  id: i,
  text: d,
}));

export const SearchComponent = () => {
  const [suggestions, setSugestions] = useState<Option[]>([]);

  const onSearch = (text: string) => {
    setSugestions(
      allOptions.filter((option) =>
        option.text.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <div className="search-component">
      <Typeahead onChange={onSearch} options={suggestions} />
    </div>
  );
};
