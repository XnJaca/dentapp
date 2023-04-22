
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { headers_tratamientos } from '../../../../const';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CardContainer, getColumns } from '../../components';
import { DialogTreatment } from './components/dialog_treatment';
import { Button } from 'primereact/button';
import Swal from 'sweetalert2';
import { openDialog } from '../../../../store/dialog';

import { TreatmentThunk } from '../../../../store/treatment/treatment_thunk';
import { Skeleton } from 'primereact/skeleton';
import { treatment_inputs } from '../../../../const/inputs_treatment';
import { TreatmentTypeThunk } from '../../../../store/treatment_type/treatment_type_thunk';

export const TreatmentPage = () => {

    const dispatch = useDispatch();

    const loading = useSelector(state => state.treatment.loading);
    const treatment = useSelector(state => state.treatment.data);

    const { deleteTreatment, getTreatment } = TreatmentThunk();
    const { getTreatmentType } = TreatmentTypeThunk();

    useEffect(() => {
        dispatch(getTreatment());
        dispatch(getTreatmentType());
    }, []);

    const bodyDeleteTemplate = (rowData) => {
        if (treatment.length == 0) {
            return ""
        }
        return (
            <div className="flex inline-flex justify-content-center gap-2">
                <Button label="Eliminar" iconPos='right' icon="pi pi-trash" className='' severity={'danger'} onClick={() => {

                    Swal.fire({
                        title: '¿Está seguro que desea eliminar este tratamiento?',
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
                            dispatch(deleteTreatment(rowData.id)).then(result => {
                                console.log('Result: ', result);
                                if (result.error) {
                                    showError('Error al eliminar el tratamiento', result.message, 'error');
                                } else {
                                    Swal.fire(
                                        '¡Eliminado!',
                                        'El tratamiento ha sido eliminado.',
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

        if (treatment.length == 0) {
            return ""
        }

        const content = treatment_inputs(rowData.id, rowData.nombre, rowData.descripcion, rowData.precio);
        return (
            <div className="flex inline-flex justify-content-center gap-2">
                <Button label='Editar' iconPos='right' icon="pi pi-pencil" onClick={() => dispatch(openDialog({
                    open: true,
                    title: 'Editar Tratamiento',
                    content: content,
                    modificar: true
                }))} className='' severity={'primary'} />
            </div>
        );
    };

    const header = () => {
        const content = treatment_inputs("", "", "", "");

        return <div className='lg:flex justify-content-between'>
            <h2>Listado de Tratamientos</h2>
            <div className="flex inline-flex justify-content-center gap-2 ">
                <Button label='Crear Tratamiento' iconPos='right' icon="pi pi-user-plus" onClick={() => dispatch(openDialog({
                    open: true,
                    title: 'Guardar Tratamiento',
                    content: content,
                    modificar: false
                }))} className='h-4rem' size='small' severity={'primary'} />
            </div>
        </div>
    }


    return (
        <div>
            <CardContainer
                title="Gestionar tipos de tratamientos"
                subTitle=""
                goTo="/admin/treatmenttype"
                severity={1}
            />

            <div className="card lg:flex justify-content-center">
                <div className="card lg:flex justify-content-center m-5">
                    <Card title={header} >
                        <DataTable
                            value={treatment}
                            editMode="row"
                            dataKey="id"
                            tableStyle={{ minWidth: '10rem' }}
                            emptyMessage={loading ? <Skeleton /> : 'No hay tratamientos registrados'}
                        >
                            <Column exportable={false} />
                            {getColumns(headers_tratamientos, treatment != null && treatment.length == 0 ? true : false)}
                            <Column headerStyle={{ width: '10%', minWidth: '8rem' }} body={bodyEditTemplate} bodyStyle={{ textAlign: 'center' }}></Column>
                            <Column headerStyle={{ width: '10%', minWidth: '8rem' }} body={bodyDeleteTemplate} bodyStyle={{ textAlign: 'center' }}></Column>
                        </DataTable>
                    </Card>

                    <DialogTreatment contentForm={treatment_inputs}></DialogTreatment>
                </div>
            </div>
        </div>

    )


}
