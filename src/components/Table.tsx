import { ColumnType } from "../../types";

const Table = ({
  columns,
  renderRow,
  data,
}: {
  columns: ColumnType[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
}) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-300 text-sm">
          {columns.map((col, index) => (
            <th key={index} className={col.classes && col.classes}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((d) => renderRow(d))}</tbody>
    </table>
  );
};

export default Table;
