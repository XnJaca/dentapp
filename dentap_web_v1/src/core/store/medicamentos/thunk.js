import { saveMedicamento,deleteMedicamento,getMedicamentos,updateMedicamento } from "../../api/requests/medicamentos/medicamentos_request";
import { setMedicamentos } from "./medicamentos_slice";


export const startGetMedicamento = () => async (dispatch) => {
    console.log('startGetMedicamento');
    const medicamentos = await getMedicamentos();

    console.log('medicamentos', medicamentos);

    dispatch(setMedicamentos(
        {
            message: 'Medicamentos obtenidas correctamente',
            medicamentos: medicamentos
        }
    ));
    return {
        ok: true,
        data: medicamentos
    };
};

export const startSaveMedicamento = (medicamento) => async (dispatch) => {
    console.log('startSaveAlergia');

    const response = await saveMedicamento(medicamento);

    console.log('response', response);
    const medicamentos = await getMedicamentos();
    dispatch(setMedicamentos(
        {
            message: 'Medicamento guardado correctamente',
            medicamentos: medicamentos
        }
    ));
    return {
        ok: true,
        data: response
    };
}

export const startUpdateMedicamento = (medicamento) => async (dispatch) => {
    console.log('startUpdateMedicamento');

    const response = await updateMedicamento(medicamento);

    console.log('RESPONSE UPDATEWE', response);
    const medicamentos = await getMedicamentos();

    dispatch(setMedicamentos(
        {
            message: 'Medicamento actualizado correctamente',
            medicamentos: medicamentos
        }
    ));
    return {
        ok: true,
        data: response
    };
}

export const startDeleteMedicamento = (id) => async (dispatch) => {
    console.log('startDeleteMedicamento');

    const response = await deleteMedicamento(id);

    console.log('response', response);
    const medicamentos = await getMedicamentos();
    dispatch(setMedicamentos(
        {
            message: 'Medicamento eliminado correctamente',
            medicamentos: medicamentos
        }
    ));
    return {
        ok: true,
        data: response
    };
}
