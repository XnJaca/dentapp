
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeDialog, updateContent } from '../../../../../store/dialog';
import {  CustomInputText } from '../../../components/custom_input';
import moment from 'moment';  
import Swal from 'sweetalert2'; 
import { Toast } from 'primereact/toast';
import { MedicineThunk } from '../../../../../store/medicine/medicine_thunk';
 
export const DialogMedicine = () => {

    const [hasEmptyFields, setHasEmptyFields] = useState(false);
    const [loading, setLoading] = useState(false);
    const toast = useRef(null); 

    const { updateMedicine, saveMedicine } = MedicineThunk();

    const dispatch = useDispatch();

    const dialog = useSelector(state => state.dialog); 

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
                dispatch(updateMedicine(dialog.content)).then(result => {
                    console.log('Result: ', result);
                    if (result.error) {
                        showError('Error al modificar el medicamento', result.message, 'error');
                    } else {
                        Swal.fire(
                            '¡Actualizado!',
                            'El medicamento ha sido actualizada.',
                            'success'
                        )
                        setLoading(false);
                        hideDialog();
                    }
                });
            } else {
                setLoading(true);
                dispatch(saveMedicine(dialog.content)).then(result => {
                    console.log('Result: ', result);
                    if (result.error) {
                        showError('Error al guardar el medicamento', result.message, 'error');
                    } else {
                        Swal.fire(
                            '¡Guardado!',
                            'El medicamento ha sido guardado.',
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
        <>
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
        </>
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
