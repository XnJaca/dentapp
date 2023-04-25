import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import React, { useRef, useState } from 'react'
import { closeDialog, updateContent } from '../../../../../store/dialog';
import { useDispatch, useSelector } from 'react-redux';
import { CustomCalendar, CustomDropdown, CustomInputSwitch, CustomInputText } from '../../../components';
import { Calendar } from 'primereact/calendar';

export const DialogAppoiment = () => {
    const [hasEmptyFields, setHasEmptyFields] = useState(false);
    const [loading, setLoading] = useState(false);
    const toast = useRef(null);
    const [hasError, setHasError] = useState(false);
    const [dateTimeFI, setDateTimeFI] = useState(null);
    const [dateTimeFF, setDateTimeFF] = useState(null);
    const [timeI, setTimeI] = useState(null);
    const [timeF, setTimeF] = useState(null);

    // const { updateDisease, saveDisease } = DiseaseThunk();

    const dispatch = useDispatch();

    const dialog = useSelector(state => state.dialog);
    const medicos = useSelector(state => state.medicos.medicos);

    const hideDialog = () => {
        setHasEmptyFields(false);
        dispatch(closeDialog());
    };

    const showError = (title, message, severity) => {
        toast.current.show({ severity: severity, summary: title, detail: message, life: 3000 });
    }

    // const saveData = async () => {
    //     let emptyFields = dialog.content.filter((campo) => !campo.value);

    //     if (emptyFields.length > 0) {
    //         setHasEmptyFields(true);
    //         return;
    //     }

    //     if (dialog.content.every(campo => campo.value)) {
    //         if (dialog.modificar) {
    //             setLoading(true);
    //             dispatch(updateDisease(dialog.content)).then(result => {
    //                 console.log('Result: ', result);
    //                 if (result.error) {
    //                     showError('Error al modificar la enfermedada', result.message, 'error');
    //                 } else {
    //                     Swal.fire(
    //                         '¡Actualizado!',
    //                         'La enfermedad ha sido actualizada.',
    //                         'success'
    //                     )
    //                     setLoading(false);
    //                     hideDialog();
    //                 }
    //             });
    //         } else {
    //             setLoading(true);
    //             dispatch(saveDisease(dialog.content)).then(result => {
    //                 console.log('Result: ', result);
    //                 if (result.error) {
    //                     showError('Error al guardar la enfermedad', result.message, 'error');
    //                 } else {
    //                     Swal.fire(
    //                         '¡Guardado!',
    //                         'La enfermedad ha sido guardado.',
    //                         'success'
    //                     )
    //                     setLoading(false);
    //                     hideDialog();
    //                 }
    //             });
    //         }
    //     }

    // }

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
                />
            );
        } else if (campo.type == 'date') {
            return (<CustomCalendar
                id={campo.id}
                label={campo.label}
                value={campo.value}
                name={campo.name}
                onChange={(e) => onInputChange(e, campo.name)}
                submitted={hasEmptyFields}
                key={index}
                showTime={false}
                hourFormat="24"
            />
            )
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
            // onClick={hideDialog}
            />
            <Button
                label={labelBtn()}
                icon="pi pi-check"
                disabled={loading}
            // onClick={saveData}
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
                    <div className="flex-auto mr-2">
                        <label htmlFor="calendar-24h" className="font-bold block mb-2">
                            Hora Inicio
                        </label>
                        <Calendar id="calendar-24h" value={dateTimeFI} onChange={(e) => setDateTimeFI(e.value)} showTime hourFormat="24" />
                    </div>
                    <div className="flex-auto">
                        <label htmlFor="calendar-24h" className="font-bold block mb-2">
                            Hora Fin
                        </label>
                        <Calendar id="calendar-24h" value={dateTimeFF} onChange={(e) => setDateTimeFF(e.value)} showTime hourFormat="24" />
                    </div>
                    <CustomInputSwitch
                        id="confirmado"
                        label="Switch"
                        value={true}
                        onChange={(e) => console.log(e.value)}
                    />



                </div>
                {/* {hasError && showError()} */}

            </Dialog >
        </>
    )
}
