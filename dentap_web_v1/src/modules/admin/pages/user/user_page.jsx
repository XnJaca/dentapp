import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { UserService } from './user_service';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Calendar } from "primereact/calendar";
import { Toolbar } from 'primereact/toolbar';
import { useFormik } from 'formik';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import moment from 'moment';
import { CustomInputText } from './components/custom_input_text';
import { useDispatch, useSelector } from 'react-redux';
import { startNewUser } from '../../../../core/store/usuarios/thunk';
import { startGetGeneros } from '../../../../core/store/generos';
import { CustomInputSwitch } from './components/input_switch';
import { CustomDropdown, CustomInputNumber, CustomInputPassword } from './components';
import { startGetTipoUsuarios } from '../../../../core/store/tipo_usuarios/thunk';
import { startGetEspecialidades } from '../../../../core/store/especialidades/thunk';

export const UserPage = () => {
  let emptyMedico = {
    "id": null,
    "cedula": '',
    "nombre": '',
    "nombre_emer": '',
    "apellido_1": "",
    "apellido_2": "",
    "email": "",
    "pass": "",
    "fecha_nacimiento": "",
    "direccion": "",
    "telefono": null,
    "telefono_emer": null,
    "genero_id": null,
    "estado": null,
    "tipo_usuario": null,
    "especialidad_id": null,
    "precio_consulta": 0,
  };



  const [users, setUsers] = useState(null);
  const [userDialog, setUserDialog] = useState(false);
  const [deleteUserDialog, setDeleteUserDialog] = useState(false);
  const [deleteUsersDialog, setDeleteUsersDialog] = useState(false);
  const [user, setUser] = useState(emptyMedico);
  const [selectedUsers, setSelectedUsers] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);

  const toast = useRef(null);
  const dt = useRef(null);

  const dispatch = useDispatch();

  const generos = useSelector(state => state.genero);
  const tipo_usuarios = useSelector(state => state.tipoUsuario);
  const especialidades = useSelector(state => state.especialidad);

  useEffect(() => {
    dispatch(startGetGeneros());
    dispatch(startGetTipoUsuarios());
    dispatch(startGetEspecialidades());
  }, []);

  const openNew = () => {
    setUser(emptyMedico);
    setSubmitted(false);
    setUserDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setUserDialog(false);
  };

  // const [checked, setChecked] = useState(false);

  const hideDeleteUserDialog = () => {
    setDeleteUserDialog(false);
  };

  const hideDeleteUsersDialog = () => {
    setDeleteUsersDialog(false);
  };

  const saveUser = async () => {


    setSubmitted(true);
    console.log(user);
    if (user.cedula.trim() && user.nombre.trim() && user.apellido_1.trim() && user.apellido_2.trim() && user.email.trim() && user.pass.trim() && user.fecha_nacimiento.toString().trim() && user.direccion.trim() && user.telefono && user.telefono_emer && user.genero_id && user.estado) {
      console.log('newuser');
      dispatch(startNewUser());
      let _user = { ...user };
      console.log("USEEERR", _user);
      // if (user.nombre.trim()) {
      //   let _users = [...users];
      //   let _user = { ...user };

      //   if (user.id) {
      //     const index = findIndexById(user.id);

      //     _users[index] = _user;
      //     toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Usuario Actualizado', life: 3000 });
      //   } else {
      //     _user.id = createId();
      //     // _user.nombre = 'product-placeholder.svg';
      //     _users.push(_product);
      //     toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Usuario Creado', life: 3000 });
      //   }

      //   setUsers(_users);
      //   setUserDialog(false);
      //   setUser(emptyProduct);
      // }
    } else {

    }

  };

  const editUser = (user) => {
    setUser({ ...user });
    setUserDialog(true);
  };

  const confirmDeleteUser = (user) => {
    setUser(user);
    setDeleteUserDialog(true);
  };

  const deleteUser = () => {
    let _users = users.filter((val) => val.id !== user.id);

    setUsers(_users);
    setDeleteUserDialog(false);
    setUser(emptyProduct);
    toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
  };

  const findIndexById = (id) => {
    let index = -1;

    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  };

  const createId = () => {
    let id = '';
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return id;
  };

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const confirmDeleteSelected = () => {
    setDeleteUsersDialog(true);
  };

  const deleteSelectedUsers = () => {
    let _users = users.filter((val) => !selectedUsers.includes(val));

    setProducts(_users);
    setDeleteProductsDialog(false);
    setSelectedProducts(null);
    toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
  };

  const onStateChange = (e) => {
    let _user = { ...user };

    _user['estado'] = e.value;
    setUser(_user);
  };

  const [selectedGenero, setSelectedGenero] = useState(user.genero_id);
  const [selectedTipoUsuario, setSelectedTipoUsuario] = useState(null);
  const [selectedEspecialidad, setSelectedEspecialidad] = useState(null);

  const onInputChange = (e, nombre) => {
    let val = "";
    if (nombre === "genero_id" || nombre === "tipo_usuario" || nombre === "especialidad_id") {
      val = e.value ? e.value.id : null;
      setSelectedGenero(e.value);
    } else {
      val = (e.target && e.target.value) || '';
    }
    let _user = { ...user };

    _user[`${nombre}`] = val;

    setUser(_user);
  };




  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button label="New" icon="pi pi-plus" className='mr-4' severity="success" onClick={openNew} />
        <Button label="Delete" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedUsers || !selectedUsers.length} />
      </div>
    );
  };

  const rightToolbarTemplate = () => {
    return <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />;
  };


  const statusBodyTemplate = (rowData) => {
    return <Tag value={rowData.estado} severity={getSeverity(rowData)}></Tag>;
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button icon="pi pi-pencil" rounded outlined className="mr-4" onClick={() => editUser(rowData)} />
        <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDeleteUser(rowData)} />
      </React.Fragment>
    );
  };

  const getSeverity = (user) => {
    console.log("ESTADOO", user.estado);
    switch (user.estado) {
      case '1':
        return 'success';
      // case '0':
      //   return 'warning';
      case '0':
        return 'danger';

      default:
        return null;
    }
  };

  const show = () => {
    toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.date.toLocaleDateString() });
  };

  const formik = useFormik({
    initialValues: {
      date: ''
    },
    validate: (data) => {
      let errors = {};

      if (!data.date) {
        errors.date = 'La fecha de nacimiento es requerida';
      }

      return errors;
    },
    onSubmit: (data) => {
      if (!formik.errors.date) {
        data && show(data);
        formik.resetForm();
      }
    }
  });

  const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name) => {
    return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">{formik.errors[name]}&nbsp;</small>;
  };

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h4 className="m-0">Gestionar Usuarios</h4>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
      </span>
    </div>
  );
  const userDialogFooter = (
    <React.Fragment>
      <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
      <Button label="Save" icon="pi pi-check" onClick={saveUser} />
    </React.Fragment>
  );
  const deleteUserDialogFooter = (
    <React.Fragment>
      <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteUserDialog} />
      <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteUser} />
    </React.Fragment>
  );
  const deleteUsersDialogFooter = (
    <React.Fragment>
      <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteUsersDialog} />
      <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteSelectedUsers} />
    </React.Fragment>
  );

  const setApellidos = (rowData) => {
    return rowData.apellido_1 + ' ' + rowData.apellido_2;
  }

  const fechaNacimiento = moment(user.fecha_nacimiento).format('DD/MM/YYYY');

  return (
    <>
      <Toast ref={toast} />
      <div className="card">
        <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

        <DataTable ref={dt} value={users} selection={selectedUsers} onSelectionChange={(e) => setSelectedUsers(e.value)}
          dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} users" globalFilter={globalFilter} header={header}>
          <Column selectionMode="multiple" exportable={false}></Column>
          <Column field="cedula" header="Cedula" sortable style={{ minWidth: '12rem' }}></Column>
          <Column field="nombre" header="Nombre" sortable style={{ minWidth: '16rem' }}></Column>
          <Column field="apellido_1" header="Apellidos" body={setApellidos} sortable style={{ minWidth: '12rem' }}></Column>
          <Column field="email" header="Email" sortable style={{ minWidth: '10rem' }}></Column>
          <Column field="telefono" header="Telefono" sortable style={{ minWidth: '12rem' }}></Column>
          <Column field="estado" header="Estado" body={statusBodyTemplate} sortable style={{ minWidth: '6rem' }}></Column>
          <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
        </DataTable>
      </div>

      <Dialog visible={userDialog} style={{ width: '82rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Agregar Nuevo Usuario" className="p-fluid" footer={userDialogFooter} onHide={hideDialog}>
        {/* {user.image && <img src={`https://primefaces.org/cdn/primereact/images/product/${user.nombre}`} alt={product.image} className="product-image block m-auto pb-3" />} */}
        <div className='row'>
          <CustomInputText
            label="Cedula"
            name="cedula"
            value={user.cedula}
            onChange={(e) => onInputChange(e, 'cedula')}
            autoFocus
            submitted={submitted}
            keyfilter='int'
          />
          <CustomInputText
            label="Nombre"
            name="nombre"
            value={user.nombre}
            onChange={(e) => onInputChange(e, 'nombre')}
            submitted={submitted}
          />
          <CustomInputText
            label="Primer Apellido"
            name="apellido_1"
            value={user.apellido_1}
            onChange={(e) => onInputChange(e, 'apellido_1')}
            submitted={submitted}
          />
          <CustomInputText
            label="Segundo Apellido"
            name="apellido_2"
            value={user.apellido_2}
            onChange={(e) => onInputChange(e, 'apellido_2')}
            submitted={submitted}
          />
          <CustomInputText
            label="Nombre Emergencia"
            name="nombre_emer"
            value={user.nombre_emer}
            onChange={(e) => onInputChange(e, 'nombre_emer')}
            submitted={submitted}
          />
          <CustomInputText
            id="email"
            label="Email"
            value={user.email}
            onChange={(e) => onInputChange(e, 'email')}
            submitted={submitted}
          />
          {/* <CustomInputText
            id="pass"
            label="Contraseña"
            value={user.pass}
            onChange={(e) => onInputChange(e, 'pass')}
            required
            submitted={submitted}
          /> */}
          <CustomInputPassword
            id="pass"
            label="Contraseña"
            value={user.pass}
            onChange={(e) => onInputChange(e, 'pass')}
            submitted={submitted}
          />



          <div className='col-12 col-md-6'>
            <div className="field">
              <label htmlFor="fecha_nacimiento">Fecha Nacimiento</label>
              <Toast ref={toast} />
              <Calendar
                inputId="fecha_nacimiento"
                name="fecha_nacimiento"
                value={fechaNacimiento}
                dateFormat='dd/mm/yy'
                className={classNames({
                  'p-invalid': isFormFieldInvalid('fecha_nacimiento')
                })}
                onChange={(e) => {
                  onInputChange(e, 'fecha_nacimiento');
                  formik.setFieldValue('fecha_nacimiento', e.target.value);
                }}
              />
              {getFormErrorMessage('fecha_nacimiento')}
              {submitted && !user.fecha_nacimiento && <small className="p-error">La fecha de nacimiento es requerido.</small>}
            </div>
          </div>

          <CustomInputText
            id="direccion"
            label="Dirección"
            value={user.direccion}
            onChange={(e) => onInputChange(e, 'direccion')}
            submitted={submitted}
          />

          <CustomInputText
            id="telefono"
            label="Telefono"
            value={user.telefono}
            onChange={(e) => onInputChange(e, 'telefono')}
            submitted={submitted}
            keyfilter='int'
          />

          <CustomInputText
            id="telefono_emer"
            label="Telefono"
            value={user.telefono_emer}
            onChange={(e) => onInputChange(e, 'telefono_emer')}
            submitted={submitted}
            keyfilter='int'
          />

          <CustomDropdown
            id="genero"
            label="Seleccione el Genero"
            value={user.genero_id}
            onChange={(e) => onInputChange(e, 'genero_id')} //setSelectedGenero(e.value)
            options={generos.generos}
            optionLabel="descripcion"
            submitted={submitted}
          />

          <CustomInputSwitch
            id="estado"
            label="Estado"
            onChange={(e) => onInputChange(e, 'estado')}
            checked={(user.estado == 0 || user.estado == null) ? false : true} />

          <CustomDropdown
            id="tipo_usuario"
            label="Seleccione el Tipo de Usuario"
            value={user.tipo_usuario}
            onChange={(e) => onInputChange(e, 'tipo_usuario')}
            options={tipo_usuarios.data}
            optionLabel="descripcion"
            submitted={submitted}
          />
          {/* {console.log(selectedTipoUsuario.descripcion)} */}
          {user.tipo_usuario === 2 && (
            <>
              <CustomDropdown
                id="especialidad_id"
                label="Seleccione la especialidad"
                value={user.especialidad_id}
                onChange={(e) => onInputChange(e, 'especialidad_id')}
                options={especialidades.especialidades}
                optionLabel="descripcion"
                submitted={submitted}
              />
              <CustomInputNumber
                id="precio_consulta"
                label="Precio Consulta"
                onChange={(e) => onInputChange(e, 'precio_consulta')}
                value={user.precio_consulta}
                submitted={submitted} />
            </>
          )}
        </div>
      </Dialog>
      <Dialog visible={deleteUserDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteUserDialogFooter} onHide={hideDeleteUserDialog}>
        <div className="confirmation-content">
          <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
          {user && (
            <span>
              Seguro que desea borrar este medico. <b>{user.cedula}</b>?
            </span>
          )}
        </div>
      </Dialog>

      <Dialog visible={deleteUsersDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteUsersDialogFooter} onHide={hideDeleteUsersDialog}>
        <div className="confirmation-content">
          <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
          {user && <span>Are you sure you want to delete the selected users?</span>}
        </div>
      </Dialog>
    </>
  );
}