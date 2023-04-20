import React, { useEffect } from 'react'
import { Button } from 'primereact/button'
import { useDispatch } from 'react-redux';
import { closeDialog, openDialog } from '../../../../../core/store/dialog';
import { campos } from '../../../../../core/const';
import { inputsAlergia } from '../../../../../core/const/alergias';

export const LeftToolBarTable = ({concept, content}) => {

    // console.log("content: ", content);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeDialog());
    }, []);

    const openNew = () => {
        const camposContent = inputsAlergia("", "", "");
        dispatch(openDialog(
            {
                open: true,
                title: concept,
                content: camposContent,
                modificar: false,
            }
        ));
    }

    return (
        <div className="flex flex-wrap gap-2">
            <Button label="New" icon="pi pi-plus" className='mr-4' severity="success" onClick={openNew} />
            {/* <Button label="New" icon="pi pi-plus" className='mr-4' severity="success" /> */}
            {/* <Button label="Delete" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedUsers || !selectedUsers.length} /> */}
            {/* <Button label="Delete" icon="pi pi-trash" severity="danger" /> */}
        </div>
    );

}
