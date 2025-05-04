import { usePagination } from "./usePagination";
import { useSortByColumn } from "./useSortByColumn";
import { useMemo } from "react";

export const DataTable = ({ data, columns, pageSize }) => {
  const { sortedList, toggleColumn } = useSortByColumn(data);
  const {
    currentPageItems,
    currentPage,
    setCurrentPage,
    totalPage,
    onNext,
    onPrev,
  } = usePagination({ data: sortedList, pageSize });

  const renderColumns = useMemo(
    () =>
      columns.map((column) => (
        <th
          key={column.key}
          width={column.width}
          onClick={() => toggleColumn(column.key)}
        >
          {column.name}
        </th>
      )),
    [columns, toggleColumn]
  );

  const renderRows = currentPageItems.map((row) => (
    <tr key={row.id}>
      {columns.map(({ key }) => (
        <td key={key}>
          {row[key]}
        </td>
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
            <input
              className="data-table--page-input"
              type="number"
              value={currentPage}
              onChange={(e) => setCurrentPage(parseInt(e.target.value))}
            />
            / {totalPage} Page
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
