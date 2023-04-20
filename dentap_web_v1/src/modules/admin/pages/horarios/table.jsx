import { Toast } from 'primereact/toast';
import React, { useRef, useState } from 'react'
import { right_toolbar_table } from './components/right_toolbar_table';
import { DataTable } from 'primereact/datatable';
import { Toolbar } from 'primereact/toolbar';
import { DialogForm, HeaderTable, LeftToolBarTable } from './components';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { ActionBody } from './components/action_body_';


// headers = [id, descripcion, estado]...
// concept = 'medico' -> Esto es el concepto de la tabla, por ejemplo tabla para medicos, alergias, etc

export const HorariosTable = ({ headers, concept, data, contentForm }) => {
    const [selectedData, setSelectedData] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);

    const dt = useRef(null);

    console.log("data: ", selectedData);

    const showEstadoColumn = data.some((row) => row.estado);

    const columns = headers.map((header) => (
        <Column
            key={header.field}
            field={header.field}
            header={header.header}
            sortable
            style={{ minWidth: "12rem" }}
        />
    ));

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.estado == 1 ? 'Activo' : 'Inactivo'} severity={rowData.estado == 1 ? "success" : "danger"}></Tag>;
    };

    const header = () => {
        return (
            <HeaderTable concepto={concept} />
        );
    }

    const left_toolbar_table = () => {
        return (
            <LeftToolBarTable concept={"Ingresar nuevo Horario"} content={contentForm} />
        );
    }

    const toast = useRef(null);

    return (
        <>
            <Toast ref={toast} />
            <div className="card">
                <Toolbar className="mb-4" left={left_toolbar_table} right={right_toolbar_table}></Toolbar>

                <DataTable
                    ref={dt}
                    value={data}
                    selection={selectedData}
                    selectionMode='single'
                    onSelectionChange={(e) => setSelectedData(e.value)}
                    dataKey="id"
                    paginator
                    rows={10}
                    rowsPerPageOptions={[5, 10, 25]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate={`Mostrando de ${1} a ${data.length} de ${data.length} ${concept}`}
                    globalFilter={globalFilter}
                    header={header}
                >
                    <Column selectionMode="multiple" exportable={false} />
                    {columns}

                    {showEstadoColumn && (
                        <Column
                            field="estado"
                            header="Estado"
                            body={statusBodyTemplate}
                            sortable
                            style={{ minWidth: "6rem" }}
                        />
                    )
                    }

                    <Column
                        body={<ActionBody selectedRowData={selectedData} concept={concept} />}
                        exportable={false}
                        style={{ minWidth: "12rem" }}
                    />

                </DataTable>
            </div>

            <DialogForm />
        </>
    )
}
