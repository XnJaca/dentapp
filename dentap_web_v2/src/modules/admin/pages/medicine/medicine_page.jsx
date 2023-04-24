
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { headers_medicamentos } from '../../../../const';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getColumns } from '../../components';
import { DialogMedicine } from './components/dialog_medicine';
import { Button } from 'primereact/button';
import Swal from 'sweetalert2';
import { openDialog } from '../../../../store/dialog';

import { MedicineThunk } from '../../../../store/medicine/medicine_thunk';
import { Skeleton } from 'primereact/skeleton';
import { medicines_inputs } from '../../../../const/inputs_medicines';

export const MedicinePage = () => {

    // tratamiento tipo de sangre -> paciente

    const dispatch = useDispatch();

    const loading = useSelector(state => state.medicines.loading);
    const medicines = useSelector(state => state.medicines.data);

    const { deleteMedicine, getMedicines } = MedicineThunk();

    useEffect(() => {
        dispatch(getMedicines());
    }, []); 

    const bodyDeleteTemplate = (rowData) => {
        if (medicines.length == 0) {
            return ""
        }
        return (
            <div className="flex inline-flex justify-content-center gap-2">
                <Button label="Eliminar" iconPos='right' icon="pi pi-trash" className='' severity={'danger'} onClick={() => {

                    Swal.fire({
                        title: '¿Está seguro que desea eliminar este medicamento?',
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
                            dispatch(deleteMedicine(rowData.id)).then(result => {
                                console.log('Result: ', result);
                                if (result.error) {
                                    showError('Error al eliminar el medicamento', result.message, 'error');
                                } else {
                                    Swal.fire(
                                        '¡Eliminado!',
                                        'El medicamento ha sido eliminado.',
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

        if (medicines.length == 0) {
            return ""
        }

        const content = medicines_inputs(rowData.id, rowData.nombre, rowData.descripcion,rowData.precio);
        return (
            <div className="flex inline-flex justify-content-center gap-2">
                <Button label='Editar' iconPos='right' icon="pi pi-pencil" onClick={() => dispatch(openDialog({
                    open: true,
                    title: 'Editar Medicamento',
                    content: content,
                    modificar: true
                }))} className='' severity={'primary'} />
            </div>
        );
    };

    const header = () => {
        const content = medicines_inputs("", "", "","");

        return <div className='lg:flex justify-content-between'>
            <h2>Listado de Medicamentos</h2>
            <div className="flex inline-flex justify-content-center gap-2 ">
                <Button label='Crear Medicamentos' iconPos='right' icon="pi pi-user-plus" onClick={() => dispatch(openDialog({
                    open: true,
                    title: 'Guardar Medicamentos',
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
                        value={medicines}
                        editMode="row"
                        dataKey="id"
                        tableStyle={{ minWidth: '10rem' }}
                        emptyMessage={loading ? <Skeleton /> : 'No hay medicamentos registradas'}
                    >
                        <Column exportable={false} />
                        {getColumns(headers_medicamentos, medicines.length == 0 ? true : false)}
                        <Column headerStyle={{ width: '10%', minWidth: '8rem' }} body={bodyEditTemplate} bodyStyle={{ textAlign: 'center' }}></Column>
                        <Column headerStyle={{ width: '10%', minWidth: '8rem' }} body={bodyDeleteTemplate} bodyStyle={{ textAlign: 'center' }}></Column>
                    </DataTable>
                </Card>

                <DialogMedicine contentForm={medicines_inputs}></DialogMedicine>
            </div>
        </div>
    )


}
