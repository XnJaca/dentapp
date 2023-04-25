import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'
import { CardContainer } from '../components/card_container'
import { useDispatch } from 'react-redux'
import { getUsers } from '../../../store/users/user_thunk'
import { getGeneros } from '../../../store/generos'
import { getTipoUsuarios } from '../../../store/tipo_usuarios/tipo_usuario_thunk'
import { DiseaseThunk } from '../../../store/diseases/disease_thunk'
import { getAllDiseases } from '../../../store/diseases/services/disease_service'

export const HomePage = () => {
    const dispatch = useDispatch();
    const diseases = DiseaseThunk();
    useEffect(() => {
        dispatch(getGeneros());
        dispatch(getTipoUsuarios());
        dispatch(diseases.getDiseases());
    }, []);

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

                <CardContainer
                    title="Enfermedades"
                    subTitle="Gestione las enfermedades de la plataforma."
                    goTo="/admin/diseases"
                    severity={3}
                />

                <CardContainer
                    title="Medicamentos"
                    subTitle="Gestione los medicamentos de la plataforma."
                    goTo="/admin/medicine"
                    severity={2}
                />

                <CardContainer
                    title="Tratamientos"
                    subTitle="Gestione los tratamientos de la plataforma."
                    goTo="/admin/treatment"
                    severity={0}
                />
            </div>
            <div className="card lg:flex justify-content-center">
                <CardContainer
                    title="Pacientes"
                    subTitle="Gestione los pacientes de la plataforma."
                    goTo="/admin/patients"
                    severity={1}
                />

                <CardContainer
                    title="Citas"
                    subTitle="Gestione las citas de la plataforma."
                    goTo="/admin/citas"
                    severity={2}
                />
            </div>

            <div className="flex flex-wrap justify-content-center gap-2">
                <div className='card bg-white border-round w-11 mb-4 p-3'>
                    <h2 className="text-700">Estas son las citas para el dia de hoy</h2>
                    {/* <SortingDemo></SortingDemo> */}

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
