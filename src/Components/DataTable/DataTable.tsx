import { usePagination } from "./usePagination";
import { useSortByColumn } from "./useSortByColumn";
import { useMemo, useState, FC } from "react";
import { DataEntity, Column } from "./DataTable.types";
import { useDataFilters } from "./useDataFilters";
import "./DataTable.css";

export interface DataTableProps {
  data: DataEntity[];
  columns: Column[];
  pageSize: number;
}
export const DataTable: FC<DataTableProps> = ({ data, columns, pageSize }) => {
  const [size, setPageSize] = useState(pageSize);
  const [columnQueries, setColumnQueries] = useState(
    new Map<keyof DataEntity, string>()
  );
  const filteredData = useDataFilters(data, columnQueries);
  const { sortedList, toggleColumn } =
    useSortByColumn<DataEntity>(filteredData);
  const { currentPageItems, currentPage, totalPage, onNext, onPrev } =
    usePagination<DataEntity>({ data: sortedList, pageSize: size });

  const updateQueries = (value: string, key: keyof DataEntity) =>
    setColumnQueries((prev) => {
      const m = new Map(prev);
      if (value) {
        m.set(key, value);
      } else {
        m.delete(key);
      }
      return m;
    });

  const renderColumns = useMemo(
    () =>
      columns.map(({ key, name, width, filter }) => (
        <th key={key} style={{ width }}>
          <p onClick={() => toggleColumn(key)}>{name}</p>
          <div className="filter">
            {filter &&
              filter.map((filterBy) => (
                <div key={filterBy} className="filter-item">
                  <input
                    placeholder={`filter by ${filterBy}`}
                    className="filter-input"
                    type="text"
                    value={columnQueries.get(filterBy)}
                    onChange={(e) => updateQueries(e.target.value, filterBy)}
                  />
                </div>
              ))}
          </div>
        </th>
      )),
    [columnQueries, columns, toggleColumn]
  );

  const renderRows = currentPageItems.map((row) => (
    <tr key={row.id}>
      {columns.map(({ key }) => (
        <td key={key}>{row[key]}</td>
      ))}
    </tr>
  ));

  return (
    <table className="data-table">
      <thead>
        <tr>{renderColumns}</tr>
      </thead>
      <tbody>{renderRows}</tbody>
      <tfoot>
        <tr>
          <td>
            <button type="button" onClick={onPrev} disabled={currentPage === 1}>
              Prev
            </button>
          </td>
          <td colSpan={2} align="center">
            <select
              value={size}
              onChange={(e) => setPageSize(parseInt(e.target.value))}
            >
              {[5, 10, 15].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>{" "}
            {currentPage} of {totalPage} Page
          </td>
          <td align="right">
            <button
              type="button"
              onClick={onNext}
              disabled={currentPage === totalPage}
            >
              Next
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};
