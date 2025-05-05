import { useCallback, useRef, useState , useEffect} from "react";

type Order = "ASC" | "DESC";

export const useSortByColumn = <T extends Record<string, string | number>>(
  list: T[]
) => {
  const [sortedList, setSortedList] = useState<T[]>(list);
  const sorting = useRef<{ sortBy: keyof T; order: Order } | null>(null);

  useEffect(()=>{
    setSortedList(list);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list.length])

  const toggleColumn = useCallback(
    (key: keyof T) => {
      const sortBy = key;
      let order: Order = "ASC";
      if (sorting.current?.sortBy === sortBy) {
        order = sorting.current.order === "ASC" ? "DESC" : "ASC";
      }
      sorting.current = {
        sortBy,
        order,
      };

      const sorted = list.slice().sort((a, b) => {
        // for number type
        if (typeof a[key] === "string") {
          return order === "ASC"
            ? a[key].localeCompare(b[key] as string)
            : (b[key] as string).localeCompare(a[key]);
        }
        return order === "ASC"
          ? Number(a[key]) - Number(b[key])
          : Number(b[key]) - Number(a[key]);
      });
      setSortedList(sorted);
    },
    [list]
  );

  return { sortedList, toggleColumn };
};
