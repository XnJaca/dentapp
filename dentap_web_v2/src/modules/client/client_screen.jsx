import React, { Children, useEffect } from 'react'
import FullScreenDemo from '../components/full_screen_menu';




export const ClientScreen = ({ children }) => {

    return (
        <>
            <FullScreenDemo></FullScreenDemo>
            {children}
            {/* {getData(patient)} */}


              
            <div className="flex flex-wrap justify-content-center gap-2">
                <h4>DENTAPP - 2023</h4>
            </div>
        </>
    );
};