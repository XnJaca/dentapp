
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { diseases_inputs, headers_enfermedades } from '../../../../const';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getColumns } from '../../components';
import { DialogDisease } from './components/dialog_disease';
import { Button } from 'primereact/button';
import Swal from 'sweetalert2';
import { openDialog } from '../../../../store/dialog';

import { DiseaseThunk } from '../../../../store/diseases/disease_thunk';
import { Skeleton } from 'primereact/skeleton';

export const DiseasePage = () => {

    const dispatch = useDispatch();

    const loading = useSelector(state => state.diseases.loading);
    const diseases = useSelector(state => state.diseases.data);

    const { deleteDisease, getDiseases } = DiseaseThunk();

    useEffect(() => {
        dispatch(getDiseases());
    }, []);

    const emptyValue = {
        id: null,
        nombre: '',
        descripcion: '',
    }

    const bodyDeleteTemplate = (rowData) => {
        if (diseases.length == 0) {
            return ""
        }
        return (
            <div className="flex inline-flex justify-content-center gap-2">
                <Button label="Eliminar" iconPos='right' icon="pi pi-trash" className='' severity={'danger'} onClick={() => {

                    Swal.fire({
                        title: '¿Está seguro que desea eliminar esta enfermedad?',
                        text: "No podrá revertir esta acción!",
                        icon: 'warning',
                        showCancelButton: true,
                        focusCancel: true,
                        confirmButtonColor: '#EE2046',
                        cancelButtonColor: '#7C9BFF',
                        confirmButtonText: 'Si, eliminar!',
                        cancelButtonText: 'Cancelar',
                        reverseButtons: true
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: 'Procesando solicitud',
                                didOpen: () => {
                                    Swal.showLoading()
                                }
                            });
                            dispatch(deleteDisease(rowData.id)).then(result => {
                                console.log('Result: ', result);
                                if (result.error) {
                                    showError('Error al eliminar la enfermedada', result.message, 'error');
                                } else {
                                    Swal.fire(
                                        '¡Eliminado!',
                                        'la enfermedada ha sido eliminado.',
                                        'success'
                                    )
                                }
                            });
                        }
                    })
                }} />
            </div>
        );
    };

    const bodyEditTemplate = (rowData) => {

        if (diseases.length == 0) {
            return ""
        }

        const content = diseases_inputs(rowData.id, rowData.nombre, rowData.descripcion);
        return (
            <div className="flex inline-flex justify-content-center gap-2">
                <Button label='Editar' iconPos='right' icon="pi pi-pencil" onClick={() => dispatch(openDialog({
                    open: true,
                    title: 'Editar Enfermedad',
                    content: content,
                    modificar: true
                }))} className='' severity={'primary'} />
            </div>
        );
    };

    const header = () => {
        const content = diseases_inputs("", "", "");

        return <div className='lg:flex justify-content-between'>
            <h2>Listado de Enfermedades</h2>
            <div className="flex inline-flex justify-content-center gap-2 ">
                <Button label='Crear Enfermedad' iconPos='right' icon="pi pi-user-plus" onClick={() => dispatch(openDialog({
                    open: true,
                    title: 'Guardar Enfermedad',
                    content: content,
                    modificar: false
                }))} className='h-4rem' size='small' severity={'primary'} />
            </div>
        </div>
    }


    return (
        <div className="card lg:flex justify-content-center">
            <div className="card lg:flex justify-content-center m-5">

                <Card title={header} >
                    <DataTable
                        value={diseases}
                        editMode="row"
                        dataKey="id"
                        tableStyle={{ minWidth: '10rem' }}
                        emptyMessage={loading ? <Skeleton /> : 'No hay enfermedades registradas'}
                    >
                        <Column exportable={false} />
                        {getColumns(headers_enfermedades, diseases.length == 0 ? true : false)}
                        <Column headerStyle={{ width: '10%', minWidth: '8rem' }} body={bodyEditTemplate} bodyStyle={{ textAlign: 'center' }}></Column>
                        <Column headerStyle={{ width: '10%', minWidth: '8rem' }} body={bodyDeleteTemplate} bodyStyle={{ textAlign: 'center' }}></Column>
                    </DataTable>
                </Card>

                <DialogDisease contentForm={diseases_inputs}></DialogDisease>
            </div>
        </div>
    )


}
