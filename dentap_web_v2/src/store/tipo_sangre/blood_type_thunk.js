import { setBloodTypes } from "./blood_type_slice";
import { getAllBloodType } from "./service/blood_type_service";

export const getTipoSangre = () => async (dispatch) => {

    // console.log('getTipoSangre');
    const response = await getAllBloodType();

    console.log('response bloodType', response.data);
    if (response.error == false) {
        dispatch(setBloodTypes(
            {
                bloodTypes: response.data,
                message: response.message
            }
        ));
    } else {
        console.log(response.message);
    }
}
