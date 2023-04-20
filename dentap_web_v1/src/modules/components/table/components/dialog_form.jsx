import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeDialog, updateContentDialog } from '../../../../core/store/dialog';
import { CustomInputText } from '../../../admin/pages/user/components';
import { startSaveEnfermedad, startUpdateEnfermedad } from '../../../../core/store/enfermedades/thunk';


export const DialogForm = () => {

    // const [submitted, setSubmitted] = useState(false);
    const [hasEmptyFields, setHasEmptyFields] = useState(false);


    const dispatch = useDispatch();

    const dialog = useSelector((state) => state.dialog);

    const saveData = () => {
        let emptyFields = dialog.content.filter((campo) => !campo.value);
        if (emptyFields.length > 0) {
            setHasEmptyFields(true);
            return;
        }

        if (dialog.content.every(campo => campo.value)) {
            console.log("saveData: ", dialog.content);
            if (dialog.modificar) {
                dispatch(startUpdateEnfermedad(dialog.content));
            }else{
                dispatch(startSaveEnfermedad(dialog.content));
            }
        }
    };

    const hideDialog = () => {
        setHasEmptyFields(false);
        dispatch(closeDialog());
    };

    const DialogFooter = (
        <React.Fragment>
            <Button
                label="Cancelar"
                icon="pi pi-times"
                outlined
                onClick={hideDialog}
            />
            <Button
                label="Guardar"
                icon="pi pi-check"
                onClick={saveData} />
        </React.Fragment>
    );

    const onInputChange = (e, nombre) => {
        const value = e.target.value;
        const updatedContent = dialog.content.map(campo => {
            if (campo.name === nombre) {
                return { ...campo, value: value };
            }
            return campo;
        });

        dispatch(updateContentDialog(updatedContent));
    };

    const customInputs = dialog.content != null ? dialog.content.map((campo, index) => (
        <CustomInputText
            key={index}
            id={campo.id}
            label={campo.label}
            value={campo.value}
            onChange={(e) => onInputChange(e, campo.name)}
            submitted={hasEmptyFields}
            keyfilter={campo.keyfilter}

        />
    )) : null;

    return (
        <>
            <Dialog
                visible={dialog.open}
                style={{ width: "82rem" }}
                breakpoints={{ "960px": "75vw", "641px": "90vw", "480px": "100vw" }}
                onHide={hideDialog}
                footer={DialogFooter}
                header={dialog.title}
                className='p-fluid'
            >
                <div className='row'>
                    {customInputs}
                    {/* {hasEmptyFields &&
                        dialog.content.map((campo) => {
                            if (!campo.value) {
                                return (
                                    <div key={campo.name} className="p-col-12" style={{textAlign: "center"}}>
                                        <small className="p-error">{campo.label} es requerido.</small>
                                    </div>
                                );
                            }
                            return null;
                        })} */}
                </div>
            </Dialog>
        </>
    );
};

