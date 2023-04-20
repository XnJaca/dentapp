import React, { useState } from 'react'
import { headers_enfermedades, headers_medicamentos } from '../../../../core/const/headers_tables'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { campos } from '../../../../core/const';
import { EnfermedadesTable } from './table';
import { startGetMedicamento } from '../../../../core/store/medicamentos/thunk';
import { medicamentosInputs } from '../../../../core/const/medicamentos/medicamentos_content';

export const MedicamentosPage = () => {

  const [loading, setLoading] = useState(true); // estado de carga
  const dispatch = useDispatch();
  const medicamentos = useSelector(state => state.medicamentos.medicamentos);

  useEffect(() => {
    dispatch(startGetMedicamento()).then(() => {
      setLoading(false); // actualiza el estado de carga cuando se obtiene la data
    });
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className="loader"></div> // muestra un mensaje de carga mientras se obtiene la data
      ) : (
        <EnfermedadesTable
          concept={"Medicamentos"}
          headers={headers_medicamentos}
          data={medicamentos}
          contentForm={medicamentosInputs}
        />
      )}
    </>
  );
}
