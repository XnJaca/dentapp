import React, { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/';
import { startLoginWithEmailPassword } from '../../store/auth/thunks';

export const SigInPage = () => {

    const { status, errorMsg } = useSelector(state => state.auth);

    const isChecking = useMemo(() => status === 'checking', [status]);

    const dispatch = useDispatch();

    const { email, pass, onInputChange } = useForm({
        email: 'xnjaca@gmail.com',
        pass: '123456'
    });

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("onSubmitt", email, pass);
        dispatch(startLoginWithEmailPassword(email, pass))
    }

    useEffect(() => {
        console.log("useEffectt", errorMsg);
        if (errorMsg) {
            Swal.fire('Error', errorMsg, 'error');
        }
    }, []);



    return (
        <>
            <div id="app">
                <section className="section">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h4>Iniciar Sesion</h4>
                                    </div>
                                    <div className="card-body">
                                        <form method="POST" action="#" onSubmit={onSubmit} className="needs-validation" noValidate="">
                                            <div className="form-group">
                                                <label htmlFor="email">Cedula o Email</label>
                                                <input id="email" type="email" className="frm-control" name="email" tabIndex="1" onChange={onInputChange} value={email} required autoFocus />
                                                <div className="invalid-feedback">
                                                    Por favor ingrese su cedula o email.
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="d-block">
                                                    <label htmlFor="password" className="control-label">Contraseña</label>
                                                    <div className="float-right">
                                                        <a href="auth-forgot-password.html" className="text-small">
                                                            Olvido su contraseña?
                                                        </a>
                                                    </div>
                                                </div>
                                                <input id="password" type="password" className="frm-control" name="pass" tabIndex="2" onChange={onInputChange} value={pass} required />
                                                <div className="invalid-feedback">
                                                    Por favor ingrese su contraseña.
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" name="remember" className="custom-control-input" tabIndex="3" id="remember-me" />
                                                    <label className="custom-control-label" htmlFor="remember-me">Remember Me</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-primary btn-lg btn-block" tabIndex="4" disabled={isChecking}>
                                                    {isChecking === true ? 'Validando datos...' : 'Iniciar Sesion'}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="mt-5 text-muted text-center">
                                    Aun no posee una cuenta? <a href="auth-register.html">Cree una</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )


}
