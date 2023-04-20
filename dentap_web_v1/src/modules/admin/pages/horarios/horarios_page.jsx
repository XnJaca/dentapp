
import React, { useEffect, useState } from 'react'
import { HorariosTable } from './table';
import { inputsHorario } from '../../../../core/const/horarios/horario_content';
import { headers_horarios } from '../../../../core/const';
import { useDispatch, useSelector } from 'react-redux';
import { startGetHorario } from '../../../../core/store/horarios/thunk';

export const HorariosPage = () => {
    const [loading, setLoading] = useState(true); // estado de carga
    const dispatch = useDispatch();
    const horarios = useSelector(state => state.horarios.horarios);
  
    useEffect(() => {
      dispatch(startGetHorario()).then(() => {
        setLoading(false); // actualiza el estado de carga cuando se obtiene la data
      });
    }, [dispatch]);
  
    return (
      <>
        {loading ? (
          <div className="loader"></div> // muestra un mensaje de carga mientras se obtiene la data
        ) : (
          <HorariosTable
            concept={"Horarios"}
            headers={headers_horarios}
            data={horarios}
            contentForm={inputsHorario}
          />
        )}
      </>
    );
}
