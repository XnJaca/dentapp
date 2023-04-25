import { setAppoiments } from "./appoiments_slice";
import { getAllAppoiments } from "./services/appoiments_service";


export const getAppoiments = () => async (dispatch) => {

    console.log('getAppoiments');
    const response = await getAllAppoiments();

    console.log('responseAppoiments', response.appoiments);
    if (response.error == false) {
        dispatch(setAppoiments(
            {
                appoiments: response.appoiments,
                message: response.message
            }
        ));
    } else {
        console.log(response.message);
    }
}

