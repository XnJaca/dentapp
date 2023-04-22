export const medicines_inputs = (id, nombre, descripcion, precio) => {
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
            // keyfilter: "alpha",
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
            // keyfilter: "alpha",
        },

        {
            id: id || "",
            label: "Precio",
            name: "precio",
            value: precio || "",
            onChange: null,
            autoFocus: true,
            submitted: null,
            type: "int",
            keyfilter: "int",
        },
    ];
};