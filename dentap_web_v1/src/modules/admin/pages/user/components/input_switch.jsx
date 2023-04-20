
import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";

export const CustomInputSwitch = ({ id, label, onChange, checked }) => {

    return (
        <div className='col-12 col-md-6'>
            <div className="field mt-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <label htmlFor={id} className="font-bold mr-3">
                    {label}
                </label>
                {/* <div className="mb-3">Usuario Activo</div> */}
                {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> */}
                    <InputSwitch id={id} checked={checked} onChange={onChange} />
                {/* </div> */}

            </div>
        </div>
    );
}