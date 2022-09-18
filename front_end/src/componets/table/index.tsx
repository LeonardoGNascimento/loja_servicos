import { CustomTable } from "./style";

interface Props {
  columns: any[];
  data: any[];
}

export function Table({ columns, data }: Props) {
  const customStyles = {
    rows: {
      style: {
        minHeight: "50px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
      },
    },
  };

  return (
    <CustomTable
      columns={columns}
      data={data}
      pagination
      customStyles={customStyles}
    />
  );
}
