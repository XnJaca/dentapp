
import { useSelector } from "react-redux";
import { setData, setLoading } from "./treatment_slice";  
import { deleteTreatmentService, getAllTreatments, saveTreatmentService, updateTreatmentService } from "./service/treatment_service";

const UpdateTreatment = (treatment, medicoId) => {
    return {
        id: treatment[0].id,
        medico_id: medicoId,
        tipo_id: treatment[0].value,
        detalle: treatment[1].value,
        total_medicamento: treatment[2].value
    }
}

export const TreatmentThunk = () => {

    const { data } = useSelector(state => state.treatment); 
    const { id } = useSelector(state => state.auth.data);

    const getTreatment = () => async (dispatch) => {
        dispatch(setLoading(true));
        const response = await getAllTreatments();

        if (response.error == false) {
            dispatch(setData(
                {
                    data: response.data,
                    message: response.message
                }
            ));
        } else {
            dispatch(setLoading(false));
            return {
                error: true,
                message: response.message
            }
        }
    }

    const saveTreatment = (treatment) => async (dispatch) => {

        dispatch(setLoading(true));

        const response = await saveTreatmentService(treatment, id);

        if (response.error == false) {
            const response = await getAllTreatments();
            dispatch(setData(
                {
                    data: response.data,
                    message: response.message
                }
            ));
            dispatch(setLoading(false));
            return {
                error: false,
                message: response.message
            }
        } else {
            return {
                error: true,
                message: response.message
            }
        }
    }

    const updateTreatment = (treatment) => async (dispatch) => {

        dispatch(setLoading(true));

        const response = await updateTreatmentService(treatment, id);

        if (response.error == false) {
            const dataList = data.map(d => d.id == treatment[0].id ? UpdateTreatment(treatment, id) : d);

            dispatch(setData(
                {
                    data: dataList,
                    message: "Tratamiento actualizada correctamente"
                }
            ));
            dispatch(setLoading(false));
            return {
                error: false,
                message: response.message
            }
        } else {
            return {
                error: true,
                message: response.message
            }
        }
    }

    const deleteTreatment = (id) => async (dispatch) => {

        dispatch(setLoading(true));
        const response = await deleteTreatmentService(id);

        if (response.error == false) {

            const dataList = data.filter(d => d.id != id);

            dispatch(setData(
                {
                    data: dataList,
                    message: "Tratamiento eliminada correctamente"
                }
            ));
            dispatch(setLoading(false));
            return {
                error: false,
                message: response.message
            }
        } else {
            return {
                error: true,
                message: response.message
            }
        }
    }

    return {
        //Constantes
        data,

        //Metodos 
        getTreatment,
        saveTreatment,
        updateTreatment,
        deleteTreatment,
    }
} 