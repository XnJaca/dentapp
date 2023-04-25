import { useSelector } from "react-redux";
import { setLoading, setData } from "./medic_slice";
import { deleteMedicService, getAllMedics, saveMedicService, updateMedicService } from "./service/medic_service";


const updateMedicData = (medic) => { 
    return {
        usuario: {
            cedula: medic[0].value,
            nombre: medic[1].value,
            nombre_emer: medic[2].value,
            apellido_1: medic[3].value,
            apellido_2: medic[4].value,
            email: medic[5].value,
            pass: medic[6].value,
            fecha_nacimiento: medic[7].value,
            direccion: medic[8].value,
            telefono: medic[9].value,
            telefono_emer: medic[10].value,
            genero_id: medic[11].value.id,
            tipo_id: medic[12].value.id,
            estado: medic[13].value
        },
        tipo_usuario: {
            tipo_id: medic[12].value.id ?? medic[12].value,
        },
        medico: {
            especialidad_id: medic[14].value.id ?? medic[14].value,
            precio_consulta: medic[14].value.id ?? medic[14].value,
        }
    }; 
}


export const MedicThunk = () => {

    const { data } = useSelector(state => state.medic);  

    const getMedics = () => async (dispatch) => {
 
        const response = await getAllMedics();
     
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
    
    const saveMedic = (medic) => async (dispatch) => {
  
        dispatch(setLoading(true)); 
        const response = await saveMedicService(medic);  
    
        if (response.error == false) {
            const data = await getAllMedics();
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
            dispatch(setLoading(false));
            return {
                error: true,
                message: response.message
            }
        }
    }
    const updateMedic = (medic) => async (dispatch) => {

        dispatch(setLoading(true)); 
        const response = await updateMedicService(medic);
     
        if (response.error == false) {
     
            const dataList = data.map(d => d.id == medic[0].id ? updateMedicData(medic) : d);

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

    const deleteMedic = (medic) => async (dispatch) => {
    
        dispatch(setLoading(true));
        const response = await deleteMedicService(medic);
     
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
        getMedics,
        saveMedic,
        updateMedic, 
        deleteMedic,
    }
} 
 
 