import React from 'react'

import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { Link } from 'react-router-dom'

export const CardContainer = ({ title, subTitle,goTo, severity }) => {

    const footer = () => {
        return <div className="flex flex-wrap justify-content-end gap-2">
            <Link to={goTo}>
                <Button
                    label="Gestionar"
                    iconPos="right"
                    icon="pi pi-arrow-right"
                    className=""
                    severity={
                        severity === 0 ? 'danger' : severity === 1 ? 'success' : severity === 2 ? 'info' : 'warning'
                    }
                />
            </Link>
        </div>
    }
    return (
        <div className="card flex  justify-content-center mt-3 p-4">
            <Card title={title} subTitle={subTitle} footer={footer()} className="shadow-5 md:w-15rem">
            </Card>
        </div>
    )
}
