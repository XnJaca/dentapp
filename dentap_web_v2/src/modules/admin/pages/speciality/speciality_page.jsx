import React, { useEffect, useRef } from 'react'
import { deletePatient, getPacientes } from '../../../../store/patients/patients_thunk';
import { useDispatch, useSelector } from 'react-redux';
import { DataTable } from 'primereact/datatable';
import { Card } from 'primereact/card';
import { getColumns, getEstadoSeverity, skeleton } from '../../components';
import { headers_especialidad, headers_medicos, headers_pacientes, medics_inputs } from '../../../../const';
import { Column } from 'primereact/column';
import { speciality_inputs } from '../../../../const/inputs_speciality';
import { Button } from 'primereact/button';
import { openDialog } from '../../../../store/dialog';
import { DialogSpeciality } from './components/dialog_speciality';
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
import { SpecialityThunk } from '../../../../store/speciality/speciality_thunk';

export const SpecialityPage = () => {
    const dispatch = useDispatch();

    const { loading, data: specality } = useSelector(state => state.speciality)

    const dialog = useSelector(state => state.dialog);
    const toast = useRef(null);
    const { getDiseases } = DiseaseThunk();
    const { getMedics } = MedicThunk();

    const { getSpeciality,deleteSpeciality } = SpecialityThunk();

    useEffect(() => {
        dispatch(getMedics());
        dispatch(getAllergies());
        dispatch(getTipoSangre());
        dispatch(getDiseases());
        dispatch(getGeneros());
        dispatch(getTipoUsuarios());
        dispatch(getSpeciality());
    }, []);


    const emptyUser = [{
        id: null,
        cedula: '',
        nombre: '',
        estado: 0
    }];


    const bodyDeleteTemplate = (rowData) => {
        if (specality.length == 0) {
            return ""
        }
        return (
            <div className="flex inline-flex justify-content-center gap-2">
                <Button label="Eliminar" iconPos='right' icon="pi pi-trash" className='' severity={'danger'} onClick={() => {

                    Swal.fire({
                        title: '¿Está seguro que desea eliminar este especialidad?',
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
                            dispatch(deleteSpeciality(rowData.id)).then(result => {
                                if (result.error) {
                                    showError('Error al modificar el especialidad', result.message, 'error');
                                } else {
                                    Swal.fire(
                                        '¡Eliminado!',
                                        'El especialidad ha sido eliminado.',
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

        if (specality.length == 0) {
            return ""
        }
        console.log(rowData)
        const content = speciality_inputs(rowData.id,rowData.descripcion);

        return (
            <div className="flex inline-flex justify-content-center gap-2">
                <Button label='Editar' iconPos='right' icon="pi pi-pencil" onClick={() => dispatch(openDialog({
                    open: true,
                    title: 'Editar especialidad',
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

        const content = speciality_inputs("","");

        return <div className='lg:flex justify-content-between'>
            <h2>Listado de Especialidades</h2>
            <div className="flex inline-flex justify-content-center gap-2 ">
                <Button label='Crear Especialidad' iconPos='right' icon="pi pi-user-plus" onClick={() => dispatch(openDialog({
                    open: true,
                    title: 'Guardar Especialidad',
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
                        value={specality.length == 0 ? emptyUser : specality}
                        editMode="row"
                        dataKey="id"
                        tableStyle={{ minWidth: '10rem' }}
                        emptyMessage={loading ? <Skeleton /> : 'Esta todo muy vacio aqui :('}
                    >
                        <Column exportable={false} />
                        {getColumns(headers_especialidad, specality.length == 0 ? true : false)} 
                        <Column headerStyle={{ width: '10%', minWidth: '8rem' }} body={bodyEditTemplate} bodyStyle={{ textAlign: 'center' }}></Column>
                        <Column headerStyle={{ width: '10%', minWidth: '8rem' }} body={bodyDeleteTemplate} bodyStyle={{ textAlign: 'center' }}></Column>
                    </DataTable>
                </Card>

                <DialogSpeciality></DialogSpeciality>
            </div>
        </div>
    )
}
