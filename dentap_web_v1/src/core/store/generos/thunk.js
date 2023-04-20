import { getGeneros } from "../../api/requests/genero/";
import { loadGeneros, loading, setGeneros } from "./generos_slice";


export const startGetGeneros = () => async (dispatch) => {

    console.log('startGetGeneros');
    const generos = await getGeneros();
    console.log('generos', generos);
    dispatch(loadGeneros(true));
    dispatch(setGeneros(
        {
            message: 'Generos cargados correctamente',
            generos: generos
        }
    ));
    dispatch(loadGeneros(false));
    return {
        ok: true,
        data: generos
    };
}