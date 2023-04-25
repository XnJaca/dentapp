import React, { useEffect } from 'react'
import { CustomInputText, CustomListBox } from '../../admin/components'
import { useDispatch, useSelector } from 'react-redux';
import { getCitasxPaciente, getPacienteByID } from '../../../store/patients/patients_thunk';

export const ExpedientePage = () => {
    const user = useSelector(state => state.auth.data);
    // const citas = useSelector(state => state.citas.appoiments);
    const patient = useSelector(state => state.pacientes.paciente);

    const dispatch = useDispatch();
    useEffect(() => {
        if (patient.id == null) {
            dispatch(getPacienteByID(user.id));
            dispatch(getCitasxPaciente(user.id));
        }
    }, []);

    return (
        <div className="col-12">
            <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                <CustomInputText
                    label="Nombre"
                    name="nombre"
                    placeholder="Nombre"
                    type="text"
                    value={user.nombre}
                    disabled={true}
                />

                <CustomListBox
                    key={'alergias'}
                    id={user.id}
                    name="alergias"
                    label="Alergias"
                    disabled={true}
                    value={patient.alergias}

                    options={patient.alergias}></CustomListBox>

        </div>
        </div >
    )
}
