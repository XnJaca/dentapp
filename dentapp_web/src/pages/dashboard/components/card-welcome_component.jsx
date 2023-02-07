import { Grid } from '@mui/material'
import React from 'react'

export const CardWelcome = () => {
    return (
        <Grid container className='col-lg-8 order-0' sx={{ mb: '4' }}>
            <div className='card'>
                <div className='d-flex align-items-end row'>
                    <div className='col-sm-7'>
                        <div className='card-body'>
                            <h5 className='card-title' color={'main.primary'}>Bienvenido Nombre Usuario</h5>
                            <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                        </div>
                    </div>
                    <div className='col-sm-5 text-center text-sm-left'>
                        <div className='card-body pb-0 px-0 px-md-4' >
                            <img src="/src/assets/images/man-with-laptop-light.png" height="140" alt="View Badge User" data-app-dark-img="illustrations/man-with-laptop-dark.png" data-app-light-img="illustrations/man-with-laptop-light.png" />
                        </div>
                    </div>
                </div>
            </div>

        </Grid >
    )
}
