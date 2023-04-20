import { Column } from "primereact/column";
import { Skeleton } from "primereact/skeleton";


export const getEstadoSeverity = (value) => {
    switch (value) {
        case 0:
            return 'danger';
        case 1:
            return 'success';
        default:
            return null;
    }
};

export const skeleton = () => {
    return <Skeleton></Skeleton>
}

export const getColumns = (columns, isLoading) => {
    return columns.map((header) => {
      return (
        <Column
          key={header.field}
          field={header.field}
          header={header.header}
          sortable
          style={{ minWidth: "10rem" }}
          body={isLoading ? <Skeleton /> : null}
        />
      );
    });
  };