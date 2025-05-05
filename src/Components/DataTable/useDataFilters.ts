import { DataEntity } from "./DataTable.types";

type UseDataFilters = (
  data: DataEntity[],
  queries: Map<keyof DataEntity, string>
) => DataEntity[];

export const useDataFilters: UseDataFilters = (dataList, queries) => {
  const keys = Array.from(queries.keys());

  return dataList.filter((data) =>
    keys.length
      ? keys.every((key) => {
          const value = queries.get(key) as string;
          if (key === "age:max") {
            return parseInt(value) >= (data['age'] as number);
          }
          if (key === "age:min") {
            return parseInt(value) <= (data['age'] as number);
          }
          return (data[key] as string).toLowerCase().includes(value);
        })
      : true
  );
};
