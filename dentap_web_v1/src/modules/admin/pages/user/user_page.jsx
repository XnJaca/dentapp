import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { UserService } from './user_service';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Calendar } from "primereact/calendar";
import { Dropdown } from 'primereact/dropdown';
import { Toolbar } from 'primereact/toolbar';
import { useFormik } from 'formik';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import moment from 'moment';
import { CustomInputText } from './components/custom_input_text';
import { validateEmail, validatePhoneNumber } from '../../../../core/utils/'
import { useDispatch, useSelector } from 'react-redux';
import { startNewUser } from '../../../../core/store/usuarios/thunk';
import { startGetGeneros } from '../../../../core/store/generos';
import {CustomInputSwitch} from './components/input_switch';

export const UserPage = () => {
  let emptyUser = {
    id: null,
    cedula: '',
    nombre: '',
    nombre_emer: '',
    apellido_1: "",
    "apellido_2": "",
    "email": "",
    "pass": "",
    "fecha_nacimiento": "",
    "direccion": "",
    "telefono": null,
    "telefono_emer": null,
    "genero_id": null,
    "estado": null,
  };



  const [users, setUsers] = useState(null);
  const [userDialog, setUserDialog] = useState(false);
  const [deleteUserDialog, setDeleteUserDialog] = useState(false);
  const [deleteUsersDialog, setDeleteUsersDialog] = useState(false);
  const [user, setUser] = useState(emptyUser);
  const [selectedUsers, setSelectedUsers] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  // const [gens, setGeneros] = useState(null);

  const toast = useRef(null);
  const dt = useRef(null);

  const dispatch = useDispatch();

  const generos = useSelector(state => state.genero);
  //   const geners = [
  //     { name: 'New York', code: 'NY' },
  //     { name: 'Rome', code: 'RM' },
  //     { name: 'London', code: 'LDN' },
  //     { name: 'Istanbul', code: 'IST' },
  //     { name: 'Paris', code: 'PRS' }
  // ];
  useEffect(() => {
    UserService.getUsers().then((data) => setUsers(data));
    // UserService.getGeneros().then((data) => setGeneros(data));
    dispatch(startGetGeneros());
    // setGeneros();
  }, []);



  const formatCurrency = (value) => {
    return value.toLocaleString('en-EN', { style: 'currency', currency: 'USD' });
  };

  const openNew = () => {
    setUser(emptyUser);
    setSubmitted(false);
    setUserDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setUserDialog(false);
  };

  const [checked, setChecked] = useState(false);

  const hideDeleteUserDialog = () => {
    setDeleteUserDialog(false);
  };

  const hideDeleteUsersDialog = () => {
    setDeleteUsersDialog(false);
  };

  const saveUser = () => {

    console.log('newuser');
    dispatch(startNewUser());
    // setSubmitted(true);
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

  const [selectedGenero, setSelectedGenero] = useState(null);

  const onInputChange = (e, nombre) => {
    const val = (e.target && e.target.value) || '';
    let _user = { ...user };

    _user[`${nombre}`] = val;

    setUser(_user);
  };

  const onInputNumberChange = (e, nombre) => {
    const val = e.value || 0;
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

  const imageBodyTemplate = (rowData) => {
    return <img src={`https://primefaces.org/cdn/primereact/images/product/${rowData.image}`} alt={rowData.image} className="shadow-2 border-round" style={{ width: '64px' }} />;
  };

  const priceBodyTemplate = (rowData) => {
    // return formatCurrency(rowData.price);
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
          <Column field={"apellido_1"} header="Apellidos" sortable style={{ minWidth: '16rem' }}></Column>
          {/* <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ minWidth: '8rem' }}></Column> */}
          <Column field="email" header="Email" sortable style={{ minWidth: '10rem' }}></Column>
          <Column field="telefono" header="Telefono" sortable style={{ minWidth: '12rem' }}></Column>
          <Column field="estado" header="Estado" body={statusBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
          <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
        </DataTable>
      </div>

      <Dialog visible={userDialog} style={{ width: '82rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Agregar Nuevo Usuario" className="p-fluid" footer={userDialogFooter} onHide={hideDialog}>
        {/* {user.image && <img src={`https://primefaces.org/cdn/primereact/images/product/${user.nombre}`} alt={product.image} className="product-image block m-auto pb-3" />} */}
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className="field">
              <label htmlFor="cedula" className="font-bold">
                Cedula
              </label>
              <InputText id="cedula" value={user.cedula} onChange={(e) => onInputChange(e, 'cedula')} required autoFocus className={classNames({ 'p-invalid': submitted && !user.cedula })} />
              {submitted && !user.cedula && <small className="p-error">La cedula es requerida.</small>}
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='field'>
              <label htmlFor="nombre" className="font-bold">
                Nombre
              </label>
              <InputText id="nombre" value={user.nombre} onChange={(e) => onInputChange(e, 'nombre')} required className={classNames({ 'p-invalid': submitted && !user.nombre })} />
              {submitted && !user.nombre && <small className="p-error">Nombre es requerido.</small>}
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className="field">
              <label htmlFor="apellido_1" className="font-bold">
                Primer Apellido
              </label>
              <InputText id="apellido_1" value={user.apellido_1} onChange={(e) => onInputChange(e, 'apellido_1')} required className={classNames({ 'p-invalid': submitted && !user.apellido_1 })} />
              {submitted && !user.apellido_1 && <small className="p-error">El primer apellido es requerido.</small>}
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className="field">
              <label htmlFor="apellido_2" className="font-bold">
                Segundo Apellido
              </label>
              <InputText id="apellido_2" value={user.apellido_2} onChange={(e) => onInputChange(e, 'apellido_2')} required className={classNames({ 'p-invalid': submitted && !user.apellido_2 })} />
              {submitted && !user.apellido_2 && <small className="p-error">El segundo apellido es requerido.</small>}
            </div>
          </div>

          <CustomInputText
            id="email"
            label="Email"
            value={user.email}
            onChange={(e) => onInputChange(e, 'email')}
            required
            submitted={submitted}
            keyfilter={/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i}
          />
          {/* <div className='col-12 col-md-6'>
            <div className="field">
              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <InputText id="email" value={user.email} onChange={(e) => onInputChange(e, 'email')} required className={classNames({ 'p-invalid': submitted && !user.email })} />
              {submitted && !user.email && <small className="p-error">El email es requerido.</small>}
            </div>
          </div> */}
          {console.log("FECHA NACIMIENTO: ", fechaNacimiento)}
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
                  formik.setFieldValue('fecha_nacimiento', e.target.value);
                }}
              />
              {getFormErrorMessage('fecha_nacimiento')}
              {/* {!isFormFieldInvalid('fecha_nacimiento') && !user.fecha_nacimiento && <small className="p-error">La fecha de nacimiento es requerido.</small>} */}
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
            validator={validatePhoneNumber}
            keyfilter='int'
          />
          {/* <div className='col-12 col-md-6 mt-4'>
            <div className="field">
              <label htmlFor="genero" className="font-bold">Genero</label>
              <Dropdown id='genero' value={selectedGenero} onChange={(e) => setSelectedGenero(e.value)} options={generos.generos} optionLabel="descripcion"
                placeholder="Seleccione el genero" className="w-full md:w-14rem" />
            </div>
          </div> */}

          <CustomInputSwitch
            id="activo"
            label="Usuario Activo"
            onChange={(e) => setChecked(e.value)}
            checked={checked} ></CustomInputSwitch>

        </div>
      </Dialog>
      <Dialog visible={deleteUserDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteUserDialogFooter} onHide={hideDeleteUserDialog}>
        <div className="confirmation-content">
          <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
          {user && (
            <span>
              Are you sure you want to delete <b>{user.cedula}</b>?
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