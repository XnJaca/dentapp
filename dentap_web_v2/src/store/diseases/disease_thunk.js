
import { useSelector } from "react-redux";
import { setData, setLoading } from "./diseases_slice";
import { getAllDiseases, deleteDiseaseService, saveDiseaseService, updateDiseaseService } from "./services/disease_service";

const UpdateDisease = (disease) => {
    return {
        id: disease[0].id,
        nombre: disease[0].value,
        descripcion: disease[1].value,
    }
}

export const DiseaseThunk = () => {

    const { data } = useSelector(state => state.diseases);


    const getDiseases = () => async (dispatch) => {
        dispatch(setLoading(true));
        const response = await getAllDiseases();

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

    const saveDisease = (allergie) => async (dispatch) => {

        dispatch(setLoading(true));

        const response = await saveDiseaseService(allergie);

        if (response.error == false) {
            const response = await getAllDiseases();
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

    const updateDisease = (disease) => async (dispatch) => {

        dispatch(setLoading(true));

        const response = await updateDiseaseService(disease);

        if (response.error == false) {
            const dataDisease = data.map(d => d.id == disease[0].id ? UpdateDisease(disease) : d);

            dispatch(setData(
                {
                    data: dataDisease,
                    message: "Enfermedad actualizada correctamente"
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

    const deleteDisease = (allergyId) => async (dispatch) => {

        dispatch(setLoading(true));
        const response = await deleteDiseaseService(allergyId);

        if (response.error == false) {

            const dataDisease = data.filter(d => d.id != allergyId);

            dispatch(setData(
                {
                    data: dataDisease,
                    message: "Enfermedad eliminada correctamente"
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
        updateDisease,
        deleteDisease,
        saveDisease,
        getDiseases
    }
} 