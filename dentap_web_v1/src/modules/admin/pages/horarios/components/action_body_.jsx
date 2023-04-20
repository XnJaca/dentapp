import { Button } from 'primereact/button';
import React from 'react'
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
// import { startDeleteEnfermedad } from '../../../../core/store/enfermedades/thunk';
import { openDialog } from '../../../../../core/store/dialog';
import { campos } from '../../../../../core/const';
import { startDeleteEnfermedad } from '../../../../../core/store/enfermedades/thunk';
import { inputsHorario } from '../../../../../core/const/horarios/horario_content';

export const ActionBody = ({ selectedRowData, concept }) => {
    const dispatch = useDispatch();

    const editRow = () => {
        // console.log("Editando fila:", selectedRowData);
        if (selectedRowData == null) {
            Swal.fire({
                title: 'Atención',
                text: 'Primero seleccione una fila y luego presione el boton.',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            });
            return;
        }

        console.log("Editando fila:", selectedRowData[0].dia);

        const content = inputsHorario(selectedRowData[0].id, selectedRowData[0].dia, selectedRowData[0].hora_inicio,selectedRowData[0].hora_final);

        dispatch(openDialog(
            {
                open: true,
                title: 'Editar',
                content: content,
                modificar: true,
            }
        ));
    };

    const deleteRow = () => {
        console.log("Eliminando fila:", selectedRowData);
        if (selectedRowData == null) {
            Swal.fire({
                title: 'Atención',
                text: 'Primero seleccione una fila y luego presione el boton.',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            });
            return;
        }

        Swal.fire({
            title: '¿Está seguro que desea eliminar este registro?',
            text: "No podrá revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#D75491',
            cancelButtonColor: '#54D7C8',
            confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(startDeleteEnfermedad(selectedRowData[0].id)).then(
                    Swal.fire(
                        'Eliminado!',
                        'El registro ha sido eliminado.',
                        'success'
                    )
                );

            }
        });
    }

    // console.log("ROOOOW",rowData);
    return (
        <React.Fragment>
            {/* <Button icon="pi pi-pencil" rounded outlined className="mr-4" onClick={() => editUser(rowData)} /> */}
            <Button icon="pi pi-pencil" rounded outlined className="mr-4" onClick={() => editRow()} />
            <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => deleteRow()} />
            {/* <Button icon="pi pi-trash" rounded outlined severity="danger" /> */}
        </React.Fragment>
    );
}
