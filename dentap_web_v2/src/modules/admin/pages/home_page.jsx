import React from 'react'

import { Link } from 'react-router-dom'
import SortingDemo from './appointment/appointments_table'
import { CardContainer } from '../components/card_container'

export const HomePage = () => {

    return (
        <>
            <div className="card lg:flex justify-content-center">
                <CardContainer 
                    title="Usuarios"
                    subTitle="Gestione los usuarios de la plataforma."
                    goTo="/admin/users"
                    severity={0}
                />

                <CardContainer
                    title="Alergias"
                    subTitle="Gestione las alergias de la plataforma."
                    goTo="/admin/allergies"
                    severity={1}
                />
                
                
                {/* <div className="card flex  justify-content-center mt-3 p-4">
                    <Card title="Usuarios" subTitle="Gestione los usuarios de la plataforma." footer={footer(0, "/admin/users")} className="shadow-5 md:w-15rem">
                    </Card>
                </div> */}

                {/* <div className="card justify-content-center mt-3 p-4">
                    <Card title="Pacientes" subTitle="Gestione los pacientes de la plataforma." footer={footer(1, "/admin/users")} className="shadow-5 md:w-15rem">
                    </Card>
                </div>

                <div className=" card justify-content-center mt-3 p-4">
                    <Card title="Citas" subTitle="Gestione las citas de la plataforma." footer={footer(2, '/admin')} className="shadow-5 md:w-15rem">
                    </Card>
                </div> */}
            </div>

            <div className="flex flex-wrap justify-content-center gap-2">
                <div className='card bg-white border-round w-11 mb-4 p-3'>
                    <h2 className="text-700">Estas son las citas para el dia de hoy</h2>
                    <SortingDemo></SortingDemo>

                </div>
            </div>

            <div className="flex flex-wrap justify-content-center gap-2">
                <div
                    className="px-4 py-5 shadow-2 flex flex-column md:flex-row md:align-items-center justify-content-between mb-3 w-10"
                    style={{ borderRadius: '1rem', background: 'linear-gradient(0deg, rgba(0, 123, 255, 0.5), rgba(0, 123, 255, 0.5)), linear-gradient(92.54deg, #1C80CF 47.88%, #FFFFFF 100.01%)' }}
                >
                    <div>
                        <div className="text-blue-100 font-medium text-xl mt-2 mb-3">TAKE THE NEXT STEP</div>
                        <div className="text-white font-medium text-5xl">Try PrimeBlocks</div>
                    </div>
                    <div className="mt-4 mr-auto md:mt-0 md:mr-0">
                        <Link href="https://blocks.primereact.org" className="p-button font-bold px-5 py-3 p-button-warning p-button-rounded p-button-raised">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
