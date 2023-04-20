import { InputNumber } from 'primereact/inputnumber';
import { classNames } from 'primereact/utils';
import React, { useState } from 'react'

export const CustomInputNumber = ({ id, label,value, onChange, submitted }) => {
    // const [value1, setValue1] = useState(0);

    return (
        <div className='col-12 col-md-6'>
            <div className="field">
                <label htmlFor={id} className="font-bold">{label}</label>

                <InputNumber
                    inputId="id" 
                    value={value} 
                    onValueChange={onChange} 
                    mode="currency" 
                    currency="CRC" 
                    className={classNames({ 'p-invalid': submitted && !value })}
                    locale="es-ES" />
                {submitted && !value && <small className="p-error">{label} es requerido.</small>}
            </div>
        </div>
    )
}
