export const speciality_inputs = (id, descripcion) => {
    return [  
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