import { InputText } from 'primereact/inputtext'
import React from 'react'

export const HeaderTable = ({concepto}) => {
    return (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h4 className="m-0">Gestionar {concepto}</h4>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                {/* <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Buscar..." /> */}
                <InputText type="search" placeholder="Buscar..." />
            </span>
        </div>
    )
}
