import React from 'react'
import { Link} from 'react-router-dom'

export const CardContainer = ({ title, description, imageUrl, color }) => {
    return (
        <div class="card">
            <div class="card-statistic-4">
                <div class="align-items-center justify-content-between">
                    <div class="row ">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                            <div class="card-content">
                                <h5 class="font-15">{title}</h5>
                                <h2 class="mb-3 font-18">{description}</h2>
                                {/* create button with background color */}
                                {/* <button class={`btn btn-sm ${color} shadow-button`}
                                    onClick={() => <Navigate to="/admin/user" />}
                                > Gestionar </button> */}
                                <Link to="/admin/user" className={`btn btn-sm ${color} shadow-button`}> Gestionar </Link>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                            <div class="banner-img">
                                {console.log({ imageUrl })}
                                <img src={imageUrl} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
