import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { NavBar } from '../components/navbar_component'


const drawerWidth = 240;

export const DashboardLayout = ({ children }) => {
    return (
        <div className='layout-wrapper layout-content-navbar  '>
            <div className='layout-container'>
                <div className='layout-page'>
                    {/* Navbar */}
                    <NavBar drawerWidth={drawerWidth}></NavBar>
                    {/* SIDEBAR */}

                    <Box className='content-wrapper'>
                        <Grid container className='container-xxl flex-grow-1 container-p-y'>
                            <Grid item className='row'>
                                {/* Content */}
                                {children}
                            </Grid>
                        </Grid>

                    </Box>
                </div>
            </div>
        </div>
    )
}
