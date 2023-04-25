import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CustomCalendar, CustomDropdown, CustomInputNumber, CustomInputSwitch, CustomInputText, CustomInputPassword, CustomListBox } from '../../../components/custom_input';

import { Toast } from 'primereact/toast';
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { closeDialog, updateContent } from '../../../../../store/dialog';
import { savePatient, updatePatient } from '../../../../../store/patients/patients_thunk';
import moment from 'moment';
import Swal from 'sweetalert2';
import { ListBox } from 'primereact/listbox';


export const DialogMedic = ({ }) => {

    const [hasEmptyFields, setHasEmptyFields] = useState(false);
    const [loading, setLoading] = useState(false);
    const toast = useRef(null);
    const [hasError, setHasError] = useState(false);

    const dispatch = useDispatch();

    const dialog = useSelector(state => state.dialog);
    const generos = useSelector(state => state.genero);
    const tipoUsuarios = useSelector(state => state.tipoUsuarios);
    const tipoSangre = useSelector(state => state.bloodType.bloodTypes)
    const user = useSelector(state => state.user.loading);

    const allergies = useSelector(state => state.allergies.allergies);
    const enfermedades = useSelector(state => state.diseases.data);


    // console.log(allergies);
    const hideDialog = () => {
        setHasEmptyFields(false);
        dispatch(closeDialog());
    };

    const labelBtn = () => {
        let label = '';

        if (loading && dialog.modificar) {
            label = 'Actualizando...';
        } else if (loading && !dialog.modificar) {
            label = 'Guardando...';
        } else {
            label = dialog.modificar ? 'Actualizar' : 'Guardar';
        }
        return label;

    }
    const showError = (title, message, severity) => {
        toast.current.show({ severity: severity, summary: title, detail: message, life: 3000 });
    }
    const saveData = async () => {
        let emptyFields = dialog.content.filter((campo) => !campo.value);

        if (emptyFields.length > 0) {
            setHasEmptyFields(true);
            return;
        }

        if (dialog.content.every(campo => campo.value)) {
            if (dialog.modificar) {
                setLoading(true);
                dispatch(updatePatient(dialog.content)).then(result => {
                    console.log('Result: ', result);
                    if (result.error) {
                        showError('Error al modificar el usuario', result.message, 'error');
                    } else {
                        Swal.fire(
                            '¡Actualizado!',
                            'El usuario ha sido actualizado.',
                            'success'
                        )
                        setLoading(false);
                        hideDialog();
                    }
                });
            } else {
                setLoading(true);
                dispatch(savePatient(dialog.content)).then(result => {
                    console.log('Result: ', result);
                    if (result.error) {
                        swho('Error al guardar el usuario', result.message, 'error');
                    } else {
                        Swal.fire(
                            '¡Guardado!',
                            'El usuario ha sido guardado.',
                            'success'
                        )
                        setLoading(false);
                        hideDialog();
                    }
                });
            }
        }

    }

    const DialogFooter = (
        <React.Fragment>
            <Button
                label="Cancelar"
                icon="pi pi-times"
                disabled={loading}
                outlined
                onClick={hideDialog}
            />
            <Button
                label={labelBtn()}
                icon="pi pi-check"
                disabled={loading}
                onClick={saveData}
            />
        </React.Fragment>
    );

    const onInputChange = (e, nombre) => {
        let value = e.target.value;
        const updatedContent = dialog.content.map(campo => {
            if (campo.name === nombre) {
                if (campo.name == 'fecha_nacimiento') {
                    console.log('Fecha: ', value);
                    value = moment(value).format('YYYY-MM-DD');
                }
                return { ...campo, value: value };
            }
            return campo;
        });

        dispatch(updateContent(updatedContent));
    };

    const customInputs = dialog.content != null ? dialog.content.map((campo, index) => {
        if (campo.type == 'text' || campo.type == 'int') {
            return (
                <CustomInputText
                    key={index}
                    id={campo.id}
                    label={campo.label}
                    value={campo.value}
                    onChange={(e) => onInputChange(e, campo.name)}
                    submitted={hasEmptyFields}
                    keyfilter={campo.keyfilter}
                />
            );
        } else if (campo.type == 'pass' && !dialog.modificar) {
            return (
                <CustomInputPassword
                    key={index}
                    id={campo.id}
                    label={campo.label}
                    value={campo.value}
                    onChange={(e) => onInputChange(e, campo.name)}
                    submitted={hasEmptyFields}
                    keyfilter={campo.keyfilter}
                />
            );
        } else if (campo.type == 'number') {
            return (
                <CustomInputNumber
                    key={index}
                    id={campo.id}
                    label={campo.label}
                    value={campo.value}
                    onChange={(e) => onInputChange(e, campo.name)}
                    submitted={hasEmptyFields}
                    keyfilter={campo.keyfilter}
                />
            );
        } else if (campo.type == 'select') {
            return (
                <CustomDropdown
                    key={index}
                    id={campo.id}
                    label={campo.label}
                    value={campo.value}
                    onChange={(e) => onInputChange(e, campo.name)} //setSelectedGenero(e.value)
                    options={(campo.name == 'genero_id') ? generos.generos : (campo.name == "tipo_sangre") ? tipoSangre : tipoUsuarios.tipo_usuario}
                    optionLabel="descripcion"
                    submitted={hasEmptyFields}
                    name={campo.name}

                />
            );
        } else if (campo.type == 'checkbox') {
            return (
                <CustomInputSwitch
                    key={index}
                    id={campo.id}
                    label={campo.label}
                    onChange={(e) => onInputChange(e, campo.name)}
                    checked={(campo.value == 0) ? false : true} />
            );
        } else if (campo.type == 'date') {
            return (
                <CustomCalendar
                    key={index}
                    id={campo.name}
                    label={campo.label}
                    value={campo.value}
                    onChange={(e) => onInputChange(e, campo.name)}
                    submitted={hasEmptyFields}
                    name={campo.name}
                />
            )
        } else if (campo.type == 'listBox') {
            console.log('CampoOOO: ', campo.value);
            return (
                <CustomListBox
                    key={index}
                    id={campo.name}
                    name={campo.name}
                    label={campo.label}
                    value={campo.value}
                    onChange={(e) => onInputChange(e, campo.name)}
                    options={(campo.label == "Enfermedades") ? enfermedades : allergies}></CustomListBox>
            )
        }
    }) : null;

    // console.log("ENFERMEDADEEES", dialog.content[15]);

    return (

        <>
            <Toast ref={toast} />
            <Dialog
                header={dialog.title}
                visible={dialog.open}
                style={{ width: '80vw' }}
                breakpoints={{ '960px': '75vw', '641px': '90vw', '480px': '100vw' }}
                onHide={hideDialog}
                footer={DialogFooter}
                className='p-fluid'
                draggable={false}
                resizable={false}
                modal={false}
            >

                <div className="formgrid grid">
                    {customInputs}
                </div>
                {/* {hasError && showError()} */}

            </Dialog >
        </>
    )

};