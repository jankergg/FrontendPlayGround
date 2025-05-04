import { useCallback,  useRef,  useState } from "react";

const sortByColumnName = (a, b, property, order) => {
  // for number type
  if (isNaN(a[property])) {
    return order === "ASC"
      ? a[property].localeCompare(b[property])
      : b[property].localeCompare(a[property]);
  }
  return order === "ASC"
    ? a[property] - b[property]
    : b[property] - a[property];
};

export const useSortByColumn = (list) => {
  const [sortedList, setSortedList] = useState(list);
  const sorting = useRef({
    sortBy: "id",
    order: "ASC",
  });

  const toggleColumn = useCallback(
    (key) => {
      const sortBy = key;
      let order = "ASC";
      if (sorting.current.sortBy === sortBy) {
        order = sorting.current.order === "ASC" ? "DES" : "ASC";
      }
      sorting.current = {
        sortBy,
        order,
      };

      const sorted = list.slice().sort((a, b) => sortByColumnName(a, b, sortBy, order))
      setSortedList(sorted);
    },
    [list]
  );

  return { sortedList, toggleColumn };
};
