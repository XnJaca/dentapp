import { getEspecialidades } from "../../api/requests/especialidades";
import { setEspecialidades } from "./especialidades_slice";


export const startGetEspecialidades = () => async (dispatch) => {
    console.log('startGetEspecialidades');

    const especialidades = await getEspecialidades();

    console.log('especialidades', especialidades);

    dispatch(setEspecialidades(
        {
            message: 'Especialidades cargadas correctamente',
            especialidades: especialidades
        }
    ));

    return {
        ok: true,
        data: especialidades
    };
}
