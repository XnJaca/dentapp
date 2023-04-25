import React, { useState, useEffect } from 'react';
import { ProductService } from '../users/service/produc_service';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Dropdown } from 'primereact/dropdown';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { useDispatch, useSelector } from 'react-redux';
import { getAppoiments } from '../../../../store/appoiments/appoiments_thunk';
import { DataTable } from 'primereact/datatable';
import { Card } from 'primereact/card';
import { headers_citas } from '../../../../const';
import { getColumns, getEstadoSeverity, skeleton } from '../../components';
import { Column } from 'primereact/column';
import { cita_inputs } from '../../../../const/inputs_citas';
import { openDialog } from '../../../../store/dialog';
import { DialogAppoiment } from './components/appoiment_dialog';

export const AppoimentsPage = () => {

    const dispatch = useDispatch();
    const citas = useSelector(state => state.citas.appoiments);


    const emptyUser = [{
        id: null,
        inicio_cita: '',
        fin_cita: '',
        confirmado: 0
    }];

    useEffect(() => {
        dispatch(getAppoiments());
    }, []);
    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.confirmado == 0 ? "Pendiente" : "Confirmado"} severity={getEstadoSeverity(rowData.confirmado)}></Tag>;
    };

    const header = () => {
        const content = cita_inputs("", "", "", "", "", "", "");

        return <div className='lg:flex justify-content-between'>
            <h2>Listado de Citas</h2>
            <div className="flex inline-flex justify-content-center gap-2 ">
                <Button label='Crear Cita' iconPos='right' icon="pi pi-plus" onClick={() => dispatch(openDialog({
                    open: true,
                    title: 'Guardar Cita',
                    content: content,
                    modificar: false
                }))} className='h-4rem' size='small' severity={'primary'} />
            </div>
        </div>
    }

    const bodyEditTemplate = (rowData) => {

        console.log('rowData: ', rowData);
        if (citas.length == 0) {
            return ""
        }

        const content = cita_inputs(rowData.id, rowData.inicio_cita, rowData.fin_cita, rowData.confirmado, rowData.consultorio_id, rowData.medico_id, rowData.tratamiento_id);
        return (
            <div className="flex inline-flex justify-content-center gap-2">
                <Button label='Editar' iconPos='right' icon="pi pi-pencil" onClick={() => dispatch(openDialog({
                    open: true,
                    title: 'Editar Cita',
                    content: content,
                    modificar: true
                }))} className='' severity={'primary'} />
            </div>
        );
    };

    const bodyDeleteTemplate = (rowData) => {
        if (citas.length == 0) {
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
                            dispatch(deleteUser(rowData.id)).then(result => {
                                console.log('Result: ', result);
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

    function getMedicoName(data) {
        if (data.inicio_cita != '') {
            return data.medico.usuario.nombre ?? "";
        } else {
            return "";
        }

    }

    function getCitaHI(data) {
        if (data.inicio_cita != '') {
            return data.cita.inicio_cita;
        } else {
            return "";
        }
        // return data.cita.inicio_cita == null ? "" : data.cita.inicio_cita;
    }
    function getCitaHF(data) {
        if (data.inicio_cita != '') {
            return data.cita.fin_cita;
        }
        return "";
    }
    function getPacienteName(data) {
        if (data.inicio_cita != '') {
            return data.paciente.usuario.nombre ?? "";
        }
        return "";
    }

    return (
        <div className="card lg:flex justify-content-center">
            <div className="card lg:flex justify-content-center m-5">

                <Card title={header} >
                    <DataTable
                        value={citas.length == 0 ? emptyUser : citas}
                        editMode="row"
                        dataKey="id"
                        tableStyle={{ minWidth: '10rem' }}
                    >

                        <Column exportable={false} />
                        {/* {getColumns(headers_citas, citas.length == 0 ? true : false)} */}
                        <Column field="id" header="Id" style={{ width: '10%' }}></Column>
                        <Column field="medico" header="Medico" body={citas.length == 0 ? skeleton : getMedicoName}></Column>
                        <Column field="paciente" header="Paciente" body={citas.length == 0 ? skeleton : getPacienteName}></Column>
                        <Column field="inicio_cita" header="Fecha y Hora Inicio" body={citas.length == 0 ? skeleton : getCitaHI}></Column>
                        <Column field="fin_cita" header="Fecha y Hora Fin" body={citas.length == 0 ? skeleton : getCitaHF}></Column>
                        <Column field="estado" header="Confirmado" body={citas.length == 0 ? skeleton : statusBodyTemplate} style={{ width: '10%' }}></Column>
                        <Column headerStyle={{ width: '10%', minWidth: '8rem' }} body={bodyEditTemplate} bodyStyle={{ textAlign: 'center' }}></Column>
                        <Column headerStyle={{ width: '10%', minWidth: '8rem' }} body={bodyDeleteTemplate} bodyStyle={{ textAlign: 'center' }}></Column>
                    </DataTable>
                </Card>

                {/* <DialogUser isVisible={isVisible} setIsVisible={setVisible} contentForm={usuario_inputs}></DialogUser> */}
                <DialogAppoiment />
            </div>
        </div>
    )
}