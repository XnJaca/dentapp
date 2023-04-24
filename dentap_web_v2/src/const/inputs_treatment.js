export const treatment_inputs = (id, tipo_id, detalle, total_medicamento) => {
    return [

        {
            id: "tipo_id",
            label: "Tipo de tratamiento",
            name: "tipo_id",
            value: tipo_id || 0,
            onChange: null,
            autoFocus: false,
            submitted: null,
            type: "select",
        },

        {
            id: id || "",
            label: "Detalle",
            name: "detalle",
            value: detalle || "",
            onChange: null,
            autoFocus: true,
            submitted: null,
            type: "text",
            // keyfilter: "alpha",
        },

        {
            id: id || "",
            label: "Total del medicamento",
            name: "total_medicamento",
            value: total_medicamento || "",
            onChange: null,
            autoFocus: true,
            submitted: null,
            type: "int",
            keyfilter: "int",
        }, 
    ];
};