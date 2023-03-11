import React from 'react'

import { routesImages } from '../../assets'

export const TabOption = () => {
    return (
        <section className="section">
            <div className="row ">
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="card">
                        <div className="card-statistic-4">
                            <div className="align-items-center justify-content-between">
                                <div className="row ">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                                        <div className="card-content">
                                            <h5 className="font-15">Personal Administrativo</h5>
                                            <h2 className="mb-3 font-18">15</h2>
                                            <p className="mb-0"><span className="col-green">Gestionar Personal</span></p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                                        <div className="banner-img">
                                            <img src={routesImages.banner1} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="card">
                        <div className="card-statistic-4">
                            <div className="align-items-center justify-content-between">
                                <div className="row ">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                                        <div className="card-content">
                                            <h5 className="font-15"> Pacientes</h5>
                                            <h2 className="mb-3 font-18">1,287</h2>
                                            <p className="mb-0"><span className="col-orange">Gestionar Clientes</span></p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                                        <div className="banner-img">
                                            <img src={routesImages.people} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="card">
                        <div className="card-statistic-4">
                            <div className="align-items-center justify-content-between">
                                <div className="row ">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                                        <div className="card-content">
                                            <h5 className="font-15">Citas</h5>
                                            <h2 className="mb-3 font-18">128</h2>
                                            <p className="mb-0"><span className="col-red">Gestionar Citas</span></p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                                        <div className="banner-img">
                                            <img src={routesImages.citas} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="card">
                        <div className="card-statistic-4">
                            <div className="align-items-center justify-content-between">
                                <div className="row ">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                                        <div className="card-content">
                                            <h5 className="font-15">Otros</h5>
                                            <h2 className="mb-3 font-18">$48,697</h2>
                                            <p className="mb-0"><span className="col-blue">Gestionar Otros</span></p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                                        <div className="banner-img">
                                            <img src="assets/img/banner/4.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
