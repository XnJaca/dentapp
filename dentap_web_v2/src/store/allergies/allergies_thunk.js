import { setAllergies } from "./allergies_slice";
import { getAllAllergies } from "./services/allergies_service";


export const getAllergies = () => async (dispatch) => {

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
    }
}

// export const saveAllergy = (allergy) => async (dispatch) => {

//     dispatch(setLoading(true));
//     // console.log('saveAllergy');
//     const response = await saveAllergyService(allergy);

//     // console.log('response', response);

//     if (response.error == false) {
//         const data = await getAllAllergies();
//         dispatch(setAllergies(
//             {
//                 allergies: data.allergies,
//                 message: response.message
//             }
//         ));
//         dispatch(setLoading(false));
//         return {
//             error: false,
//             message: response.message
//         }
//     } else {
//         // console.log(response.message);
//         return {
//             error: true,
//             message: response.message
//         }
//     }
// }

// export const updateAllergy = (allergy) => async (dispatch) => {

//     dispatch(setLoading(true));
//     // console.log('updateAllergy');
//     const response = await updateAllergyService(allergy);

//     // console.log('responseUpdateAllergy', response);
//     if (response.error == false) {
//         const data = await getAllAllergies();
//         dispatch(setAllergies(
//             {
//                 allergies: data.allergies,
//                 message: response.message
//             }
//         ));
//         dispatch(setLoading(false));
//         return {
//             error: false,
//             message: response.message
//         }
//     } else {
//         // console.log(response.message);
//         return {
//             error: true,
//             message: response.message
//         }
//     }
// }

// export const deleteAllergy = (allergy) => async (dispatch) => {

//     dispatch(setLoading(true));
//     // console.log('deleteAllergy');
//     const response = await deleteAllergyService(allergy);

//     // console.log('response', response);
//     if (response.error == false) {
//         const data = await getAllAllergies();
//         dispatch(setAllergies(
//             {
//                 allergies: data.allergies,
//                 message: response.message
//             }
//         ));
//         dispatch(setLoading(false));
//         return {
//             error: false,
//             message: response.message
//         }
//     } else {
//         // console.log(response.message);
//         return {
//             error: true,
//             message: response.message
//         }
//     }
// }
