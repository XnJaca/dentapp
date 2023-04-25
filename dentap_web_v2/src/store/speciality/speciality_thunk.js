import { useSelector } from "react-redux";
import { setLoading, setData } from "./speciality_slice";
import { deleteSpecialityService, getAllSpeciality, saveSpecialityService, updateSpecialityService } from "./service/speciality_service";


const updateSpecialityData = (speciality) => {
    return {
        id: speciality[0].id,
        descripcion: speciality[0].value
    };
}


export const SpecialityThunk = () => {

    const { data } = useSelector(state => state.speciality);

    const getSpeciality = () => async (dispatch) => {

        const response = await getAllSpeciality();

        if (response.error == false) {
            dispatch(setData(
                {
                    data: response.data,
                    message: response.message
                }
            ));
        } else {
            console.log(response.message);
        }
    }

    const saveSpeciality = (medic) => async (dispatch) => {

        dispatch(setLoading(true));
        const response = await saveSpecialityService(medic);

        if (response.error == false) {
            const data = await getAllSpeciality();
            dispatch(setData(
                {
                    data: data.data,
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
    const updateSpeciality = (speciality) => async (dispatch) => {

        dispatch(setLoading(true));
        const response = await updateSpecialityService(speciality);

        if (response.error == false) {

            const dataList = data.map(d => d.id == speciality[0].id ? updateSpecialityData(speciality) : d);

            dispatch(setData(
                {
                    data: dataList,
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

    const deleteSpeciality = (id) => async (dispatch) => {

        dispatch(setLoading(true));
        const response = await deleteSpecialityService(id);

        if (response.error == false) {
            const dataList = data.filter(d => d.id != id);
            dispatch(setData(
                {
                    data: dataList,
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

    return {
        //Constantes
        data,

        //Metodos 
        getSpeciality,
        saveSpeciality,
        updateSpeciality,
        deleteSpeciality,
    }
}

