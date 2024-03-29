
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeDialog, updateContent } from '../../../../../store/dialog';
import { CustomCalendar, CustomDropdown, CustomInputNumber, CustomInputSwitch, CustomInputText } from '../../../components/custom_input';
import moment from 'moment';
import { saveUser, updateUser } from '../../../../../store/users/user_thunk';
import Swal from 'sweetalert2';
import { CustomInputPassword } from '../../../components/custom_input';
import { Toast } from 'primereact/toast';



export const DialogAllergies = () => {

    const [hasEmptyFields, setHasEmptyFields] = useState(false);
    const [loading, setLoading] = useState(false);
    const toast = useRef(null);
    const [hasError, setHasError] = useState(false);

    const dispatch = useDispatch();

    const dialog = useSelector(state => state.dialog);
    const allergies = useSelector(state => state.allergies.allergies);

    const hideDialog = () => {
        setHasEmptyFields(false);
        dispatch(closeDialog());
    };

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
                dispatch(updateUser(dialog.content)).then(result => {
                    console.log('Result: ', result);
                    if (result.error) {
                        showError('Error al modificar la alergia', result.message, 'error');
                    } else {
                        Swal.fire(
                            '¡Actualizado!',
                            'La alergia ha sido actualizada.',
                            'success'
                        )
                        setLoading(false);
                        hideDialog();
                    }
                });
            } else {
                setLoading(true);
                dispatch(saveUser(dialog.content)).then(result => {
                    console.log('Result: ', result);
                    if (result.error) {
                        showError('Error al guardar la alergia', result.message, 'error');
                    } else {
                        Swal.fire(
                            '¡Guardado!',
                            'La alergia ha sido guardado.',
                            'success'
                        )
                        setLoading(false);
                        hideDialog();
                    }
                });
            }
        }

    }

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
        }
    }) : null;


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
                onClick={saveData}
            />
        </React.Fragment>
    );

    return (

        <>
            <Toast ref={toast} />
            <Dialog
                header={dialog.title}
                visible={dialog.open}
                style={{ width: '50vw' }}
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
}
