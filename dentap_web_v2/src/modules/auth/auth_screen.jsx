
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks';
import { startLogin } from '../../store/auth';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

export const LoginPage = () => {
    const { status, errorMsg } = useSelector(state => state.auth);

    const onChecking = useMemo(() => status === 'checking', [status]);

    const distpach = useDispatch();

    // Seteamos los valores por defecto de los campos del formulario
    const { email, pass, onInputChange } = useForm({
        // console.log("onSubmitt", email, pass)
        email: 'xnjaca@gmail.com',
        pass: '123456'
    });

    const onSubmit = (event) => {
        console.log("onSubmitt", email, pass);
        event.preventDefault();

        distpach(startLogin(email, pass)).then(
            (response) => {
                if (response.ok) {
                    Swal.fire('Bienvenido', 'Has iniciado sesion correctamente', 'success');
                }else{
                    Swal.fire('Error', 'Usuario o contraseña incorrectos', 'error');
                }
            }
        )
    }
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-screen min-screen overflow-hidden');
    return (

        <div className={containerClassName}>
            <div className="flex flex-column align-items-center justify-content-center">
                <img src='/src/assets/img/logo.png' alt="Sakai logo" className="mb-5 w-6rem flex-shrink-0" />
                <div style={{ borderRadius: '56px', padding: '0.3rem', background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)' }}>
                    <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
                        <div className="text-center mb-5">
                            {/* <img src="/demo/images/login/avatar.png" alt="Image" height="50" className="mb-3" /> */}
                            <div className="text-900 text-3xl font-medium mb-3">Bienvenido a Dentapp!</div>
                            <span className="text-600 font-medium">Inicie Sesion para continuar.</span>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-900 text-xl font-medium mb-2">
                               Usuario
                            </label>
                            {/* <CustomTextField id={'email'} label={'Email'} type={'email'} name={'email'} onChange={onInputChange} value={email} required={true} autofocus={true} /> */}
                            <InputText inputid="email" name='email' value={email} type="email" placeholder="Email address" onChange={onInputChange} className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} />

                            <label htmlFor="password" className="block text-900 font-medium text-xl mb-2">
                                Contraseña
                            </label>
                            <Password inputid="password" name='pass'  value={pass} onChange={onInputChange} placeholder="Password" toggleMask className="w-full mb-5" inputClassName="w-full p-3 md:w-30rem"></Password>

                            <div className="flex align-items-center justify-content-between mb-5 gap-5">
                                {/* <div className="flex align-items-center">
                                    <Checkbox inputid="rememberme1" checked={checked} onChange={(e) => setChecked(e.checked)} className="mr-2"></Checkbox>
                                    <label htmlFor="rememberme1">Remember me</label>
                                </div> */}
                                <a className="font-medium no-underline ml-2 text-right cursor-pointer" style={{ color: 'var(--primary-color)' }}>
                                    Forgot password?
                                </a>
                            </div>
                            <Button label={onChecking === true ? 'Validando datos...' : "Iniciar Sesion"} className="w-full p-3 text-xl" onClick={onSubmit}></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div id="app">
        //     <section className="section">
        //         <div className="container mt-5">
        //             <div className="row">
        //                 <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
        //                     <div className="card card-primary">
        //                         <div className="card-header">
        //                             <h4>Iniciar Sesion</h4>
        //                         </div>
        //                         <div className="card-body">
        //                             <form method="POST" action="#" onSubmit={onSubmit} className="needs-validation" noValidate="">

        //                                 <CustomTextField id={'email'} label={'Email'} type={'email'} name={'email'} onChange={onInputChange} value={email} required={true} autofocus={true} />

        //                                 <CustomTextField id={'pass'} label={'Contraseña'} type={'password'} name={'pass'} onChange={onInputChange} value={pass} required={true} autofocus={false} />

        //                                 <div className="form-group">
        //                                     <button type="submit" className="btn btn-primary btn-lg btn-block" tabIndex="4" disabled={onChecking}>
        //                                         {/* <button type="submit" className="btn btn-primary btn-lg btn-block" tabIndex="4" > */}
        //                                         {onChecking === true ? 'Validando datos...' : 'Iniciar Sesion'}
        //                                     </button>
        //                                 </div>
        //                             </form>
        //                         </div>
        //                     </div>
        //                     <div className="mt-5 text-muted text-center">
        //                         Aun no posee una cuenta? <a href="auth-register.html">Cree una</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        // </div>
    )
}
