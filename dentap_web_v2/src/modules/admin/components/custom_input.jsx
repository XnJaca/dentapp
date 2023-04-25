import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password';
import { Dropdown } from 'primereact/dropdown';
import { InputSwitch } from 'primereact/inputswitch';
import { Calendar } from 'primereact/calendar';
import { ListBox } from 'primereact/listbox';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils'

import React, { useRef } from 'react'
import moment from 'moment';

const isValid = (submitted, value) => {
    let defaultClass = "text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full";
    if (submitted && !value) {
        defaultClass += " p-invalid";
    }
    return defaultClass;
}

export const CustomInputText = ({ id, label, value, onChange, submitted, keyfilter, disabled = false }) => {

    return (
        <div className="field col-12 md:col-4">
            <label htmlFor={id} className='mr-2'>{label}</label>
            <InputText keyfilter={keyfilter} disabled={disabled} id={id} value={value} type="text" onChange={onChange} className={classNames({ 'p-invalid': submitted && !value })} />
            {submitted && !value && <small className="p-invalid">{label} es requerido.</small>}
        </div>
    )
}


export const CustomInputNumber = ({ id, label, value, onChange, submitted, keyfilter }) => {
    return (
        <div className="field col-12 md:col-4">
            <label htmlFor={id}>{label}</label>
            <InputNumber keyfilter={keyfilter} id={id} value={value} onChange={onChange} className={isValid(submitted, value)} />
            {submitted && !value && <small className="p-invalid">{label} es requerido.</small>}
        </div>
    )
}

export const CustomInputSelect = ({ id, label, value, onChange, submitted, keyfilter }) => {
    return (
        <div className="field col-12 md:col-4">
            <label htmlFor={id}>{label}</label>
            <InputText keyfilter={keyfilter} id={id} value={value} onChange={onChange} className={isValid(submitted, value)} />
            {submitted && !value && <small className="p-invalid">{label} es requerido.</small>}
        </div>
    )
}

export const CustomInputPassword = ({ id, label, value, onChange, submitted }) => {
    return (
        <div className="field col-12 md:col-4">
            <label htmlFor={id} className="font-bold">
                {label}
            </label>
            <Password
                id={id}
                value={value}
                onChange={onChange}
                required
                className={classNames({ 'p-invalid': submitted && !value })}
                weakLabel='Débil'
                mediumLabel='Medio'
                strongLabel='Fuerte'
            />
            {submitted && !value && <small className="p-invalid">{label} es requerido.</small>}
        </div>
    )
}

export const CustomDropdown = ({ id, label, name, options, value, onChange, optionLabel, submitted }) => {
    console.log('CustomDropdown - value:', value);

    // Buscar la opción que tiene el mismo id que value
    const val = (value.id == undefined) ? value : value.id;
    const selectedOption = options.find(option => option.id == val);

    return (
        <div className="field col-12 md:col-4">
            <label htmlFor={name} className="font-bold">{label}</label>
            <Dropdown
                id={name}
                value={selectedOption}
                options={options}
                onChange={onChange}
                className={classNames({ 'p-invalid': submitted && !selectedOption })}
                placeholder={(value.id == undefined) ? "Seleccione una opcion..." : value.descripcion}
                required
                optionLabel={optionLabel}
                emptyMessage='Obteniendo los datos...'
                name={name}
            />
            {submitted && !selectedOption && <small className="p-error">{label} es requerido.</small>}
        </div>
    );
}

export const CustomInputSwitch = ({ id, label, onChange, checked }) => {
    return (
        <div className="field col-6 md:col-4">
            <div className="field mt-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <label htmlFor={id} className="font-bold mr-5">{label}</label>
                <InputSwitch key={id} id={id} checked={checked} onChange={onChange} />
            </div>
        </div>
    );
}

export const CustomCalendar = ({ id, name, label, value, onChange, submitted, showTime, formatHour }) => {
    const toast = useRef(null);
    // const fechaNacimiento = value ? moment(value).toDate() : null; // Convertir la cadena en un objeto de fecha
    console.log('CustomCalendar - value:', value);
    const fechaNacimiento = moment(value).format('YYYY-MM-DD');
    console.log('CustomCalendar - fechaNacimiento:', fechaNacimiento);
    return (
        <div className="field col-12 md:col-4">
            <label htmlFor={id} className="font-bold">
                {label}
            </label>
            <Toast ref={toast} />
            <Calendar
                id={id}
                name={name}
                value={fechaNacimiento}
                onChange={onChange}
                className={classNames({ 'p-invalid': submitted && !value })}
                required
                dateFormat="yy-mm-dd"
                showIcon
                showTime={showTime}
                hourFormat={formatHour}
            />
            {submitted && !value && <small className="p-invalid">{label} es requerido.</small>}
        </div>
    );
}

export const CustomListBox = ({ id, name, label,value, optionLabel, onChange, options, disabled = false }) => {
    const toast = useRef(null);
    console.log('CustomListBox - value:', value);
    return (
        <div className="field col-12 md:col-4">
            <label htmlFor={id} className="font-bold">
                {label}
            </label>
            <Toast ref={toast} />
            <ListBox 
            id={id}
            name={name}
            onChange={onChange}
            multiple 
            disabled={disabled}
            value={value} 
            options={options} 
            optionLabel="nombre"
            className="w-full md:w-25rem" />
        </div>
    );
}