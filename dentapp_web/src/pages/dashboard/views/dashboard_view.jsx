import { Typography } from '@mui/material'
import React from 'react'
import { CardWelcome } from '../components/card-welcome_component'
import { DashboardLayout } from '../layout/dashboard_layout'

export const DashboardView = () => {
    return (
        <>
            <DashboardLayout>
                <CardWelcome></CardWelcome>
            </DashboardLayout>
        </>

    )
}
