import React from 'react'
import { Password } from 'primereact/password';
import { classNames } from 'primereact/utils';
export const CustomInputPassword = ({ id, label, value, onChange, submitted }) => {
    return (
        <div className='col-12 col-md-6'>
            <div className="field">
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
            </div>
        </div>
    )
}
