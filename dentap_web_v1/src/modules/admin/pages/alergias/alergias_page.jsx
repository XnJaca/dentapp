import React, { useState } from 'react'
import { headers_alergia } from '../../../../core/const/headers_tables'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetAlergia } from '../../../../core/store/alergias/thunk';
import { inputsAlergia } from '../../../../core/const/alergias';
import { AlergiaTable } from './table';

export const AlergiasPage = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const alergias = useSelector(state => state.alergias.alergias);
  
    useEffect(() => {
      dispatch(startGetAlergia()).then(() => {
        setLoading(false);
      });
    }, []);
  
    return (
      <>
        {loading ? (
          <div className="loader"></div>
        ) : (
          <AlergiaTable
            concept={"Alergias"}
            headers={headers_alergia}
            data={alergias}
            contentForm={inputsAlergia}
          />
        )}
      </>
    );
  };