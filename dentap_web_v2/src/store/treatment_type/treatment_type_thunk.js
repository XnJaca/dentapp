
import { useSelector } from "react-redux";
import { setData, setLoading } from "./treatment_type_slice";  
import { getAllTreatmentsTypes, saveTreatmentTypeService,deleteTreatmentTypeService,updateTreatmentTypeService} from "./service/treatment_type_service";

const UpdateTreatmentType = (treatment) => {
    return {
        id: treatment[0].id,
        nombre: treatment[0].value,
        descripcion: treatment[1].value,
        precio: treatment[2].value
    }
}

export const TreatmentTypeThunk = () => {

    const { data } = useSelector(state => state.treatmentType);  

    const getTreatmentType = () => async (dispatch) => {
        dispatch(setLoading(true));
        const response = await getAllTreatmentsTypes();

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

    const saveTreatmentType = (treatmentType) => async (dispatch) => {

        dispatch(setLoading(true));

        const response = await saveTreatmentTypeService(treatmentType, id);

        if (response.error == false) {
            const response = await getAllTreatmentsTypes();
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

    const updateTreatmentType = (treatmentType) => async (dispatch) => {

        dispatch(setLoading(true));

        const response = await updateTreatmentTypeService(treatmentType);

        if (response.error == false) {
            const dataList = data.map(d => d.id == treatmentType[0].id ? UpdateTreatmentType(treatmentType) : d);

            dispatch(setData(
                {
                    data: dataList,
                    message: "Tipo de Tratamiento actualizado correctamente"
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

    const deleteTreatmentType = (id) => async (dispatch) => {

        dispatch(setLoading(true));
        const response = await deleteTreatmentTypeService(id);

        if (response.error == false) {

            const dataList = data.filter(d => d.id != id);

            dispatch(setData(
                {
                    data: dataList,
                    message: "Tipo de Tratamiento eliminado correctamente"
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
        getTreatmentType,
        saveTreatmentType,
        updateTreatmentType,
        deleteTreatmentType,
    }
} 