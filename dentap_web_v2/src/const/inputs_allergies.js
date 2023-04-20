export const allergies_inputs = (id, nombre, descripcion) => {
    return [
        {
            id: id || "",
            label: "Nombre",
            name: "nombre",
            value: nombre || "",
            onChange: null,
            autoFocus: true,
            submitted: null,
            type: "text",
            keyfilter: "alpha",
        },

        {
            id: id || "",
            label: "Descripcion",
            name: "descripcion",
            value: descripcion || "",
            onChange: null,
            autoFocus: true,
            submitted: null,
            type: "text",
            keyfilter: "alpha",
        },
    ];
};