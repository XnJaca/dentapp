export const cita_inputs = (id, inicio_cita, fin_cita, confirmado, consultorio_id, medico_id, tratamiento_id) => {

    return [
        {
            id: id || "",
            label: "Inicio cita",
            name: "inicio_cita",
            value: inicio_cita || "",
            onChange: null,
            autoFocus: true,
            submitted: null,
            type: "date",
            keyfilter: "",
        },
        {
            id: "",
            label: "Fin cita",
            name: "fin_cita",
            value: fin_cita || "",
            onChange: null,
            autoFocus: false,
            submitted: null,
            type: "date",
        },
        {
            id: "",
            label: "Confirmado",
            name: "confirmado",
            value: confirmado || 0,
            onChange: null,
            autoFocus: false,
            submitted: null,
            type: "checkbox",
            keyfilter: ''
        },
        {
            id: "",
            label: "Consultorio",
            name: "consultorio_id",
            value: consultorio_id || "",
            onChange: null,
            autoFocus: false,
            submitted: null,
            type: "select",
            keyfilter: ''
        },
        {
            id: medico_id || "",
            label: "Medico",
            name: "medico_id",
            value: medico_id || "",
            onChange: null,
            autoFocus: false,
            submitted: null,
            type: "select",
            keyfilter: ''
        },
        {
            id: "",
            label: "Tratamiento",
            name: "tratamiento_id",
            value: tratamiento_id || "",
            onChange: null,
            autoFocus: false,
            submitted: null,
            type: "select",
            keyfilter: ''
        },

    ]


}