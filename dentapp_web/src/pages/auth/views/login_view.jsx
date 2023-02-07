import React from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const LoginView = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'white', padding: 2 }}
        >

            <Grid item
                className='box-shadow'
                xs={3}
                sx={{ backgroundColor: 'white', padding: 4, borderRadius: 2 }}>
                <Grid container>
                    {/* Logo with text inline */}
                    <Grid item xs={12} sx={{ textAlign: 'center' }}>
                        <img src='/src/assets/icons/dentapp500x500.svg' alt='logo' width='50px' />
                        <Typography className='brand-logo' variant='h2' sx={{ display: 'inline' }} fontFamily='rez'>Dentapp</Typography>
                    </Grid>

                    {/* Welcome text */}
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        {/* USe typografy h2 style in theme */}
                        <Typography variant='h4' color={"#566a7f"}>Bienvenido a dentapp 👋</Typography>
                        {/* margin top */}
                        <Typography variant='h6' sx={{ mt: 1 }} color={"#566a7f"}>Inicia sesion para continuar.</Typography>
                    </Grid>

                </Grid>

                {/* Create form with material ui */}
                <form>
                    <Grid container>
                        <Grid item xs={12} sx={{ mt: 4 }}>
                            <TextField label="Cedula" type='text' placeholder='Ingrese su numero de cedula' fullWidth className='input-auth'></TextField>
                        </Grid>


                        <Grid item xs={12} sx={{ mt: 3 }}>
                            <TextField label="Contraseña" type='password' placeholder='Ingrese su contraseña' fullWidth></TextField>
                        </Grid>

                        {/* Button ingresar */}
                        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                            <Grid item xs={12}>
                                <Link component={Link} className='btn btn-primary w100' to={'/dashboard'}>
                                    Ingresar
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Grid>

        </Grid>
    )
}
