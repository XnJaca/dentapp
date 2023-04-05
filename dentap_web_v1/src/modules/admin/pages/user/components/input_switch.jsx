
import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";

export const CustomInputSwitch = ({ id, label, onChange, checked }) => {

    return (
        <div className='col-12 col-md-2 mt-5'>
            <div className="field" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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