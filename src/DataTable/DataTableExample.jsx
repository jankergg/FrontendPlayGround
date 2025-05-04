import data from "./data.json";
import { DataTable } from "./DataTable";

const columns = [
  { key: "id", name: "ID", width: 100 },
  { key: "name", name: "Name", width: 200 },
  { key: "age", name: "Age", width: 100 },
  { key: "occupation", name: "Occupation", width: 200 },
];
export const DataTableExample = () => <DataTable data={data} columns={columns} pageSize={6} />;

