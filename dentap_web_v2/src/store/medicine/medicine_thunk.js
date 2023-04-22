
import { useSelector } from "react-redux";
import { setData, setLoading } from "./medicine_slice"; 
import { deleteMedicineService, getAllMedicines, saveMedicineService, updateMedicineService } from "./services/medicine_service";

const UpdateMedicine = (disease) => {
    return {
        id: disease[0].id,
        nombre: disease[0].value,
        descripcion: disease[1].value,
        precio: disease[2].value,
    }
}

export const MedicineThunk = () => {

    const { data } = useSelector(state => state.medicines); 

    const getMedicines = () => async (dispatch) => {
        dispatch(setLoading(true));
        const response = await getAllMedicines();

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

    const saveMedicine = (medicine) => async (dispatch) => {

        dispatch(setLoading(true));

        const response = await saveMedicineService(medicine);

        if (response.error == false) {
            const response = await getAllMedicines();
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

    const updateMedicine = (medicine) => async (dispatch) => {

        dispatch(setLoading(true));

        const response = await updateMedicineService(medicine);

        if (response.error == false) {
            const dataList = data.map(d => d.id == medicine[0].id ? UpdateMedicine(medicine) : d);

            dispatch(setData(
                {
                    data: dataList,
                    message: "Medicamento actualizada correctamente"
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

    const deleteMedicine = (id) => async (dispatch) => {

        dispatch(setLoading(true));
        const response = await deleteMedicineService(id);

        if (response.error == false) {

            const dataList = data.filter(d => d.id != id);

            dispatch(setData(
                {
                    data: dataList,
                    message: "Medicina eliminada correctamente"
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
        updateMedicine,
        saveMedicine,
        getMedicines,
        deleteMedicine,
    }
} 