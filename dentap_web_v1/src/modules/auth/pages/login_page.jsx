import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';
import { useForm } from '../../../../../dentapp_web/src/hooks';
import { startLogin } from '../../../core/store/auth';
import { CustomTexfield } from '../../components';

export const LoginPage = () => {

  const { status, errorMsg } = useSelector(state => state.auth);

  const onChecking = useMemo(() => status === 'checking', [status]);

  const distpach = useDispatch();

  // Seteamos los valores por defecto de los campos del formulario
  const { email, pass, onInputChange } = useForm({
    email: 'xnjaca@gmail.com',
    pass: '123456'
  });

  const onSubmit = (event) => {
    console.log("onSubmitt", email, pass);
    event.preventDefault();
    distpach(startLogin(email, pass))
  }

  useEffect(() => {
    if (errorMsg) {
      Swal.fire('Error', errorMsg, 'error');
    }
  }, []);




  return (
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

                    <CustomTexfield id={'email'} label={'Email'} type={'email'} name={'email'} onChange={onInputChange} value={email} required={true} autofocus={true} />

                    <CustomTexfield id={'pass'} label={'Contraseña'} type={'password'} name={'pass'} onChange={onInputChange} value={pass} required={true} autofocus={false} />

                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-lg btn-block" tabIndex="4" disabled={onChecking}>
                      {onChecking === true ? 'Validando datos...' : 'Iniciar Sesion'}
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
  );
}

