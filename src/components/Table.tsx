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
    <table className="w-full min-w-[760px] border-separate border-spacing-0 text-left">
      <thead>
        <tr className="border-b border-slate-200 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
          {columns.map((col, index) => (
            <th key={index} className={`border-b border-slate-200 px-4 py-3 ${col.classes || ""}`}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-sm text-slate-700">{data.map((d) => renderRow(d))}</tbody>
    </table>
  );
};

export default Table;
