
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { headers_medicamentos, headers_tipos_tratamientos } from '../../../../const';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getColumns } from '../../components';
import { DialogTreatmentType } from './components/dialog_treatment_type';
import { Button } from 'primereact/button';
import Swal from 'sweetalert2';
import { openDialog } from '../../../../store/dialog';

import { TreatmentTypeThunk } from '../../../../store/treatment_type/treatment_type_thunk';
import { Skeleton } from 'primereact/skeleton'; 
import { treatment_type_inputs } from '../../../../const/inputs_treatment_type';

export const TreatmentTypePage = () => {

    // tratamiento tipo de sangre -> paciente

    const dispatch = useDispatch();

    const loading = useSelector(state => state.treatmentType.loading);
    const treatmentType = useSelector(state => state.treatmentType.data);

    const { deleteTreatmentType,getTreatmentType } = TreatmentTypeThunk();

    useEffect(() => {
        dispatch(getTreatmentType());
    }, []); 

    const bodyDeleteTemplate = (rowData) => {
        if (treatmentType.length == 0) {
            return ""
        }
        return (
            <div className="flex inline-flex justify-content-center gap-2">
                <Button label="Eliminar" iconPos='right' icon="pi pi-trash" className='' severity={'danger'} onClick={() => {

                    Swal.fire({
                        title: '¿Está seguro que desea eliminar este tipo de tratamiento?',
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
                            dispatch(deleteTreatmentType(rowData.id)).then(result => {
                                console.log('Result: ', result);
                                if (result.error) {
                                    showError('Error al eliminar el tipo de tratamiento', result.message, 'error');
                                } else {
                                    Swal.fire(
                                        '¡Eliminado!',
                                        'El tipo de tratamiento ha sido eliminado.',
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

        if (treatmentType.length == 0) {
            return ""
        }

        const content = treatment_type_inputs(rowData.id, rowData.nombre, rowData.descripcion, rowData.precio);
        return (
            <div className="flex inline-flex justify-content-center gap-2">
                <Button label='Editar' iconPos='right' icon="pi pi-pencil" onClick={() => dispatch(openDialog({
                    open: true,
                    title: 'Editar tipo de tratamiento',
                    content: content,
                    modificar: true
                }))} className='' severity={'primary'} />
            </div>
        );
    };

    const header = () => {
        const content = treatment_type_inputs("", "", "","");

        return <div className='lg:flex justify-content-between'>
            <h2>Listado de tipos de tratamientos</h2>
            <div className="flex inline-flex justify-content-center gap-2 ">
                <Button label='Crear tipo de tratamiento' iconPos='right' icon="pi pi-user-plus" onClick={() => dispatch(openDialog({
                    open: true,
                    title: 'Guardar tipo de tratamiento',
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
                        value={treatmentType}
                        editMode="row"
                        dataKey="id"
                        tableStyle={{ minWidth: '10rem' }}
                        emptyMessage={loading ? <Skeleton /> : 'No hay tipo de tratamiento registrados'}
                    >
                        <Column exportable={false} /> 
                        {getColumns(headers_tipos_tratamientos,treatmentType != null && treatmentType.length == 0 ? true : false)}
                        <Column headerStyle={{ width: '10%', minWidth: '8rem' }} body={bodyEditTemplate} bodyStyle={{ textAlign: 'center' }}></Column>
                        <Column headerStyle={{ width: '10%', minWidth: '8rem' }} body={bodyDeleteTemplate} bodyStyle={{ textAlign: 'center' }}></Column>
                    </DataTable>
                </Card>

                <DialogTreatmentType contentForm={treatment_type_inputs}></DialogTreatmentType>
            </div>
        </div>
    )


}
