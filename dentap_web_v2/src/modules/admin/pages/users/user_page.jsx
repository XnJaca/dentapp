import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { Skeleton } from 'primereact/skeleton';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUsers } from '../../../../store/users/user_thunk';
import { getColumns, getEstadoSeverity, skeleton } from '../../components';
import { headers_usuarios } from '../../../../const/table_headers';
import { DialogUser } from './components/dialog_user';
import { usuario_inputs } from '../../../../const';
import { openDialog } from '../../../../store/dialog';
import { getGeneros } from '../../../../store/generos';
import Swal from 'sweetalert2';
import { getTipoUsuarios } from '../../../../store/tipo_usuarios/tipo_usuario_thunk';


export const UserPage = () => { 

    const usuarios = useSelector(state => state.user.user);  

    const emptyUser = [{
        id: null,
        cedula: '',
        nombre: '',
        estado: 0
    }];

    const dispatch = useDispatch();

    const [isVisible, setVisible] = useState(false); 

    useEffect(() => { 
        dispatch(getUsers());
        dispatch(getGeneros());
        dispatch(getTipoUsuarios());  
    }, []);

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.estado == 0 ? "Inactivo" : "Activo"} severity={getEstadoSeverity(rowData.estado)}></Tag>;
    };

    const bodyDeleteTemplate = (rowData) => {
        if (usuarios.length == 0) {
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
                            dispatch(deleteUser(rowData.id)).then(result => {
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

        if (usuarios.length == 0) {
            return ""
        }

        const content = usuario_inputs(rowData.id, rowData.cedula, rowData.nombre, rowData.nombre_emer, rowData.apellido_1, rowData.apellido_2, rowData.email, rowData.pass, rowData.fecha_nacimiento, rowData.direccion, rowData.telefono, rowData.telefono_emer, rowData.genero_id, rowData.estado, rowData.tipo_usuario_x_usuario[0].tipo_id);
        return (
            <div className="flex inline-flex justify-content-center gap-2">
                <Button label='Editar' iconPos='right' icon="pi pi-pencil" onClick={() => dispatch(openDialog({
                    open: true,
                    title: 'Editar Usuario',
                    content: content,
                    modificar: true
                }))} className='' severity={'primary'} />
            </div>
        );
    };

    //TODO: El tipo de usuario no esta cambiando
    //TODO: Puede tener varios tipos un usuario?

    const rolUsuario = (rowData) => {
        if (usuarios.length == 0) return (<Skeleton></Skeleton>);
        const rol = rowData.tipo_usuario_x_usuario.map(t=>t.tipo.descripcion).toString(); 
        return rol;
    } 

    const header = () => {
        const content = usuario_inputs("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");

        return <div className='lg:flex justify-content-between'>
            <h2>Listado de Usuarios</h2>
            <div className="flex inline-flex justify-content-center gap-2 ">
                <Button label='Crear Usuario' iconPos='right' icon="pi pi-user-plus" onClick={() => dispatch(openDialog({
                    open: true,
                    title: 'Guardar Usuario',
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
                        value={usuarios.length == 0 ? emptyUser : usuarios}
                        editMode="row"
                        dataKey="id"
                        tableStyle={{ minWidth: '10rem' }} 
                    >

                        <Column exportable={false} />
                        {getColumns(headers_usuarios, usuarios.length == 0 ? true : false)}
                        <Column field="tipo_usuario" header="Rol" body={rolUsuario} style={{ width: '10%' }}></Column>
                        <Column field="estado" header="Estado" body={usuarios.length == 0 ? skeleton : statusBodyTemplate} style={{ width: '10%' }}></Column>
                        <Column headerStyle={{ width: '10%', minWidth: '8rem' }} body={bodyEditTemplate} bodyStyle={{ textAlign: 'center' }}></Column>
                        <Column headerStyle={{ width: '10%', minWidth: '8rem' }} body={bodyDeleteTemplate} bodyStyle={{ textAlign: 'center' }}></Column>
                    </DataTable>
                </Card>

                <DialogUser isVisible={isVisible} setIsVisible={setVisible} contentForm={usuario_inputs}></DialogUser>
            </div>
        </div>
    );
}
