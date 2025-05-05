import data from "./data.json";
import { DataTable } from "./DataTable";

const columns = [
  { key: "id", name: "ID", width: 100 },
  { key: "name", name: "Name", width: 200, filter: ["name"] },
  { key: "age", name: "Age", width: 100, filter: ["age:min", "age:max"] },
  { key: "occupation", name: "Occupation", width: 200, filter: ["occupation"] },
];
export const DataTableExample = () => {
  return <DataTable data={data} columns={columns} pageSize={5} />;
};
