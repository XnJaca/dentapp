import React from 'react'
import { CitasTable } from './CitasTable'
import { TabOption } from './TabOption'

export const MainDashboard = () => {
    return (
        <div className="main-content">
            <TabOption></TabOption>
            <CitasTable></CitasTable>
        </div>
    )
}
