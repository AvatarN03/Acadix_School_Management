import assignRole from "./role";

export const addActionsIfAdmin = async (cols: any[]) => {
  const role = await assignRole();
  if (role === "admin") {
    return [
      ...cols,
      {
        header: "Actions",
        accessor: "actions",
        classes: "text-right md:text-left",
      },
    ];
  }
  return cols;
};
