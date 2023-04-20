import React, { useState } from 'react'
import { headers_enfermedades } from '../../../../core/const/headers_tables'
import { useEffect } from 'react';
import { startGetEnfermedades } from '../../../../core/store/enfermedades/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { campos } from '../../../../core/const';
import { EnfermedadesTable } from './table';

export const EnfermedadesPage = () => {

  const [loading, setLoading] = useState(true); // estado de carga
  const dispatch = useDispatch();
  const enfermedades = useSelector(state => state.enfermedades.enfermedades);

  useEffect(() => {
    dispatch(startGetEnfermedades()).then(() => {
      setLoading(false); // actualiza el estado de carga cuando se obtiene la data
    });
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className="loader"></div> // muestra un mensaje de carga mientras se obtiene la data
      ) : (
        <EnfermedadesTable
          concept={"Enfermedades"}
          headers={headers_enfermedades}
          data={enfermedades}
          contentForm={campos}
        />
      )}
    </>
  );
}
