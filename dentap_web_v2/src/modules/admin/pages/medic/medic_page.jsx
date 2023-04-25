import React, { useEffect, useRef } from 'react'
import { deletePatient, getPacientes } from '../../../../store/patients/patients_thunk';
import { useDispatch, useSelector } from 'react-redux';
import { DataTable } from 'primereact/datatable';
import { Card } from 'primereact/card';
import { getColumns, getEstadoSeverity, skeleton } from '../../components';
import { headers_medicos, headers_pacientes, medics_inputs } from '../../../../const';
import { Column } from 'primereact/column';
import { patients_inputs } from '../../../../const/inputs_patients';
import { Button } from 'primereact/button';
import { openDialog } from '../../../../store/dialog';
import { DialogMedic } from './components/dialog_medic';
import { getAllergies } from '../../../../store/allergies/allergies_thunk';
import { getTipoSangre } from '../../../../store/tipo_sangre/blood_type_thunk';
import { DiseaseThunk } from '../../../../store/diseases/disease_thunk';
import { getTipoUsuarios } from '../../../../store/tipo_usuarios/tipo_usuario_thunk';
import { MedicThunk } from '../../../../store/medics/medic_thunk';
import { Skeleton } from 'primereact/skeleton';
import Swal from 'sweetalert2';
import { Toast } from 'primereact/toast';
import { Tag } from 'primereact/tag';
import { getGeneros } from '../../../../store/generos';

export const MedicsPage = () => {
    const dispatch = useDispatch(); 

    const { loading, data: medics } = useSelector(state => state.medic)

    const dialog = useSelector(state => state.dialog);
    const toast = useRef(null);
    const { getDiseases } = DiseaseThunk();
    const {getMedics} = MedicThunk();

    useEffect(() => {
        dispatch(getMedics());
        dispatch(getAllergies());
        dispatch(getTipoSangre());
        dispatch(getDiseases());
        dispatch(getGeneros());
        dispatch(getTipoUsuarios());
    }, []);


    const emptyUser = [{
        id: null,
        cedula: '',
        nombre: '',
        estado: 0
    }];


    const bodyDeleteTemplate = (rowData) => {
        if (medics.length == 0) {
            return ""
        }
        return (
            <div className="flex inline-flex justify-content-center gap-2">
                <Button label="Eliminar" iconPos='right' icon="pi pi-trash" className='' severity={'danger'} onClick={() => {

                    Swal.fire({
                        title: '¿Está seguro que desea eliminar este usuario?',
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
                            dispatch(deletePatient(rowData.id)).then(result => { 
                                if (result.error) {
                                    showError('Error al modificar el usuario', result.message, 'error');
                                } else {
                                    Swal.fire(
                                        '¡Eliminado!',
                                        'El usuario ha sido eliminado.',
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

        if (medics.length == 0) {
            return ""
        }
        console.log(rowData)
        const content = medics_inputs(rowData.id, rowData.cedula, rowData.nombre, rowData.nombre_emer, rowData.apellido_1, rowData.apellido_2, rowData.email, rowData.pass, rowData.fecha_nacimiento, rowData.direccion, rowData.telefono, rowData.telefono_emer, rowData.genero_id, rowData.estado, rowData.tipo_usuario.id);

        return (
            <div className="flex inline-flex justify-content-center gap-2">
                <Button label='Editar' iconPos='right' icon="pi pi-pencil" onClick={() => dispatch(openDialog({
                    open: true,
                    title: 'Editar Paciente',
                    content: content,
                    modificar: true
                }))} className='' severity={'primary'} />
            </div>
        );
    };
    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.estado == 0 ? "Inactivo" : "Activo"} severity={getEstadoSeverity(rowData.estado)}></Tag>;
    };
    const header = () => {
 
        const content = medics_inputs("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");

        return <div className='lg:flex justify-content-between'>
            <h2>Listado de Medicos</h2>
            <div className="flex inline-flex justify-content-center gap-2 ">
                <Button label='Crear Usuario' iconPos='right' icon="pi pi-user-plus" onClick={() => dispatch(openDialog({
                    open: true,
                    title: 'Guardar Medico',
                    content: content,
                    modificar: false
                }))} className='h-4rem' size='small' severity={'primary'} />
            </div>
        </div>
    }
    return (

        <div className="card lg:flex justify-content-center">
            <div className="card lg:flex justify-content-center m-5">
                <Toast ref={toast} />
                <Card title={header} >
                    <DataTable
                        value={medics.length == 0 ? emptyUser : medics}
                        editMode="row"
                        dataKey="id"
                        tableStyle={{ minWidth: '10rem' }}
                        emptyMessage={loading ? <Skeleton /> : 'Esta todo muy vacio aqui :('}
                    >
                        <Column exportable={false} />
                        {getColumns(headers_medicos, medics.length == 0 ? true : false)}
                        <Column field="estado" header="Estado" body={medics.length == 0 ? skeleton : statusBodyTemplate} style={{ width: '10%' }}></Column>
                        <Column headerStyle={{ width: '10%', minWidth: '8rem' }} body={bodyEditTemplate} bodyStyle={{ textAlign: 'center' }}></Column>
                        <Column headerStyle={{ width: '10%', minWidth: '8rem' }} body={bodyDeleteTemplate} bodyStyle={{ textAlign: 'center' }}></Column>
                    </DataTable>
                </Card>

                <DialogMedic></DialogMedic>
            </div>
        </div>
    )
}
