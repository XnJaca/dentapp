import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allergies_inputs, headers_alergia } from '../../../../const';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getColumns } from '../../components';
import { DialogAllergies } from './components/dialog_allergies';
import { Button } from 'primereact/button';
import Swal from 'sweetalert2';
import { openDialog } from '../../../../store/dialog';

import { deleteAllergy, getAllergies } from '../../../../store/allergies/allergies_thunk';
import { Skeleton } from 'primereact/skeleton';

export const AllergiesPage = () => {

  const dispatch = useDispatch();

  const loading = useSelector(state => state.allergies.loading);
  const allergies = useSelector(state => state.allergies.allergies);

  useEffect(() => {
    dispatch(getAllergies());
  }, []);

  const emptyAllergy = {
    id: null,
    nombre: '',
    descripcion: '',
  }

  const bodyDeleteTemplate = (rowData) => {
    if (allergies.length == 0) {
      return ""
    }
    return (
      <div className="flex inline-flex justify-content-center gap-2">
        <Button label="Eliminar" iconPos='right' icon="pi pi-trash" className='' severity={'danger'} onClick={() => {

          Swal.fire({
            title: '¿Está seguro que desea eliminar esta alergia?',
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
              dispatch(deleteAllergy(rowData.id)).then(result => {
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

    if (allergies.length == 0) {
      return ""
    }

    const content = allergies_inputs(rowData.id, rowData.nombre, rowData.descripcion);
    return (
      <div className="flex inline-flex justify-content-center gap-2">
        <Button label='Editar' iconPos='right' icon="pi pi-pencil" onClick={() => dispatch(openDialog({
          open: true,
          title: 'Editar Alergia',
          content: content,
          modificar: true
        }))} className='' severity={'primary'} />
      </div>
    );
  };

  const header = () => {
    const content = allergies_inputs("", "", "");

    return <div className='lg:flex justify-content-between'>
      <h2>Listado de Alergia</h2>
      <div className="flex inline-flex justify-content-center gap-2 ">
        <Button label='Crear Alergia' iconPos='right' icon="pi pi-user-plus" onClick={() => dispatch(openDialog({
          open: true,
          title: 'Guardar Alergia',
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
            value={allergies}
            editMode="row"
            dataKey="id"
            tableStyle={{ minWidth: '10rem' }}  
            emptyMessage={loading ? <Skeleton /> : 'No hay alergias registradas'}
          >
            <Column exportable={false} />
            {getColumns(headers_alergia, allergies.length == 0 ? true : false)}
            <Column headerStyle={{ width: '10%', minWidth: '8rem' }} body={bodyEditTemplate} bodyStyle={{ textAlign: 'center' }}></Column>
            <Column headerStyle={{ width: '10%', minWidth: '8rem' }} body={bodyDeleteTemplate} bodyStyle={{ textAlign: 'center' }}></Column>
          </DataTable>
        </Card>

        <DialogAllergies contentForm={allergies_inputs}></DialogAllergies>
      </div>
    </div>
  )


}
