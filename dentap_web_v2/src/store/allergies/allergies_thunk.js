import { setAllergies,setLoading } from "./allergies_slice";
import { getAllAllergies, updateAllergiesService,saveAllergieService,deleteAllergyService } from "./services/allergies_service";
 
export const getAllergies = () => async (dispatch) => {
    dispatch(setLoading(true)); 
    // console.log('getAllergies');
    const response = await getAllAllergies();

    // console.log('response', response);
    if (response.error == false) {
        dispatch(setAllergies(
            {
                allergies: response.allergies,
                message: response.message
            }
        ));
    } else {
        // console.log(response.message);
        dispatch(setLoading(false));
        return {
            error: true,
            message: response.message
        }
    }
}


export const updateAllergie = (allergie) => async (dispatch) => {
 
    dispatch(setLoading(true)); 

    const response = await updateAllergiesService(allergie); 
      
    if (response.error == false) {

        const response = await getAllAllergies();
        // console.log('usuariossss', usuarios);
        dispatch(setAllergies(
            {
                allergies: response.allergies,
                message: response.message
            }
        ));
        dispatch(setLoading(false));
        return {
            error: false,
            message: response.message
        }
    } else {
        // console.log(response.message);
        return {
            error: true,
            message: response.message
        }
    }
} 


export const saveAllergie = (allergie) => async (dispatch) => {
 
    dispatch(setLoading(true)); 

    const response = await saveAllergieService(allergie); 
      
    if (response.error == false) {

        const response = await getAllAllergies();
        // console.log('usuariossss', usuarios);
        dispatch(setAllergies(
            {
                allergies: response.allergies,
                message: response.message
            }
        ));
        dispatch(setLoading(false));
        return {
            error: false,
            message: response.message
        }
    } else {
        // console.log(response.message);
        return {
            error: true,
            message: response.message
        }
    }
}
 

export const deleteAllergy = (allergyId) => async (dispatch) => {

    dispatch(setLoading(true));
    // console.log('deleteAllergy');
    const response = await deleteAllergyService(allergyId);

    // console.log('response', response);
    if (response.error == false) {
        const data = await getAllAllergies();
        dispatch(setAllergies(
            {
                allergies: data.allergies,
                message: response.message
            }
        ));
        dispatch(setLoading(false));
        return {
            error: false,
            message: response.message
        }
    } else {
        // console.log(response.message);
        return {
            error: true,
            message: response.message
        }
    }
}
