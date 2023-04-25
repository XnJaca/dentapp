import { useDispatch, useSelector } from 'react-redux';
import { CardContainer } from "../../admin/components"
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
// import { getCitasxPaciente, getPacienteByID } from '../../store/patients/patients_thunk';
import { DataView } from 'primereact/dataview';
import { getPacienteByID,getCitasxPaciente } from '../../../store/patients/patients_thunk';
import { useEffect } from 'react';
export const HomePage = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.data);
    // const citas = useSelector(state => state.citas.appoiments);
    const patient = useSelector(state => state.pacientes.paciente);
    console.log('patient: ', patient.citas);

    useEffect(() => {
        if (patient.id == null) {
            dispatch(getPacienteByID(user.id));
            dispatch(getCitasxPaciente(user.id));
        }

    }, []);
    const getSeverity = (data) => {
        switch (data) {
            case 1:
                return 'success';

            case 0:
                return 'warning';
            default:
                return null;
        }
    };

    const itemTemplate = (data) => {
        // console.log('product: ', data.nombre);
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    {/* <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} /> */}
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{patient.nombre}</div>
                            <div className="text-2xl font-bold text-500">Hora de Inicio: {data.inicio_cita}</div>
                            <div className="text-2xl font-bold text-500">Hora de Final: {data.fin_cita}</div>
                            {/* <Rating value={product.citas[0].tipo_tratamiento.nombre} readOnly cancel={false}></Rating> */}
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag"></i>
                                    {/* <span className="font-semibold">{product.category}</span> */}
                                </span>
                                <Tag value={data.confirmado == 1 ? "Confirmado" : "Pendiente"} severity={getSeverity(data.cofirmado)}></Tag>
                            </div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            {/* <span className="text-2xl font-semibold">${product.price}</span>
                            <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    };


    return (
        <>
            <div className="card lg:flex justify-content-center">
                <CardContainer
                    title="Expediente"
                    subTitle="Gestione su expediente."
                    goTo="/client/expediente"
                    severity={0}
                />
            </div>

            <DataView value={patient.citas} itemTemplate={itemTemplate} />

        </>
    )
}