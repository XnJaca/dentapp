
export const medics_inputs = (id, cedula, nombre, nombre_emer, apellido_1, apellido_2, email, pass, fecha_nacimiento, direccion, telefono, telefono_emer, genero_id, estado, tipo_id,especialidad_id, precio_consulta) => {
    return [
        {
            id: id || "",
            label: "Cedula",
            name: "cedula",
            value: cedula || "",
            onChange: null,
            autoFocus: true,
            submitted: null,
            type: "int",
            keyfilter: "int",
        },
        {
            id: "nombre",
            label: "Nombre",
            name: "nombre",
            value: nombre || "",
            onChange: null,
            autoFocus: false,
            submitted: null,
            type: "text",
            keyfilter: 'alpha'
        },
        {
            id: "nombre_emer",
            label: "Nombre de emergencia",
            name: "nombre_emer",
            value: nombre_emer || "",
            onChange: null,
            autoFocus: false,
            submitted: null,
            type: "text",
            keyfilter: 'alpha'
        },
        {
            id: "apellido_1",
            label: "Primer apellido",
            name: "apellido_1",
            value: apellido_1 || "",
            onChange: null,
            autoFocus: false,
            submitted: null,
            type: "text",
            keyfilter: 'alpha'
        },
        {
            id: "apellido_2",
            label: "Segundo apellido",
            name: "apellido_2",
            value: apellido_2 || "",
            onChange: null,
            autoFocus: false,
            submitted: null,
            type: "text",
            keyfilter: 'alpha'
        },
        {
            id: "email",
            label: "Email",
            name: "email",
            value: email || "",
            onChange: null,
            autoFocus: false,
            submitted: null,
            type: "text",
        },
        {
            id: "pass",
            label: "Contraseña",
            name: "pass",
            value: pass || "",
            onChange: null,
            autoFocus: false,
            submitted: null,
            type: "pass",
        },
        {
            id: "fecha_nacimiento",
            label: "Fecha de nacimiento",
            name: "fecha_nacimiento",
            value: fecha_nacimiento || "",
            onChange: null,
            autoFocus: false,
            submitted: null,
            type: "date", 
        },
        {
            id: "direccion",
            label: "Dirección",
            name: "direccion",
            value: direccion || "",
            onChange: null,
            autoFocus: false,
            submitted: null,
            type: "text",
        },
        {
            id: "telefono",
            label: "Teléfono",
            name: "telefono",
            value: telefono || "",
            onChange: null,
            autoFocus: false,
            submitted: null,
            type: "int",
            keyfilter: "int",
        },
        {
            id: "telefono_emer",
            label: "Teléfono de emergencia",
            name: "telefono_emer",
            value: telefono_emer || "",
            onChange: null,
            autoFocus: false,
            submitted: null,
            type: "int",
            keyfilter: "int",
        },
        {
            id: "genero_id",
            label: "Género",
            name: "genero_id",
            value: genero_id || 0,
            onChange: null,
            autoFocus: false,
            submitted: null,
            type: "select",
        },
        {
            id: "tipo_id",
            label: "Tipo de Usuario",
            name: "tipo_id",
            value: tipo_id || 0,
            onChange: null,
            autoFocus: false,
            submitted: null,
            type: "select",
        },
        {
            id: "estado",
            label: "Estado",
            name: "estado",
            value: estado || 0,
            onChange: null,
            autoFocus: false,
            submitted: null,
            type: "checkbox",
        },
        {
            id: "especialidad_id",
            label: "Especialidad",
            name: "especialidad_id",
            value: especialidad_id || 0,
            onChange: null,
            autoFocus: false,
            submitted: null,
            type: "select",
        },
        {
            id: "precio_consulta",
            label: "Precio Consulta",
            name: "precio_consulta",
            value: precio_consulta || 0,
            onChange: null,
            autoFocus: false,
            submitted: null, 
            type: "int",
            keyfilter: "int",
        },
    ];
}

