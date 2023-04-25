import React, { useEffect, useRef } from 'react'
import { deletePatient, getPacientes } from '../../../../store/patients/patients_thunk';
import { useDispatch, useSelector } from 'react-redux';
import { DataTable } from 'primereact/datatable';
import { Card } from 'primereact/card';
import { getColumns, getEstadoSeverity, skeleton } from '../../components';
import { HeaderTable } from './components/header_table';
import { headers_pacientes } from '../../../../const';
import { Column } from 'primereact/column';
import { patients_inputs } from '../../../../const/inputs_patients';
import { Button } from 'primereact/button';
import { openDialog } from '../../../../store/dialog';
import { DialogPatient } from './components/dialog_patient';
import { getAllAllergies } from '../../../../store/allergies/services/allergies_service';
import { getAllergies } from '../../../../store/allergies/allergies_thunk';
import { getTipoSangre } from '../../../../store/tipo_sangre/blood_type_thunk';
import { Skeleton } from 'primereact/skeleton';
import Swal from 'sweetalert2';
import { Toast } from 'primereact/toast';
import { Tag } from 'primereact/tag';

export const PatientsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.pacientes.loading);
  const patients = useSelector(state => state.pacientes.pacientes);
  const dialog = useSelector(state => state.dialog);
  const toast = useRef(null);
  useEffect(() => {
    dispatch(getPacientes());
    dispatch(getAllergies());
    dispatch(getTipoSangre());
  }, []);


  const emptyUser = [{
    id: null,
    cedula: '',
    nombre: '',
    estado: 0
  }];


  const bodyDeleteTemplate = (rowData) => {
    if (patients.length == 0) {
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

  const bodyEditTemplate = (rowData) => {

    // console.log("ENFERMEDADEEES", dialog.content[15].value);
    console.log("ROOOWDATA", rowData);
    if (patients.length == 0) {
      return ""
    }

    const content = patients_inputs(rowData.id, rowData.cedula, rowData.nombre, rowData.nombre_emer, rowData.apellido_1, rowData.apellido_2, rowData.email, rowData.pass, rowData.fecha_nacimiento, rowData.direccion, rowData.telefono, rowData.telefono_emer, rowData.genero_id, rowData.estado, rowData.tipo_usuario.id, rowData.tipo_sangre.id, rowData.alergias, rowData.enfermedades);
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

    console.log('patients: ', patients);
    const content = patients_inputs("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");

    return <div className='lg:flex justify-content-between'>
      <h2>Listado de Pacientes</h2>
      <div className="flex inline-flex justify-content-center gap-2 ">
        <Button label='Crear Usuario' iconPos='right' icon="pi pi-user-plus" onClick={() => dispatch(openDialog({
          open: true,
          title: 'Guardar Paciente',
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
            value={patients.length == 0 ? emptyUser : patients}
            editMode="row"
            dataKey="id"
            tableStyle={{ minWidth: '10rem' }}
            emptyMessage={loading ? <Skeleton /> : 'Esta todo muy vacio aqui :('}
          >
            <Column exportable={false} />
            {getColumns(headers_pacientes, patients.length == 0 ? true : false)}
            <Column field="estado" header="Estado" body={patients.length == 0 ? skeleton : statusBodyTemplate} style={{ width: '10%' }}></Column>
            <Column headerStyle={{ width: '10%', minWidth: '8rem' }} body={bodyEditTemplate} bodyStyle={{ textAlign: 'center' }}></Column>
            <Column headerStyle={{ width: '10%', minWidth: '8rem' }} body={bodyDeleteTemplate} bodyStyle={{ textAlign: 'center' }}></Column>
          </DataTable>
        </Card>

        <DialogPatient></DialogPatient>
      </div>
    </div>
  )
}
