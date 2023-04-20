import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth';
import { Ripple } from 'primereact/ripple';

export default function FullScreenDemo() {

    const [visible, setVisible] = useState(false);


    console.log(window.history.state.idx != 0);
    const goBack = () => {
        window.history.back();
    };

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout());
    }
    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} fullScreen>
                <div className="card lg:flex justify-content-center">
                    <Button className="bg-bluegray-600 hover:bg-bluegray-400 border-none mt-2" disabled>
                        <img alt="logo" src="/src/assets/img/logo.png" className="h-2rem m-2 p-ripple"></img>
                        DENTAPP - MENU
                    </Button>
                    <Ripple />
                </div>
                <div className="card lg:flex justify-content-center">
                    <Button label='Gestionar Usuarios Administrativos' severity="info" className='lg:w-2 h-6rem p-6 success m-4 shadow-7' icon="pi pi-user" aria-label="Usuarios" />

                    <Button label='Gestionar Pacientes Administrativos' severity="success" className='lg:w-2 h-6rem p-6 m-4 shadow-7' icon="pi pi-user" aria-label="Usuarios" />
                </div>

                <div className="card lg:flex justify-content-center">
                    <Button label='Gestionar Usuarios Administrativos' severity="warning" className='lg:w-2 h-6rem p-6 m-4 shadow-7' icon="pi pi-user" aria-label="Usuarios" />

                    <Button label='Gestionar Pacientes Administrativos' severity="help" className='lg:w-2 h-6rem p-6 m-4 shadow-7' icon="pi pi-user" aria-label="Usuarios" />
                </div>
            </Sidebar>

            {window.history.state.idx != 0 && (
                <>
                    <Button icon="pi pi-arrow-left" tooltip='Volver Atras' onClick={goBack} />
                    <div className="m-4"></div>
                </>
            )}

            <Button icon="pi pi-th-large" tooltip='Menu' onClick={() => setVisible(true)} />
            <div className="m-4"></div>
            <Button icon="pi pi-sign-out" tooltip='Cerrar Sesion' severity='danger' onClick={onLogout} />
        </div>
    )
}