import React from 'react'
import { useDispatch } from 'react-redux';
import { openDialog } from '../../../../../store/dialog';
import { Button } from 'primereact/button';
import { patients_inputs } from '../../../../../const/inputs_patients';

export const HeaderTable = () => {
    const dispatch = useDispatch();

    const content = patients_inputs("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "","","");
    return (


        <div className='lg:flex justify-content-between'>
            <h2>Listado de Pacientes</h2>
            <div className="flex inline-flex justify-content-center gap-2 ">
                <Button label='Crear Medicamentos' iconPos='right' icon="pi pi-user-plus" onClick={() => dispatch(openDialog({
                    open: true,
                    title: 'Guardar Medicamentos',
                    content: content,
                    modificar: false
                }))} className='h-4rem' size='small' severity={'primary'} />
            </div>
        </div>


    )
}
