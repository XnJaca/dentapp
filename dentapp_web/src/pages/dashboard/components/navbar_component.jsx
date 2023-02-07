import { Dashboard, LogoutRounded } from '@mui/icons-material'
import { AppBar, Avatar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const NavBar = ({ drawerWidth }) => {
    return (
        <div className='layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme'>
            <Toolbar sx={{ width: "100%" }}>
                <IconButton>
                    <Dashboard color='primary'></Dashboard>
                </IconButton>

                <Grid container className='navbar-nav-right d-flex align-items-center sp-between'>

                    <Typography
                        variant='h3'
                        color='#7F82FF'
                        fontWeight='bold'
                        fontFamily='rez'
                    > Dentapp</Typography>

                    <IconButton>
                        <LogoutRounded color='error'></LogoutRounded>
                    </IconButton>
                </Grid>
            </Toolbar>
        </div>
    )
}
